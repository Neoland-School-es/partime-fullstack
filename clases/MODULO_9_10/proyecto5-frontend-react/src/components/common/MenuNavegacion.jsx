import { Link } from "react-router";

export default function MenuNavegacion() {

    return (
        <nav>
            <h1>titulo pagina</h1>

            <ul style={{ display: "flex", gap: "1em" }}>
                <Link to={"/"}>inicio</Link>
                <Link to={"/panel-control"}>panel control</Link>
                <Link to={"/producto/:id"}>producto</Link>
            </ul>
        </nav>
    )
}
