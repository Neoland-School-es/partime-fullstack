import MenuNavegacion from "../common/MenuNavegacion";
import Footer from "./Footer";

export default function PlantillaPagina(props) {
    return (
        <div style={{ 
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <MenuNavegacion />

            <main style={{ 
                flex: 1,
                paddingBottom: '20px'
            }}>
                {props.children}
            </main>

            <Footer />
        </div>
    )
}