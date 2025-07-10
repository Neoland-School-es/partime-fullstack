function crearObservador() {
    const observadores = [];

    return {
        suscribir: function (fn) {
            observadores.push(fn);
        },
        notificar: function (mensaje) {
            observadores.forEach(function (fn) {
                fn(mensaje);
            });
        }
    };
}

/* ejemplo 2 */

class Observador {
    constructor() {
        this.observadores = [];
    }

    suscribir(fn) {
        this.observadores.push(fn);
    }

    notificar(mensaje) {
        this.observadores.forEach(function (fn) {
            fn(mensaje);
        });
    }
}


