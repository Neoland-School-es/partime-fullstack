// Métodos estáticos

export class Computadora {
    constructor(marca, ramGB) {
        this.marca = marca;
        this.ramGB = ramGB;
        this.so = Computadora.asignarSO(ramGB); // Se asigna al crearse la instancia
    }

    static compararComputadoras(c1, c2) {
        if (c1.ramGB > c2.ramGB) {
            console.log(`La computadora ${c1.marca} es mejor que ${c2.marca}`)
        } else {
            console.log(`La computadora ${c2.marca} es mejor`)
        }
    }

    static asignarSO(ramGB) {
        if (ramGB >= 8) {
            return "Windows 11";
        } else if (ramGB >= 4) {
            return "Windows 10";
        } else {
            return "Linux ligero";
        }
    }

    agregarRam(pRam) {
        this.ramGB = pRam;
        this.so = Computadora.asignarSO(pRam);
    }

    mostrarInfo() {
        console.log(`Computadora ${this.marca} con ${this.ramGB} GB de RAM y sistema operativo ${this.so}.`);
    }
}

export class CPro extends Computadora {
    constructor() {
        super();
    }
}
