// Liskov Substitution Principle (LSP)
// Este principio dice que una clase hija debe poder sustituir a su clase padre sin que el comportamiento se rompa.

// ❌ INCUMPLE el LSP
// La clase PatoVolador puede volar, pero al extenderla con un PatoDeGoma que NO vuela,

class PatoVolador {
    volar() {
        console.log('Estoy volando');
    }
}

class PatoDeGoma extends PatoVolador {
    volar() {
        throw new Error('¡Los patos de goma no pueden volar!');
    }
}

// Esto rompe el principio Liskov:
function hacerVolar(pato) {
    pato.volar();
}

const pato1 = new PatoVolador();
const pato2 = new PatoDeGoma();

hacerVolar(pato1);
// hacerVolar(pato2); // ❌ Error en tiempo de ejecución


// ✅ CUMPLE el LSP
// Separamos el comportamiento en interfaces o clases base adecuadas.

class Pato {
    hacerSonido() {
        console.log('¡Cuac!');
    }
}

class PatoVoladorLSP extends Pato {
    volar() {
        console.log('Estoy volando');
    }
}

class PatoDeGomaLSP extends Pato {
    // No implementa volar, porque no lo necesita
    flotar() {
        console.log('Estoy flotando en la bañera');
    }
}

function probarPato(pato) {
    pato.hacerSonido();
}

const patoReal = new PatoVoladorLSP();
const patoGoma = new PatoDeGomaLSP();

probarPato(patoReal);
probarPato(patoGoma);
