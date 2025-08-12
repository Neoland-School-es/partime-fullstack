import { useState, useEffect } from "react";
import axios from "axios";

function PaginaEjemploAxiosFetch() {
  const [items, setItems] = useState([]);
  const [nombre, setNombre] = useState("");
  const API_URL = "http://localhost:3001/api/proyecto5/react/";

  async function obtenerConFetch() {
    try {
      const res = await fetch(API_URL);
      const data = await res.json()
      setItems(data.data)
    } catch (error) {
      console.error("Error con fetch:", error)
    }
  }

  async function obtenerConAxios() {
    try {
      const res = await axios.get(API_URL);
      setItems(res.data.data)
    } catch (error) {
      console.error("Error con axios:", error)
    }
  }

  function crearConFetch() {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre: nombre })
    })
      .then((res) => res.json())
      .then((nuevo) => {
        setItems([...items, nuevo]);
        setNombre("");
      })
      .catch((err) => console.error("Error creando con fetch:", err));
  }

  function crearConAxios() {
    axios
      .post(API_URL, { nombre: nombre })
      .then((res) => {
        setItems([...items, res.data]);
        setNombre("");
      })
      .catch((err) => console.error("Error creando con axios:", err));
  }

  function actualizarConFetch(id, nuevoNombre) {
    fetch(API_URL + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre: nuevoNombre })
    })
      .then((res) => res.json())
      .then((actualizado) => {
        setItems(items.map((item) => (item._id === id ? actualizado.data : item)));
      })
      .catch((err) => console.error("Error actualizando con fetch:", err));
  }

  function actualizarConAxios(id, nuevoNombre) {
    axios
      .put(API_URL + id, { nombre: nuevoNombre })
      .then((res) => {
        setItems(items.map((item) => (item._id === id ? res.data.data : item)));
      })
      .catch((err) => console.error("Error actualizando con axios:", err));
  }

  // Cargar datos al inicio
  useEffect(() => {
    // obtenerConAxios();
    obtenerConFetch();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ejemplo Fetch vs Axios (CRUD)</h1>

      <input
        type="text"
        placeholder="Escribe un nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button onClick={crearConFetch}>Crear con Fetch</button>
      <button onClick={crearConAxios}>Crear con Axios</button>

      <hr />

      <button onClick={obtenerConFetch}>Obtener con Fetch</button>
      <button onClick={obtenerConAxios}>Obtener con Axios</button>

      <hr />

      <ul>
        {items.length > 0 && items.map((item) => (
          <li key={item._id}>
            {item.nombre} <small>({item._id})</small>
            <button
              onClick={() =>
                actualizarConFetch(item._id, item.nombre + "fetch")
              }
            >
              Actualizar con Fetch
            </button>
            <button
              onClick={() =>
                actualizarConAxios(item._id, item.nombre + "axios")
              }
            >
              Actualizar con Axios
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaginaEjemploAxiosFetch;
