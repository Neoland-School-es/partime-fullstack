export class Repositorio {
    constructor() {
        this.usuarios = [];
    }
    
    agregarUsuario(usuario) {
        if (usuario.nombre && usuario.edad >= 18) {
            this.usuarios.push(usuario);
            console.log(`${usuario.nombre} fue agregado al repositorio.`);
        } else {
            console.log('Error: El usuario debe tener un nombre y ser mayor de 18 años.');
        }
    }

    mostrarUsuarios() {
        console.log('Usuarios en el repositorio:');
        this.usuarios.forEach(usuario => {
            console.log(`Nombre: ${usuario.nombre}, Edad: ${usuario.edad}`);
        });
    }
}
