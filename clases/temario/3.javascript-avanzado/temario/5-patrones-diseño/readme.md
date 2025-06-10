# Patrones de Diseño en JavaScript

Son soluciones reutilizables a problemas comunes en el desarrollo de software. No son código específico, sino guías para estructurar el código de forma más eficiente y mantenible. Elegir el patrón adecuado depende del problema que se está resolviendo.

## Patrones Creacionales

Se enfocan en los mecanismos de creación de objetos. Ejemplos: (Factory, Builder, Singleton, Abstract Factory, Prototype).

## Patrones Estructurales

Se centran en la composición de clases y objetos. (Ejemplos: Adapter, Decorator, Composite, Bridge).

## Patrones Conductuales

Se ocupan de la comunicación entre objetos. (Ejemplos: Command, Memento, Observer).

## ===========================================================================================

## Patrón Singleton

Garantiza que una clase solo tenga una única instancia y proporciona un punto de acceso global a ella. Se usa para manejar recursos compartidos como configuraciones o conexiones.

## Patrón Factory

Permite crear objetos sin especificar la clase exacta del objeto que se va a crear. Centraliza la lógica de construcción, útil para crear múltiples objetos con una estructura similar.

## Patrón Observer

Define una relación de dependencia uno-a-muchos entre objetos. Cuando un objeto cambia su estado, todos sus dependientes son notificados. Ideal para interfaces reactivas o eventos.

## Patrón Strategy

Permite definir una familia de algoritmos, encapsularlos y hacerlos intercambiables. El algoritmo se selecciona en tiempo de ejecución según el contexto o necesidad.
