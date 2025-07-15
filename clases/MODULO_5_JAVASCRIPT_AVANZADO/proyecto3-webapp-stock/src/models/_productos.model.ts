export interface IProducto {
    id: number;
    nombre: string;
    precio: number;
    cantidad?: number;
    categoria?: string;
    descripcion?: string;
    imagen?: string | null;
    pronocion?: boolean;
}

const NOMBRE_DB = "MI-BBDD";
const VERSION_DB = 1;
const ALMACEN = "BBDD-PRODUCTOS-STOCK";

export function iniciarCreacionBBDD(): void {
    window.indexedDB.open(NOMBRE_DB, VERSION_DB).onupgradeneeded = (evento) => {
        const db = (evento.target as IDBOpenDBRequest).result;
        const almacenes = [
            "BBDD-PRODUCTOS-STOCK",
            "BBDD-USUARIOS",
            "CACHE-USUARIO",
            "CACHE-PRODUCTOS-CARRITO"
        ];
        for (let i = 0; i < almacenes.length; i++) {
            const nombre = almacenes[i];
            if (!db.objectStoreNames.contains(nombre)) {
                db.createObjectStore(nombre, { keyPath: "id", autoIncrement: true });
            }
        }
    };
}

export function destruirBBDD(): void {
    const solicitud = indexedDB.deleteDatabase(NOMBRE_DB);

    solicitud.onsuccess = () => console.warn("Todos los datos de IndexDB fueron eliminados.");
    solicitud.onerror = () => console.error("Error al eliminar la base de datos.");
    solicitud.onblocked = () => console.warn("Cierra otras pestañas que usen la base de datos.");
}

async function abrirBase(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
        const solicitud = indexedDB.open(NOMBRE_DB, VERSION_DB);

        solicitud.onerror = () => reject(solicitud.error);

        solicitud.onupgradeneeded = (evento) => {
            const db = (evento.target as IDBOpenDBRequest).result;
            if (!db.objectStoreNames.contains(ALMACEN)) {
                db.createObjectStore(ALMACEN, { keyPath: "id", autoIncrement: true });
            }
        };

        solicitud.onsuccess = () => resolve(solicitud.result);
    });
}

// Obtener todos los productos
export async function obtenerProductosBBDDIndexDB(): Promise<IProducto[]> {
    const db = await abrirBase();

    return new Promise((resolve, reject) => {
        const transaccion = db.transaction([ALMACEN], "readonly");
        const store = transaccion.objectStore(ALMACEN);
        const solicitud = store.getAll();

        solicitud.onsuccess = () => resolve(solicitud.result as IProducto[]);
        solicitud.onerror = () => reject(solicitud.error);
    });
}

// Crear un producto
export async function crearProductoBBDDIndexDB(nombre: string, precio: number = 1): Promise<void> {
    if (nombre.trim() === "" || precio <= 0 || precio >= 1000) {
        throw new Error("Error al crear producto.");
    }

    const nuevoProducto: IProducto = {
        id: Date.now(),
        nombre,
        precio
    };

    const db = await abrirBase();

    return new Promise((resolve, reject) => {
        const transaccion = db.transaction([ALMACEN], "readwrite");
        const store = transaccion.objectStore(ALMACEN);
        const solicitud = store.add(nuevoProducto);

        solicitud.onsuccess = () => resolve();
        solicitud.onerror = () => reject(solicitud.error);
    });
}

// Actualizar un producto
export async function actualizarProductoBBDDIndexDB(producto: IProducto): Promise<void> {
    if (!producto.id || producto.nombre.trim() === "") {
        throw new Error("Producto inválido.");
    }

    const db = await abrirBase();

    return new Promise((resolve, reject) => {
        const transaccion = db.transaction([ALMACEN], "readwrite");
        const store = transaccion.objectStore(ALMACEN);
        const solicitud = store.put(producto);

        solicitud.onsuccess = () => resolve();
        solicitud.onerror = () => reject(solicitud.error);
    });
}

// Eliminar producto por ID
export async function eliminarProductoBBDDIndexDB(idProducto: number): Promise<void> {
    const db = await abrirBase();

    return new Promise((resolve, reject) => {
        const transaccion = db.transaction([ALMACEN], "readwrite");
        const store = transaccion.objectStore(ALMACEN);
        const solicitud = store.delete(idProducto);

        solicitud.onsuccess = () => resolve();
        solicitud.onerror = () => reject(solicitud.error);
    });
}






