function crearUsuario(tipo, nombre) {
    if (tipo === "admin") {
        return {
            nombre,
            permisos: ["leer", "escribir", "borrar"]
        };
    }

    if (tipo === "invitado") {
        return {
            nombre,
            permisos: ["leer"]
        };
    }

    return {
        nombre,
        permisos: []
    };
}
/* Ejemplo 2*/

class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
        this.permisos = [];
    }
}

class Admin extends Usuario {
    constructor(nombre) {
        super(nombre);
        this.permisos = ["leer", "escribir", "borrar"];
    }
}

class Invitado extends Usuario {
    constructor(nombre) {
        super(nombre);
        this.permisos = ["leer"];
    }
}

class UsuarioFactory {
    static crearUsuario(tipo, nombre) {
        if (tipo === "admin") {
            return new Admin(nombre);
        }

        if (tipo === "invitado") {
            return new Invitado(nombre);
        }

        return new Usuario(nombre); 
    }
}
