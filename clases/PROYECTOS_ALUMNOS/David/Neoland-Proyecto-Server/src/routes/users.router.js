import { Router } from 'express'
import { getAllUsers, getUser, newUser, updateUser, deleteUser, loginUser, logoutUser } from '../controllers/users.controller.js'


const usersRouter = Router()

usersRouter.get('/', getAllUsers)
usersRouter.get('/:id', getUser)
usersRouter.put('/:id', updateUser)
usersRouter.delete('/:id', deleteUser)
usersRouter.post('/login', loginUser)
usersRouter.post('/logout', logoutUser)
usersRouter.post('/register', newUser)

export { usersRouter }