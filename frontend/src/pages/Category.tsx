import { QueryClient, useQuery } from '@tanstack/react-query'
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'

import styles from '../styles/Category.module.css'

export const loader =
	(_queryClient: QueryClient) =>
	async ({ params }: LoaderFunctionArgs) => {
		if (!params.categoryId) {
			throw new Error('No contact ID provided')
		}
		return { categoryId: params.categoryId }
	}

const Category = () => {
	const { categoryId } = useLoaderData() as Awaited<
		ReturnType<ReturnType<typeof loader>>
	>

	const { isLoading, data } = useQuery({
		queryKey: ['productsByCategoryId'],
		queryFn: async () => {
			const products = await fetch(
				`http://localhost:3000/api/products/category/${categoryId}`
			).then(res => res.json())
			return products
		},
	})

	return (
		<Layout>
			<div className={styles.category}>
				{!isLoading && (
					<>
						<h1>{data.categoryName.name}</h1>
						<div className={styles.productsCards}>
							{data.products.map((product: any) => (
								<ProductCard
									key={product.id}
									image='../../public/back.jpg'
									price={product.price}
									title={product.name}
									discount={product.discount}
								/>
							))}
						</div>
					</>
				)}
			</div>
		</Layout>
	)
}

export default Category
