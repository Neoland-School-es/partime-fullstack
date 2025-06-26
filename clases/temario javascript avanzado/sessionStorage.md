# Persistencia de datos en el navegador: sessionStorage

`sessionStorage` es una API del navegador que permite almacenar datos clave–valor de forma **temporal**, únicamente durante la sesión actual del usuario. Esto significa que **los datos se eliminan automáticamente al cerrar la pestaña o el navegador**.

A diferencia de `localStorage`, esta memoria es **efímera**, pero ideal para manejar estados intermedios en aplicaciones web.

---

## 🧠 ¿Para qué sirve?

- Almacenar datos **temporales de formularios**, pasos intermedios, filtros o búsquedas.
- Guardar el **estado de navegación** dentro de una misma pestaña (por ejemplo, entre páginas de una SPA).
- **Evitar interferencias entre pestañas**, ya que cada una tiene su propio `sessionStorage`.
- Implementar flujos como **formularios multipaso** sin usar backend.

---

## 🧾 Características principales

| Propiedad             | Detalle |
|-----------------------|---------|
| ⏳ **Temporal**         | Los datos se borran al cerrar la pestaña o navegador. |
| 🔗 **Ámbito limitado**  | Solo accesible desde la misma pestaña/origen. |
| 📦 **Capacidad**        | Aproximadamente 5 MB por dominio. |
| 🔤 **Formato**          | Solo admite strings como valores. |
| 🔐 **Accesible por JS** | Sí. No se envía al servidor. |
| ⚡ **Sincrónico**       | Las operaciones se ejecutan inmediatamente (sin promesas). |

---

## 💻 Guardar un sessionStorage

```js
sessionStorage.setItem('modo', 'oscuro');
````

## 🔍 Leer un sessionStorage

```js
const modo = sessionStorage.getItem('modo');
```

## 🗑️ Eliminar un sessionStorage

```js
sessionStorage.removeItem('modo');
```

## 🧹 Limpiar toda la sessionStorage

```js
sessionStorage.clear();
```

---

## 🧩 Guardar objetos complejos

Como solo admite strings, se debe convertir con `JSON.stringify()`:

```js
const usuario = { nombre: 'Pablo', rol: 'editor' };
sessionStorage.setItem('usuario', JSON.stringify(usuario));

// Recuperar
const datos = JSON.parse(sessionStorage.getItem('usuario'));
```

---

## ❗ Consideraciones y limitaciones

- **No es compartido entre pestañas**, incluso del mismo sitio.
    
- No se envía al servidor (como sí ocurre con las cookies).
    
- Es **fácilmente visible y modificable** desde las herramientas de desarrollo.
    
- No requiere limpieza manual: el navegador lo elimina al cerrar la pestaña.
    

---

## 📚 Conclusión

`sessionStorage` es una excelente herramienta para almacenar **datos temporales** en aplicaciones web modernas. Es ideal para gestionar el estado dentro de una sola pestaña, sin preocuparse por limpieza o sincronización entre sesiones.