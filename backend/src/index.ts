import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import dotenv from 'dotenv'
import express, { Express } from 'express'
import categoryRouter from './routers/CategoryRouter'
import productrouter from './routers/ProductRouter'

dotenv.config()

const PORT = process.env.PORT || 3000

const app: Express = express()
export const prisma: PrismaClient = new PrismaClient()
const logging = (req: any, res: any, next: any) => {
	console.log(req.path, req.method)
	next()
}
app.use(logging)
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api', categoryRouter)
app.use('/api', productrouter)
async function main() {
	try {
		app.listen(PORT)
	} catch (e) {
		console.error(e)
	}
}

main()
