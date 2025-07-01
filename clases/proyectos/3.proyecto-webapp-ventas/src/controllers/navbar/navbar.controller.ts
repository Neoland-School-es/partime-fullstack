import store from './../../store/store';
// import store from './../../slices/carritoSlice';

export function navBar() {
    const usuarioAuth: boolean = true

    const listaLinksDefault = [
        {
            name: 'inicio',
            url: '/index.html'
        },
        {
            name: 'carrito ' + store.getState().carrito.cantidad,
            url: '/pages/page-shopping-cart.html'
        }
    ];

    const listaLinksNoUsuario = [
        {
            name: 'login',
            url: '/pages/page-formulario-login.html'
        }
    ];

    const listaLinksUsuario = [
        {
            name: 'panel de control',
            url: '/pages/page-dashboard.html'
        },
        {
            name: 'crear productos',
            url: '/pages/page-create-product.html'
        },
        {
            name: 'eliminar productos',
            url: '/pages/page-remove-product.html'
        },
        {
            name: 'actualizar productos',
            url: '/pages/page-update-product.html'
        },
    ];

    const contenedorNavBar = document.querySelector('#navbarNav ul');

    for (let index = 0; index < listaLinksDefault.length; index++) {
        const itemNavBar = document.createElement('li')
        itemNavBar.className = 'nav-item'

        const linkNavBar = document.createElement('a')
        linkNavBar.className = 'nav-link active';
        linkNavBar.textContent = listaLinksDefault[index].name;
        linkNavBar.href = listaLinksDefault[index].url;

        itemNavBar.appendChild(linkNavBar)

        contenedorNavBar?.appendChild(itemNavBar)
    }

    if (usuarioAuth) {
        for (let index = 0; index < listaLinksUsuario.length; index++) {
            const itemNavBar = document.createElement('li')
            itemNavBar.className = 'nav-item'

            const linkNavBar = document.createElement('a')
            linkNavBar.className = 'nav-link active';
            linkNavBar.textContent = listaLinksUsuario[index].name;
            linkNavBar.href = listaLinksUsuario[index].url;

            itemNavBar.appendChild(linkNavBar)

            contenedorNavBar?.appendChild(itemNavBar)
        }
    } else {
        for (let index = 0; index < listaLinksNoUsuario.length; index++) {
            const itemNavBar = document.createElement('li')
            itemNavBar.className = 'nav-item'

            const linkNavBar = document.createElement('a')
            linkNavBar.className = 'nav-link active';
            linkNavBar.textContent = listaLinksNoUsuario[index].name;
            linkNavBar.href = listaLinksNoUsuario[index].url;

            itemNavBar.appendChild(linkNavBar)

            contenedorNavBar?.appendChild(itemNavBar)
        }
    }
}