# Aplicaciones de Página Única (SPA)

Una **SPA** es una aplicación web que **carga una única página HTML** (`index.html`) y luego **actualiza dinámicamente su contenido** desde JavaScript, sin volver a recargar todo el documento.

A diferencia de una MPA, una SPA no realiza nuevas solicitudes HTML para cambiar de sección o página. En su lugar, **simula la navegación** cargando contenido en una misma estructura base, lo que brinda una experiencia de usuario más rápida y fluida.

---

## 🧠 Características principales

- Solo se carga una vez el archivo principal `index.html`.
- Toda la navegación se maneja desde **JavaScript** mediante APIs como `history.pushState()` o `location.hash`.
- No hay recargas completas del navegador.
- El **estado en memoria se mantiene** entre vistas (útil para carritos, autenticación, datos temporales).
- Se utilizan **rutas virtuales** para decidir qué contenido mostrar.
- El servidor generalmente devuelve siempre `index.html`, sin importar la URL.

---

## ✅ Ventajas de una SPA

-  **Navegación rápida**: no se recarga la página, solo se cambia el contenido.
-  **Mejor experiencia de usuario**: sin parpadeos ni tiempos de carga visibles.
-  **Mayor control del estado**: ideal para apps complejas con múltiples pantallas conectadas.
-  **Simula apps de escritorio**: como Gmail, Trello o Spotify Web.

---

## ⚠️ Desventajas de una SPA

-  **Mayor complejidad**: se necesita más lógica en el frontend (rutas, renderizado, estado, eventos).
-  **SEO más complicado**: al no haber múltiples archivos `.html`, los motores de búsqueda pueden necesitar SSR o prerendering.
-  **Manejo manual del historial y errores 404**: es necesario configurar correctamente el servidor.
-  **Carga inicial más pesada**: se suele cargar más JavaScript desde el inicio.

---

## 🌐 ¿Cuándo usar una SPA?

| Escenario                                      | ¿SPA es adecuada?      |
| ---------------------------------------------- | ---------------------- |
| Aplicaciones interactivas                      | ✅ Sí                   |
| Dashboards o paneles de administración         | ✅ Sí                   |
| Formularios largos con pasos                   | ✅ Sí                   |
| Sitios corporativos simples                    | ❌ Mejor usar MPA       |
| Sitios centrados en SEO (blogs, landing pages) | ❌ Mejor usar MPA o SSR |

---

## 🗂️ Estructura típica de una SPA vanilla

/public
└── index.html
└── contact.html
└── dashboard.html

/src  
├── main.js ← Punto de entrada
├── router.js ← Enrutador de rutas virtuales
├── views/
│ ├── home.js
│ ├── about.js
│ └── contacto.js
└── css/
└── estilos.css

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Mi SPA Vanilla</title>
  <link rel="stylesheet" href="./css/estilos.css" />
</head>
<body>
  <nav>
    <a href="/" id="link">Inicio</a>
    <a href="/about" data-link>Sobre Nosotros</a>
    <a href="/contacto" data-link>Contacto</a>
  </nav>

  <main id="app">
    <!-- Aquí se inyecta el contenido dinámico -->
  </main>

  <script type="module" src="./main.js"></script>
</body>
</html>
````

> ⚠️ Nota: los enlaces tienen el atributo `data-link` para evitar el comportamiento predeterminado del navegador y permitir que JavaScript controle la navegación.

```js
// `router.js`
import { renderHome } from './views/home.js';
import { renderAbout } from './views/about.js';
import { renderContacto } from './views/contacto.js';

const routes = {
  '/': renderHome,
  '/about': renderAbout,
  '/contacto': renderContacto
};

export function router() {
  const path = window.location.pathname;
  const render = routes[path] || (() => '<h1>404 - Página no encontrada</h1>');
  document.getElementById('app').innerHTML = render();
}
```

```js
// main.js
import { router } from './router.js';

function onNavigate(event) {
  if (event.target.matches('a[data-link]')) {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    history.pushState(null, '', href);
    router();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', onNavigate);
  window.addEventListener('popstate', router);
  router();
});
```

> Este patrón básico ya permite simular navegación entre páginas sin recargas.

---

## 🔄 Flujo de navegación en una SPA

1. **Carga inicial**
    
    - Se descarga el archivo `index.html`, los estilos, y el bundle de JavaScript.
        
2. **Ejecución de scripts**
    
    - `main.js` y `router.js` definen el comportamiento de la app.
        
3. **Render según la ruta actual**
    
    - Se analiza `window.location.pathname` o `location.hash`.
        
    - Se inyecta la vista correspondiente dentro del `<body>, <main>, <div>`.
        
4. **Interceptación de enlaces**
    
    - Al hacer clic en un `<a data-link>`, se previene la navegación estándar.
        
    - Se actualiza la URL mediante `history.pushState()` y se renderiza la nueva vista.
        
5. **Eventos del historial**
    
    - Si el usuario usa el botón “atrás” o “adelante” del navegador, se vuelve a renderizar la vista correcta con `popstate`.
        

---

## 🧪 Buenas prácticas en una SPA

- Organizar vistas y componentes en carpetas (`/views`, `/components`, etc.).
    
- Usar `localStorage` o `sessionStorage` para persistir el estado si es necesario.
    
- Prevenir rutas inválidas con una vista 404.
    
- Configurar el servidor para que **todas las rutas devuelvan `index.html`** (fallback 404), de modo que las rutas virtuales funcionen correctamente.
    

---

## 📚 Conclusión

Una **SPA** es ideal para crear experiencias ricas, fluidas e interactivas en la web. Si bien requiere más esfuerzo inicial, te permite construir aplicaciones modernas con una navegación veloz y sin recargas.