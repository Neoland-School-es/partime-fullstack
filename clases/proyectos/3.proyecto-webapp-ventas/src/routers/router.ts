import store from '../store/store';
// Funciones Pagina
import pageHomeController from './../controllers/page-home/pageHome.comtroller';
import pageShoppingCartMain from './../controllers/page-shopping-cart/page-shopping-cart-main-scripts';
import { paginaFormularioCrearProducto, paginaFormularioEditarProducto, paginaFormularioEliminarProducto } from './../controllers/pages-crud/pages-crud-main-scripts';
import { formularioLoginController } from './../controllers/page-form-login/pageFormLogin.controller';
import { dashboardController } from '../controllers/page-dashboard/dashboard.controller';

// Types y interfaces
type PageController = () => void;

type PageId = 'PageHome' | 'PageShoppingCard' | 'PageFormLogin' | 'PageCreateProduct' | 'PageUpdateProduct' | 'PageRemoveProduct' | 'PageDashboard';

interface RoutesConfig {
    [key: string]: PageController;
}

// O alternativamente usando type:
// type RoutesConfig = Record<PageId, PageController>;

// Mapeo de IDs a controladores
const rutas: RoutesConfig = {
    'PageHome': pageHomeController,
    'PageShoppingCard': pageShoppingCartMain,
    'PageFormLogin': formularioLoginController,
    'PageCreateProduct': paginaFormularioCrearProducto,
    'PageUpdateProduct': paginaFormularioEditarProducto,
    'PageRemoveProduct': paginaFormularioEliminarProducto,
    'PageDashboard': dashboardController,
};

// Rutas públicas (accesibles sin autenticación)
const rutasPublicas: PageId[] = [
    'PageHome',
    'PageShoppingCard',
    'PageFormLogin',
    'PageCreateProduct',
    'PageUpdateProduct',
    'PageRemoveProduct',
];

// Rutas privadas (requieren autenticación)
const rutasPrivadas: PageId[] = [
    'PageDashboard',
];

export function enrutador(): void {
    // Buscar qué página está activa por su ID
    let paginaActiva: PageId | null = null;

    for (const idPagina in rutas) {
        if (document.querySelector(`#${idPagina}`)) {
            paginaActiva = idPagina as PageId;
            break;
        }
    }

    // Si no se encuentra ninguna página, salir
    if (!paginaActiva) {
        console.warn('No se encontró ninguna página activa');
        return;
    }

    // Verificar si es una ruta pública
    if (rutasPublicas.includes(paginaActiva)) {
        rutas[paginaActiva]();
        return;
    }

    // Verificar si es una ruta privada
    if (rutasPrivadas.includes(paginaActiva)) {

        if (!store.getState().usuario.isAuthenticated) {
            alert("Acceso denegado. Debes iniciar sesión.");
            return;
        }

        rutas[paginaActiva]();
        return;
    }

    // Si llegamos aquí, la ruta no está configurada
    console.warn(`Ruta no configurada para el ID: ${paginaActiva}`);
}