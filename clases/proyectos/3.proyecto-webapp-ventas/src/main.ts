// Store
import store from "./store/store";
import { inicializarCargaProductos } from "./slices/productsSlice";
import { logout } from "./slices/userSlice";
// import { crear } from "./slices/userSlice"

import { enrutador } from "./routers/routerById";
// import { enrutador } from "./routers/routerByURL";

function main() {
  // store.dispatch(inicializarCargaProductos());
  store.dispatch(logout());
  enrutador();
}

document.addEventListener('DOMContentLoaded', main);
