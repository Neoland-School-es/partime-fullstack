// Dependency Inversion Principle (DIP)
// Este principio indica que los módulos de alto nivel no deben depender de los de bajo nivel. Ambos deben depender de abstracciones (interfaces o clases base).

// ❌ INCUMPLE el DIP
// La clase Mensajero depende directamente de una clase concreta (EmailService)

class EmailService {
    enviar(mensaje) {
        console.log('Enviando email: ' + mensaje);
    }
}

class Mensajero {
    constructor() {
        this.servicio = new EmailService();
    }

    notificar(mensaje) {
        this.servicio.enviar(mensaje);
    }
}

const mensajero1 = new Mensajero();
mensajero1.notificar('Hola desde el correo');


// ✅ CUMPLE el DIP
// Usamos inyección de dependencias y una abstracción para el servicio de envío

// Interfaz de abstracción (puede ser una clase base o simplemente una convención)
class ServicioDeEnvio {
    enviar(mensaje) {
        throw new Error('El método enviar() debe ser implementado.');
    }
}

// Servicios concretos
class ServicioEmail extends ServicioDeEnvio {
    enviar(mensaje) {
        console.log('Enviando email: ' + mensaje);
    }
}

class ServicioSMS extends ServicioDeEnvio {
    enviar(mensaje) {
        console.log('Enviando SMS: ' + mensaje);
    }
}

// Clase de alto nivel que depende de la abstracción
class Notificador {
    constructor(servicio) {
        this.servicio = servicio;
    }

    notificar(mensaje) {
        this.servicio.enviar(mensaje);
    }
}

const email = new ServicioEmail();
const sms = new ServicioSMS();

const notificador1 = new Notificador(email);
notificador1.notificar('Mensaje importante por correo');

const notificador2 = new Notificador(sms);
notificador2.notificar('Mensaje urgente por SMS');
