// Herencia

export class Animal {
    constructor(nombre = "") {
        this.nombre = nombre;
    }

    dormir() {
        console.log(`el ${this.nombre} duerme: zzzzzzzz.`);
    }

    hacerSonido(sonido = "") {
        console.log(`${this.nombre} hace un sonido. ${sonido}`);
    }
}

export class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }

    hacerSonido() {
        console.log(`${this.nombre} ladra.`);
    }

    mostrarRaza() {
        console.log(`${this.nombre} es un ${this.raza}.`);
    }
}
