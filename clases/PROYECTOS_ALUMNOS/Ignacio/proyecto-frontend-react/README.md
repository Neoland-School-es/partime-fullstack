# 🚀 Proyecto Frontend - React + Vite

Una aplicación web moderna desarrollada con React y Vite que incluye gestión de productos, sistema de navegación, y conexión con API REST.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#️-tecnologías)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Configuración](#️-configuración)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Scripts Disponibles](#-scripts-disponibles)
- [API Endpoints](#-api-endpoints)
- [Contribuir](#-contribuir)

## ✨ Características

- **Gestión de Productos**: CRUD completo con subida de imágenes
- **Sistema de Ventas**: Interface para gestión de ventas
- **Navegación SPA**: Enrutado con React Router 7
- **Diseño Responsivo**: Interface adaptable a diferentes dispositivos
- **Diagnósticos API**: Herramientas para testing de conexiones
- **Hot Reload**: Desarrollo rápido con Vite

## 🛠️ Tecnologías

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.0
- **Routing**: React Router 7.8.0
- **HTTP Client**: Axios 1.11.0
- **Linting**: ESLint 9.32.0
- **Styling**: CSS puro con variables personalizadas

## 📋 Requisitos Previos

- Node.js (versión 18 o superior)
- npm o yarn
- Backend API corriendo en `http://localhost:3001`

## 🚀 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/nacho-carrasco/proyecto-frontend-react.git
   cd proyecto-frontend-react
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env
   ```

## ⚙️ Configuración

Crear un archivo `.env` en la raíz del proyecto:

```env
# URLs de la API
VITE_API_URL=http://localhost:3001/api/proyecto5/react/
VITE_API_URL2=http://localhost:3001/api/proyecto5/ventas/
```

## 💻 Uso

### Desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`

### Producción
```bash
npm run build
npm run preview
```

### Linting
```bash
npm run lint
```

## 📁 Estructura del Proyecto

```
src/
├── assets/              # Recursos estáticos
│   ├── images/         # Imágenes y logos
│   └── react.svg       # Assets de React
├── components/         # Componentes reutilizables
│   ├── common/         # Componentes comunes
│   │   ├── ApiDiagnostics.jsx
│   │   ├── CartBadge.jsx
│   │   ├── Icon.jsx
│   │   ├── MenuNavegacion.jsx
│   │   ├── Modal.jsx
│   │   └── ProductCard.jsx
│   ├── forms/          # Formularios
│   │   └── ProductForm.jsx
│   └── layouts/        # Layouts de página
│       ├── Footer.jsx
│       └── PlantillaPagina.jsx
├── context/           # Context API
│   ├── Cart.context.jsx
│   └── Productos.context.jsx
├── pages/             # Páginas de la aplicación
│   ├── carrito/
│   │   └── PaginaCarrito.jsx
│   ├── contacto/
│   │   └── PaginaContacto.jsx
│   ├── inicio/
│   │   └── PaginaInicio.jsx
│   ├── panel-control/
│   │   └── PanelControl.jsx
│   └── producto/
│       └── Producto.jsx
├── services/          # Servicios y API calls
│   └── productos.service.js
├── App.jsx           # Componente principal
├── index.css         # Estilos globales
└── main.jsx         # Punto de entrada
```

## 📜 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run preview` | Previsualiza la build de producción |
| `npm run lint` | Ejecuta ESLint para revisar el código |

## 🌐 API Endpoints

La aplicación se conecta con los siguientes endpoints:

### Productos
- `GET /api/proyecto5/react/` - Obtener todos los productos
- `GET /api/proyecto5/react/:id` - Obtener producto por ID
- `POST /api/proyecto5/react/` - Crear nuevo producto
- `PUT /api/proyecto5/react/:id` - Actualizar producto
- `DELETE /api/proyecto5/react/:id` - Eliminar producto

### Ventas
- `GET /api/proyecto5/ventas/` - Obtener todas las ventas
- `POST /api/proyecto5/ventas/` - Crear nueva venta

## 🎯 Funcionalidades Principales

### Gestión de Productos
- Lista de productos
- Formulario de creación/edición

### Carrito de Compras
- Agregar/eliminar productos
- Cálculo de totales
- Persistencia en contexto

### Panel de Control
- Dashboard administrativo
- Estadísticas de productos
- Gestión de inventario

### Diagnósticos
- Testing de conexión API
- Validación de endpoints
- Monitoreo de estado

## 🔧 Configuración de Desarrollo

### Extensiones Recomendadas (VS Code)
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- Auto Rename Tag

### Hot Module Replacement
El proyecto incluye HMR configurado con Vite para desarrollo rápido.

## 🤝 Contribuir

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📝 Notas de Desarrollo

- El proyecto utiliza ES6+ modules
- Configurado con SWC para Fast Refresh
- Linting configurado con reglas de React Hooks
- Variables de entorno prefijadas con `VITE_`

## 🐛 Solución de Problemas

### Error de CORS
Si experimentas problemas de CORS, asegúrate de que el backend tenga configurado:
```javascript
cors({
    origin: 'http://localhost:5173',
    credentials: true
})
```

### Variables de entorno
Las variables deben estar prefijadas con `VITE_` para ser accesibles en el cliente.

## 📞 Contacto

**Nacho Carrasco** - Frontend Developer  
- GitHub: [@nacho-carrasco](https://github.com/nacho-carrasco)
- LinkedIn: [Ignacio Carrasco](https://www.linkedin.com/in/ignacio-carrasco-9a9054a5/)

---

⭐ Si te gusta este proyecto, no olvides darle una estrella en GitHub!