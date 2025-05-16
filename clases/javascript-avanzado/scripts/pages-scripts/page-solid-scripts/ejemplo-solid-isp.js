// Ejemplo del Principio I - Interface Segregation Principle (ISP)
// Este principio indica que los clientes (clases/objetos) no deben depender de interfaces que no utilizan.

// ❌ INCUMPLE el ISP
// Tenemos una interfaz (clase base) con métodos que no todos los implementadores necesitan.

class Animal {
    comer() { }
    volar() { }
    nadar() { }
}

// Al implementar la clase Perro, estamos obligados a definir volar() y nadar(), aunque no tiene sentido.

class Perro extends Animal {
    comer() {
        console.log('El perro come croquetas');
    }

    volar() {
        throw new Error('¡Un perro no puede volar!');
    }

    nadar() {
        console.log('El perro nada ocasionalmente');
    }
}

// ✅ CUMPLE el ISP
// Dividimos los comportamientos en interfaces pequeñas y específicas.

class Comedor {
    comer() {
        console.log('Come algo');
    }
}

class Nadador {
    nadar() {
        console.log('Nada en el agua');
    }
}

class Volador {
    volar() {
        console.log('Vuela por el cielo');
    }
}

// Cada clase ahora implementa solo lo que necesita
class Gato extends Comedor { }

class Pez extends Comedor {
    nadar() {
        console.log('El pez nada en el acuario');
    }
}
class Pajaro extends Comedor {
    volar() {
        console.log('El pájaro vuela entre los árboles');
    }
}
