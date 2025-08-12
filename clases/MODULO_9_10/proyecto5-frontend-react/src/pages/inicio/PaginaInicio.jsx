import { useContext } from 'react';
import { ProductosContext } from '../../context/Productos.context';
import { Link } from 'react-router';
import defaultImg from '/paisaje.png';

export default function PaginaInicio() {
  const { productos, agregarVentaProducto } = useContext(ProductosContext);

  return (
    <>
      <h1>Bienvenido a Nuestra Tienda</h1>

      <section>
        <h2>Productos Destacados</h2>
        {productos.map(producto => (
          <div key={producto.id}>
            <h3>nombre: {producto.nombre}</h3>
            <p>_id: {producto._id}</p>
            <img src={producto.imagen ? "http://localhost:3001/uploads/" + producto.imagen : defaultImg} alt="" width={200} />

            <div>
              <Link to={"/productos/" + producto._id}>info</Link>
              <button onClick={() => agregarVentaProducto(producto)}>Agregar al carrito</button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}