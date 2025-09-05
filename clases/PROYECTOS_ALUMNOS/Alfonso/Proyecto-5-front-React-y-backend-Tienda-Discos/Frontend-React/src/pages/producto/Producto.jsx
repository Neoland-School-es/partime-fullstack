import { useContext } from 'react';
import { ProductosContext } from '../../context/Productos.context';
import { useParams } from 'react-router';
import defaultImg from '/default.png';

export default function Producto() {
  const { productos, agregarVentaProducto } = useContext(ProductosContext);

  const { id } = useParams();

  return (
    <>
      <section>

        {productos.map(producto => {
          if (producto._id == id) {
            return (
              <div key={producto._id} id='infoDisco'>
                <div>
                  <h2>Artista: {producto.artista}</h2>
                  <h3>Nombre del disco: {producto.nombre}</h3>
                  <p>ID: {producto._id}</p>
                  <p>Precio: {producto.precio}€</p>

                  <figure>
                    <img src={producto.imagen ? "http://localhost:4000/assets/" + producto.imagen : defaultImg} alt="" width={200} />
                  </figure>
                </div>

                <div id='ListaCanciones'>

                  <h2>Lista de canciones</h2>

                  <ul>
                    {producto.canciones && producto.canciones.map((cancion, idx) => (
                      <li key={idx}>{cancion}</li>
                    ))}
                  </ul>

                  <button onClick={() => agregarVentaProducto(producto)}>Comprar disco</button>
                  </div>
              </div>
            );
          }
        })}
      </section>
    </>
  );
}