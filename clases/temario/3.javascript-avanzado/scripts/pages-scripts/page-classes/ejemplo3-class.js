// Encapsulamiento

export class Auto {
    // Propiedades privadas
    #marca = "";
    #velocidad = 10;

    constructor(pMarca = "") {
        this.#marca = pMarca;
        this.#velocidad;
    }

    acelerar(turbo = false) {
        if (turbo) {
            this.#turbo()
        } else {
            this.#velocidad += 10;
            console.log(`${this.#marca} aceleró a ${this.#velocidad} km/h.`);
        }
    }

    #turbo() {
        this.#velocidad += 100;
        console.log(`${this.#marca} aceleró a ${this.#velocidad} km/h.`);
    }

    frenar() {
        this.#velocidad = Math.max(0, this.#velocidad - 10);
        console.log(`${this.#marca} frenó a ${this.#velocidad} km/h.`);
    }

    // Método público para consultar la velocidad
    obtenerMarca() {
        return this.#marca;
    }

    obtenerVelocidad() {
        return this.#velocidad;
    }
}

