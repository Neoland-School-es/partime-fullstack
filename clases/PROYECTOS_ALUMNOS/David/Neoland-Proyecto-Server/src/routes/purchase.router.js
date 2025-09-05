import { getAllpurchaseDataModel, newPurchaseInfo } from '../controllers/purchases.controller.js'
import { Router } from 'express'

const purchasesRouter = Router()

purchasesRouter.get('/', getAllpurchaseDataModel)
purchasesRouter.post('/', newPurchaseInfo)

export { purchasesRouter }