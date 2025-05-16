// Single Responsibility Principle (SRP)

// ❌ INCUMPLE el SRP
// Esta clase hace dos cosas: calcula datos y los muestra.

class Reporte {
  constructor(nombre = "default") {
    this.usuario = nombre;
  }

  calcularPuntos() {
    return this.usuario.length * 10;
  }

  mostrarReporte() {
    const puntos = this.calcularPuntos();
    console.log(`Usuario: ${this.usuario}, Puntos: ${puntos}`);
  }
}

// ✅ CUMPLE el SRP
// Ahora cada clase tiene una responsabilidad única y clara.

class CalculadoraPuntos {
  calcular(tareasCompletadas) {
    return tareasCompletadas * 10;
  }
}

class ReporteTexto {
  mostrar(nombre, puntos) {
    console.log(`Usuario: ${nombre}, Puntos: ${puntos}`);
  }
}

// Uso correcto separando responsabilidades:
const usuario = { nombre: 'Ana', tareasCompletadas: 5 };

const calculadora = new CalculadoraPuntos();
const puntos = calculadora.calcular(usuario.tareasCompletadas);

const reporte = new ReporteTexto();
reporte.mostrar(usuario.nombre, puntos);
