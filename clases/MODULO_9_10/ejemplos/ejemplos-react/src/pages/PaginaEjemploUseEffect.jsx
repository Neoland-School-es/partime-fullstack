import React, { useState, useEffect } from "react";

function PaginaEjemploUseEffect() {
  // Estado para los ejemplos
  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [anchoVentana, setAnchoVentana] = useState(window.innerWidth);

  // useEffect sin dependencias -> se ejecuta en cada renderizado
  useEffect(() => {
    console.log("Renderizado de la página (cada vez que cambia algo)");
  });

  // useEffect con [] -> se ejecuta solo una vez al montar
  useEffect(() => {
    console.log("Componente montado (solo una vez)");
    setMensaje("Componente cargado por primera vez");
  }, []);

  // useEffect con dependencias -> se ejecuta cuando cambian esas variables
  useEffect(() => {
    console.log(`El contador cambió a: ${contador}`);
  }, [contador]);

  // useEffect con cleanup -> detener intervalos o listeners
  useEffect(() => {
    function manejarResize() {
      setAnchoVentana(window.innerWidth);
    }

    window.addEventListener("resize", manejarResize);
    console.log("Escuchando cambios de tamaño en la ventana");

    // Limpieza al desmontar
    return () => {
      window.removeEventListener("resize", manejarResize);
      console.log("Se eliminó el listener de resize");
    };
  }, []);

  // Ejemplo extra: Llamada a API al cargar
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ejemplos de useEffect</h1>

      <section>
        <h2>1. Render en cada cambio</h2>
        <p>{mensaje}</p>
        <button onClick={() => setMensaje("Se cambió el mensaje!")}>
          Cambiar mensaje
        </button>
      </section>

      <hr />

      <section>
        <h2>2. useEffect con dependencias</h2>
        <p>Contador: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      </section>

      <hr />

      <section>
        <h2>3. useEffect con cleanup</h2>
        <p>Ancho actual de la ventana: {anchoVentana}px</p>
      </section>

      <hr />

      <section>
        <h2>4. Llamada a API al cargar</h2>
        <ul>
          {usuarios.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default PaginaEjemploUseEffect;
