import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const categories = [
	{
		name: 'Fertilizer',
	},
	{
		name: 'Protective products and septic tanks',
	},
	{
		name: 'Planting material',
	},
	{
		name: 'Tools and equipment',
	},
	{
		name: 'Pots and planters',
	},
]

const products = [
	{
		name: 'Product 1',
		description: 'Product 1 description',
		price: 10,
		quantity: 10,
		categoryId: 1,
	},
	{
		name: 'Product 2',
		description: 'Product 2 description',
		price: 20,
		quantity: 20,
		categoryId: 2,
	},
	{
		name: 'Product 3',
		description: 'Product 3 description',
		price: 30,
		quantity: 30,
		categoryId: 3,
	},
]

async function main() {
	const categoriesResult = await prisma.category.createMany({
		data: categories,
	})
	const productsResult = await prisma.product.createMany({
		data: products,
	})
	console.log({ categoriesResult, productsResult })
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
