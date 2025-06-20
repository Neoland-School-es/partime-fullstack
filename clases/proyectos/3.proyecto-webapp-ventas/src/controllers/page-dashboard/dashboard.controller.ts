import store from "../../store/store"

export function dashboardController() {
    console.log("saludos desde el dashboard del usuario");
    
    const usuario = store.getState().usuario.usuario;
    const listaProductos = store.getState().productos;
    
    if (!usuario) {
        return
    }

    const ContenedorLista = document.querySelector("#ContenedorLista");
    if (!ContenedorLista) {
        return;
    }

    ContenedorLista.innerHTML = "";

    const titulo = document.createElement("h2");
    titulo.textContent = `Hola, ${usuario.nombre}. Estos son tus productos:`;
    ContenedorLista.appendChild(titulo);

    if (usuario.productosID && usuario.productosID.length > 0) {
        const productosDelUsuario = listaProductos.filter((producto) => {
            if (!usuario.productosID) return

            return (usuario.productosID.includes(producto.id))
        });

        const lista = document.createElement("ul");
        productosDelUsuario.forEach((producto) => {
            const item = document.createElement("li");
            item.textContent = `${producto.nombre} - $${producto.precio}`;
            lista.appendChild(item);
        });

        ContenedorLista.appendChild(lista);
    } else {
        const mensaje = document.createElement("p");
        mensaje.textContent = "No tenés productos asociados.";
        ContenedorLista.appendChild(mensaje);
    }
}
