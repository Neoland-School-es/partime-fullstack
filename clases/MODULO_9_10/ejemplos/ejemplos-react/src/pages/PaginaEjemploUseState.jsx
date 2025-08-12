import React, { useState } from "react";

function PaginaEjemploUseState() {
  const [contador, setContador] = useState(0);

  const [texto, setTexto] = useState("Hola");

  const [cargando, setCargando] = useState(false);

  const [usuario, setUsuario] = useState({
    nombre: "Juan",
    edad: 25
  });

  const [numeros, setNumeros] = useState([1, 2, 3]);

  const [contadorA, setContadorA] = useState(0);
  const [contadorB, setContadorB] = useState(10);

  function incrementar() {
    setContador(contador + 1);
  }

  function decrementar() {
    setContador(contador - 1);
  }

  function cambiarTexto() {
    if (texto === "Hola") {
      setTexto("Adiós");
    } else {
      setTexto("Hola");
    }
  }

  function alternarCarga() {
    setCargando(!cargando);
  }

  function cambiarEdad() {
    setUsuario({
      ...usuario,
      edad: usuario.edad + 1
    });
  }

  function agregarNumero() {
    setNumeros([...numeros, numeros.length + 1]);
  }

  function quitarNumero() {
    if (numeros.length > 0) {
      setNumeros(numeros.slice(0, -1));
    }
  }

  function incrementarA() {
    setContadorA(contadorA + 1);
  }

  function incrementarB() {
    setContadorB(contadorB + 1);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ejemplos de useState</h1>

      <section>
        <h2>1. Contador</h2>
        <p>Valor: {contador}</p>
        <button onClick={incrementar}>+1</button>
        <button onClick={decrementar}>-1</button>
      </section>

      <hr />

      <section>
        <h2>2. Cambiar texto</h2>
        <p>{texto}</p>
        <button onClick={cambiarTexto}>Cambiar texto</button>
      </section>

      <hr />

      <section>
        <h2>3. Booleano cargando</h2>
        <p>{cargando ? "Cargando..." : "Listo"}</p>
        <button onClick={alternarCarga}>Alternar estado</button>
      </section>

      <hr />

      <section>
        <h2>4. Objeto usuario</h2>
        <p>Nombre: {usuario.nombre}</p>
        <p>Edad: {usuario.edad}</p>
        <button onClick={cambiarEdad}>Aumentar edad</button>
      </section>

      <hr />

      <section>
        <h2>5. Arreglo de números</h2>
        <p>{numeros.join(", ")}</p>
        <button onClick={agregarNumero}>Agregar número</button>
        <button onClick={quitarNumero}>Quitar último</button>
      </section>

      <hr />

      <section>
        <h2>6. Dos contadores independientes</h2>
        <p>Contador A: {contadorA}</p>
        <p>Contador B: {contadorB}</p>
        <button onClick={incrementarA}>Incrementar A</button>
        <button onClick={incrementarB}>Incrementar B</button>
      </section>
    </div>
  );
}

export default PaginaEjemploUseState;
