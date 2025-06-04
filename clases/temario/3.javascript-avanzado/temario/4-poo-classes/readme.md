# Programación Orientada a Objetos en JavaScript

La Programación Orientada a Objetos (POO) es un paradigma de programación que organiza el código en torno a objetos, que contienen datos (propiedades) y comportamientos (métodos).

## Clases y Objetos

Una clase es un molde o plantilla para crear objetos. Un objeto es una instancia de una clase. Cada objeto puede tener propiedades y métodos propios basados en la clase.

## Herencia

Permite que una clase (hija) herede propiedades y métodos de otra clase (padre), lo que facilita la reutilización del código.

## Encapsulamiento

Consiste en ocultar los detalles internos de un objeto y exponer solo lo necesario. Se logra mediante propiedades privadas y públicas.

## Polimorfismo

Permite que distintos objetos respondan al mismo mensaje o método de diferentes formas. Por ejemplo, distintas clases pueden tener un método `render()` que funciona de forma distinta según el objeto.

## Abstracción

Consiste en simplificar la representación de un objeto mostrando solo lo esencial y ocultando lo complejo. Ayuda a reducir la complejidad del código.

# ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== #

# CLASES

- Introducidas en ES6 (ECMAScript 2015) son una forma moderna y estructurada de trabajar con objetos.
Una clase es una plantilla para crear objetos. Permite definir propiedades y métodos que los objetos creados con esa clase compartirán. proporcionan una sintaxis más clara para crear objetos y manejar la herencia.

# Sintaxis básica de una clase

Usa la palabra clave `class` seguida del nombre (en PascalCase), e incluye un método `constructor()` para inicializar las propiedades. Dentro de la clase se pueden definir métodos públicos directamente.

# Instanciación de clases

Para crear un objeto a partir de una clase usamos la palabra clave `new`. Esto ejecuta el constructor y retorna una nueva instancia con sus propiedades y métodos.

# Herencia en clases

Usamos la palabra clave `extends` para que una clase herede de otra. Dentro del constructor de la clase hija, `super()` se usa para llamar al constructor del padre.

# Encapsulamiento, propiedades y métodos públicos y privados

El encapsulamiento oculta detalles internos de la clase. En ES2020 se introdujo el prefijo `#` para definir propiedades o métodos privados.

# Métodos y propiedades estáticos

Un método estático pertenece a la clase, no a las instancias. Se define con `static` y se usa comúnmente para utilidades o cálculos generales.

# Getters y Setters

Los `get` y `set` permiten definir métodos que actúan como propiedades. Son útiles para validaciones o cálculos al acceder o modificar valores.

# Composición

La composición consiste en construir una clase usando instancias de otras clases como partes. Es una alternativa a la herencia. Se usa el prefijo `_` para definir propiedades controladas por un getter y setter.

# ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== #

# Prototipos

Herencia mediante prototipos, donde cada objeto puede heredar propiedades y métodos de otro objeto.

# Herencia

Permite crear nuevas clases basadas en clases existentes, facilitando la reutilización de código.

# Mixins

Técnica que permite compartir funcionalidades entre múltiples clases sin utilizar herencia múltiple.

# Métodos call, apply, bind y assign

Herramientas para controlar el contexto de ejecución de funciones y copiar propiedades entre objetos.
