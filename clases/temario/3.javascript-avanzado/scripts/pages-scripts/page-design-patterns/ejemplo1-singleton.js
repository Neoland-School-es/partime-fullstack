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
