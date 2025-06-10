import { login, home } from "./controllers/user.controller";

function main() {
    if (document.querySelector("#PageLogin")) {
        login()
    }

    if (document.querySelector("#PageHome")) {
        home()
    }
}

document.addEventListener("DOMContentLoaded", main)