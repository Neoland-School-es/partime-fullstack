import express from 'express';
// rutas
// import { enrutadorPaginas } from '../routes/paginas.route.js';
import { enrutadorAngular } from './proyecto5angular.route.js';
import { enrutadorReact } from './proyecto5react.route.js';
import { enrutadorVentas } from './proyecto5ventas.route.js';

const indexRouter = express.Router();

// Rutas principales de la aplicación
indexRouter.use('/api/proyecto5/angular', enrutadorAngular);
indexRouter.use('/api/proyecto5/react', enrutadorReact);
indexRouter.use('/api/proyecto5/ventas', enrutadorVentas);
// indexRouter.use('/', enrutadorPaginas);

export { indexRouter };