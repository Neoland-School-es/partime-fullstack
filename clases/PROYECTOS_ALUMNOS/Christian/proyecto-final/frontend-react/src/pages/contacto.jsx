export default function Contacto(){
  return (
    <>
      <h2>Contacto del desarrollador</h2>
      <div className="card" style={{maxWidth:700}}>
        <div className="body">
          <p><b>Nombre:</b> Christian Jaramillo</p>
          <p><b>Email:</b> <a href="mailto:christiannjaramillo96@gmail.com">christiannjaramillo96@gmail.com</a></p>
          <p><b>GitHub:</b> <a href="https://github.com/christianjrk/proyecto-final" target="_blank" rel="noreferrer">christianjrk/proyecto-final</a></p>
      
          <hr />
          <p>
            🙌 Gracias a mi profesor <b>Pablo Díaz</b> por su dedicación, apoyo y enseñanzas durante este curso.
          </p>
          <p className="small">Proyecto 5 – React + Express · CRUD + Compras</p>
        </div>
      </div>
    </>
  );
}
