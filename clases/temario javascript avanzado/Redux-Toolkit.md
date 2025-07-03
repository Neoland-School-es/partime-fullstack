##  ¿Qué es Redux ?

**Redux Toolkit** es la forma moderna y oficial de usar Redux, una librería para gestionar el estado global de tu aplicación web. Está diseñada para facilitar el trabajo con Redux, una librería popular que permite centralizar y controlar el estado de toda la aplicación.

---

## ✨ ¿Qué es Redux Toolkit?

Redux Toolkit (RTK) es la forma recomendada y oficial de trabajar con Redux hoy en día. Resuelve los principales problemas del Redux clásico:

| Característica        | Redux Clásico                  | Redux Toolkit          |
| --------------------- | ------------------------------ | ---------------------- |
| Verbosidad            | Alta                           | Mucho más simple       |
| Boilerplate           | Alto (mucho código repetitivo) | Bajo                   |
| Inmutabilidad         | Manual                         | Automática con `Immer` |
| Herramientas modernas | Manual                         | Incluidas por defecto  |
| Curva de aprendizaje  | Más compleja                   | Más amigable           |

Redux y Redux Toolkit funciona con cualquier framework (React, Vue, Angular o incluso JavaScript vanilla).


---

## 🚀 Crear un proyecto con Vite y Redux Toolkit

```bash
npm create vite@latest redux-app
cd redux-app
npm install
npm install @reduxjs/toolkit
```

---

## 📂 Estructura sugerida del proyecto

```
/redux-app
├── /src
│   ├── /app
│   ├── /store
│   │   └── store.js
│   ├── /slices
│   │   └── xSlice.js
│   └── main.js
├── index.html
└── package.json
```


---

## 📅 Conceptos clave

* **Acciones (actions)** describen qué ocurrió.
* **Reductores (reducers)** especifican cómo cambia el estado.
* **Store** contiene el estado global y permite acceder o actualizarlo.

| Concepto            | Descripción breve                                 |
| ------------------- | ------------------------------------------------- |
| `configureStore()`  | Crea el store global y permite registrar slices   |
| `createSlice()`     | Crea un slice con reducers y acciones automáticas |
| `store.dispatch()`  | Envía una acción para cambiar el estado           |
| `store.getState()`  | Devuelve el estado global actual                  |
| `store.subscribe()` | Ejecuta una función cada vez que cambia el estado |

---

## 📊 Ejemplo de Slice: Contador

**`src/slices/contadorSlice.js`**

```js
import { createSlice } from '@reduxjs/toolkit';

const contadorSlice = createSlice({
  name: 'contador',
  initialState: { valor: 0 },
  reducers: {
    incrementar: (state) => { state.valor++ },
    decrementar: (state) => { state.valor-- },
    resetear: (state) => { state.valor = 0 }
  }
});

export const { incrementar, decrementar, resetear } = contadorSlice.actions;
export default contadorSlice.reducer;
```


---

## 📁 Configurar el store global

**`src/store/store.js`**

```js
import { configureStore } from '@reduxjs/toolkit';
import contadorReducer from '../slices/contadorSlice.js';

const store = configureStore({
  reducer: {
    contador: contadorReducer
  }
});

export default store;
```


---

## 🌐 Usar el store en tu aplicación

**`src/main.js`**

```js
import store from './store/store.js';
import { incrementar, decrementar, resetear } from './slices/contadorSlice.js';

console.log(store.getState().contador.valor); // 0

store.dispatch(incrementar());
console.log(store.getState().contador.valor); // 1

store.dispatch(decrementar());
console.log(store.getState().contador.valor); // 0

store.dispatch(resetear());
console.log(store.getState().contador.valor); // 0
```


---

## 🏢 Proyecto escalable con múltiples slices

**`src/features/productos/productosSlice.js`**

```js
import { createSlice } from '@reduxjs/toolkit';

const productosSlice = createSlice({
  name: 'productos',
  initialState: [],
  reducers: {
    agregarProducto: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { agregarProducto } = productosSlice.actions;
export default productosSlice.reducer;
```

**Actualizar store con múltiples reducers:**

```js
import { configureStore } from '@reduxjs/toolkit';
import contadorReducer from '../slices/contadorSlice.js';
import productosReducer from '../slices/productosSlice.js';

const store = configureStore({
  reducer: {
    contador: contadorReducer,
    productos: productosReducer
  }
});

export default store;
```

---

## ✉️ Términos clave para recordar

- **Slice**: Parte del estado con sus propias funciones (reducers).
    
- **Reducer**: Funciones que modifican el estado según una acción.
    
- **Action**: Instrucción para cambiar el estado.
    
- **Dispatch**: Envía una acción al store.
    
- **Payload**: Datos extra enviados con una acción.
    
- **Selector**: Lectura del estado con `store.getState()`.
    

---

## ⚖️ Buenas prácticas

- Separa los slices por funcionalidad.
    
- Usa nombres claros para tus acciones.
    
- Siempre importa el store desde un archivo central (`store.js`).
    
- Evita mutar el estado directamente fuera de los reducers.
    
- Usa `Immer` de forma implícita (Redux Toolkit lo hace por ti).
    


---

## 🔧 Herramientas avanzadas de Redux Toolkit
### 🧰 Acciones asincrónicas `createAsyncThunk()`:

Un **thunk** es una función que puede hacer tareas asincrónicas antes de "despachar" una acción. 
En Redux, los **thunks** permiten ejecutar lógica asincrónica (como leer un archivo, llamar a una API o consultar IndexedDB) _antes_ de modificar el estado.
Por ejemplo: cargar productos desde una base de datos local (como IndexedDB) y luego guardarlos en el estado global.

`createAsyncThunk` crea automáticamente:

- Una acción inicial (`pending`)
    
- Una acción cuando la tarea termina bien (`fulfilled`)
    
- Una acción cuando hay error (`rejected`)
    

---

### 🛠️ Ejemplo de uso con `createAsyncThunk`

Supongamos que queremos **cargar productos desde IndexedDB**. Primero creamos el thunk:

```js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { obtenerProductosDesdeIndexedDB } from '../../db/indexedDB';

export const inicializarProductos = createAsyncThunk(
  'productos/inicializar', // nombre de la acción
  async () => {
    const productos = await obtenerProductosDesdeIndexedDB();
    return productos;
  }
);
```

Luego, lo usamos dentro del slice:

```js
const productosSlice = createSlice({
  name: 'productos',
  initialState: [],
  reducers: {
    agregarProducto: (state, action) => {
      state.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(inicializarProductos.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});
```

Y finalmente, lo usamos así en el código principal:

```js
import { store } from './store/store.js';
import { inicializarProductos } from './slices/productosSlice.js';

store.dispatch(inicializarProductos());
```

---

## 📌 Buenas prácticas con `createAsyncThunk`

- Siempre nombra bien tus acciones: `'productos/inicializar'`, `'usuarios/cargar'`, etc.
    
- Usa `extraReducers` para manejar los distintos estados: `pending`, `fulfilled`, `rejected`.
    
- Podés manejar estados como `loading`, `error`, etc., si tu `initialState` es un objeto más completo:
    

```js
initialState: {
  lista: [],
  estadoAsync: () => 'saludos!', // 'loading', 'succeeded', 'failed'
  error: null
}
```

---
## 📦 Herramientas incluidas en Redux Toolkit

| Función / API                              | ¿Qué hace?                                                                                   | Cuándo usarla                                               |
| ------------------------------------------ | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **`createSlice()`**                        | Crea un slice con reducers y acciones automáticamente.                                       | Siempre que quieras manejar una parte del estado.           |
| **`configureStore()`**                     | Crea el store global con middleware, DevTools y más por defecto.                             | En todos tus proyectos.                                     |
| **`createAsyncThunk()`**                   | Crea acciones asincrónicas (ej: cargar desde IndexedDB o APIs).                              | Cuando necesitas lógica asíncrona.                          |
| **`createReducer()`**                      | Crea reducers personalizados (cuando no usás `createSlice`).                                 | Casos avanzados o personalizados.                           |
| **`createAction()`**                       | Crea acciones individuales sin `createSlice`.                                                | Si querés más control.                                      |
| **`createSelector()`**                     | Crea selectores memorizados con rendimiento optimizado.                                      | Cuando tu estado es complejo o grande.                      |
| **`createEntityAdapter()`**                | Provee funciones útiles para manejar colecciones de objetos (agregar, actualizar, eliminar). | Ideal para listas de objetos como productos, usuarios, etc. |
| **`combineReducers()`**                    | Combina reducers como en Redux clásico.                                                      | Solo si tenés una estructura más personalizada.             |
| **`createListenerMiddleware()`**           | Permite escuchar acciones y ejecutar efectos secundarios (side effects).                     | Alternativa moderna a `redux-saga`.                         |
| **`serializableStateInvariantMiddleware`** | Middleware para advertencias si el estado tiene datos no serializables.                      | Se incluye por defecto. Útil en debugging.                  |
| **`getDefaultMiddleware()`**               | Devuelve los middleware predeterminados para agregar o personalizar los tuyos.               | Si querés agregar middleware propio.                        |
