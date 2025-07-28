## API (Application Programming Interface)

Es un conjunto de reglas que permite que dos aplicaciones se comuniquen entre sí. Es como un **puente o contrato** que define **cómo una aplicación puede interactuar con otra**.

---

## REST (Representational State Transfer)

Es un estilo de arquitectura para diseñar APIs en la web. Fue propuesto por **Roy Fielding** en el año 2000. REST define cómo deben estructurarse las URL, qué métodos HTTP se usan y cómo se representan los datos.

###  Principios de una API REST:

1. **Cliente - Servidor**: separación entre frontend y backend.
    
2. **Sin estado (stateless)**: cada solicitud HTTP debe contener toda la información necesaria.
    
3. **Caché**: las respuestas pueden almacenarse para mejorar el rendimiento.
    
4. **Interfaz uniforme**: URLs limpias y consistentes (`/productos`, `/usuarios`, etc.).
    
5. **Sistema en capas**: se pueden tener capas intermedias (balanceadores, seguridad, etc.).
    
6. **Representación de recursos**: los recursos se representan con JSON, XML, etc.
    

---

## API REST

Una **API REST** es una **API que sigue los principios REST**. Utiliza el protocolo HTTP para intercambiar datos entre cliente y servidor.

### Características de una API REST:

| Elemento             | Descripción                                                            |
| -------------------- | ---------------------------------------------------------------------- |
| **Protocolo**        | Utiliza HTTP                                                           |
| **Métodos HTTP**     | `GET`, `POST`, `PUT`, `DELETE`, `PATCH`                                |
| **Formato de datos** | JSON (usualmente), a veces XML                                         |
| **URLs claras**      | `/usuarios`, `/productos/1`, etc.                                      |
| **Recursos**         | Cada entidad (producto, usuario) es un "recurso" accesible por una URL |

---

## RESTful

El término **RESTful** se usa para describir una **API que implementa REST correctamente**. Es decir:

- Tiene **URLs bien estructuradas** y orientadas a recursos.
    
- Usa los **métodos HTTP apropiadamente**:
    
    - `GET /productos` → obtener productos
        
    - `POST /productos` → crear un producto
        
    - `PUT /productos/1` → actualizar producto con ID 1
        
    - `DELETE /productos/1` → eliminar producto con ID 1
        
- Las respuestas usan códigos de estado HTTP (`200 OK`, `404 Not Found`, `500 Internal Server Error`).
    
- Los datos vienen normalmente en **JSON**.
    

---

|Término|¿Qué es?|Ejemplo|
|---|---|---|
|**API**|Interfaz que conecta aplicaciones|Una app de noticias consume una API de titulares|
|**REST**|Estilo arquitectónico|Un conjunto de reglas para diseñar APIs web|
|**API REST**|API que implementa parcialmente REST|Una API que usa `GET` y `POST` con URLs limpias|
|**RESTful**|API que sigue completamente los principios REST|Usa `GET`, `POST`, `PUT`, `DELETE`, es stateless, etc.|

---

## Conocimientos que involucra

| Área / Tema              | Qué debes saber                                          |
| ------------------------ | -------------------------------------------------------- |
| **HTTP**                 | Métodos, códigos de estado, cabeceras                    |
| **JSON**                 | Formato de datos más común para intercambio de datos     |
| **Fetch / Axios**        | Enviar solicitudes desde el cliente                      |
| **Back-end (Node, etc)** | Crear rutas, recibir y responder solicitudes             |
| **CORS**                 | Control de acceso entre dominios                         |
| **Autenticación**        | Tokens (ej: JWT), sesiones, headers como `Authorization` |
| **Documentación**        | Saber describir los endpoints (Postman, etc.)            |
