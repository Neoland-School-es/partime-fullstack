import { useState, useContext } from 'react';
import { ProductosContext } from '../../context/Productos.context';
import defaultImg from '/paisaje.png';

export default function PanelControl() {
    const { productos, editarProducto } = useContext(ProductosContext);

    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [productoEditando, setProductoEditando] = useState(null);

    const [datosFormulario, setDatosFormulario] = useState({
        nombre: '',
        imagen: null,
    });

    function handleInputChange(event) {
        const { name, value, files } = event.target;

        if (name === 'imagen') {
            setDatosFormulario({ ...datosFormulario, imagen: files[0] });
        } else {
            setDatosFormulario({ ...datosFormulario, [name]: value });
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        const datosEditados = {
            nombre: datosFormulario.nombre,
            imagen: datosFormulario.imagen,
        };

        if (productoEditando) {
            editarProducto(productoEditando._id, datosEditados);
            alert("Producto editado");
            setProductoEditando(null);
        } else {
            alert("Producto agregado");
        }

        setMostrarFormulario(false);
        setDatosFormulario({ nombre: '', imagen: null });
    }

    function handleEditar(producto) {
        setProductoEditando(producto);
        setDatosFormulario({
            nombre: producto.nombre,
            imagen: null,
        });
        setMostrarFormulario(true);
    }

    function handleCancelar() {
        setMostrarFormulario(false);
        setProductoEditando(null);
        setDatosFormulario({ nombre: '', imagen: null });
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
                            placeholder="Nombre"
                            value={datosFormulario.nombre}
                            onChange={handleInputChange}
                        />

                        <input
                            type="file"
                            name="imagen"
                            onChange={handleInputChange}
                        />

                        <button type="submit">
                            {productoEditando ? 'Actualizar' : 'Guardar'}
                        </button>

                        <button type="button" onClick={handleCancelar}>
                            Cancelar
                        </button>
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
                                <th>_ID</th>
                                <th>Nombre</th>
                                <th>Acciones</th>
                                <th>Imagen</th>
                                <th>datos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((producto, indice) => (
                                <tr key={producto._id}>
                                    <td>{indice}</td>
                                    <td>{producto._id || "null"}</td>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.numero}</td>
                                    <td>
                                        <img src={producto.imagen ? "http://localhost:3001/uploads/" + producto.imagen : defaultImg} alt="" width={200} />
                                    </td>
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
