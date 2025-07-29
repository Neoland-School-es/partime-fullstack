`express-session` es un middleware de Express que permite **guardar información de la sesión del usuario en el servidor** entre peticiones HTTP.  
Sirve para mantener a un usuario "logueado" o guardar datos temporales como un carrito de compras o el nombre de usuario.

## Instalación

```bash
npm install express-session
```

## Uso básico

```js
import session from "express-session";

app.use(session({
  secret: "mi_clave_secreta",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 2 // 2 minutos
  }
}));
```

### Explicación de las opciones:

|Propiedad|Descripción|
|---|---|
|`secret`|Clave secreta para firmar la cookie de sesión. **Nunca la publiques.**|
|`resave`|Fuerza el guardado de la sesión en cada petición. Déjalo en `false`.|
|`saveUninitialized`|Guarda sesiones nuevas aunque no se haya modificado nada. Déjalo en `false`.|
|`cookie.maxAge`|Tiempo de vida de la cookie en milisegundos.|

---

## Crear una sesión de usuario tras login

```js
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Simulación (reemplazar con lógica real y uso de bcrypt)
  if (email === "admin@email.com" && password === "1234") {
    req.session.usuario = { email: email };
    res.send("Sesión iniciada");
  } else {
    res.status(401).send("Credenciales incorrectas");
  }
});
```

---

## Proteger rutas (middleware `soloUsuarios`)

```js
function soloUsuarios(req, res, next) {
  if (req.session.usuario) {
    next();
  } else {
    res.status(401).send("Debes iniciar sesión para acceder");
  }
}

// Rutas protegidas
app.post("/productos", soloUsuarios, (req, res) => {
  res.send("Producto creado");
});
```

---

## Cerrar sesión

```js
app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Error al cerrar sesión");
    }
    res.clearCookie("connect.sid"); // Nombre por defecto de la cookie
    res.send("Sesión cerrada correctamente");
  });
});
```
