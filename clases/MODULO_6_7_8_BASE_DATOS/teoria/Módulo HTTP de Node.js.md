Es un **módulo interno** de Node.js (no es necesario instalar nada). Permite crear servidores web que manejan peticiones y respuestas HTTP.

## 🚀 Crear un servidor básico

```js
const http = require('http');

const server = http.createServer(function(request, response) {
    response.end('¡Hola, mundo desde Node.js!');
});

server.listen(3000, function() {
    console.log('Servidor escuchando en http://localhost:3000');
});
```

- **`createServer()`** recibe una función callback que maneja las peticiones (`request`) y las respuestas (`response`).
    
- **`listen()`** pone el servidor a escuchar en un puerto (por ejemplo, 3000).
    

---

## 📊 Objeto `request`

Contiene información sobre la **petición HTTP** que hizo el cliente. Propiedades importantes:

```js
request.method;   // Método HTTP: GET, POST, etc.
request.url;      // URL solicitada
request.headers;  // Cabeceras enviadas por el cliente
```

---

## 📤 El objeto `response`

Permite **responder al cliente**. Métodos importantes:

```js
response.writeHead(statusCode, headers);  // Establece código y cabeceras
response.write(data);                     // Escribe parte de la respuesta
response.end(data);      // Finaliza la respuesta (opcionalmente con datos)
```

---

## 📍 Manejo de rutas básicas

Ejemplo para manejar rutas manualmente:

```js
const server = http.createServer(function(request, response) {
    const url = request.url;
    const method = request.method;

    if (url === '/' && method === 'GET') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end('<h1>Página de inicio</h1>');
    } else if (url === '/about' && method === 'GET') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end('<h1>Acerca de</h1>');
    } else {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.end('404 Página no encontrada');
    }
});
```

---

## 🛠️ Métodos HTTP

Los métodos más comunes que debes manejar:

- `GET`: solicitar datos
    
- `POST`: enviar datos
    
- `PUT`: actualizar datos
    
- `DELETE`: eliminar datos
    

```js
if (method === 'POST') {
    let body = '';
    request.on('data', function(chunk) {
        body += chunk.toString();
    });
    request.on('end', function() {
        console.log('Datos recibidos:', body);
        response.end('Datos recibidos');
    });
}
```

---

## 🏷️ Cabeceras HTTP

Para configurar el tipo de respuesta:

```js
response.writeHead(200, {
    'Content-Type': 'application/json',
    'X-Powered-By': 'Node.js'
});
response.end(JSON.stringify({ mensaje: '¡Hola desde el servidor!' }));

// otros
res.setHeader('X-Custom-Info', JSON.stringify([{ name: "pablo", edad: 1 }]));
res.setHeader('Access-Control-Expose-Headers', 'X-Custom-Info');
```

Cabeceras comunes:

- `'Content-Type'`: tipo de contenido (`application/json`, `text/html`, etc.)
    
- `'X-Powered-By'`: cabecera personalizada. Tecnologías del servidor (`Node.js`, `Express`, etc.)
    
- `'Access-Control-Allow-Origin'`: controla qué dominios pueden acceder (CORS)
    
- `'Access-Control-Allow-Methods'`: métodos HTTP permitidos (`GET`, `POST`, etc.)

---

## 🏗️ Estructura básica recomendada

```js
const http = require('http');

const server = http.createServer(function(request, response) {
    const { url, method } = request;

    if (url === '/' && method === 'GET') {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Bienvenido a la API');
    } else if (url === '/data' && method === 'GET') {
        const data = { mensaje: 'Este es un JSON de ejemplo' };
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(data));
    } else {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.end('Ruta no encontrada');
    }
});

server.listen(3000, function() {
    console.log('Servidor en ejecución en http://localhost:3000');
});
```

---

## 📚 Buenas prácticas básicas

- Usar siempre el **código de estado adecuado** (200, 404, 500, etc.).
    
- Definir correctamente el **Content-Type** según el tipo de contenido.
    
- Cerrar siempre la respuesta con `response.end()`.
    

---

## ⚙️ Flujo básico de un servidor Node.js con `http`

1. **Cliente** realiza una solicitud (GET, POST, etc.).
    
2. **Servidor** recibe el `request`.
    
3. Se analiza `request.url` y `request.method`.
    
4. Se responde usando `response.writeHead()` y `response.end()`.
    
5. El cliente recibe la respuesta.
    

---

## 🚧 Limitaciones del módulo `http`

- Es muy **básico** y requiere manejar rutas manualmente.
    
- No tiene middlewares ni enrutadores integrados.
    
- Para proyectos más grandes se usa **Express.js** (un framework encima del módulo `http`).
    
