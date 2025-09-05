import { useContext } from 'react';
import { ProductosContext } from '../../context/Productos.context';
import { Link } from 'react-router';
import defaultImg from '/paisaje.png';

export default function PaginaInicio() {
  const { productos, agregarVentaProducto } = useContext(ProductosContext);

  return (
    <>
      <h1>Tienda de Discos</h1>
        <h2>🔥Mas vendidos🔥</h2>

      <section id='sectionIndexDestacados'>
        {productos.map(producto => (
          <div key={producto._id} id='listaDiscosIndex'>
            <h3>Nombre: {producto.nombre}</h3>
            <img src={producto.imagen ? "http://localhost:4000/assets/" + producto.imagen : defaultImg} alt="" width={200} />
            <p>Precio: {producto.precio}€</p>

            <div id='bntListaDiscosIndex'>
              <Link to={"/productos/" + producto._id}>+Info</Link>
              <button onClick={() => agregarVentaProducto(producto)}>Agregar al carrito🛒</button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}