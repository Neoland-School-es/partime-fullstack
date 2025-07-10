Vite es un **bundler y servidor de desarrollo ultrarrápido** creado por Evan You (creador de Vue.js).
Es una herramienta moderna para crear proyectos web con una configuración rápida, soporte para módulos ES6, recarga en caliente y compatibilidad con JavaScript vanilla o TypeScript.

### Características clave:

- Inicio instantáneo del servidor de desarrollo.
    
- (HMR: "Hot Module Replacement" "Reemplazo de Módulos en Caliente"): Permite actualizar módulos de código en una aplicación en ejecución sin necesidad de recargarla por completo.
    
- Soporte para TypeScript, JSX, CSS moderno, etc.
    
- Compatible con frameworks (React, Vue, Svelte) o JavaScript vanilla.
    


---

## 📦 Instalación de Vite

1. Crear un nuevo proyecto con plantilla vanilla o vanilla-ts:
    

```bash
npm create vite@latest
```

2. Elige el nombre del proyecto, elige `vanilla` o `vanilla-ts` si deseas usar TypeScript.
    
3. Accede al proyecto:
    

```bash
cd nombre-proyecto
npm install
```

4. Ejecuta el servidor de desarrollo:
    

```bash
npm run dev
```


---

## 📂 Estructura básica del proyecto

```
/nombre-proyecto
├── index.html
├── package.json
├── vite.config.js
├── /node_modules
└── /src
    ├── main.js o main.ts
    └── style.css
```

### Archivos importantes:

| Archivo             | Descripción                                      |
| ------------------- | ------------------------------------------------ |
| `index.html`        |                                                  |
| `main.js / main.ts` | Punto de entrada del JavaScript/TypeScript.      |
| `vite.config.js`    | Configuración personalizada para Vite. Opcional. |
| `style.css`         | Archivo de estilos globales.                     |

---

## 🔧 Configuración básica de `vite.config.js`

```js
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',          // Carpeta base
  publicDir: 'public',// Archivos estáticos
  build: {
    outDir: 'dist',   // Carpeta de salida
  },
  server: {
    port: 3000,       // Puerto del servidor
    open: true        // Abre el navegador al iniciar
  }
});
```

---

## 🚢 Desplegar tu proyecto

1. Ejecuta el build de producción:
    

```bash
npm run build
```

2. Esto genera una carpeta `/dist` con los archivos estáticos optimizados.
    
3. Puedes subir la carpeta `/dist` a cualquier hosting estático:
    

- **GitHub Pages**
    
- **Vercel**
    
- **Netlify**
    
- **Firebase Hosting**
    

### Ejemplo para GitHub Pages

```bash
npm install --save-dev gh-pages
```

Agrega esto en `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Despliega con:

```bash
npm run deploy
```

---

# 📄 Configurar Multi-Page Application (MPA) en Vite

## ¿Por qué Vite es SPA por defecto?

Vite está **optimizado para Single Page Applications** desde el inicio. Cuando creas un proyecto con `npm create vite@latest`, obtienes:

- Un solo punto de entrada: `index.html`
- Un solo archivo JavaScript principal: `src/main.js`
- Navegación manejada por JavaScript (client-side routing)
- Optimización automática para bundle único

### 📂 Estructura de archivos recomendada

```
/mi-proyecto-mpa
├── index.html                 # Página principal
├── vite.config.js            # Configuración MPA
├── package.json
├── /pages
│   ├── about.html            # Página "Acerca de"
│   └── contact.html          # Página "Contacto"
├── /src
│   ├── main.js               # JS para index.html
│   ├── about.js              # JS para about.html
│   ├── contact.js            # JS para contact.html
│   └── styles/
│       ├── main.css
│       ├── about.css
│       └── contact.css
└── /public
    └── favicon.ico
```

### 🔧 Configuración para Multi-Page Application

Para incluir **múltiples páginas HTML** en Vite, necesitas configurar el archivo `vite.config.js` con múltiples puntos de entrada usando `rollupOptions.input`.

```js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
	    // Clave: nombre del chunk, Valor: ruta del archivo HTML
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
      },
    },
  },
});
```

---

## ✅ Consejos para usar Vite eficientemente

- Usa `type="module"` siempre en tus scripts.
    
- Organiza tus archivos en `/src` por funcionalidades.
    
- Usa `import.meta.env` para acceder a variables de entorno.
    
- Recuerda que Vite está optimizado para ESModules.
    
- Siempre escribe código moderno y modular.
    
- Para TypeScript, activa `strict: true` en `tsconfig.json` para más seguridad.
    
