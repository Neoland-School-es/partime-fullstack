import { Link } from "react-router";

export default function MenuNavegacion() {

    return (
        <nav>
            <div>
                <h1 style={{ display: "none"}}>Tienda de discos</h1>
                <img src="/assets/banner2.png" alt="banner de la tienda de discos" className="banner"/>
            </div>

            <ul style={{ display: "flex", gap: "1em" }}>
                <Link to={"/"}>Inicio</Link>
                <Link to={"/panel-control"}>Panel de control</Link>
                {/* <Link to={"/producto/:id"}>producto</Link> */}
                <Link to={"/desarrollador"}>Desarrollador</Link>
            </ul>
        </nav>
    )
}
