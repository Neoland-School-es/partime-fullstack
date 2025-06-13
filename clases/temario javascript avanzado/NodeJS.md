## 🔧 Inicializar un Proyecto Node.js

Para comenzar un nuevo proyecto Node.js:

```bash
npm init
```

Este comando lanza un asistente interactivo para configurar el `package.json`.

Para evitar responder preguntas, puedes usar:
  
```bash
npm init --yes
# o
npm init -y
```

Esto crea un archivo `package.json` con valores por defecto.


---

## 📁 Instalación de Paquetes

### Dependencias de Producción

```bash
npm install nombre-paquete
# o
npm i nombre-paquete
```

Esto instala una dependencia necesaria para ejecutar la aplicación. Se guarda en `dependencies`.

### Dependencias de Desarrollo

```bash
npm install --save-dev nombre-paquete
# o
npm install -D nombre-paquete
# o
npm i -D nombre-paquete
```

Estas solo se usan durante el desarrollo. Se guardan en `devDependencies`.


---

## ❌ Desinstalación de Paquetes

```bash
npm uninstall nombre-paquete
# o
npm rm nombre-paquete
```

Esto elimina el paquete y lo quita de `package.json`.


---

## 📜 Scripts Personalizados

Puedes definir comandos personalizados en el `package.json` en la sección `"scripts"`:

```json
"scripts": {
  "start": "vite",                  // Alias de 'dev' para mayor claridad
  "dev": "vite",                    // Inicia el servidor de desarrollo
  "build": "tsc && vite build",     // Compila TypeScript y genera la versión de producción
  "preview": "vite preview",        // Vista previa del build
  "clean": "rm -rf dist node_modules", // Limpieza del entorno de trabajo
  "lint": "eslint . --ext .ts,.js", // Análisis de código
  "format": "prettier --write .",   // Formatea el código
  "test": "vitest",                // Corre pruebas
  "serve": "vite preview"           // Alias de 'preview'
}
```

### Ejecutar scripts

```bash
npm run dev
npm run build
npm run preview
npm run clean
npm run lint
npm run format
npm run test
```

> Nota: puedes usar `npm start` o `npm test` directamente si esos scripts existen, sin escribir `run`.

### Crear tus propios scripts

Puedes crear cualquier comando personalizado en el `package.json` en la sección `"scripts"`:

```json
"scripts": {
  "saludo": "echo Hola, desarrollador!"
}
```

Y ejecutarlo con:

```bash
npm run saludo
```


---

## 🧪 Scripts Especiales en npm

Puedes definir scripts especiales con prefijos:
* `pre<nombre>`: Se ejecuta antes del script `nombre`.
* `post<nombre>`: Se ejecuta después del script `nombre`.

```json
"scripts": {
  "prestart": "echo Preparando servidor...",
  "start": "echo Inicia servidor",
  "poststart": "echo Servidor iniciado."
}
```


---

## 🔢 Versionado Semántico

Las versiones siguen el esquema: `MAJOR.MINOR.PATCH`, por ejemplo:

```
1.2.3
```

* **MAJOR** (1): Cambios incompatibles
* **MINOR** (2): Nuevas funcionalidades compatibles
* **PATCH** (3): Corrección de errores

Puedes editar el campo `version` manualmente en `package.json`, o usar:

```bash
npm version patch   # Incrementa el parche
npm version minor   # Incrementa la menor
npm version major   # Incrementa la mayor
```


---

## ✅ Buenas Prácticas

* Siempre ejecuta `npm install` luego de clonar un proyecto.
* Usa scripts personalizados para automatizar tareas repetitivas.
* Documenta tus scripts en un README.
* Prefiere `npm init -y` para agilizar la creación de proyectos.
* Usa `npm audit` para revisar vulnerabilidades. 


---
