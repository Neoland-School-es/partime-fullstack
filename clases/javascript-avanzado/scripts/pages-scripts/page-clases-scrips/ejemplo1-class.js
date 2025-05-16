// Sintaxis básica de una clase
export class Persona {
    // Zona de propiedades
    nombreInicial = "Defaul Name";
    edadInicial = 0;

    // Zona de parametros de la clase
    constructor(pNombre = this.nombreInicial, pEdad = this.edadInicial) {
        this.nombre = pNombre;
        this.edad = pEdad;
    }

    // Zona de metodos
    cambiarNombre(pNombre) {
        this.nombre = pNombre;
    }

    presentarse() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}