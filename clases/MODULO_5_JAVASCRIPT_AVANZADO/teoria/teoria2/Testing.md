El **testing** es el proceso de verificar que tu código funciona correctamente. Es como revisar un examen antes de entregarlo: te aseguras de que todo esté bien antes de que otros lo usen.

### ¿Por qué es importante?

- 🛡️ **Previene errores** antes de que lleguen a producción
- 🔄 **Facilita refactoring** sin miedo a romper funcionalidad
- 📚 **Documenta el comportamiento** esperado del código
- 💪 **Aumenta la confianza** al hacer cambios
- 🚀 **Mejora la calidad** del software

---

## 🧪 Tipos de Testing

| Tipo                | Descripción                                                      | Herramientas comunes      |
| ------------------- | ---------------------------------------------------------------- | ------------------------- |
| Test Unitario       | Prueba funciones o unidades pequeñas de código de forma aislada. | Jest, Vitest, Mocha, Chai |
| Test de integración | Prueba cómo se comunican distintos módulos entre sí.             | Jest, Testing Library     |
| Test E2E            | Simula la experiencia real del usuario.                          | Cypress, Playwright       |

---

## 📊 Tipos de Testing

### 🔬 Testing Unitario

Un test unitario es una prueba automática que se enfoca en verificar que **una función (unidad de código)** se comporte como esperamos en diferentes escenarios.
Por ejemplo: si una función suma dos números, queremos verificar que la suma esté bien para distintos casos (positivos, negativos, cero…).

### 🧩 Testing de Integración

Prueba cómo **múltiples componentes trabajan juntos**.  
Este tipo de test verifica que las **funciones, módulos o servicios se comuniquen correctamente** entre sí. 
Por ejemplo: verificar que al enviar un formulario se actualice el estado y se muestre un mensaje con los datos recibidos.

### 🌍 Testing End-to-End (E2E)

Prueba **toda la aplicación** desde la perspectiva del usuario.  
Simula una interacción real en un navegador (clicks, escritura, navegación...) para verificar que los **flujos críticos del sistema funcionan de principio a fin**.  
Es útil para detectar problemas de integración entre el frontend, backend, rutas, y base de datos.
Por ejemplo: un test que abre la app, inicia sesión con un usuario y verifica que se muestre el panel de usuario.

---

## 🚀 Configuración inicial con Jest

### 1. Instalación

```bash
npm install --save-dev jest
npm install --save-dev jest-environment-jsdom

npm install --save-dev ts-jest
npm install --save-dev @types/jest
npx ts-jest config:init


npm run test
npm run test:watch
```

Esto instalará:
- `jest`: el motor de testing
- `jest-environment-jsdom`: simula un entorno de navegador en Node (necesario para proyectos web)
- `ts-jest`: para compilar `.ts` en tiempo real
- `@types/jest`: definiciones de tipos para TypeScript (intellisense y validación)

### 2. Configurar scripts en `package.json`

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "node --experimental-vm-modules node_modules/jest/bin/jest.js --watchAll"
  }
}
```

### 3. `jest.config.js`

En la raíz del proyecto se crea un archivo: jest.config.js

```js
// @ts-check
/** @type {import('jest').Config} */

const config = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'jsdom',
}
export default config
```

### 4. `tsconfig.json`

En la raíz del proyecto se crea un archivo: jest.config.js

```json
{
	"compilerOptions": {
		"esModuleInterop": true,
		"verbatimModuleSyntax": false,
	},
	"include": [ "src", "__test__" ]
}

```
### 5. Estructura de archivos

```
/mi-proyecto
├── package.json
├── jest.config.js
├── /src
│   └── /models
│   └── /controllers
│   └── utils.js
└── /__tests__
    └── calculadora.test.js
```

---

## 📋 Tabla de funciones principales de Jest

| Función / Método  | ¿Qué hace?                                                                                              | Ejemplo básico                                     |
| ----------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| `describe()`      | Agrupa varios tests relacionados. Útil para organizar por función o módulo.                             | `describe('Función crearProducto', () => { ... })` |
| `test()` o `it()` | Define un test individual con su descripción.                                                           | `test('debe sumar 2 números', () => { ... })`      |
| `expect(valor)`   | Define una expectativa sobre el valor recibido. Afirma que el valor es igual o cumple cierta condición. | `expect(2 + 2).toBe(4)`                            |

## 🧪 Métodos de aserción de `expect()`

| Método             | ¿Qué verifica?                                                 | Ejemplo                                     |
| ------------------ | -------------------------------------------------------------- | ------------------------------------------- |
| `.toBe(valor)`     | Que sea exactamente igual (===).                               | `expect(3).toBe(3)`                         |
| `.toEqual(obj)`    | Que dos objetos o arrays sean iguales en contenido.            | `expect([1, 2]).toEqual([1, 2])`            |
| `.toBeUndefined()` | Que el valor sea `undefined`.                                  | `expect(variable).toBeUndefined()`          |
| `.toBeNull()`      | Que el valor sea `null`.                                       | `expect(valor).toBeNull()`                  |
| `.toBeTruthy()`    | Que el valor sea evaluado como verdadero (`!!valor === true`). | `expect(true).toBeTruthy()`                 |
| `.toBeFalsy()`     | Que el valor sea evaluado como falso (`!!valor === false`).    | `expect("").toBeFalsy()`                    |
| `.toContain(elem)` | Que un array contenga un elemento.                             | `expect([1,2,3]).toContain(2)`              |
| `.toHaveLength(n)` | Que un array (o string) tenga cierta longitud.                 | `expect(['a','b']).toHaveLength(2)`         |
| `.toThrow()`       | Que una función lance un error.                                | `expect(() => { throw Error() }).toThrow()` |
| `.not.`            | Niega cualquier aserción.                                      | `expect(5).not.toBe(4)`                     |

## 🛠️ Funciones extra útiles

| Función        | ¿Para qué sirve?                                                    | Ejemplo                            |
| -------------- | ------------------------------------------------------------------- | ---------------------------------- |
| `beforeEach()` | Código que se ejecuta **antes de cada test** dentro del `describe`. | Preparar datos antes de cada test. |
| `afterEach()`  | Código que se ejecuta **después de cada test**.                     | Limpiar mocks, arrays, etc.        |

## 🧠 Tips

- Usen **`describe()`** para agrupar tests por función o componente.
- Los tests **no deben depender de otros tests**: cada `test()` debe funcionar por sí solo
- Piensen en **"qué se espera que pase"** y eso se convierte en un `expect(...)
- Usen `.not.toBe(...)` cuando quieran verificar que algo **NO** sucedió.
- No hace falta memorizar todos los métodos, pero sí entender bien los comunes: `.toBe()`, `.toEqual()`, `.toBeUndefined()`, `.toContain()`.
