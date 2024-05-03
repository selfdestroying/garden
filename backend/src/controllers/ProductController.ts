import { Request, Response } from 'express'
import { prisma } from '..'
class ProductController {
	async create(req: Request, res: Response) {
		try {
			const { name, description, price, categoryId, quantity } = req.body
			const product = await prisma.product.create({
				data: {
					name,
					description,
					price,
					quantity,
					categoryId,
				},
			})
			res.status(201).json({ product })
		} catch (e: any) {
			res.status(500).json({ error: { ...e, message: e.message } })
		}
	}
	async getAll(req: Request, res: Response) {
		try {
			const products = await prisma.product.findMany()
			res.status(200).json({ products })
		} catch (e) {
			res.status(500).json({ error: e })
		}
	}
	async getById(req: Request, res: Response) {
		try {
			const { id } = req.params
			const product = await prisma.product.findUnique({
				where: { id: Number(id) },
			})
			if (!product) {
				res.status(404).json({ error: 'Product not found' })
				return
			}
			res.status(200).json({ product })
		} catch (e) {
			res.status(500).json({ error: e })
		}
	}
	async getByCategoryId(req: Request, res: Response) {
		try {
			const { categoryId } = req.params
			const products = await prisma.product.findMany({
				where: { categoryId: Number(categoryId) },
			})
			const categoryName = await prisma.category.findUnique({
				where: { id: Number(categoryId) },
				select: { name: true },
			})
			res.status(200).json({ categoryName, products })
		} catch (e) {
			res.status(500).json({ error: e })
		}
	}
}

export default new ProductController()
