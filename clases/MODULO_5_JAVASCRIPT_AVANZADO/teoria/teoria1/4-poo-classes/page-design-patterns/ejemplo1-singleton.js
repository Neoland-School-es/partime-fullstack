/* ejemplo 1 */

let configuracionGlobal = null;

function obtenerConfiguracion() {
    if (configuracionGlobal === null) {
        const nuevaConfiguracionGlobal = {
            modo: "oscuro",
            lenguaje: "es"
        };

        console.log("Configuración creada.");
        return nuevaConfiguracionGlobal;
    } else {
        console.log("Configuración existente.");
        return configuracionGlobal;
    }
}



/* ejemplo 2 */

const mainConfiguracion = (function () {
    let instancia = null;

    function crearInstancia() {
        console.log("Configuración creada.");
        return {
            modo: "oscuro",
            lenguaje: "es"
        };
    }

    return {
        obtenerInstancia: function () {
            if (!instancia) {
                instancia = crearInstancia();
            } else {
                console.log("Configuración existente.");
            }
            return instancia;
        }
    };
})();


class Configuracion {
    static instancia = null;

    constructor() {
        if (Configuracion.instancia) {
            console.log("Configuración existente.");
            return Configuracion.instancia;
        }

        console.log("Configuración creada.");
        this.modo = "oscuro";
        this.lenguaje = "es";
        Configuracion.instancia = this;
    }

    static obtenerInstancia() {
        if (!Configuracion.instancia) {
            Configuracion.instancia = new Configuracion();
        } else {
            console.log("Configuración existente.");
        }
        return Configuracion.instancia;
    }
}








const LocalStorageManager = (function () {
    // Variable privada que guarda la única instancia
    let instancia;

    // Función constructora privada
    function crearInstancia() {
        return {
            guardar: function (clave, valor) {
                localStorage.setItem(clave, JSON.stringify(valor));
            },

            obtener: function (clave) {
                const valor = localStorage.getItem(clave);
                return valor ? JSON.parse(valor) : null;
            },

            eliminar: function (clave) {
                localStorage.removeItem(clave);
            },

            limpiarTodo: function () {
                localStorage.clear();
            }
        };
    }

    // Objeto público que garantiza una sola instancia
    return {
        obtenerInstancia: function () {
            if (!instancia) {
                instancia = crearInstancia();
            }
            return instancia;
        }
    };
})();
