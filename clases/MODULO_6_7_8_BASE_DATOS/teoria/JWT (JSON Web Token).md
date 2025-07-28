**JWT (JSON Web Token)** es un **formato estándar para transmitir información segura entre dos partes** como un **token firmado**. Se usa principalmente para **autenticación** y **autorización** en aplicaciones web.

Es un string que representa los **datos del usuario autenticado**, firmado digitalmente (normalmente con una clave secreta).

## JWT se usa para

- **Login y autenticación**: el servidor genera un token tras validar el usuario y lo devuelve al cliente.
    
- **Autorización**: el cliente usa ese token en futuras peticiones para acceder a recursos protegidos.
    

| Concepto               | ¿Por qué importa?                                   |
| ---------------------- | --------------------------------------------------- |
| `jsonwebtoken`         | Librería para generar y verificar tokens en Node.js |
| `Authorization` header | Cabecera donde se envía el token desde el cliente   |
| `verify()` y `sign()`  | Métodos clave para trabajar con JWT                 |
| `expiresIn`            | Tiempo de expiración para tokens seguros            |

---

##  Instalar JWT (`jsonwebtoken`)

```bash
npm install jsonwebtoken
```

## Generar un token

```js
import jwt from 'jsonwebtoken';

const user = { id: 123, email: 'usuario@mail.com' };
const token = jwt.sign(user, 'clave_secreta', { expiresIn: '1h' });

console.log(token);
```

## Verificar un token

```js
try {
    const datos = jwt.verify(token, 'clave_secreta');
    console.log('Usuario autenticado:', datos);
} catch (error) {
    console.log('Token inválido o expirado');
}
```

---

## usar desde el cliente

El cliente debe **enviar el token en la cabecera Authorization** al hacer peticiones:

```js
fetch('https://api.tuapp.com/datos-protegidos', {
  headers: {
    'Authorization': 'Bearer token_obtenido_del_login'
  }
});
```

El servidor debe extraerlo y verificarlo:

```js
const token = req.headers.authorization?.split(' ')[1];
const datos = jwt.verify(token, 'clave_secreta');
```
