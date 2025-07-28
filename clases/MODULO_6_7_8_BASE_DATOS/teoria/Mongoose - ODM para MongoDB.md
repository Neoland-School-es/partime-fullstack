**Mongoose** es una librería de Node.js que actúa como un **ODM (Object Data Modeling)** para **MongoDB**. Permite trabajar con bases de datos Mongo de forma más organizada, usando **esquemas y modelos**.

En lugar de manipular documentos MongoDB como objetos sueltos, con Mongoose se definen **estructuras claras** para los datos (como si fuera una clase).

## usa para

- Definir **esquemas** y **modelos** de datos.
    
- Validar y formatear información antes de guardarla.
    
- Conectarse fácilmente a una base de datos MongoDB.
    
- Ejecutar operaciones como **crear, leer, actualizar y eliminar (CRUD)** con métodos simples.
    

| Concepto / Método         | Descripción                                                                    |
| ------------------------- | ------------------------------------------------------------------------------ |
| `Schema`                  | Define la **estructura y validaciones** de un documento.                       |
| `Model`                   | Representa una **colección** en la base de datos y permite hacer consultas.    |
| `connect()`               | Establece la conexión con la base de datos MongoDB.                            |
| `save()`                  | Guarda una nueva instancia de un documento.                                    |
| `find()`                  | Busca **todos los documentos** que coincidan con un filtro.                    |
| `findOne()`               | Busca el **primer documento** que coincida con un filtro.                      |
| `findById()`              | Busca un documento por su ID.                                                  |
| `create()`                | Crea y guarda un nuevo documento directamente (atajo de `new + save`).         |
| `updateOne()`             | Actualiza **un solo documento** que coincida con el filtro.                    |
| `updateMany()`            | Actualiza **varios documentos** que coincidan con el filtro.                   |
| `findOneAndUpdate()`      | Busca un documento y lo actualiza en una sola operación.                       |
| `deleteOne()`             | Elimina **un documento** que coincida con el filtro.                           |
| `deleteMany()`            | Elimina **todos los documentos** que coincidan con el filtro.                  |
| `findByIdAndDelete()`     | Elimina un documento usando su ID.                                             |
| `toObject()` / `toJSON()` | Convierte el documento en un objeto plano o JSON para enviar al cliente.       |

---

## Instalar Mongoose

```bash
npm install mongoose
```

---

## Conectar a MongoDB

```js
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/mi_basededatos')
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch((err) => console.error('Error de conexión:', err));
```

---

## Crear un esquema y modelo

```js
const usuarioSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  edad: Number,
  creadoEn: {
    type: Date,
    default: Date.now
  }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);
```

---

## Operaciones (CRUD)

```js
// Crear un documento
const nuevoUsuario = new Usuario({ nombre: 'Ana', email: 'ana@mail.com', edad: 25 });
await nuevoUsuario.save();

// Leer documentos
const usuarios = await Usuario.find(); // Todos
const uno = await Usuario.findOne({ email: 'ana@mail.com' }); // Uno por criterio

// Actualizar un documento
await Usuario.updateOne({ email: 'ana@mail.com' }, { edad: 26 });

// Eliminar un documento
await Usuario.deleteOne({ email: 'ana@mail.com' });
```

---

## Validaciones básicas

Los esquemas pueden incluir validaciones simples:

```js
const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});
```

---

## Recomendaciones

- Usar nombres en singular para los modelos (`Usuario` → colección `usuarios`).
    
- Validar datos en el esquema para evitar errores en la base.
    
- Usar `async/await` para escribir código más claro.
    
- Nunca guardes datos sin validar o sanitizar.
    
