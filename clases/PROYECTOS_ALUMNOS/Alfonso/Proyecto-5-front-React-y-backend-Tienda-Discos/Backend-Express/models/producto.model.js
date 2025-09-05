import mongoose from "mongoose";

const productoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    artista: {
      type: String,
      required: true,
    },
    anio: {
      type: Number,
      required: true,
      min: 1900,
    },
    precio: {
      type: Number,
      required: true,
      min: 1,
    },
    imagen: {
      type: String, // Guardará la ruta o nombre del archivo
      required: false
    },
    stock: {
      type: Number,
      required: true,
      min: 0
    },
    canciones: {
      type: [String],
      required: false,
    }
  },
  {
        strict: false, // Permite campos extra
        timestamps: { createdAt: "fechaCreacion", updatedAt: "fechaActualizacion" },
        versionKey: false
    }
);

const ProductoModel = mongoose.model("Producto", productoSchema);

export default ProductoModel;
