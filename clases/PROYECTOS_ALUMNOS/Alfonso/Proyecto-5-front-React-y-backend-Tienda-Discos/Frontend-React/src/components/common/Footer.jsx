import { Link } from "react-router";

export default function Footer() {

    return (
        <nav className="piePagina">
            <div className="contactoPie">
                <h3>Contacta con nosotros</h3>
                <Link to={"mailto:alfonsor814@gmail.com"}>📧alfonsor814@gmail.com</Link><br/>
                <Link to={"https://github.com/AlfonsoRG0720"}>📂github.com/AlfonsoRG0720</Link>
                <h4>📞605-207-922</h4>
                <p>Horario de atención telefónica:</p>
                <p>L a V: 8:30 - 14:00</p>
                <p>📌Calle Av Del Mar, 25.</p>
                <p>Castellón, España</p>
            </div>
            
            <div className="logos">
                <h3>Síguenos en RRSS:</h3>
                <div>
                  <Link to={"https://www.instagram.com/alfonso_rg?igsh=MWJuNG5lOG1uaXRkNA=="}><img src="/assets/logo-insta.png" alt="Logo instagram"/></Link>
                  <Link to={"https://www.linkedin.com/in/alfonso-rodriguez-gallego?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}><img src="./assets/linkedIn.png" alt="logo linkedin"/></Link>
                  <Link to={"https://github.com/AlfonsoRG0720"}><img src="./assets/github.png" alt="logo x"/></Link>
                </div>
            </div>

            
        </nav>
    )
}
