Es una librería de JavaScript para construir interfaces de usuario basadas en **componentes**. Fue creada por Facebook y se utiliza para desarrollar aplicaciones web rápidas, dinámicas y modulares.

---

## Creación de un proyecto con Vite y React

```bash
# Comando para crear el proyecto con plantilla de React + JavaScript
npm create vite@latest nombre-proyecto
```

---

## Componentes en React

En React, **un componente** es una función o clase que devuelve elementos JSX (HTML dentro de JavaScript). Son reutilizables y ayudan a dividir la interfaz en partes independientes.

```jsx
// Ejemplo de componente:
export default function Saludo() {
  return <h1>Hola, mundo!</h1>;
}
```

**Usar el componente en otro archivo:**

```jsx
import Saludo from './Saludo';

export default function App() {
  return (
    <div>
      <Saludo />
    </div>
  );
}
```

---

## Pasar propiedades entre componentes

Las **props** (propiedades) permiten pasar datos de un componente padre a uno hijo.

```jsx
function Saludo(props) {
  return <h1>Hola, {props.nombre}!</h1>;
}

function App() {
  return <Saludo nombre="Messi" />;
}
```

---

## Uso de `props.children`

`props.children` es una forma de mostrar contenido que se pasa entre las etiquetas del componente.

```jsx
function Caja(props) {
  return (
    <div style={{ border: '2px solid black', padding: '10px' }}>
      {props.children}
    </div>
  );
}

function App() {
  return (
    <Caja>
      <p>Este texto está dentro de la caja.</p>
    </Caja>
  );
}
```

---

## Hooks en React

### `useState`

Permite agregar **estado** a un componente funcional.

```jsx
import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Valor: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
    </div>
  );
}
```

---

### `useEffect`

Permite ejecutar código en momentos específicos del ciclo de vida del componente.

```jsx
import { useState, useEffect } from 'react';

function Ejemplo() {
  const [mensaje, setMensaje] = useState('Cargando...');

  useEffect(() => {
    setTimeout(() => {
      setMensaje('¡Datos cargados!');
    }, 2000);
  }, []);

  return <p>{mensaje}</p>;
}
```

---

###  `useContext`

Permite compartir datos entre componentes sin necesidad de pasarlos manualmente como props.

```jsx
// Tema.context.jsx
import { createContext, useContext, useState } from 'react';

const TemaContext = createContext();

function ProveedorTema({ children }) {
  const [tema, setTema] = useState('claro');
  return (
    <TemaContext.Provider value={{ tema, setTema }}>
      {children}
    </TemaContext.Provider>
  );
}

export {TemaContext, ProveedorTema};
// Boton.jsx
function Boton() {
  const { tema, setTema } = useContext(TemaContext);
  return (
    <button onClick={() => setTema(tema === 'claro' ? 'oscuro' : 'claro')}>
      Cambiar a tema {tema === 'claro' ? 'oscuro' : 'claro'}
    </button>
  );
}
// App.jsx
function App() {
  return (
    <ProveedorTema>
      <Boton />
    </ProveedorTema>
  );
}
```

---

## React Router

React Router permite manejar la navegación entre páginas sin recargar el navegador.

```bash
# Comando de instalación
npm install react-router-dom
```

**Ejemplo básico:**

```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Inicio</h1>;
}

function About() {
  return <h1>Acerca de</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link> | 
        <Link to="/about">Acerca de</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## Axios para llamadas a API

**Axios** es una librería para hacer solicitudes HTTP.

```bash
# Comando de instalación
npm install axios
```

**Ejemplo de uso:**

```jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsuarios(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <ul>
      {usuarios.map(usuario => (
        <li key={usuario.id}>{usuario.name}</li>
      ))}
    </ul>
  );
}

export default Usuarios;
```
