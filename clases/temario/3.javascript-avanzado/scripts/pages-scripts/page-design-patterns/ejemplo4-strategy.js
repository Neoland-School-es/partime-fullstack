function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function calcular(a, b, estrategia) {
    return estrategia(a, b);
}

/* ejemeplo 2 */
class Estrategia {
    operar(a, b) {
        throw new Error("Debes implementar el método operar.");
    }
}

class Sumar extends Estrategia {
    operar(a, b) {
        return a + b;
    }
}

class Restar extends Estrategia {
    operar(a, b) {
        return a - b;
    }
}

class Calculadora {
    constructor(estrategia) {
        this.estrategia = estrategia;
    }

    setEstrategia(nuevaEstrategia) {
        this.estrategia = nuevaEstrategia;
    }

    calcular(a, b) {
        return this.estrategia.operar(a, b);
    }
}
