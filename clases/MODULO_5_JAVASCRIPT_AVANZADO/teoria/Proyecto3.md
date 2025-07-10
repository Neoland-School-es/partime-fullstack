## PROYECTO 3: E-COMMERCE SIMPLE

---

### 🎯 OBJETIVO GENERAL

- Aplicar arquitectura **Modelo - Vista - Controlador**.
    
- Implementar **Redux** para el carrito de compras.
    
- Gestionar datos mediante **localStorage, indexDB, cookies** y variables mock.
    
- Cumplir con los principios de una **PWA**.
    
- Realizar **tests automatizados** de modelos usando **Jest**.
    

---

## 🗂️ ESTRUCTURA DE ARCHIVOS

```plaintext
📁 proyecto3-ecommerce/
├── index.html
├── pages/
│   ├── form-login.html
│   ├── dashboard.html
│   ├── profile.html
│   └── carrito.html
│   └── crear-producto.html (opcional)
│   └── actualizar-producto.html (opcional)
│   └── eliminar-producto.html (opcional)
├── css/
│   └── styles.css
├── js/
│   ├── controllers/
│   │   ├── home.controller.js
│   │   ├── login.controller.js
│   │   ├── dashboard.controller.js
│   │   ├── profile.controller.js
│   │   └── carrito.controller.js
│	│   └── crear-producto.controller.ts (opcional)
│	│   └── actualizar-producto.controller.ts (opcional)
│	│   └── eliminar-producto.controller.ts (opcional)
│   ├── models/
│   │   ├── usuario.model.js
│   │   ├── productos.model.js
│   │   └── carrito.model.js
│   ├── redux/
│   │   ├── store.js
│   │   └── carrito.slice.js
│   ├── utils/
│   │   ├── validaciones.js
│   │   └── fnStorages.js
├── __test__/
│   ├── usuario.model.test.js
│   ├── productos.model.test.js
│   └── carrito.model.test.js
```

---

## 🌐 PÁGINAS Y SU FUNCIÓN

### `1. index.html (Inicio)`

- Muestra todos los productos disponibles (de `localStorage o indexDB`).
    
- Cualquier usuario puede agregar al carrito (no necesita iniciar sesión).
    
- Navegación publica: **Inicio | Carrito | Iniciar Sesión**
    
- Navegación privada: **panel de control | perfil**
    
- Pie de página con tu nombre o redes.
    

### `2. form-login.html (Iniciar sesión)`

- Formulario con: usuario, contraseña.
    
- Valida credenciales con datos de mock de usuarios.
    
- Si es válido, crea cookie de sesión.
    

### `3. dashboard.html (Panel de control)`

- Solo accesible si el usuario ha iniciado sesión.
    
- CRUD de productos propios (crear, editar, eliminar).
    
- Puede estar todo en una misma página o con subpáginas opcionales.
    

### `4. profile.html (Perfil)`

- Permite modificar nombre, apellido, usuario y contraseña.
    
- Actualiza cookie o localstorage del usuario.
    

### `5. carrito.html`

- Muestra los productos agregados (desde Redux/localStorage).
    
- Permite modificar cantidad o eliminar productos.
    
- Botón para **Finalizar compra** (mensaje + limpieza del store y caché).
    
- Muestra total de la compra.
    

---
## 🚀 POSIBLE EXTENSIÓN

- Crear páginas adicionales para **editar producto**, **crear producto** si prefieren separar cada función.
    
- En ese caso, incluir sus propios controladores (ej: `edit-product.controller.js`) y validaciones.
    

---

## 📦 PERSISTENCIA Y ALMACENAMIENTO

### Diferenciación clara para los alumnos:

| Tipo de dato              | Dónde se guarda                               | ¿Qué representa?                               | Tecnología                           |
| ------------------------- | --------------------------------------------- | ---------------------------------------------- | ------------------------------------ |
| **Usuario**               | `cookie`                                      | Dato persistente de sesión/autenticación       | `document.cookie`                    |
| **Mock de usuarios**      | variable global en model                      | Plantilla de prueba para validaciones          | Solo lectura en JS `document.cookie` |
| **Productos**             | `localStorage o IndexDB`                      | Productos disponibles (base de datos simulada) | `localStorage o IndexDB`             |
| **Productos del usuario** | `localStorage o IndexDB` filtrado por usuario | CRUD propio del usuario                        | `localStorage o indexDB`             |
| **Carrito**               | `Redux + localStorage`                        | Datos temporales, cacheados y sincronizados    | `redux`, `localStorage`              |

---

## 🧠 MVC (Modelo Vista Controlador)

- **Modelos**:
    
    - `usuario.model.js`: lógica para validación, login usando cookies o localstorage.
        
    - `productos.model.js`: lógica CRUD de productos usando localstorage o indexDB.
        
    - `carrito.model.js`: manejar productos dentro del carrito usando LocalStorage + Redux.
        
- **Controladores**:
    
    - Un archivo por vista, conecta con los modelos y actualiza la vista.
        
- **Vistas**:
    
    - Cada `.html` es una vista. El HTML carga su controlador correspondiente en el `<script>`.
        

---

## 📱 PWA

- `manifest.json`: define el nombre, íconos, colores.

---

## REDUX: solo para el carrito

- Permite centralizar el estado del carrito:
    
- Mostrar cantidad en la barra de navegación.
    
- Sincronizar con `localStorage` al finalizar la compra.
    

---

## TESTING

- Usar `Jest` para testear:
    
- `usuario.model.js`
    
- `productos.model.js`
    
- `carrito.model.js`
    
- Pruebas deben correr automáticamente en un Workflow de GitHub Actions.
    

---

