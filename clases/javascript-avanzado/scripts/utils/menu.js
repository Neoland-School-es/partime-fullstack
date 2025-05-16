export function mainMenuScripts() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('overlay');
    const closeMenu = document.getElementById('closeMenu');

    menuBtn.addEventListener('click', toggleMenu);
    closeMenu.addEventListener('click', closeSideMenu);
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
        return !mobileMenu.classList.contains('translate-x-full');
    }

    function openMenu() {
        mobileMenu.classList.remove('translate-x-full');
        overlay.classList.remove('hidden');
        overlay.classList.add('opacity-100');
    }

    function closeSideMenu() {
        mobileMenu.classList.add('translate-x-full');
        overlay.classList.add('hidden');
        overlay.classList.remove('opacity-100');
    }
}