import { useState, useContext } from 'react';
import { ProductosContext } from '../../context/Productos.context';
import defaultImg from '/paisaje.png';

export default function PanelControl() {
    const { productos, editarProducto, agregarProducto, eliminarProducto } = useContext(ProductosContext);

    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [productoEditando, setProductoEditando] = useState(null);

    const [datosFormulario, setDatosFormulario] = useState({
        nombre: "",
        artista: "",
        anio: "",
        precio: "",
        imagen: "",
        stock: "",
        canciones: ""
    });

    function handleInputChange(event) {
        const { name, value } = event.target;

        console.log("Datos target: ")
        console.log(event.target)

            setDatosFormulario({ ...datosFormulario, [name]: value });
        
    }

    function handleSubmit(event) {
        event.preventDefault();

        const datosEditados = {
           
            nombre: datosFormulario.nombre,
            artista: datosFormulario.artista,
            anio: datosFormulario.anio,
            precio: datosFormulario.precio,
            imagen: datosFormulario.imagen,
            stock: datosFormulario.stock,
            canciones: datosFormulario.canciones
        };

        if (productoEditando) {
            editarProducto(productoEditando._id, datosEditados);
            alert("Producto editado");
            setProductoEditando(null);
        } else {
            agregarProducto(datosEditados);
            // console.log(datosEditados);
            alert("Producto agregado");
        }

        setMostrarFormulario(false);
        setDatosFormulario({    nombre: "",
                                artista: "",
                                anio: "",
                                precio: "",
                                imagen: "",
                                stock: "",
                                canciones: "" 
                            });
    }

    function handleEditar(producto) {
        setProductoEditando(producto);
        setDatosFormulario({
            nombre: producto.nombre,
            artista: producto.artista,
            anio: producto.anio,
            precio: producto.precio,
            imagen: producto.imagen,
            stock: producto.stock,
            canciones: producto.canciones
        });
        setMostrarFormulario(true);
    }

    function handleCancelar() {
        setMostrarFormulario(false);
        setProductoEditando(null);
        setDatosFormulario({    nombre: "",
                                artista: "",
                                anio: "",
                                precio: "",
                                imagen: "",
                                stock: "",
                                canciones: ""  
                            });
    }

    return (
        <>
            <h1>Panel de Control</h1>
            <button
                onClick={() => setMostrarFormulario(true)}
                disabled={mostrarFormulario}
            >
                + Nuevo Producto
            </button>

            {mostrarFormulario && (
                <>
                    <h2>{productoEditando ? 'Editar Producto' : 'Nuevo Producto'}</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre del disco"
                            value={datosFormulario.nombre}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="artista"
                            placeholder="Nombre del artista"
                            value={datosFormulario.artista}
                            onChange={handleInputChange}
                        />
                        <input
                            type="Number"
                            name="anio"
                            placeholder="Año de lanzamiento"
                            value={datosFormulario.anio}
                            onChange={handleInputChange}
                        />
                        <input
                            type="Number"
                            name="precio"
                            placeholder="Precio del disco"
                            value={datosFormulario.precio}
                            onChange={handleInputChange}
                        />

                        <input
                            type="text"
                            name="imagen"
                            placeholder="nombre de la imagen (con .jpg)"
                            value={datosFormulario.imagen}
                            onChange={handleInputChange}
                        />

                        <input
                            type="Number"
                            name="stock"
                            placeholder="Stock inicial"
                            value={datosFormulario.stock}
                            onChange={handleInputChange}
                        />

                        <input
                            type="text"
                            name="canciones"
                            placeholder="Canciones (separadas por , )"
                            value={datosFormulario.canciones}
                            onChange={handleInputChange}
                        />

                        
                        <div id='btnNuevoDisco'>

                        <button type="submit">
                            {productoEditando ? 'Actualizar' : 'Guardar'}
                        </button>

                        <button type="button" onClick={handleCancelar}>
                            Cancelar
                        </button>
                        </div>
                    </form>
                </>
            )}

            <h2>Productos Existentes ({productos.length})</h2>

            {productos.length === 0 ?
                (
                    <p>No hay productos registrados</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Índice</th>
                                <th>ID</th>
                                <th>Artista</th>
                                <th>Nombre</th>
                                <th>Año lanzamiento</th>
                                <th>Precio</th>
                                <th>Carátula</th>
                                <th>Stock</th>
                                <th># de canciones</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((producto, indice) => (
                                <tr key={producto._id}>
                                    <td>{indice+1}</td>
                                    <td>{producto._id || "null"}</td>
                                    <td>{producto.artista || "null"}</td>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.anio}</td>
                                    <td>{producto.precio}€</td>
                                    <td>
                                        <img src={producto.imagen ? "http://localhost:4000/assets/" + producto.imagen : defaultImg} alt="" width={100} />
                                    </td>
                                    <td>{producto.stock}</td>
                                    <td>{producto.canciones.length}</td>
                                    <td>
                                        <button
                                            onClick={() => handleEditar(producto)}
                                            disabled={mostrarFormulario}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            onClick={() => {
                                                if (window.confirm('¿Estás seguro de eliminar este producto?')) {
                                                    alert("producto a eliminar" + producto._id);
                                                    eliminarProducto(producto);
                                                }
                                            }}
                                            disabled={mostrarFormulario}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    
                )}
        </>
    );
}
