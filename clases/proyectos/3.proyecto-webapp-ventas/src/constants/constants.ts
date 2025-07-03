export const STORAGE_KEYS = {
    INDEX_DB: 'MI-BBDD',
    PRODUCTOS: 'BBDD-PRODUCTOS-STOCK',
    USUARIOS: 'BBDD-USUARIOS',
    CACHE_USUARIO: 'CACHE-USUARIO',
    CACHE_CARRITO: 'CACHE-PRODUCTOS-CARRITO',
    COOKIE_USUARIO_AUTENTICADO: 'CACHE-USUARIO-AUTENTICADO',
};

export const CONFIG = {
    indexDB: {
        [STORAGE_KEYS.INDEX_DB]: {
            nombreAlmacenamiento: STORAGE_KEYS.INDEX_DB,
            versionAlmacenamiento: 1,
            valorAlmacenamiento: [
                STORAGE_KEYS.PRODUCTOS,
                STORAGE_KEYS.USUARIOS,
                STORAGE_KEYS.CACHE_USUARIO,
                STORAGE_KEYS.CACHE_CARRITO
            ]
        }
    },
    localStorage: {
        [STORAGE_KEYS.PRODUCTOS]: {
            nombreAlmacenamiento: STORAGE_KEYS.PRODUCTOS,
            valorAlmacenamiento: {}
        },
        [STORAGE_KEYS.USUARIOS]: {
            nombreAlmacenamiento: STORAGE_KEYS.USUARIOS,
            valorAlmacenamiento: []
        },
        [STORAGE_KEYS.CACHE_USUARIO]: {
            nombreAlmacenamiento: STORAGE_KEYS.CACHE_USUARIO,
            valorAlmacenamiento: ''
        },
        [STORAGE_KEYS.CACHE_CARRITO]: {
            nombreAlmacenamiento: STORAGE_KEYS.CACHE_CARRITO,
            valorAlmacenamiento: []
        }
    },
    cookies: {
        [STORAGE_KEYS.COOKIE_USUARIO_AUTENTICADO]: {
            nombreAlmacenamiento: STORAGE_KEYS.COOKIE_USUARIO_AUTENTICADO,
            valorAlmacenamiento: {
                id: 0,
                nombre: '',
                autenticado: false
            }
        }
    },
    sessionStorage: []
};

export const LS_LISTA_PRODUCTOS = 'lista-cache-productos';
