El módulo `fs` (file system) de Node.js permite **leer, escribir, modificar y gestionar archivos y carpetas** en el sistema operativo desde una aplicación Node.js.

Es muy útil para:

- Crear y escribir archivos de texto, JSON o logs.
    
- Leer configuraciones o plantillas desde archivos.
    
- Registrar actividad del servidor.
    
- Manipular archivos como si estuvieras en una terminal.
    

---

## 🚀 Importar `fs`


```js
import fs from 'fs';
// import { readFile, writeFile } from 'fs/promises';
```

---

## 📌 Formas de uso

Existen 2 formas principales de trabajar con `fs`:

|Tipo|Método|Descripción|
|---|---|---|
|**Sincrónica**|`fs.readFileSync()`|Bloquea el hilo principal hasta que se completa. Más simple pero no recomendable en servidores.|
|**Asíncrona**|`fs.promises.readFile()` o `fs.readFile()`|No bloquea. Ideal para producción. Usa callbacks o promesas.|

---

## Crear y escribir un archivo de texto

```js
import fs from 'fs';

try {
  await fs.writeFile('saludo.txt', 'Hola mundo!');
  console.log('Archivo creado con éxito.');
} catch (error) {
  console.error('Error al escribir el archivo:', error);
}
```

## Leer un archivo

```js
import fs from 'fs';

try {
  const contenido = await fs.readFile('saludo.txt', 'utf-8');
  console.log('Contenido:', contenido);
} catch (error) {
  console.error('Error al leer el archivo:', error);
}
```

## Agregar texto a un archivo existente

```js
import fs from 'fs';

try {
  await fs.appendFile('saludo.txt', '\n¡Bienvenido al sistema!');
} catch (error) {
  console.error('Error al leer el archivo:', error);
}
```

## Verificar si un archivo existe

```js
import fs from 'fs';

try {
  await fs.access('saludo.txt', fs.constants.F_OK);
  console.log('El archivo existe.');
} catch {
  console.log('El archivo NO existe.');
}
```

## Eliminar un archivo

```js
import fs from 'fs';

await fs.unlink('saludo.txt');
console.log('Archivo eliminado');
```

## Crear una carpeta

```js
import fs from 'fs';

await fs.mkdir('nueva-carpeta', { recursive: true });
```

## Leer el contenido de una carpeta

```js
import fs from 'fs';

const archivos = await fs.readdir('./');
console.log('Archivos en el directorio:', archivos);
```

---

## 📋 Tabla de funciones comunes de `fs`

| Función                    | Descripción                                            | Uso recomendado |
| -------------------------- | ------------------------------------------------------ | --------------- |
| `readFile(path, opts)`     | Lee el contenido de un archivo                         | ✅ Muy común     |
| `writeFile(path, data)`    | Escribe o reemplaza un archivo                         | ✅ Muy común     |
| `appendFile(path, data)`   | Agrega contenido al final de un archivo                | ✅ Común         |
| `unlink(path)`             | Elimina un archivo                                     | ⚠️ Cuidado      |
| `mkdir(path, opts)`        | Crea un directorio                                     | ✅ Común         |
| `readdir(path)`            | Lee el contenido de un directorio                      | ✅ Común         |
| `rename(oldPath, newPath)` | Renombra un archivo o carpeta                          | ⚠️ Moderado     |
| `copyFile(src, dest)`      | Copia un archivo                                       | ✅ Común         |
| `stat(path)`               | Obtiene información del archivo (tamaño, fechas, etc.) | 🧠 Útil         |
| `access(path)`             | Verifica si se puede acceder al archivo (existe, etc.) | ✅ Importante    |

> Todas estas funciones están disponibles en `fs/promises` y devuelven Promesas.

---

## 📁 Tipos de archivos que puedes leer o escribir

Con `fs`, puedes trabajar con **cualquier tipo de archivo**, por ejemplo:

|Tipo|Extensiones comunes|Comentario|
|---|---|---|
|Texto|`.txt`, `.md`|✅ Fácil de leer y escribir|
|JSON|`.json`|✅ Ideal para configuraciones|
|Logs|`.log`|✅ Para registrar actividad|
|Binarios|`.jpg`, `.png`, etc|⚠️ Necesita manejo en modo `buffer`|
|Código|`.js`, `.html`|✅ Puede leerse como texto|

---

## ✅ Buenas prácticas

- Usa **promesas** (`fs/promises`) en lugar de callbacks para código más limpio.
    
- Usa `try/catch` para capturar errores y evitar que tu app se caiga.
    
- Usa `utf-8` al leer archivos de texto para obtener strings directamente.
    
- Evita `readFileSync` en servidores: bloquea la ejecución.
    
- Asegúrate de que los archivos existen antes de leerlos o eliminarlos con `access()`.
    
- Siempre verifica los **errores de permisos** o rutas inexistentes.
    
- Crea carpetas con la opción `{ recursive: true }` para evitar errores.
    
