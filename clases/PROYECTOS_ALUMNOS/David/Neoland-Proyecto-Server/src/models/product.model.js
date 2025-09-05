import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name: { type: String, trim: true, require: true, unique: true },
    price: { type: Number, trim: true, require: true, unique: false },
    quantity: { type: Number, trim: true, require: true, unique: false }
})

const productModel = mongoose.model("product", productSchema)

export { productModel }