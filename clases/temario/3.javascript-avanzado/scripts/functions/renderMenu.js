export function mainMenuScripts() {
    const btnAbrirMenu = document.getElementById('menuBtn');
    const menuLateral = document.getElementById('menuLateral');
    const overlay = document.getElementById('overlay');
    const btnCerrarMenu = document.getElementById('closeMenu');
    const menuContainer = document.querySelector('#menuLateral nav');

    const menuLinks = [
        { name: 'Inicio', path: 'index.html' },
        { name: 'Principios SOLID', path: 'pages/page1-principios-solid.html' },
        { name: 'Página de error', path: 'error.html' }
    ];

    btnAbrirMenu.addEventListener('click', toggleMenu);
    btnCerrarMenu.addEventListener('click', closeSideMenu);
    overlay.addEventListener('click', closeSideMenu);

    document.addEventListener('keydown', function (e) {
        if (e.key === "Escape" && isMenuOpen()) {
            closeSideMenu();
        }
    });

    function toggleMenu() {
        if (isMenuOpen()) {
            closeSideMenu();
        } else {
            openMenu();
        }
    }

    function isMenuOpen() {
        return !menuLateral.classList.contains('translate-x-full');
    }

    function openMenu() {
        menuLateral.classList.remove('translate-x-full');
        overlay.classList.remove('hidden');
        overlay.classList.add('opacity-100');
    }

    function closeSideMenu() {
        menuLateral.classList.add('translate-x-full');
        overlay.classList.add('hidden');
        overlay.classList.remove('opacity-100');
    }

    function renderLinks() {
        const paginaActualURL = window.location.pathname;
        const esSubPagina = paginaActualURL.includes('/pages/');
        menuContainer.innerHTML = '';

        menuLinks.forEach((link) => {
            const enlace = document.createElement('a');
            enlace.className = 'btn btn-link text-start';
            enlace.textContent = link.name;
            enlace.href = esSubPagina ? `../${link.path}` : `./${link.path}`;
            menuContainer.appendChild(enlace);
        });
    }

    renderLinks();
}
