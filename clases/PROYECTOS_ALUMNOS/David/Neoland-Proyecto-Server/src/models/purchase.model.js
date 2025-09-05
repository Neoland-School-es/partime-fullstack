import mongoose from 'mongoose'

const purchaseSchema = mongoose.Schema({
    productName: { type: String, required: true },
    developer: { type: String, required: true },
    applicationSource: { type: String, required: true },
    ip: { type: String },
    purchaseDate: { type: Date, default: Date.now }
})

const purchaseDataModel = mongoose.model("purchase", purchaseSchema)

export { purchaseDataModel }