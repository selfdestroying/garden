import { Router } from 'express'
import CategoryController from '../controllers/CategoryController'

const categoryRouter = Router()

categoryRouter.post('/categories', CategoryController.create)
categoryRouter.get('/categories', CategoryController.getAll)
categoryRouter.get('/categories/:id', CategoryController.getById)

export default categoryRouter
