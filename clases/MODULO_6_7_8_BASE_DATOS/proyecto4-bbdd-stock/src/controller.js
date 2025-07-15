import Foto from './model.js';

// Obtener todas las fotos
export const getFotos = async (req, res) => {
    try {
        const fotos = await Foto.find().sort({ createdAt: -1 });
        res.json(fotos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener una foto por ID
export const getFotoById = async (req, res) => {
    try {
        const foto = await Foto.findById(req.params.id);
        if (!foto) {
            return res.status(404).json({ error: 'Foto no encontrada' });
        }
        res.json(foto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear una nueva foto
export const createFoto = async (req, res) => {
    try {
        const { titulo, descripcion, url } = req.body;

        const nuevaFoto = new Foto({
            titulo,
            descripcion,
            url
        });

        const fotoGuardada = await nuevaFoto.save();
        res.status(201).json(fotoGuardada);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar una foto
export const updateFoto = async (req, res) => {
    try {
        const { titulo, descripcion, url } = req.body;

        const fotoActualizada = await Foto.findByIdAndUpdate(
            req.params.id,
            { titulo, descripcion, url },
            { new: true, runValidators: true }
        );

        if (!fotoActualizada) {
            return res.status(404).json({ error: 'Foto no encontrada' });
        }

        res.json(fotoActualizada);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar una foto
export const deleteFoto = async (req, res) => {
    try {
        const fotoEliminada = await Foto.findByIdAndDelete(req.params.id);

        if (!fotoEliminada) {
            return res.status(404).json({ error: 'Foto no encontrada' });
        }

        res.json({ message: 'Foto eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};