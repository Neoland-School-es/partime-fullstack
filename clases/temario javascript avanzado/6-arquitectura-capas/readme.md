# Arquitecturas de Software

Forma en que organizamos y estructuramos el código de una aplicación. Define cómo se comunican las diferentes partes del sistema y cómo se separan las responsabilidades.

## Arquitectura en capas

Consiste en dividir la aplicación en capas con responsabilidades específicas. Esto hace que el código sea más modular, fácil de probar y mantener.

## Capa de presentación (UI)

Es la parte visible de la aplicación. Se encarga de mostrar datos al usuario y recoger su interacción (formularios, botones, eventos, etc.).

## Capa de lógica o servicios

Contiene la lógica de negocio. Aquí se procesan los datos, se aplican reglas y se gestionan operaciones antes de mostrarlas o guardarlas.

## Capa de datos o persistencia

Se encarga de obtener y almacenar la información. Puede ser un servidor, una base de datos o el `localStorage`. Se encarga de guardar, leer y actualizar datos.

## Separación de responsabilidades

Cada capa debe tener una única responsabilidad. Esto facilita el mantenimiento, la reutilización del código y permite hacer cambios en una capa sin afectar a las demás.

## Comunicación entre capas

Las capas se comunican entre sí de forma ordenada. Por ejemplo, la UI llama a la lógica, y esta a los datos. No deberían 'saltarse' capas para evitar acoplamientos innecesarios.

## Ventajas de usar capas

Facilita la escalabilidad, la reutilización del código, las pruebas y el trabajo en equipo. También hace que el código sea más comprensible y mantenible a largo plazo.

# Modelo–Vista–Controlador (MVC)

El MVC es un patrón de arquitectura ampliamente utilizado en el desarrollo de software, especialmente en aplicaciones web. Su principal ventaja es la separación de preocupaciones, lo que facilita el mantenimiento y escalabilidad del sistema.

## Estructura de Archivos

- Modelo: Gestiona los datos. Se encarga de obtener, guardar y actualizar la información.
- Vista: Es la interfaz que ve el usuario. Usamos HTML, CSS y algo de JS para mostrar los datos.
- Controlador: Recibe los eventos del usuario (como clics o formularios) y actualiza el modelo o la vista según sea necesario.

## Estructura de Carpetas

mvc-app/
├── index.html             ← View (estructura HTML principal)
│   ├── pages/
│   │   ├── login.html     ← View
│   │   └── dashboard.html ← View
├── css/
│   └── style.css          ← View (estilos globales)
├── js/
│   ├── models/
│   │   └── model.js       ← Define lógica de datos y estructuras
│   ├── controller/
│   │   └── controller.js  ← Coordina eventos entre modelo y vista
│   ├── utils/
│   │   └── formatter.js   ← Funciones de formato y conversión
│   ├── services/
│   │   └── storage.js     ← Manejo de almacenamiento local
│   └── app.js             ← Punto de entrada principal

# ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== #

# Modelo–Vista–Presentador (MVP)

El MVP es muy parecido al MVC pero aquí el Presentador reemplaza al Controlador, con un enfoque más claro en la separación de lógica y presentación.
Su tarea principal es encargarse de la lógica de presentación, decidir qué mostrar en la vista y cuándo.
Su principal ventaja es que la vista no contiene lógica alguna, lo que facilita pruebas unitarias y mejora la escalabilidad.

## Estructura de Archivos

- Modelo: Igual que en MVC, gestiona los datos
- Vista: Solo muestra lo que el Presentador le dice, no toma decisiones
- Presentador: Recibe los eventos de la Vista, consulta el Modelo y luego le dice a la Vista qué mostrar

## Estructura de Carpetas

mvp-app/
├── index.html             ← View (sin lógica)
│   ├── pages/
│   │   ├── login.html
│   │   └── dashboard.html
├── css/
│   └── style.css          ← Estilos globales
├── js/
│   ├── models/
│   │   ├── database.js    ← Manejo de almacenamiento de datos
│   │   └── model.js       ← Lógica de datos y estructura de información
│   ├── presenter/
│   │   ├── presenter.js   ← Lógica de presentación y conexión modelo-vista
│   │   └── state.js       ← Control del estado de la aplicación
│   ├── utils/
│   │   └── validator.js   ← Validaciones de datos
│   ├── services/
│   │   └── storage.js     ← Manejo de almacenamiento local
│   └── app.js             ← Punto de entrada

# ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== #

# Modelo–Vista–ViewModel (MVVM)

Este patrón separa la interfaz del usuario de los datos, igual que MVC y MVP, pero con una diferencia clave de contar con un enlace de datos bidireccional que sincroniza automáticamente los cambios entre la Vista y el Modelo. Esto reduce la necesidad de actualizar manualmente la interfaz y mejora la mantenibilidad del código.

## Estructura de Archivos

- Modelo: Datos
- Vista: HTML/CSS
- ViewModel: Conecta modelo y vista, y los sincroniza

## Estructura de Carpetas

mvvm-app/
├── index.html             ← View (estructura HTML)
│   ├── pages/
│   │   ├── login.html
│   │   └── dashboard.html
├── css/
│   ├── style.css         ← Estilos globales
├── js/
│   ├── models/
│   │   └── model.js      ← Define la lógica de datos
│   ├── viewmodel/
│   │   └── viewmodel.js  ← Sincronización entre modelo y vista
│   ├── utils/
│   │   └── formatter.js  ← Conversión y transformación de datos
│   ├── services/
│   │   └── api.js        ← Integración con servicios externos
│   └── app.js            ← Punto de entrada

# ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== #

# Arquitectura Hexagonal (Ports and Adapters)

Esta arquitectura permite diseñar aplicaciones desacopladas, busca mantener la lógica de negocio completamente separada de detalles externos como el navegador, la red, base de datos, UI, almacenamiento o API externas. Usa puertos y adaptadores para conectar el núcleo de la aplicación con el mundo exterior.

## Estructura de Archivos

- Núcleo: lógica de negocio (sin saber nada de HTML, red, etc.)
- Adaptadores: conectan el núcleo con interfaces como el DOM, fetch, formularios, etc.
- Puertos: puntos de entrada/salida hacia el núcleo

## Estructura de Carpetas

hexagonal-app/
├── index.html            ← UI principal (si se usa en frontend)
├── css/
│   └── style.css         ← Estilos globales
├── js/
│   ├── core/
│   │   ├── business.js   ← Lógica de negocio pura, sin dependencias externas
│   │   └── domain.js     ← Modelos de datos y reglas de negocio
│   ├── ports/
│   │   ├── inputPort.js  ← Interfaces de entrada (formularios, eventos)
│   │   ├── outputPort.js ← Interfaces de salida (API, almacenamiento)
│   │   └── repositoryPort.js ← Interfaces para la persistencia de datos
│   ├── adapters/
│   │   ├── domAdapter.js  ← Conexión con la UI y eventos HTML
│   │   ├── apiAdapter.js  ← Interacción con APIs externas
│   │   ├── storageAdapter.js ← Manejo de almacenamiento local
│   │   └── loggerAdapter.js ← Implementación de logs externos
│   ├── utils/
│   │   ├── formatter.js   ← Conversión de formatos
│   ├── services/
│   │   └── apiService.js  ← Servicio de conexión con APIs
│   └── app.js              ← Punto de entrada principal

# ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== #

# Arquitectura de Microservicios

Permite que una aplicación se divida en módulos pequeños e independientes, cada uno con una responsabilidad específica. En lugar de tener una sola aplicación grande, esta arquitectura divide la app en pequeños servicios independientes. Cada uno hace una tarea específica y puede trabajar por separado de manera autónoma.
En el contexto de una app web simple con JS vanilla, no se usa directamente, pero en backends reales cada servicio se conecta por APIs.

## Estructura de Carpetas

microservices-app/
├── users/
│   ├── index.html         ← UI específica del servicio de usuarios
│   ├── css/
│   │   ├── style.css      ← Estilos específicos de usuarios
│   ├── js/
│   │   ├── app.js         ← Lógica principal
│   │   └── routes.js      ← Definición de rutas de API para usuarios
│   └── api/
│       ├── controller.js  ← Lógica de control de peticiones
│       ├── model.js       ← Estructuras de datos de usuarios
│       └── database.js    ← Almacenamiento
├── products/
│   ├── index.html         ← UI específica del servicio de tareas
│   ├── css/
│   │   └── style.css      ← Estilos específicos de tareas
│   ├── js/
│   │   ├── products.js    ← Lógica de manejo de productos
│   │   ├── database.js    ← Almacenamiento
│   │   └── app.js         ← Punto de entrada
├── services/
│   ├── authService.js     ← Servicio de autenticación global
│   ├── emailService.js    ← Envío de correos para notificaciones
│   ├── paymentService.js  ← Procesamiento de pagos (si aplica)
│   └── monitoring.js      ← Sistema de métricas y monitoreo

# ===== ===== ===== ===== ===== ===== ===== ===== ===== ===== #

# Arquitectura Monolítica

Es un modelo tradicional en el desarrollo de software donde toda la aplicación reside en un único código base. Toda la aplicación está junta en un solo proyecto. La lógica, la vista y los datos están en los mismos archivos o muy conectados.

monolithic-app/
├── index.html             ← Estructura principal de la interfaz
├── pages/
│   └── page.html
├── css/
│   └── style.css         ← Estilos globales de la aplicación
├── js/
│   └── app.js       ← Punto de entrada centralizado
└── assets/
    ├── images/          ← Almacenamiento de imágenes
    ├── icons/           ← Íconos y elementos gráficos
    └── fonts/           ← Tipografías personalizadas
