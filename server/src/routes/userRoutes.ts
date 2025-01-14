import { Router } from 'express'
import UserController from '../controllers/UserController'

const routes = Router()

routes.post('/', UserController.store)
routes.post('/login', UserController.login)

export {
    routes
}