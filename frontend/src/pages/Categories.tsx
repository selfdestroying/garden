import { queryOptions, useQuery } from '@tanstack/react-query'
import CategoryCard from '../components/CategoryCard'
import Layout from '../components/Layout'
import styles from '../styles/Categories.module.css'
const categoriesListQuery = () =>
	queryOptions({
		queryKey: ['categories'],
		queryFn: async () =>
			await fetch('http://localhost:3000/api/categories').then(res =>
				res.json()
			),
	})
const Categories = () => {
	const { isLoading, data } = useQuery(categoriesListQuery())

	return (
		<Layout>
			<div className={styles.categories}>
				<h1>Categories</h1>
				<div className={styles.categoriesCards}>
					{!isLoading &&
						data.categories.map((category: any) => (
							<CategoryCard
								key={category.id}
								id={category.id}
								title={category.name}
								image='back.jpg'
							/>
						))}
				</div>
			</div>
		</Layout>
	)
}

export default Categories
