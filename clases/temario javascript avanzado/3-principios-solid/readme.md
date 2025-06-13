# Principios de Programación SOLID

En programación de software , SOLID es un acrónimo nemotécnico que designa cinco principios de diseño cuyo objetivo es que los diseños orientados a objetos sean comprensibles, flexibles, fáciles de mantener y escalar.

1. Principio de Responsabilidad Única (Single Responsibility): Cada función, clase o módulo debe tener una única responsabilidad o razón para cambiar. Esto hace que el código sea más fácil de probar, depurar y mantener.

2. Principio Abierto/Cerrado (Open/Closed): Las entidades deben estar abiertas para su extensión, pero cerradas para su modificación. Debemos poder agregar funcionalidades nuevas sin cambiar el código existente.

3. Principio de Sustitución de Liskov: Los objetos de las clases derivadas, deben ser sustituibles por objetos de la clase base sin alterar el funcionamiento del programa. Si una subclase no cumple las promesas de su clase padre, puede romper la lógica del programa.

4. Principio de Segregación de Interfaces: Los clientes no deben verse obligados a depender de interfaces que no utilizan. Es preferible tener muchas interfaces pequeñas y específicas a una sola grande. En JavaScript, esto se aplica creando funciones o módulos especializados, de modo que cada objeto solo use lo que necesita.

5. Principio de Inversión de Dependencias: Los módulos de alto nivel no deben depender de módulos de bajo nivel; ambos deben depender de abstracciones. Esto se logra pasando funciones como parámetros, o usando inyección de dependencias.
