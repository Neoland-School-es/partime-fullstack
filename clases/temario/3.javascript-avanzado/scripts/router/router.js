// router.js
import mainPageHome from './../pages-scripts/page-home-scripts/page-home-scripts.js';
import mainPageSolid from './../pages-scripts/page-solid-scripts/page-solid-scripts.js';

const routes = {
    "/": mainPageHome,
    "/index.html": mainPageHome,
    "/page1-principios-solid.html": mainPageSolid
};

export default function router() {
    const path = window.location.pathname.split("/").pop();

    const handler = routes[`/${path}`] || routes[window.location.pathname];

    if (handler) {
        handler();
    } else {
        window.location.href = "./error.html";
    }
}
