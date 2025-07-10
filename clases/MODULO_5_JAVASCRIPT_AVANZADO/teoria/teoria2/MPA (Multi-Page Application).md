# Aplicaciones Multipágina (MPA)

Una **MPA** es una aplicación web compuesta por **múltiples archivos `.html` independientes**, cada archivo representa una página diferente del sitio.

Es la **forma tradicional** de construir sitios web. Cada vez que un usuario navega a una nueva ruta, el navegador hace una solicitud HTTP de un nuevo documento HTML desde el servidor, junto con sus recursos asociados (CSS, JavaScript, imágenes, etc.).

---

## 🧠 Características principales

- Cada ruta o URL corresponde a un archivo `.html` físico distinto.
- La navegación entre páginas produce **recargas completas del navegador**.
- El **estado en memoria se pierde** en cada navegación (las variables o datos JS no persistentes).
- **No necesita JavaScript para navegar**, el navegador interpreta directamente los enlaces.
- Son ideales para:
  - Sitios institucionales o informativos.
  - Documentación.
  - Blogs o portfolios con pocas interacciones dinámicas.

---

## ✅ Ventajas de una MPA

- **Simplicidad**: estructura clara basada en archivos.
- **Mayor compatibilidad**: funciona bien en navegadores antiguos.
- **Mejor SEO por defecto**: los motores de búsqueda indexan cada página fácilmente.
- **Separación lógica**: cada página tiene su propio propósito y código.

---

## ⚠️ Desventajas de una MPA

- **Experiencia de usuario más lenta**: cada navegación implica recargar toda la página.
- **Mayor consumo de ancho de banda**: se vuelven a descargar documentos HTML completos.
- **Fragmentación del código**: lógica y estilos pueden estar duplicados entre páginas.
- **Pérdida de estado**: cualquier dato no persistido se pierde al navegar.
- **Menor capacidad de interacción dinámica**: agregar funcionalidades ricas (como filtros en vivo, paneles dinámicos, etc.) puede ser más complejo.

---

## 🌐 ¿Cuándo usar una MPA?

| Escenario                                                            | ¿MPA es adecuada?    |
| -------------------------------------------------------------------- | -------------------- |
| Sitios informativos o de presentación                                | ✅ Sí                 |
| Blogs o portales de contenido                                        | ✅ Sí                 |
| Aplicaciones con poca lógica dinámica                                | ✅ Sí                 |
| Apps con navegación rápida, filtros en vivo, dashboards, chats, etc. | ❌ Mejor usar una SPA |
| Sitios que requieren mantener estado sin recarga                     | ❌ MPA no es ideal    |

---

## 🗂️ Estructura de archivos típica

/public
├── index.html
├── about.html
├── contacto.html
/css
└── estilos.css
/js
└── funciones.js

Cada archivo `.html` puede incluir sus propios `script` y `link` de estilos, o bien **compartir recursos comunes** (`estilos.css`, `funciones.js`).

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Inicio</title>
  <link rel="stylesheet" href="/css/estilos.css" />
</head>
<body id="PageHome">
  <h1>Bienvenido</h1>
  <a href="/about.html">Sobre Nosotros</a>
  <script src="/js/funciones.js"></script>
</body>
</html>
````

---

## 🔄 Flujo de carga en una MPA

Cuando el usuario navega a otra página (por ejemplo, haciendo clic en un enlace):

1. **Petición al servidor**
    
    - Se realiza una solicitud HTTP GET para el nuevo documento (por ejemplo: `about.html`).
        
2. **Recarga completa**
    
    - Se reemplaza el DOM actual por el nuevo HTML recibido.
        
3. **Carga de recursos externos**
    
    - CSS, JS, imágenes, fuentes, etc. son solicitados nuevamente (_si no están en caché_).
        
4. **Reinicio del entorno**
    
    - Todo el JavaScript se vuelve a ejecutar desde cero.
        
    - Variables en memoria y el estado temporal se pierden.
        
5. **Persistencia (si es necesaria)**
    
    - Si se desea conservar datos entre páginas, es necesario usar mecanismos como `localStorage`, `cookies` o `IndexedDB`.
        

---

## 📦 Caché de estilos y scripts

El navegador **puede reutilizar archivos estáticos** si cumplen las siguientes condiciones:

- La URL del recurso no cambia (`/css/estilos.css`, `/js/funciones.js`).
    
- El servidor **envía cabeceras HTTP adecuadas** (`Cache-Control`, `ETag`, etc.).
    

Esto significa que, aunque se recargue el HTML, los archivos JS y CSS **no siempre se vuelven a descargar**, lo que mejora el rendimiento en la navegación interna.

> 🔎 Aún así, el navegador realiza una nueva petición HTTP para el documento `.html` en cada cambio de página.

---

## 🔀 El navegador como enrutador

En una MPA, el navegador actúa como **enrutador natural**, interpretando los `href` de los enlaces y solicitando el documento correspondiente.

```html
<a href="/contacto.html">Contacto</a>
```

Cuando el usuario hace clic:

- El navegador solicita `contacto.html`.
    
- Se reemplaza por completo el contenido actual de la página.
    
- Se reinicia el entorno (DOM, scripts, estilos, eventos, etc.).
    

No se requiere un `router.js`, ya que la navegación se basa en la estructura de archivos físicos.

---

## 🧰 Lógica modular por página (opcional)

Si todas las páginas cargan un script común (`main.js`), se puede manejar la lógica condicionalmente, según la página actual.
Esto permite:

- Compartir funciones comunes.
    
- Evitar duplicar scripts.
    
- Mantener la estructura más limpia, aunque siga habiendo recargas entre páginas.
    

Una forma sencilla es usar un `id` en el `<body>`:

```ts
// main.ts
document.addEventListener('DOMContentLoaded', () => {
  const id = document.body.id;

  switch (id) {
    case 'PageHome':
      iniciarPaginaHome();
      break;
    case 'PageAbout':
      iniciarPaginaAbout();
      break;
    // más casos...
    default:
      console.warn('Página no reconocida');
  }
});
```

---

## 🧪 Buenas prácticas para MPA

- Usar un **diseño coherente** entre páginas (cabecera, pie de página, menú, etc.).
    
- Compartir archivos comunes para estilos y scripts.
    
- Mantener **un identificador único** por página (por ejemplo, `body#PageHome`).
    
- Minimizar la duplicación de código y componentes.
    
- Implementar mecanismos de persistencia para datos importantes.
    

---

## 📚 Conclusión

Una **MPA** es un enfoque sólido, especialmente para sitios estáticos, institucionales o con lógica sencilla. Aunque está siendo reemplazada en muchos casos por las SPA, **sigue siendo útil, fácil de mantener y muy accesible** para desarrolladores que están comenzando.