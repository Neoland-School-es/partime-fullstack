import { Router } from 'express'
import { checkUserLogged } from '../middlewares/checkUserLogged.middleware.js'
import { renderDashboard, renderHomepage, renderLogin, renderResgister } from '../controllers/pages.controller.js'

const pagesRouter = Router()

/* GET home page. */
pagesRouter.get('/', renderHomepage)
pagesRouter.get('/dashboard', checkUserLogged, renderDashboard)
pagesRouter.get('/api/users/login', renderLogin)
pagesRouter.get('/api/users/register', renderResgister)

export { pagesRouter }
