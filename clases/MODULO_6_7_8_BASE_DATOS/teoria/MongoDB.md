MongoDB es una base de datos **NoSQL orientada a documentos**, diseñada para trabajar con datos estructurados en documentos BSON (similar a JSON). Es ideal para almacenar datos flexibles y escalables, muy utilizada en aplicaciones web modernas.

---

# 🛠️ Instalar MongoDB

```bash
mongod.exe --version

# copiar la ruta
C:\Program Files\MongoDB\Server\8.0\bin\

# configuracion avanzada del sistema

# agregar al path


```

---

# 🛠️ MongoDB consola (`mongosh`)

- Página oficial: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
    
- Selecciona la versión **Community Server** (gratuita).
    
- Instala como cualquier programa de tu sistema operativo (Windows, macOS, Linux).
    
- Base de datos: en carpeta `/data/db` (puede variar según configuración).
    

Desde aquí podrás usar comandos básicos para interactuar con las bases de datos.

```bash
# 1. Comando para iniciar el servidor:
mongod

# 2. En otra terminal, acceder al cliente interactivo y ejecutar comandos en consola:
mongosh

# 3. 
use storeAmigos
db.amigos.insert({"nombre": "pipo"})

```

---

```bash
# Crear o seleccionar base de datos
use nombreDeBaseDeDatos
```

- Si la base no existe, MongoDB la creará automáticamente cuando insertes el primer dato.
    
- Se recomienda usar nombres:
    
    - En minúsculas.
        
    - Sin espacios.
        
    - Con _guiones bajos_ o _camelCase_.
        

---

```bash
# Crear colección (tabla)
db.createCollection("productos")

# o
use productos
```

---

```bash
# Insertar un documento:
db.productos.insertOne({ nombre: "Mouse", precio: 1000 })

# Insertar documentos:
db.productos.insertMany(mi[
  { nombre: "Teclado", precio: 2500 },
  { nombre: "Monitor", precio: 15000 }
])
```

---

```bash
# Leer todos los documentos:
db.productos.find()
greath thatn
# Leer todos, filtrar por campo:
db.productos.find({ precio: { $gt: 2000 } })

# Leer todos, buscar uno solo:
db.productos.findOne({ nombre: "Mouse" })
```

---

```bash
# Actualizar un documento:
db.productos.updateOne(
  { nombre: "Mouse" },
  { $set: { precio: 1200 } }
)

# Actualizar documentos:
db.productos.updateMany(
  { precio: { $lt: 2000 } },
  { $set: { oferta: true } }
)
```

---

```bash
# Eliminar documento:
db.productos.deleteOne({ nombre: "Teclado" })

# Eliminar varios documentos:
db.productos.deleteMany({ precio: { $lt: 5000 } })
```

---

```bash
# CONSULTAS AVANZADAS

# Ordenar:
db.productos.find().sort({ precio: 1 })   # 1 = ascendente, -1 = descendente

# Limitar resultados:
db.productos.find().limit(5)

# Proyectar campos específicos:
db.productos.find({}, { nombre: 1, _id: 0 })
```

---

# 📦 MongoDB Compass (Interfaz Gráfica)

MongoDB Compass es la herramienta oficial con interfaz gráfica para administrar tus bases.

- Descargar desde: [https://www.mongodb.com/try/download/compass](https://www.mongodb.com/try/download/compass)
    
- Permite visualizar documentos, colecciones, ejecutar queries, crear índices, etc.
    
- Conecta directamente a una base local (`mongodb://localhost:27017`) o remota (como Atlas).

```bash
# instalar el cliente MongoDB
npm install mongodb
```

---

```js
// Código básico de conexión
const { MongoClient } = require('mongodb');

// URL local de MongoDB (igual que usa Compass)
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Nombre de la base de datos
const dbName = 'tiendaOnline';

// Función principal
async function conexionBaseDatos() {
  try {
    await client.connect();
    console.log('Conectado a MongoDB');

    const db = client.db(dbName);
    const coleccion = db.collection('productos');

    // Leer todos los productos
    const productos = await coleccion.find().toArray();
    console.log('Productos:', productos);

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.close();
    console.log('Conexión cerrada');
  }
}

conexionBaseDatos();
```

---

```js
// # Insertar un producto
await coleccion.insertOne({ nombre: 'Auriculares', precio: 3000 });
```

---

```js
// # Leer productos con filtro
const baratos = await coleccion.find({ precio: { $lt: 5000 } }).toArray();
console.log('Productos baratos:', baratos);
```

---

```js
// # Actualizar producto
await coleccion.updateOne(
  { nombre: 'Auriculares' },
  { $set: { stock: 15 } }
);
```

---

```js
// # Eliminar producto
await coleccion.deleteOne({ nombre: 'Auriculares' });
```

---

## 📋 Consideraciones importantes

- Conectás a la **misma base local** que ves en Compass.
    
- Todo lo que hagas desde JavaScript también se verá reflejado en Compass (y viceversa).
    
- `client.connect()` siempre es asincrónico.
    
- Usá `try...catch` para manejar errores.
    

---

# ☁️ MongoDB Atlas (base de datos en la nube)

MongoDB Atlas es un servicio cloud que ofrece MongoDB como SaaS (base de datos como servicio), ideal para desarrollo remoto.

#### Pasos:

- Registrarse en: [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
    
- Crear un nuevo **cluster gratuito** (Free Tier).
    
- Definir usuarios y contraseñas.
    
- Permitir IP pública desde donde te conectarás (puedes usar `0.0.0.0/0` para permitir todas).
    
- Obtener URL de conexión (`mongodb+srv://...`) para usar desde Compass o desde Node.js.
    

## Crear una base de datos en MongoDB Atlas

- Ingresá a [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) y registrate.
    
- Creá un **Cluster gratuito** (Free Tier).
    
- Creá un **usuario** con:
    
    - Nombre y contraseña segura.
        
    - Rol: readWriteAnyDatabase (por defecto está bien).
        
- Permití acceso desde tu IP pública, o desde todas las IPs (`0.0.0.0/0`) si es solo para pruebas.
    
- Copiá tu **URL de conexión**:
    
    - Por ejemplo:
        
        ```
        mongodb+srv://usuario:contraseña@cluster0.abcde.mongodb.net/miBaseDeDatos?retryWrites=true&w=majority
        ```
        

---

```bash
# Instalar el cliente MongoDB
npm install mongodb
```

---

##  Código de conexión desde Node.js

```js
const { MongoClient } = require('mongodb');

// URL de conexión (la que te da Atlas)
const url = 'mongodb+srv://usuario:contraseña@cluster0.abcde.mongodb.net/?retryWrites=true&w=majority';

// Nombre de la base de datos
const dbName = 'tiendaOnline';

// Crear cliente
const client = new MongoClient(url);

async function conexionBaseDatos() {
  try {
    await client.connect();
    console.log('Conectado a MongoDB Atlas');

    const db = client.db(dbName);
    const coleccion = db.collection('productos');

    // Leer documentos
    const productos = await coleccion.find().toArray();
    console.log('Productos:', productos);

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.close();
    console.log('Conexión cerrada');
  }
}

conexionBaseDatos();
```

---

## ⚠️ Recomendaciones de seguridad

- No subir nunca la URL de conexión a GitHub.
    
- Guardá la URL de conexión en una variable de entorno:
    
    ```js
    const url = process.env.MONGO_URL;
    ```
    
- Usá una librería como `dotenv` para cargar las variables desde un archivo `.env`.
    

---

## 🎯 Resumen

| Base de datos | URL de conexión                              | Acceso desde   |
| ------------- | -------------------------------------------- | -------------- |
| MongoDB local | mongodb://localhost:27017                    | Solo en tu PC  |
| MongoDB Atlas | mongodb+srv://usuario:contraseña@cluster0... | Desde Internet |
