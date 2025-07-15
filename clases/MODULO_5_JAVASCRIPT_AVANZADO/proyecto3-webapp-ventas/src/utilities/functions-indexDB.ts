export type IConfiguracionDB = {
    nombreBD: string;
    version: number;
    almacen: string;
};

export interface DatoGenerico {
    id: number;
    [key: string]: any;
}

export function abrirBase(
    nombreBD: IConfiguracionDB['nombreBD'],
    version: IConfiguracionDB['version'],
    almacenes: IConfiguracionDB['almacen'][]
): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
        const solicitud: IDBOpenDBRequest = indexedDB.open(nombreBD, version);

        solicitud.onerror = () => reject(solicitud.error);

        solicitud.onsuccess = () => resolve(solicitud.result);

        solicitud.onupgradeneeded = (evento: IDBVersionChangeEvent) => {
            const db = (evento.target as IDBOpenDBRequest).result;
            for (const almacen of almacenes) {
                if (!db.objectStoreNames.contains(almacen)) {
                    db.createObjectStore(almacen, { keyPath: 'id', autoIncrement: true });
                }
            }
        };
    });
}

export function eliminarBase(
    nombreBD: IConfiguracionDB['nombreBD']
): Promise<void> {
    return new Promise((resolve, reject) => {
        const solicitud = indexedDB.deleteDatabase(nombreBD);

        solicitud.onsuccess = () => resolve(console.log("Todos los datos de IndexDB fueron eliminados."));
        solicitud.onerror = () => reject(solicitud.error);
        solicitud.onblocked = () => console.log('Cierra otras pestañas que usen la base de datos.');
    });
}

export async function obtenerTodos(
    nombreBD: IConfiguracionDB['nombreBD'],
    version: IConfiguracionDB['version'],
    almacen: IConfiguracionDB['almacen']
): Promise<DatoGenerico[]> {
    const db = await abrirBase(nombreBD, version, [almacen]);
    return new Promise((resolve, reject) => {
        const transaccion = db.transaction([almacen], 'readonly');
        const store = transaccion.objectStore(almacen);
        const solicitud = store.getAll();

        solicitud.onsuccess = () => resolve(solicitud.result);
        solicitud.onerror = () => reject(solicitud.error);
    });
}

export async function guardarDato(
    dato: DatoGenerico,
    nombreBD: IConfiguracionDB['nombreBD'],
    version: IConfiguracionDB['version'],
    almacen: IConfiguracionDB['almacen']
): Promise<void> {
    const db = await abrirBase(nombreBD, version, [almacen]);
    return new Promise((resolve, reject) => {
        const transaccion = db.transaction([almacen], 'readwrite');
        const store = transaccion.objectStore(almacen);
        const solicitud = store.add(dato);

        solicitud.onsuccess = () => resolve();
        solicitud.onerror = () => reject(solicitud.error);
    });
}

export async function actualizarDato(
    dato: DatoGenerico,
    nombreBD: IConfiguracionDB['nombreBD'],
    version: IConfiguracionDB['version'],
    almacen: IConfiguracionDB['almacen']
): Promise<void> {
    const db = await abrirBase(nombreBD, version, [almacen]);
    return new Promise((resolve, reject) => {
        const transaccion = db.transaction([almacen], 'readwrite');
        const store = transaccion.objectStore(almacen);
        const solicitud = store.put(dato);

        solicitud.onsuccess = () => resolve();
        solicitud.onerror = () => reject(solicitud.error);
    });
}

export async function eliminarPorId(
    id: number,
    nombreBD: IConfiguracionDB['nombreBD'],
    version: IConfiguracionDB['version'],
    almacen: IConfiguracionDB['almacen']
): Promise<void> {
    const db = await abrirBase(nombreBD, version, [almacen]);
    return new Promise((resolve, reject) => {
        const transaccion = db.transaction([almacen], 'readwrite');
        const store = transaccion.objectStore(almacen);
        const solicitud = store.delete(id);

        solicitud.onsuccess = () => resolve();
        solicitud.onerror = () => reject(solicitud.error);
    });
}
