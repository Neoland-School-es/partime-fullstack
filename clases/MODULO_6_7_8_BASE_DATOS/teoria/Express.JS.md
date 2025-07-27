**Express.js** es un **framework minimalista para Node.js**. Simplifica la creación de servidores web y APIs.

Se construye encima del módulo nativo `http` de Node.js. Permite crear rutas, controlar métodos HTTP, enviar respuestas y gestionar archivos estáticos con muy poco código.

---

## 📦 Express vs `http` puro

Express **automatiza y simplifica** muchas tareas comunes del desarrollo backend.

| Tarea                     | Con `http` puro                   | Con Express.js                    |
| ------------------------- | --------------------------------- | --------------------------------- |
| Crear servidor            | `http.createServer()`             | `express()`                       |
| Definir rutas             | Comparar manualmente URL y método | `app.get()`, `app.post()`, etc.   |
| Enviar JSON               | `res.setHeader()`, `res.end()`    | `res.json()`, `res.send()`        |
| Leer datos de formularios | `req.on('data')`                  | `express.urlencoded()` middleware |
| Servir archivos estáticos | Programación manual               | `express.static()`                |

---

## 📦 Instalación

```bash
# En proyectos modernos, recomendamos usar módulos ES (extensión `.mjs` o `"type": "module"` en package.json).
npm init -y             # Inicializa proyecto Node.js
npm install express     # Instala Express.js
```

---

## 🧪 Primer servidor Express básico

```js
// server.js
import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(' Bienvenido a mi API con Express');
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
```

---

## 📊 Métodos HTTP soportados

Cada método define el **tipo de acción** que el servidor acepta.

```js
app.get('/ruta', handler);     // Leer datos
app.post('/ruta', handler);    // Enviar datos
app.put('/ruta', handler);     // Actualizar datos completos
app.patch('/ruta', handler);   // Actualizar datos parciales
app.delete('/ruta', handler);  // Eliminar datos
```

---

## 📬 Enviar diferentes tipos de respuesta

|Método|Descripción|
|---|---|
|`res.send()`|Enviar texto, HTML o buffers|
|`res.json()`|Enviar objetos como JSON|
|`res.status()`|Cambiar código HTTP|
|`res.sendStatus()`|Enviar código + descripción automáticamente|
|`res.redirect()`|Redirigir a otra ruta|

Ejemplos:

```js
res.send('<h1>Hola mundo</h1>');
res.json({ usuario: 'Juan', edad: 30 });
res.status(404).send('Página no encontrada');
res.sendStatus(403);  // Envia 403 Forbidden automáticamente
res.redirect('/otra-ruta');
```

---

## 📥 Leer datos enviados por el cliente

Express no interpreta datos JSON ni formularios automáticamente. Se usan **middlewares**:

```js
app.use(express.json());                         // Leer JSON
app.use(express.urlencoded({ extended: true })); // Leer formularios HTML
```

### Ejemplo de captura de datos enviados:

```js
app.post('/contacto', (req, res) => {
  console.log(req.body);  // Datos enviados desde el formulario o JSON
  res.send('Formulario recibido');
});
```

---

## 🔎 Parámetros y queries

- **Parámetros de ruta** (`/producto/:id`):

```js
app.get('/producto/:id', (req, res) => {
  res.send(`ID del producto: ${req.params.id}`);
});
```

- **Queries** (`/buscar?nombre=cafe`):

```js
app.get('/buscar', (req, res) => {
  res.send(`Buscando: ${req.query.nombre}`);
});
```

---

## 🛠️ Middlewares

Los **middlewares** son funciones que interceptan las solicitudes antes de llegar a las rutas.

Uso global:

```js
app.use((req, res, next) => {
  console.log(`Solicitud: ${req.method} ${req.url}`);
  next(); // Continúa al siguiente middleware o ruta
});
```

Middleware aplicado a una ruta específica (por ejemplo, autenticación):

```js
function verificarClave(req, res, next) {
  if (req.headers['x-api-key'] === 'secreta') {
    next();
  } else {
    res.status(403).send('🚫 Acceso denegado');
  }
}

app.get('/privado', verificarClave, (req, res) => {
  res.send('Bienvenido a la zona segura 🔐');
});
```

---

## 🖼️ Servir archivos estáticos

```js
app.use(express.static('public'));
```

Cualquier archivo dentro de la carpeta `public/` podrá accederse directamente desde el navegador.

Ejemplo:  
`public/logo.png` → `http://localhost:3000/logo.png`

---

## 📁 Estructura recomendada del proyecto

```
mi-proyecto/
├── public/           ← Archivos estáticos (imágenes, CSS, JS)
├── routes/           ← Rutas separadas (opcional)
├── middlewares/      ← Middlewares propios (opcional)
├── index.mjs         ← Archivo principal
└── package.json
```

---

## ⚠️ Manejo de errores y rutas no encontradas

Ruta 404:

```js
app.use((req, res) => {
  res.status(404).send('Ruta no encontrada');
});
```

Manejo de errores generales:

```js
app.use((err, req, res, next) => {
  console.error('Error detectado:', err);
  res.status(500).send('Error interno del servidor');
});
```

---

## ✅ Buenas prácticas

- Separar rutas en archivos si el proyecto crece.
    
- Usar middlewares para autenticación, validación, logs, etc.
    
- Enviar siempre códigos HTTP correctos (`200`, `404`, `500`).
    
- Usar `try...catch` o middlewares de error para manejar excepciones.
    
- No dejar rutas sin manejo (usar ruta 404).
    
- Configurar correctamente las cabeceras (`Content-Type`, CORS, etc.).
    
