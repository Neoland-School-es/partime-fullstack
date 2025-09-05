import { Link } from "react-router";
import CartBadge from "./CartBadge";

export default function MenuNavegacion() {
    return (
        <nav>
            <div className="menu-container">
                <h1>Nordora</h1>

                <ul style={{ 
                    display: "flex", 
                    gap: "1.3em",
                    alignItems: "center"
                }}>
                    <Link to={"/"} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        Inicio
                    </Link>
                    <Link to={"/panel-control"} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        Panel de Control
                    </Link>
                    <Link to={"/contacto"} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        Contacto
                    </Link>
                    <CartBadge />
                </ul>
            </div>
        </nav>
    )
}