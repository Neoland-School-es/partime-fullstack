import MenuNavegacion from "../common/MenuNavegacion";
import Footer from "../common/Footer";

export default function PlantillaPagina(props) {
    return (
        <div>
            <MenuNavegacion />

            <main id="main">
                {props.children}
            </main>

            <Footer />            
        </div>
    )
}
