import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'
import express, { Express } from 'express'
import productrouter from './routers/ProductRouter'
import categoryRouter from './routers/categoryRouter'

dotenv.config()

const PORT = process.env.PORT || 3000

const app: Express = express()
export const prisma: PrismaClient = new PrismaClient()

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
