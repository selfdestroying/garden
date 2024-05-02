import { Router } from 'express'
import ProductController from '../controllers/ProductController'

const productrouter = Router()

productrouter.get('/products', ProductController.getAll)
productrouter.post('/products', ProductController.create)
productrouter.get('/products/:id', ProductController.getById)

export default productrouter
