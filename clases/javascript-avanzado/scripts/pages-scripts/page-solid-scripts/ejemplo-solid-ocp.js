// Open/Closed Principle (OCP)

// ❌ INCUMPLE el OCP
// Si queremos agregar más tipos de notificación, debemos modificar la función enviarNotificacion.

function enviarNotificacion(tipo, mensaje) {
  if (tipo === 'email') {
    console.log('Enviando correo: ' + mensaje);
  } else if (tipo === 'sms') {
    console.log('Enviando SMS: ' + mensaje);
  } else {
    console.log('Tipo de notificación no soportado.');
  }
}

enviarNotificacion('email', 'Hola usuario');


// ✅ CUMPLE el OCP
// Usamos clases que se pueden extender sin modificar el código existente.

class Notificacion {
  enviar(mensaje) {
    // Método genérico que puede ser sobreescrito
    throw new Error('Método enviar() debe ser implementado.');
  }
}

class NotificacionEmail extends Notificacion {
  enviar(mensaje) {
    console.log('Enviando correo: ' + mensaje);
  }
}

class NotificacionSMS extends Notificacion {
  enviar(mensaje) {
    console.log('Enviando SMS: ' + mensaje);
  }
}

// Nueva funcionalidad agregada SIN modificar código previo
class NotificacionPush extends Notificacion {
  enviar(mensaje) {
    console.log('Enviando notificación push: ' + mensaje);
  }
}

function procesarNotificacion(notificador, mensaje) {
  notificador.enviar(mensaje);
}

const email = new NotificacionEmail();
const sms = new NotificacionSMS();
const push = new NotificacionPush();

procesarNotificacion(email, 'Mensaje por correo');
procesarNotificacion(sms, 'Mensaje por SMS');
procesarNotificacion(push, 'Mensaje push');
