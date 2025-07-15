CORS es una **política de seguridad** que implementan los navegadores. **Evita que una página web haga solicitudes AJAX a un servidor diferente** al que la sirvió (dominio distinto).

---

## ⚙️ ¿Cómo se controla CORS?

El servidor es quien debe indicar explícitamente qué orígenes tienen permiso para hacer solicitudes, usando la cabecera:

```http
Access-Control-Allow-Origin: *
```

O, más seguro:

```http
Access-Control-Allow-Origin: https://midominio.com
```

---

## 📥 Cabeceras comunes relacionadas a CORS

| Cabecera                           | Función                                       |
| ---------------------------------- | --------------------------------------------- |
| `Access-Control-Allow-Origin`      | Define qué orígenes pueden hacer solicitudes. |
| `Access-Control-Allow-Methods`     | Métodos permitidos (GET, POST, PUT...).       |
| `Access-Control-Allow-Headers`     | Cabeceras personalizadas permitidas.          |
| `Access-Control-Allow-Credentials` | Permite cookies o autenticación.              |
| `Access-Control-Expose-Headers`    | Qué cabeceras puede leer el cliente.          |

---

## 🔥 Preflight Requests

- Si la solicitud es **compleja** (usa métodos como `PUT`, `DELETE`, cabeceras personalizadas, o `Content-Type` distinto a `application/x-www-form-urlencoded`), el navegador envía primero una solicitud **OPTIONS** para preguntar qué está permitido.
    

El servidor debe responder algo como:

```http
Access-Control-Allow-Origin: https://midominio.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
```

---

## 🛠️ Habilitar CORS

### ✅ Servidor con módulo `http` puro

Tienes que escribir las cabeceras manualmente:

```js
const http = require('http');

const server = http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir todos los orígenes

    if (req.method === 'POST') {
        res.writeHead(204, {
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        });
        res.end();
        return;
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ mensaje: 'CORS habilitado' }));
});

server.listen(3000);
```

---

### ✅ Servidor con Express.js

Usas el middleware **`cors`** (recomendado):

```bash
npm install cors
```

```js
import express from 'express';
import cors from 'cors';

const app = express();

// Permitir todos los orígenes (no recomendado en producción)
app.use(cors());

// O configuración personalizada:
app.use(cors({
    origin: 'https://midominio.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // Permite cookies si es necesario
}));

// Rutas
app.get('/datos', (req, res) => {
    res.json({ mensaje: 'API con CORS habilitado' });
});
```

---

## 🎯 Cosas importantes que puedes enviar desde el cliente (fetch)

- Cualquier tipo de método (`GET`, `POST`, `PUT`, `DELETE`).
    
- Cabeceras personalizadas (`Authorization`, `X-Token`, etc.) pero solo si el servidor las permite con `Access-Control-Allow-Headers`.
    
- Datos en JSON, formularios, archivos.
    

Desde el cliente puedes enviar cabeceras como:

```js
fetch('https://api.servidor.com/datos', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token123'
    },
    body: JSON.stringify({ clave: 'valor' })
});
```

El servidor debe permitirlas usando la cabecera **Access-Control-Allow-Headers**.
