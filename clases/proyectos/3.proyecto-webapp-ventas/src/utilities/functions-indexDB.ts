export type IConfiguracionDB = {
    nombreBD: string;
    version: number;
    almacen: string;
};

export interface DatoGenerico {
    id: number;
    [key: string]: any;
}

// Abrir base de datos con un único almacén
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

// Eliminar completamente la base de datos
export function eliminarBase(
    nombreBD: IConfiguracionDB['nombreBD']
): Promise<void> {
    return new Promise((resolve, reject) => {
        const solicitud = indexedDB.deleteDatabase(nombreBD);

        solicitud.onsuccess = () => resolve();
        solicitud.onerror = () => reject(solicitud.error);
        solicitud.onblocked = () => console.warn('🔒 Cierra otras pestañas que usen la base de datos.');
    });
}

// Obtener todos los datos de un almacén
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

// Guardar un dato nuevo
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

// Actualizar un dato por su ID
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

// Eliminar un dato por su ID
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
