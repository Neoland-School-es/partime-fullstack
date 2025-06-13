##  ¿Qué es Redux ?

Redux es una herramienta moderna para gestionar el estado global de una aplicación web. Está diseñada para facilitar el trabajo con Redux, una librería popular que permite centralizar y controlar el estado de toda la aplicación.

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
