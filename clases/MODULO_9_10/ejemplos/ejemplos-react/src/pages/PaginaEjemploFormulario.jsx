import { useState } from "react";

function PaginaEjemploFormulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");
  const [genero, setGenero] = useState("");
  const [acepta, setAcepta] = useState(false);

  function manejarSubmit(evento) {
    evento.preventDefault();

    const datosFormulario = {
      nombre: nombre,
      email: email,
      edad: edad,
      genero: genero,
      acepta: acepta
    };

    console.log("Datos del formulario:", datosFormulario);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ejemplo de Formulario Controlado</h1>

      <form onSubmit={manejarSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Edad:</label>
          <input
            type="number"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>

        <div>
          <label>Género:</label>
          <select
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          >
            <option value="">Seleccione</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={acepta}
              onChange={(e) => setAcepta(e.target.checked)}
            />
            Acepto términos y condiciones
          </label>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default PaginaEjemploFormulario;
