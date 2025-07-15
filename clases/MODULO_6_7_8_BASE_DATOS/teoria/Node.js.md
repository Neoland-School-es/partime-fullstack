Es un entorno de ejecución que permite ejecutar código JavaScript fuera del navegador, usando el motor V8 (de Google Chrome). 

Está diseñado principalmente para crear aplicaciones de red como servidores web, APIs y herramientas CLI.

---

## 🔹 procesos en Node.js

En Node.js, **cada aplicación es un proceso en ejecución**, que es como una instancia de tu programa activa en la memoria del sistema operativo. Node permite interactuar con este proceso mediante el objeto global `process`.


```js
// Mostrar el ID del proceso (PID)
console.log('PID:', process.pid);

// Finalizar el proceso manualmente
process.exit();
```

---

### 🔹 Variables Globales: `__dirname` y `__filename`

Estas variables integradas permiten trabajar con las rutas del sistema de archivos:

```js
// Devuelve la ruta absoluta del directorio del archivo actual.
console.log('__dirname:', __dirname);
// Devuelve la ruta completa (incluyendo el archivo actual).
console.log('__filename:', __filename);
```

---

### 🔹 Obtener Información del Sistema Operativo

Node.js incluye el módulo `os`, que permite conocer información del sistema del usuario:

```js
const os = require('os');

console.log('Sistema operativo:', os.platform());    // ej. 'win32', 'linux'
console.log('Arquitectura:', os.arch());             // ej. 'x64'
console.log('Memoria libre:', os.freemem());         // en bytes
console.log('Usuario actual:', os.userInfo());
```

---

## 📑 Tabla de Módulos Comunes en Node.js

|Módulo|Descripción breve|
|---|---|
|`fs`|Manipulación del sistema de archivos (leer, escribir).|
|`http`|Crear servidores HTTP.|
|`https`|Crear servidores HTTPS.|
|`os`|Información del sistema operativo.|
|`path`|Trabajar con rutas de archivos/directorios.|
|`process`|Información/control del proceso actual.|
|`url`|Parseo y manejo de URLs.|
|`events`|Sistema de eventos personalizados.|
|`crypto`|Funciones criptográficas.|

---

### 📍 Leer un archivo de texto (`fs`)

```js
const fs = require('fs');

fs.readFile('archivo.txt', 'utf8', function(error, datos) {
  if (error) {
    console.error('Error al leer el archivo:', error);
  } else {
    console.log('Contenido del archivo:', datos);
  }
});
```

### 📍 Crear un servidor HTTP básico (`http`)

```js
const http = require('http');

const servidor = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Servidor Node.js funcionando');
});

servidor.listen(3000, function() {
  console.log('Servidor escuchando en puerto 3000');
});
```

---
## 📍 Encriptar un texto simple (`crypto`)

El módulo `crypto` permite realizar tareas criptográficas como crear hashes o cifrar datos.

```js
const crypto = require('crypto');

// Crear un hash SHA256 de un texto
const hash = crypto.createHash('sha256').update('mi_contraseña_segura').digest('hex');

console.log('Hash SHA256:', hash);
```

- `createHash()`: Crea una función hash.
    
- `update()`: Define qué datos se van a cifrar.
    
- `digest('hex')`: Devuelve el resultado en formato hexadecimal.
    

---

## 📍 Crear y emitir eventos personalizados (`events`)

```js
const EventEmitter = require('events');

const emisor = new EventEmitter();

// Crear un evento llamado 'saludo'
emisor.on('saludo', function(nombre) {
  console.log('¡Hola,', nombre + '!');
});

// Emitir el evento
emisor.emit('saludo', 'Pablo');
```

---

## 📍 Mostrar información del sistema (`os`)

```js
const os = require('os');

console.log('Sistema Operativo:', os.platform());
console.log('Versión:', os.release());
console.log('CPU:', os.cpus().length + ' núcleos');
console.log('Memoria total (MB):', (os.totalmem() / (1024 * 1024)).toFixed(2));
console.log('Memoria libre (MB):', (os.freemem() / (1024 * 1024)).toFixed(2));
console.log('Tiempo activo del sistema (segundos):', os.uptime());
```
