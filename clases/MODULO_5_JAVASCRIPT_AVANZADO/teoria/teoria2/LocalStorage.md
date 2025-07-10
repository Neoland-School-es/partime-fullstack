# Persistencia de datos en el navegador: localStorage

`localStorage` es una API del navegador que permite **almacenar datos clave–valor de forma persistente** en el dispositivo del usuario. A diferencia de las cookies, **los datos no se eliminan al cerrar el navegador** y no se envían automáticamente al servidor.

Es una herramienta útil para mantener el estado entre sesiones y mejorar la experiencia del usuario sin necesidad de bases de datos ni servidores.

---

## 🧠 ¿Para qué se usa localStorage?

- Guardar preferencias del usuario: idioma, tema, configuración personalizada.
- Mantener el estado de sesión del usuario (con cuidado).
- Almacenar formularios incompletos, borradores o datos temporales.
- Cachear resultados de API para evitar recargas innecesarias.
- Persistir datos de aplicaciones con Redux o similar.

---

## 📄 Características principales

| Propiedad           | Detalle                                                                               |
| ------------------- | ------------------------------------------------------------------------------------- |
| 📦 **Tamaño**       | Hasta **5–10 MB por dominio** (depende del navegador).                                |
| 📌 **Persistente**  | Los datos se conservan entre sesiones, incluso si se cierra el navegador.             |
| 🔤 **Formato**      | Solo almacena **strings**.                                                            |
| 🌐 **Alcance**      | Solo accesible desde el **mismo origen** (misma URL base).                            |
| ❌ **No sincroniza** | No se comparte entre pestañas automáticamente (aunque se puede detectar con eventos). |
| 🧠 **Sincrónico**   | La lectura y escritura se hace de forma **inmediata**, sin callbacks ni promesas.     |

---

## 💻 Crear un LocalStorage

```js
localStorage.setItem('usuario', 'nombre usuario');
````

## 🔍 Leer un LocalStorage

```js
const usuario = localStorage.getItem('usuario');
console.log(usuario); // "nombre usuario"
```

## 🗑️ Eliminar un LocalStorage

```js
localStorage.removeItem('usuario');
```

## 🧹 Limpiar todo el LocalStorage

```js
localStorage.clear(); // Elimina todas las claves de este dominio
```

---

## 🧩 Guardar objetos complejos

`localStorage` solo guarda texto plano. Para guardar objetos, es necesario usar `JSON.stringify()` y luego `JSON.parse()` al leerlos:

```js
const perfil = { nombre: "Carla", rol: "admin" };
// Guardar
localStorage.setItem("perfil", JSON.stringify(perfil));
// Leer
const perfilGuardado = JSON.parse(localStorage.getItem("perfil"));
```

---

## 🛠️ Buenas prácticas

```js
window.addEventListener("storage", (e) => {
	console.log("Se actualizó localStorage:", e.key);
});
```

-  Escuchar cambios entre pestañas con el evento `storage`:
    
-  Usar nombres de clave descriptivos (`'theme-preference'`, `'user-token'`).
    
-  Validar los datos al recuperar (`getItem()` puede devolver `null`).
    
-  Evitar guardar datos innecesarios o volátiles (como resultados de búsqueda temporales).
    

---

## 🔐 Consideraciones de seguridad

- **No almacenar información sensible** como contraseñas o tokens privados.
    
- Es **fácilmente modificable** desde las herramientas de desarrollo del navegador.
    
- **Accesible por cualquier script JS** cargado en la página (incluso de terceros si no hay protección CSP).
    

---

## ❗ Consideraciones y limitaciones

- No admite datos binarios ni estructuras complejas (usa IndexedDB para eso).
    
- No es compartido automáticamente entre pestañas, a menos que se use el evento `storage`.
    
- No se puede acceder desde el servidor (solo disponible en el cliente).
    
- No tiene control de expiración automático como las cookies.
    

---

## 📚 Conclusión

`localStorage` es una herramienta simple, poderosa y accesible para guardar información en el navegador. Es perfecta para **persistir datos entre sesiones sin necesidad de backend**.
