import { validarUsuario } from '../../models/usuario.model';
import store from '../../store/store.js';
import { iniciarLogin, loginExitoso, loginFallido } from '../../slices/userSlice';


export function formularioLoginController() {
    const formulario = document.querySelector<HTMLFormElement>('#formLogin');
    if (!formulario) {
        alert('No existe el formulario');
        return;
    }

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        const inputNombre = document.querySelector<HTMLInputElement>('#name');
        const inputContrasenia = document.querySelector<HTMLInputElement>('#password');
        if (!inputNombre || !inputContrasenia) {
            alert('campos vacios');
            return;
        }

        store.dispatch(iniciarLogin())

        const usuarioEncontrado = validarUsuario(inputNombre.value, inputContrasenia.value);

        if (usuarioEncontrado) {
            store.dispatch(loginExitoso(usuarioEncontrado));
            alert('Login exitoso');
            window.location.href = './page-dashboard.html';
        }
        else {
            store.dispatch(loginFallido());
            alert('Usuario no encontrado');
            window.location.href = './';
        }
    });
}
