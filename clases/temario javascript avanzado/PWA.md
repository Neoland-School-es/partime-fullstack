## ¿Qué es una PWA?

Una **PWA (Progressive Web App)** es una aplicación web que aprovecha tecnologías modernas para comportarse como una aplicación nativa. Esto significa que puede instalarse, funcionar sin conexión, enviarte notificaciones y cargar rápidamente, incluso en conexiones lentas.

## 🚀 Características principales de una PWA

- **Instalable**: se puede agregar al escritorio o pantalla de inicio como una app nativa.
- **Offline-ready**: funcionan sin conexión gracias al uso de *service workers*.
- **Responsive**: se adaptan a cualquier tipo de dispositivo (móvil, tablet, escritorio).
- **Segura**: siempre deben servirse mediante **HTTPS**.
- **Actualizable**: se actualizan automáticamente en segundo plano.
- **Ligera y rápida**: ideal para conexiones lentas o inestables.

---

## 📱 ¿Por qué convertir tu aplicación en una PWA?

- No depende de una tienda de apps.
- Funciona en casi cualquier dispositivo moderno.
- No requiere instalación obligatoria.
- Permite mejorar la experiencia de usuario (UX).
- Puede usarse offline si lo programamos bien.

---

## ⚙️ ¿Qué hace falta para convertir una app en PWA?

1. **Servir tu app por HTTPS** (esto ya lo cubre Vite en producción).
2. **Un archivo `manifest.json`** con metadatos de la aplicación.
3. **Un `service worker`** que maneje el cache y el comportamiento offline.

---

## 📦 Web App Manifest

El **Web App Manifest** es un archivo en formato JSON que le dice al navegador cómo se debe comportar tu aplicación cuando se instala como PWA. Define cosas como:

- El nombre de la app
- Iconos
- Colores
- Pantalla de inicio
- Orientación de la pantalla
- URL inicial
- Estilo de visualización

El navegador usa el `manifest.json` para:

- Mostrar el nombre y el ícono de la app cuando se instala.
- Controlar cómo se ve la app al iniciarse (como si fuera una app nativa).
- Aplicar colores personalizados al sistema operativo.

---

## 📄 Ejemplo básico de `manifest.json`

```json
{
  "name": "Sistema de Stock y Ventas",
  "short_name": "StockApp",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#1d4ed8",
  "description": "Gestión de stock, ventas y usuarios.",
  "icons": [
    {
      "src": "/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

## 🎨 Campos importantes

| Campo              | Descripción                                                    |
| ------------------ | -------------------------------------------------------------- |
| `name`             | Nombre completo de la app                                      |
| `short_name`       | Nombre corto que se muestra debajo del ícono                   |
| `start_url`        | URL de inicio cuando se abre la app                            |
| `display`          | Cómo se muestra la app (`standalone`, `fullscreen`, `browser`) |
| `background_color` | Color de fondo cuando se abre la app                           |
| `theme_color`      | Color del navegador o barra superior                           |
| `icons`            | Íconos usados para diferentes resoluciones                     |

## 🧩 ¿Cómo se usa en tu app con Vite?

1. **Creá una carpeta `public/`** en el root del proyecto si no existe.
    
2. Guardá allí el archivo `manifest.json`.
    
3. En tu archivo `index.html`, agregá el siguiente enlace en el `<head>`:
	<link rel="manifest" href="/manifest.json" />
4. Asegurate de tener tus íconos en la carpeta `public/icons/`.

---

## 🎨 Campos importantes

|Campo|Descripción|
|---|---|
|`name`|Nombre completo de la app|
|`short_name`|Nombre corto que se muestra debajo del ícono|
|`start_url`|URL de inicio cuando se abre la app|
|`display`|Cómo se muestra la app (`standalone`, `fullscreen`, `browser`)|
|`background_color`|Color de fondo cuando se abre la app|
|`theme_color`|Color del navegador o barra superior|
|`icons`|Íconos usados para diferentes resoluciones|

---

## 🛠️ Verificación en el navegador

Podés verificar si el `manifest.json` está bien cargado:

1. Abrí tu app en el navegador (localhost o deploy).
    
2. Abrí las herramientas de desarrollo (F12).
    
3. Entrá a la pestaña **"Application"**.
    
4. En la sección **"Manifest"**, podés ver cómo lo interpreta el navegador.
    

---

## 📋 Tarea práctica

1. Crear un archivo `manifest.json` en la carpeta `public/`.
    
2. Agregar íconos en diferentes tamaños (`192x192` y `512x512`).
    
3. Enlazar el `manifest.json` desde el `index.html`.
    
4. Verificar que se visualice correctamente en Chrome DevTools.
    

---

## 🔧 Service Worker y `vite-plugin-pwa`

El **Service Worker** es un archivo JavaScript que se ejecuta en segundo plano en el navegador. Es responsable de funciones avanzadas como:

- Cacheo de archivos para uso **offline**
- Notificaciones push
- Actualizaciones en segundo plano

Una PWA **no puede funcionar offline sin un service worker**.

---

## ⚙️ ¿Cómo funciona un Service Worker?

Un **service worker** actúa como un intermediario entre la aplicación y la red:

App <--> Service Worker <--> Internet / Caché

Tiene su propio **ciclo de vida**, separado del del sitio web:

1. **Install**: se registra por primera vez.
2. **Activate**: toma control de la aplicación.
3. **Fetch**: intercepta peticiones y responde desde caché o red.

---

## 🚀 Instalación del plugin PWA para Vite

Para facilitar todo este proceso, usaremos el plugin oficial [`vite-plugin-pwa`](https://vite-pwa-org.netlify.app/).

### Paso 1: Instalar el plugin

Desde la raíz del proyecto, ejecutá:

```bash
npm install vite-plugin-pwa --save-dev
```

---

### Paso 2: **Configurar** `vite.config.ts`

```json
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Sistema de Stock y Ventas',
        short_name: 'StockApp',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#1d4ed8',
        icons: [
          {
            src: '/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
```

---

### Paso 3: Registrar el Service Worker en tu app

En el punto de entrada de tu app (`main.ts` o `main.js`), agregá:

```js
import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() {
    // notificar al usuario que hay una actualización disponible
  },
  onOfflineReady() {
    console.log('La app ya funciona offline.')
  }
})
```

---
