# Persistencia de datos en el navegador: IndexedDB

**IndexedDB** es una **base de datos local orientada a objetos**, incluida en todos los navegadores modernos. Permite almacenar **grandes volúmenes de datos estructurados**, como objetos, listas, directamente en el navegador del usuario.

Es ideal para aplicaciones que necesitan **persistencia avanzada** y deben funcionar incluso **sin conexión a internet** (como una PWA).

---

## 📄 Características principales

| Propiedad                | Detalle                                                     |
| ------------------------ | ----------------------------------------------------------- |
| 🧱 **Estructura**        | Guarda objetos completos, no solo strings.                  |
| ⚡ **Asincronía**         | Opera de forma asíncrona mediante eventos o Promesas.       |
| 🔍 **Índices**           | Permite búsquedas rápidas por campos no clave.              |
| 🧪 **Soporta versiones** | Se puede actualizar su estructura con versiones.            |
| 📶 **Funciona offline**  | No necesita conexión constante al servidor.                 |
| 🌐 **Por origen**        | Cada base de datos está limitada al mismo dominio y puerto. |

---

## 🗂️ Conceptos clave

| Concepto           | Descripción                                         |
| ------------------ | --------------------------------------------------- |
| **Base de datos**  | Contenedor principal de datos (nombre + versión).   |
| **Object Store**   | Similar a una tabla en SQL, pero guarda objetos JS. |
| **Clave primaria** | Campo único para identificar cada entrada.          |
| **Índice**         | Permite buscar por otros campos no únicos.          |
| **Transacción**    | Grupo de operaciones que deben ejecutarse juntas.   |

---

## 🧠 Tabla de funciones y su contexto de uso

| Función / Método                  | ¿Dónde se usa?                               | ¿Cuándo se ejecuta?                             | ¿Para qué sirve?                                         |
| --------------------------------- | -------------------------------------------- | ----------------------------------------------- | -------------------------------------------------------- |
| `indexedDB.open(nombre, versión)` | Global (fuera de funciones)                  | Al iniciar tu app / abrir la base de datos      | Abre (o crea) una base de datos                          |
| `onupgradeneeded`                 | Dentro de `indexedDB.open()`                 | Solo la **primera vez** o al subir la versión   | Crear object stores y definir índices                    |
| `onsuccess`                       | Dentro de `indexedDB.open()`                 | Si se abre la base de datos correctamente       | Acceder al objeto `db` para hacer transacciones          |
| `onerror`                         | Dentro de `indexedDB.open()` o transacciones | Si hay errores al abrir o usar la base          | Mostrar errores de conexión o de operaciones             |
| `db.createObjectStore()`          | Solo dentro de `onupgradeneeded`             | Al crear la base de datos o subir versión       | Crea un almacén (como una tabla SQL)                     |
| `objectStore.createIndex()`       | Solo dentro de `onupgradeneeded`             | Después de crear un almacén                     | Crear índice para búsquedas por campos no clave          |
| `db.transaction(nombre, modo)`    | Dentro de `onsuccess` o eventos posteriores  | Cada vez que se quiere leer o escribir          | Inicia una transacción con modo `readonly` o `readwrite` |
| `transaction.objectStore()`       | Dentro de una transacción                    | Inmediatamente luego de crear la transacción    | Accede al almacén de datos dentro de la transacción      |
| `store.add(objeto)`               | Dentro de una transacción `readwrite`        | Para guardar un nuevo registro                  | Agrega un objeto nuevo                                   |
| `store.get(clave)`                | Dentro de transacción `readonly`             | Para buscar un dato por clave                   | Recupera un objeto por su clave primaria                 |
| `store.index(nombre).get(valor)`  | Transacción `readonly`, si hay índice creado | Para buscar por campo secundario                | Recupera datos usando el índice                          |
| `store.put(objeto)`               | Dentro de transacción `readwrite`            | Para actualizar un registro completo            | Actualiza (o inserta si no existe) un objeto             |
| `store.delete(clave)`             | Dentro de transacción `readwrite`            | Para eliminar un objeto por clave               | Borra un objeto del almacén                              |
| `transaction.oncomplete`          | Luego de terminar la transacción             | Cuando todas las operaciones se completan       | Confirmar que se guardó/leyó correctamente               |
| `transaction.onerror`             | Si algo falla en la transacción              | Cuando ocurre un error durante una operación    | Manejar errores dentro de la transacción                 |
| `store.openCursor()`              | Dentro de una transacción `readonly`         | Para recorrer todos los registros               | Permite leer múltiples datos en orden                    |
| `store.count()`                   | Transacción `readonly`                       | Para contar cuántos elementos hay en el almacén | Devuelve la cantidad total de registros                  |

---

## 💻 Crear y abrir una base de datos

```js
const connectionDB = window.indexedDB.open('MiBaseDeDatos', 1);

// 📌 Nota: El evento `onupgradeneeded` solo se ejecuta si es la primera vez o cambia la versión de la base de datos.
connectionDB.onupgradeneeded = function (event) {
  const db = event.target.result;

  // Crear "tabla" usuarios con clave primaria 'id'
  const storeUser = db.createObjectStore('usuarios', { keyPath: 'id' });

  // Crear índice por nombre (no único)
  storeUser.createIndex('nombre', 'nombre', { unique: false });
};

connectionDB.onsuccess = function (event) {
  const db = event.target.result;
  console.log('Base de datos lista:', db);
};

connectionDB.onerror = function (error) {
    console.log('Error en base de datos', error)
}
````

## ➕ Agregar datos

```js
const requestTransaction = db.transaction('usuarios', 'readwrite');
const storeUser = requestTransaction.objectStore('usuarios');

storeUser.add({ id: 1, nombre: 'Karina', rol: 'admin' });
storeUser.add({ id: 2, nombre: 'Lucía', rol: 'editor' });

requestTransaction.oncomplete = function () {
  console.log('Datos guardados correctamente');
};

requestTransaction.onerror = function () {
  console.log('Datos no guardados');
};
```

## 🔍 Leer datos por clave

```js
const requestTransaction = db.transaction('usuarios', 'readonly');
const storeUser = requestTransaction.objectStore('usuarios');

const getReq = storeUser.get(1); // buscar por id

getReq.onsuccess = () => {
  console.log(getReq.result); // { id: 1, nombre: 'Karina', rol: 'admin' }
};

getReq.onerror = function () {
  console.log('Error al leer los datos');
};
```

## 🧭 Buscar por índice

```js
const txn = db.transaction('usuarios', 'readonly');
const store = txn.objectStore('usuarios');

const index = store.index('nombre');
const getReq = index.get('Lucía');

getReq.onsuccess = () => {
  console.log(getReq.result); // { id: 2, nombre: 'Lucía', rol: 'editor' }
};

// ⚠️ `get()` solo trae una coincidencia. Para obtener varios resultados, se debe usar `openCursor()` con un índice.
```

---

### 📌 `openCursor()`

```js
const tx = db.transaction('usuarios', 'readonly');
const store = tx.objectStore('usuarios');
const index = store.index('rol');

const cursorRequest = index.openCursor();

cursorRequest.onsuccess = function (e) {
  const cursor = e.target.result;
  if (cursor) {
    console.log('Usuario admin:', cursor.value);
    cursor.continue();
  }
};
```
---
## 🔄 Actualizar un registro

```js
const txn = db.transaction('usuarios', 'readwrite');
const store = txn.objectStore('usuarios');

store.put({ id: 1, nombre: 'Karina', rol: 'superadmin' });
```

## 🗑️ Eliminar un registro

```js
const txn = db.transaction('usuarios', 'readwrite');
const store = txn.objectStore('usuarios');

store.delete(2);
```

---

## ✅ Ventajas de IndexedDB

- Soporta **objetos complejos**, arrays, fechas, etc.
    
- Ideal para **apps sin conexión**.
    
- Soportado por **todos los navegadores modernos**.
    
- No hay límite práctico pequeño como en `localStorage`.
    

---

## ❗ Consideraciones y limitaciones

- Funciona con una **API basada en eventos** (o Promesas usando librerías como `idb`).
    
- No se puede acceder entre dominios distintos.
    
- No sincroniza automáticamente entre pestañas.
    

---

## 📚 Conclusión

**IndexedDB** es la solución más robusta para almacenar datos en el navegador. Aunque su API puede parecer compleja al principio, ofrece **potencia, flexibilidad y escalabilidad** para construir aplicaciones modernas con capacidades offline, caché local, o sincronización posterior con servidores.