// Composición

export class Bateria {
    constructor(capacidad) {
        this.capacidad = capacidad; // Capacidad en mAh
    }

    mostrarCapacidad() {
        console.log(`La batería tiene una capacidad de ${this.capacidad} mAh. desde la bateria`);
    }
}

export class Smartphone {
    constructor(marca, modelo, capacidadBateria) {
        this.marca = marca;
        this.modelo = modelo;
        // Smartphone tiene una instancia de la clase Bateria
        this.bateria = new Bateria(capacidadBateria);
    }

    mostrarInfo() {
        console.log(`Smartphone: ${this.marca} ${this.modelo} ${this.bateria.capacidad}`);
        // this.bateria.mostrarCapacidad();
    }
}
