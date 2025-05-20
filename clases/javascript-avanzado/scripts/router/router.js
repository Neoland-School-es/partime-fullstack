// Scripts de cada página
import mainPageHome from './../pages-scripts/page-home-scripts/page-home-scripts.js';
import mainPageClass from './../pages-scripts/page-clases-scrips/page-class-scripts.js';
import mainPageSolid from './../pages-scripts/page-solid-scripts/page-solid-scripts.js';

export default function router() {
    const pathURL = window.location.pathname;

    switch (true) {
        case pathURL.endsWith("/") || pathURL.endsWith("index.html"):
            mainPageHome();
            break;
        case pathURL.endsWith("page1-principios-solid.html"):
            mainPageSolid();
            break;
        case pathURL.endsWith("page2-class-javascript.html"):
            mainPageClass();
            break;
        default:
            window.location.href = "./error.html";
            break;
    }
}
