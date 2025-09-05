import { Router } from 'express'
import { getAllProducts, getProduct, newProduct, updateProduct, deleteProduct } from '../controllers/products.controller.js'


const productsRouter = Router()

productsRouter.get('/', getAllProducts)
productsRouter.get('/:id', getProduct)
productsRouter.post('/', newProduct)
productsRouter.put('/:id', updateProduct)
productsRouter.delete('/:id', deleteProduct)

export { productsRouter }