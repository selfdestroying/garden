import { Request, Response } from 'express'
import { prisma } from '../index'

class CategoryController {
	async create(req: Request, res: Response) {
		try {
			const { name } = req.body
			const category = await prisma.category.create({ data: { name } })
			res.status(201).json({ category })
		} catch (e: any) {
			res.status(500).json({ error: { ...e, message: e.message } })
		}
	}
	async getAll(req: Request, res: Response) {
		try {
			const categories = await prisma.category.findMany()
			res.status(200).json({ categories })
		} catch (e) {
			res.status(500).json({ error: e })
		}
	}
	async getById(req: Request, res: Response) {
		try {
			const { id } = req.params
			const category = await prisma.category.findUnique({
				where: { id: Number(id) },
			})
			if (!category) {
				res.status(404).json({ error: 'Category not found' })
				return
			}
			res.status(200).json({ category })
		} catch (e) {
			res.status(500).json({ error: e })
		}
	}
}

export default new CategoryController()
