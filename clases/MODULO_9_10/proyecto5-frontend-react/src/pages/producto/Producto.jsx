import { useContext } from 'react';
import { ProductosContext } from '../../context/Productos.context';
import { useParams } from 'react-router';
import defaultImg from '/paisaje.png';

export default function Producto() {
  const { productos, agregarVentaProducto } = useContext(ProductosContext);

  const { id } = useParams();

  return (
    <>
      <section>
        <h2>Productos Destacado</h2>

        {productos.map(producto => {
          if (producto._id == id) {
            return (
              <div key={producto._id}>
                <h3>nombre: {producto.nombre}</h3>
                <p>_id: {producto._id}</p>
                <figure>
                  <img src={producto.imagen ? "http://localhost:3001/uploads/" + producto.imagen : defaultImg} alt="" width={200} />
                </figure>

                <button onClick={() => agregarVentaProducto(producto)}>Agregar al carrito</button>
              </div>
            );
          }
        })}
      </section>
    </>
  );
}