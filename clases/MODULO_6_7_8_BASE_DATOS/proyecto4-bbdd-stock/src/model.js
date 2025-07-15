import mongoose from 'mongoose';

const fotoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    url: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model('Foto', fotoSchema);