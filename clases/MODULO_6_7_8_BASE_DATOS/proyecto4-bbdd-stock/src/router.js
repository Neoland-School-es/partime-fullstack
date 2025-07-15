import express from 'express';
import {
    getFotos,
    getFotoById,
    createFoto,
    updateFoto,
    deleteFoto
} from './controller.js';

const router = express.Router();

// GET /api/fotos - Obtener todas las fotos
router.get('/', getFotos);

// GET /api/fotos/:id - Obtener una foto por ID
router.get('/:id', getFotoById);

// POST /api/fotos - Crear una nueva foto
router.post('/', createFoto);

// PUT /api/fotos/:id - Actualizar una foto
router.put('/:id', updateFoto);

// DELETE /api/fotos/:id - Eliminar una foto
router.delete('/:id', deleteFoto);

export default router;