import { IProducto } from "../types/types";

// CONSTANTES DE CONFIGURACIÓN
const NOMBRE_BASE_DE_DATOS = "MI-BBDD";
const VERSION_BASE_DE_DATOS = 1;
const NOMBRES_ALMACENES = {
    PRODUCTOS_STOCK: "BBDD-PRODUCTOS-STOCK",
    // USUARIOS: "BBDD-USUARIOS",
    // CACHE_USUARIO: "CACHE-USUARIO",
    // CACHE_CARRITO: "CACHE-PRODUCTOS-CARRITO"
} as const;
const LISTA_ALMACENES = [
    NOMBRES_ALMACENES.PRODUCTOS_STOCK,
    // NOMBRES_ALMACENES.USUARIOS,
    // NOMBRES_ALMACENES.CACHE_USUARIO,
    // NOMBRES_ALMACENES.CACHE_CARRITO
];

// ========================================
// FUNCIONES PRINCIPALES
// ========================================

export function inicializarIndexDDBB(): void {
    const solicitudApertura = window.indexedDB.open(NOMBRE_BASE_DE_DATOS, VERSION_BASE_DE_DATOS);

    // Se ejecuta cuando la base de datos necesita ser creada o actualizada
    solicitudApertura.onupgradeneeded = (evento: IDBVersionChangeEvent) => {
        // Obtiene la referencia a la base de datos
        const baseDeDatos = (evento.target as IDBOpenDBRequest).result;

        // Crea cada almacén si no existe
        for (let i = 0; i < LISTA_ALMACENES.length; i++) {
            const nombreAlmacen = LISTA_ALMACENES[i];

            // Verifica si el almacén ya existe antes de crearlo
            if (!baseDeDatos.objectStoreNames.contains(nombreAlmacen)) {
                // Crea el almacén con configuración de clave primaria
                baseDeDatos.createObjectStore(nombreAlmacen, {
                    keyPath: "id",
                    autoIncrement: true
                });

                console.log(`Almacén creado: ${nombreAlmacen}`);
            }
        }

        console.log("Base de datos inicializada correctamente");
    };

    // Maneja errores durante la apertura
    solicitudApertura.onerror = (evento) => {
        console.error("Error al abrir la base de datos:", evento);
    };

    // Confirma que la base de datos se abrió correctamente
    solicitudApertura.onsuccess = () => {
        console.log("- Base de datos de productos lista!");
    };
}

export function eliminarBaseDeDatos(): void {
    console.log("Iniciando eliminación de la base de datos...");

    // Solicita la eliminación de la base de datos
    const solicitudEliminacion = indexedDB.deleteDatabase(NOMBRE_BASE_DE_DATOS);

    // Se ejecuta cuando la eliminación es exitosa
    solicitudEliminacion.onsuccess = () => {
        console.log("Todos los datos de IndexedDB fueron eliminados correctamente.");
    };

    // Se ejecuta cuando hay un error durante la eliminación
    solicitudEliminacion.onerror = (evento) => {
        console.error("Error al eliminar la base de datos:", evento);
    };

    // Se ejecuta cuando la eliminación está bloqueada
    solicitudEliminacion.onblocked = () => {
        console.log("La eliminación está bloqueada. Cierra otras pestañas que estén usando la base de datos.");
    };
}

export function verificarBaseDeDatos(): Promise<boolean> {
    return new Promise((resolve) => {
        const solicitudVerificacion = indexedDB.open(NOMBRE_BASE_DE_DATOS);

        solicitudVerificacion.onsuccess = () => {
            const baseDeDatos = solicitudVerificacion.result;

            // Verifica si todos los almacenes existen
            let todosLosAlmacenesExisten = true;
            for (let i = 0; i < LISTA_ALMACENES.length; i++) {
                const nombreAlmacen = LISTA_ALMACENES[i];
                if (!baseDeDatos.objectStoreNames.contains(nombreAlmacen)) {
                    todosLosAlmacenesExisten = false;
                    break;
                }
            }

            baseDeDatos.close();
            resolve(todosLosAlmacenesExisten);
        };

        solicitudVerificacion.onerror = () => {
            resolve(false);
        };
    });
}

// ========================================
// FUNCIONES DE CONEXIÓN Y UTILIDAD
// ========================================

async function abrirConexionBaseDeDatos(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
        // Abre la base de datos con el nombre y versión especificados
        const solicitudApertura = indexedDB.open(NOMBRE_BASE_DE_DATOS, VERSION_BASE_DE_DATOS);

        // Maneja errores durante la apertura
        solicitudApertura.onerror = () => {
            console.error("Error al abrir la base de datos:", solicitudApertura.error);
            reject(solicitudApertura.error);
        };

        // Se ejecuta cuando la base de datos necesita ser actualizada
        solicitudApertura.onupgradeneeded = (evento) => {
            const baseDeDatos = (evento.target as IDBOpenDBRequest).result;

            // Crea el almacén de productos si no existe
            if (!baseDeDatos.objectStoreNames.contains(NOMBRES_ALMACENES.PRODUCTOS_STOCK)) {
                baseDeDatos.createObjectStore(NOMBRES_ALMACENES.PRODUCTOS_STOCK, {
                    keyPath: "id",
                    autoIncrement: true
                });
                console.log("Almacén de productos creado durante la apertura");
            }
        };

        // Se ejecuta cuando la apertura es exitosa
        solicitudApertura.onsuccess = () => {
            resolve(solicitudApertura.result);
        };
    });
}

// ========================================
// FUNCIONES CRUD PARA PRODUCTOS
// ========================================

export async function obtenerTodosLosProductos(): Promise<IProducto[]> {
    const baseDeDatos = await abrirConexionBaseDeDatos();

    return new Promise((resolve, reject) => {
        // Crea una transacción de solo lectura
        const transaccion = baseDeDatos.transaction([NOMBRES_ALMACENES.PRODUCTOS_STOCK], "readonly");
        const almacenProductos = transaccion.objectStore(NOMBRES_ALMACENES.PRODUCTOS_STOCK);
        const solicitudObtener = almacenProductos.getAll();

        // Maneja el éxito de la operación
        solicitudObtener.onsuccess = () => {
            const productos = solicitudObtener.result as IProducto[];
            console.log(`Se obtuvieron ${productos.length} productos de la base de datos`);
            resolve(productos);
        };

        // Maneja errores durante la operación
        solicitudObtener.onerror = () => {
            console.error("Error al obtener productos:", solicitudObtener.error);
            reject(solicitudObtener.error);
        };

        // Cierra la base de datos cuando termine la transacción
        transaccion.oncomplete = () => {
            baseDeDatos.close();
        };
    });
}

export async function crearNuevoProducto(nombreProducto: string, precioProducto: number = 1): Promise<void> {
    // Validación de datos de entrada
    if (nombreProducto.trim() === "") {
        throw new Error("El nombre del producto no puede estar vacío");
    }

    if (precioProducto <= 0) {
        throw new Error("El precio del producto debe ser mayor que cero");
    }

    if (precioProducto >= 10000) {
        throw new Error("El precio del producto no puede ser mayor o igual a 10000");
    }

    // Crear el objeto producto
    const nuevoProducto: IProducto = {
        id: Date.now(), // Usa timestamp como ID temporal
        nombre: nombreProducto.trim(),
        precio: precioProducto
    };

    const baseDeDatos = await abrirConexionBaseDeDatos();

    return new Promise((resolve, reject) => {
        // Crea una transacción de escritura
        const transaccion = baseDeDatos.transaction([NOMBRES_ALMACENES.PRODUCTOS_STOCK], "readwrite");
        const almacenProductos = transaccion.objectStore(NOMBRES_ALMACENES.PRODUCTOS_STOCK);
        const solicitudCrear = almacenProductos.add(nuevoProducto);

        // Maneja el éxito de la operación
        solicitudCrear.onsuccess = () => {
            console.log(`Producto "${nombreProducto}" creado exitosamente`);
            resolve();
        };

        // Maneja errores durante la operación
        solicitudCrear.onerror = () => {
            console.error("Error al crear producto:", solicitudCrear.error);
            reject(solicitudCrear.error);
        };

        // Cierra la base de datos cuando termine la transacción
        transaccion.oncomplete = () => {
            baseDeDatos.close();
        };
    });
}

export async function actualizarProductoExistente(productoActualizado: IProducto): Promise<void> {
    // Validación de datos de entrada
    if (!productoActualizado.id) {
        throw new Error("El ID del producto es requerido para actualizar");
    }

    if (productoActualizado.nombre.trim() === "") {
        throw new Error("El nombre del producto no puede estar vacío");
    }

    if (productoActualizado.precio <= 0) {
        throw new Error("El precio del producto debe ser mayor que cero");
    }

    const baseDeDatos = await abrirConexionBaseDeDatos();

    return new Promise((resolve, reject) => {
        // Crea una transacción de escritura
        const transaccion = baseDeDatos.transaction([NOMBRES_ALMACENES.PRODUCTOS_STOCK], "readwrite");
        const almacenProductos = transaccion.objectStore(NOMBRES_ALMACENES.PRODUCTOS_STOCK);
        const solicitudActualizar = almacenProductos.put(productoActualizado);

        // Maneja el éxito de la operación
        solicitudActualizar.onsuccess = () => {
            console.log(`Producto con ID ${productoActualizado.id} actualizado exitosamente`);
            resolve();
        };

        // Maneja errores durante la operación
        solicitudActualizar.onerror = () => {
            console.error("Error al actualizar producto:", solicitudActualizar.error);
            reject(solicitudActualizar.error);
        };

        // Cierra la base de datos cuando termine la transacción
        transaccion.oncomplete = () => {
            baseDeDatos.close();
        };
    });
}

export async function eliminarProductoPorId(idProducto: number): Promise<void> {
    // Validación de datos de entrada
    if (!idProducto || idProducto <= 0) {
        throw new Error("El ID del producto debe ser un número válido mayor que cero");
    }

    const baseDeDatos = await abrirConexionBaseDeDatos();

    return new Promise((resolve, reject) => {
        // Crea una transacción de escritura
        const transaccion = baseDeDatos.transaction([NOMBRES_ALMACENES.PRODUCTOS_STOCK], "readwrite");
        const almacenProductos = transaccion.objectStore(NOMBRES_ALMACENES.PRODUCTOS_STOCK);
        const solicitudEliminar = almacenProductos.delete(idProducto);

        // Maneja el éxito de la operación
        solicitudEliminar.onsuccess = () => {
            console.log(`Producto con ID ${idProducto} eliminado exitosamente`);
            resolve();
        };

        // Maneja errores durante la operación
        solicitudEliminar.onerror = () => {
            console.error("Error al eliminar producto:", solicitudEliminar.error);
            reject(solicitudEliminar.error);
        };

        // Cierra la base de datos cuando termine la transacción
        transaccion.oncomplete = () => {
            baseDeDatos.close();
        };
    });
}

export async function obtenerProductoPorId(idProducto: number): Promise<IProducto | null> {
    // Validación de datos de entrada
    if (!idProducto || idProducto <= 0) {
        throw new Error("El ID del producto debe ser un número válido mayor que cero");
    }

    const baseDeDatos = await abrirConexionBaseDeDatos();

    return new Promise((resolve, reject) => {
        // Crea una transacción de solo lectura
        const transaccion = baseDeDatos.transaction([NOMBRES_ALMACENES.PRODUCTOS_STOCK], "readonly");
        const almacenProductos = transaccion.objectStore(NOMBRES_ALMACENES.PRODUCTOS_STOCK);
        const solicitudObtener = almacenProductos.get(idProducto);

        // Maneja el éxito de la operación
        solicitudObtener.onsuccess = () => {
            const producto = solicitudObtener.result as IProducto | undefined;
            if (producto) {
                console.log(`Producto con ID ${idProducto} encontrado`);
                resolve(producto);
            } else {
                console.log(`Producto con ID ${idProducto} no encontrado`);
                resolve(null);
            }
        };

        // Maneja errores durante la operación
        solicitudObtener.onerror = () => {
            console.error("Error al obtener producto:", solicitudObtener.error);
            reject(solicitudObtener.error);
        };

        // Cierra la base de datos cuando termine la transacción
        transaccion.oncomplete = () => {
            baseDeDatos.close();
        };
    });
}