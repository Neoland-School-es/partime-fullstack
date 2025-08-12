import MenuNavegacion from "../common/MenuNavegacion";

export default function PlantillaPagina(props) {
    return (
        <div>
            <MenuNavegacion />

            <main>
                {props.children}
            </main>
        </div>
    )
}
