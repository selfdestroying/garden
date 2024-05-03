import { queryOptions, useQuery } from '@tanstack/react-query'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import styles from '../styles/Products.module.css'
const productsListQuery = () =>
	queryOptions({
		queryKey: ['products'],
		queryFn: async () =>
			await fetch('http://localhost:3000/api/products').then(res => res.json()),
	})
const Products = () => {
	const { isLoading, data } = useQuery(productsListQuery())
	return (
		<Layout>
			<div className={styles.products}>
				<h1>Products</h1>
				<div className={styles.productsCards}>
					{!isLoading &&
						data.products.map((product: any) => (
							<ProductCard
								key={product.id}
								id={product.id}
								image='back.jpg'
								price={product.price}
								title={product.name}
								discount={product.discount}
							/>
						))}
				</div>
			</div>
		</Layout>
	)
}

export default Products
