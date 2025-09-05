import express from 'express';

import productoRoutes from "./producto.routes.js";
import enrutadorVentas from "./ventas.routes.js";

//import middAutenticacionUsuario from "./middlewares/validacionAutenticacionUsuario.js"

const indexRouter = express.Router();

indexRouter.use("/api/productos", productoRoutes);
indexRouter.use("/api/ventas", enrutadorVentas);

export default indexRouter