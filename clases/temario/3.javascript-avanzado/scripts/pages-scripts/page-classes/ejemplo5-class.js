// Getters y Setters

export class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this._edad = edad; // La propiedad _edad será controlada por un getter y setter.
    }

    // Getter para la edad
    get edad() {
        console.log(this._edad);
    }

    // Setter para la edad
    set edad(nuevaEdad) {
        if (nuevaEdad < 18) {
            console.log('La edad debe ser mayor o igual a 18.');
        } else {
            this._edad = nuevaEdad;
        }
    }

    mostrarInfo() {
        console.log(`Usuario: ${this.nombre}, Edad: ${this._edad}`);
    }
}