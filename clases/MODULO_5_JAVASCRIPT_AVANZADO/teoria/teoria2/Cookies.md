# Persistencia de datos en el navegador: Cookies

Las **cookies** son pequeños archivos de texto que un sitio web almacena en el navegador del usuario. Su propósito principal es **recordar información entre una visita y otra** (o incluso durante la misma sesión).

Las cookies son gestionadas automáticamente por el navegador y pueden ser **leídas tanto por el servidor como por el cliente (JavaScript)**, dependiendo de cómo estén configuradas.

---

## 🧠 ¿Para qué se usan las cookies?

- **Autenticación persistente**: guardar un token de sesión para que el usuario no tenga que iniciar sesión cada vez.
- **Preferencias del usuario**: recordar si el usuario prefiere el tema oscuro o un idioma determinado.
- **Analítica o seguimiento de actividad**: detectar qué secciones del sitio visitó un usuario.
- **Comunicación automática con el servidor**: Las cookies se envían en **cada petición HTTP** automáticamente, sin necesidad de programarlas.

---

## 📄 Características principales

| Característica             | Descripción                                                                              |
| -------------------------- | ---------------------------------------------------------------------------------------- |
| 📦 **Tamaño máximo**       | Aproximadamente **4 KB** por cookie.                                                     |
| 🌐 **Dominio y ruta**      | Cada cookie solo está disponible en el **dominio** y **path** definidos al crearla.      |
| 🔁 **Envío automático**    | Se incluye en **todas las peticiones HTTP** al mismo dominio (GET, POST, etc.).          |
| ⏱️ **Expiración opcional** | Se puede definir una fecha de expiración (`Expires` o `Max-Age`).                        |
| 🔒 **HttpOnly**            | Si se establece, la cookie **no es accesible desde JavaScript**, solo desde el servidor. |
| 🛡️ **Secure**             | Solo se envía si la conexión es HTTPS.                                                   |

---

## 💻 Crear cookies

```js
// ⚠️ Importante: `document.cookie` no es un objeto, es un string que contiene todas las cookies visibles para el cliente.
document.cookie = "sesion=abc123; Path=/; Expires=Tue, 01 Jan 2026 00:00:00 GMT"; 

/*
Esto indica:
- La cookie se llama `sesion` y su valor es `abc123`.  
- Será válida para todo el sitio (`Path=/`).
- Expirará el 1 de enero de 2026.
*/

document.cookie = "usuario=Juan; path=/; expires=Fri, 31 Dec 2026 23:59:59 GMT";
```

## 🔍 Leer cookies

```js
console.log(document.cookie); 
// Resultado: "usuario=Juan; sesion=abc123"

// Para obtener el valor de una cookie específica:
function getCookie(nombre) {
  const cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
    const [key, value] = cookie.split('=');
    if (key === nombre) return value;
  }
  return null;
}

console.log(getCookie("usuario")); 
// Resultado: "Juan"
```

## 🗑️ Eliminar una cookie

```js
// Para eliminar una cookie, hay que asignarle una fecha de expiración en el pasado:
document.cookie = "usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
// Esto le dice al navegador que la cookie ya caducó y debe eliminarla.
```

---

## 🔐 Cookies seguras y buenas prácticas

- 🧱 **Usá `Secure`**: solo se enviará por conexiones HTTPS.
    
    ```js
    document.cookie = "token=abc123; Secure; path=/";
    ```
    
- 🔒 **Usá `HttpOnly` desde el servidor** si no querés que JavaScript pueda acceder a esa cookie.
    
- ✅ **Usá `SameSite=Strict`** para evitar el envío de cookies en solicitudes de terceros (mitigación de CSRF).
    
- 🚫 **No almacenes información sensible** (contraseñas, datos personales) en cookies accesibles por JavaScript.
    

---

## ❗ Consideraciones y limitaciones

- **Tamaño limitado**: no almacenar objetos o grandes cantidades de información.
    
- **Visibilidad**: las cookies son fácilmente visibles desde las herramientas del navegador.
    
- **Manipulación**: un usuario avanzado puede modificarlas o eliminarlas manualmente.
    
- **Seguridad**: si no se configuran bien (`Secure`, `HttpOnly`, `SameSite`), pueden exponer datos o ser vulnerables a ataques como XSS o CSRF.
    

---

## 📚 Conclusión

Las **cookies** son una herramienta esencial para la web moderna, especialmente en temas de **autenticación y comunicación con el backend**. Si bien no son la mejor opción para almacenar grandes cantidades de información, su capacidad para integrarse con el servidor y mantenerse entre visitas las vuelve muy útiles.
