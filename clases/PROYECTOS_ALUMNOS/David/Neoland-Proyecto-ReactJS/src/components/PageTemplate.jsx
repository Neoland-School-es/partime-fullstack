import { Footer } from "./Footer";
import { Nav } from "./Nav";

export function PageTemplate(props) {
    return (
        <>
            <Nav />

            <main>
                {props.children}
            </main>

            <Footer />
        </>
    )
}