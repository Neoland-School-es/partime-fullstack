`bcrypt` es una **librería de Node.js** que se utiliza para **encriptar (hashear) contraseñas**, de forma que **no se guarden en texto plano** en la base de datos.

Hashear significa convertir una contraseña en una cadena irreconocible, que **no se puede revertir fácilmente**, pero sí comparar.

## se usa para

- **Almacenar contraseñas de forma segura**.
    
- **Verificar contraseñas** comparando el hash con lo que escribe el usuario.
    

| Función      | Uso                                                      |
| ------------ | -------------------------------------------------------- |
| `hash()`     | Genera el hash a partir de una contraseña                |
| `compare()`  | Verifica si una contraseña coincide con un hash          |
| `saltRounds` | Nivel de complejidad del hash (por defecto 10 está bien) |

---

## Instalar bcrypt

```bash
npm install bcrypt
```

---

## Hashear una contraseña

```js
import bcrypt from 'bcrypt';

const contraseñaOriginal = '1234segura';
const saltRounds = 10;

bcrypt.hash(contraseñaOriginal, saltRounds, function(err, hash) {
    if (err) {
        console.error('Error al hashear:', err);
        return;
    }
    console.log('Hash generado:', hash);
});
```

> `saltRounds` define cuántas veces se "mezcla" la contraseña. Más alto = más seguro, pero más lento.

---

## Comparar una contraseña con su hash

```js
const hashGuardado = '$2b$10$abc123...'; // Hash obtenido al registrarse
const intento = '1234segura';

bcrypt.compare(intento, hashGuardado, function(err, resultado) {
    if (resultado) {
        console.log('Contraseña correcta');
    } else {
        console.log('Contraseña incorrecta');
    }
});
```
