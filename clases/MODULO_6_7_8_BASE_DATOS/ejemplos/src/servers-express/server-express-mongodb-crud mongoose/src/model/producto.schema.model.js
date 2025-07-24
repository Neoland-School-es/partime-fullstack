import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true
    },
    precio: {
      type: Number,
    },
    cantidad: Number,
  },
  {
    timestamps: true,
  }
);

const productoModel = mongoose.model('productos', productSchema);

export { productoModel }
