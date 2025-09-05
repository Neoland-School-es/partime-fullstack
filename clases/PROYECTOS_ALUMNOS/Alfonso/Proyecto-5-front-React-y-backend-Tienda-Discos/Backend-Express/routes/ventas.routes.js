import Router from "express";
import enrutadorVentas from "../controllers/ventas.controller.js"

const router = Router();

router.use("/", enrutadorVentas);




export default router;
