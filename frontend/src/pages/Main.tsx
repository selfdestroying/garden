import { queryOptions, useQuery } from '@tanstack/react-query'
import CategoryCard from '../components/CategoryCard'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import styles from '../styles/Main.module.css'

const categoriesListQuery = () =>
	queryOptions({
		queryKey: ['categories'],
		queryFn: async () =>
			await fetch('http://localhost:3000/api/categories').then(res =>
				res.json()
			),
	})

const Main = () => {
	const { isLoading, data } = useQuery(categoriesListQuery())

	return (
		<Layout>
			<div className={styles.hero}>
				<h1>Amazing Discounts on Garden Products!</h1>
				<div className={styles.button}>
					<button>Check out</button>
				</div>
			</div>
			<div className={styles.categories}>
				<Heading
					title='Categories'
					btnTitle='All categories'
					link='/categories'
				/>
				<div className={styles.categoriesCards}>
					{!isLoading &&
						data.categories
							.slice(0, 4)
							.map((category: any) => (
								<CategoryCard
									key={category.id}
									id={category.id}
									title={category.name}
									image='back.jpg'
								/>
							))}
				</div>
			</div>
			<div className={styles.contact}>
				<div className={styles.container}>
					<h2>5% off on the first order</h2>
					<div className={styles.form}>
						<img src='contact.png' alt='' />
						<form action=''>
							<input
								type='text'
								placeholder='Name'
								name='name'
								autoComplete='on'
							/>
							<input
								type='phone'
								placeholder='Phone'
								name='phone'
								autoComplete='on'
							/>
							<input
								type='email'
								placeholder='Email'
								name='email'
								autoComplete='on'
							/>
							<button>Get a discount</button>
						</form>
					</div>
				</div>
			</div>
			<div className={styles.sales}>
				<Heading title='Sales' btnTitle='All sales' />
				<div className={styles.salesCards}>
					<ProductCard
						id={1}
						title='Product 1'
						price={500}
						image='back.jpg'
						discount={50}
					/>
					<ProductCard
						id={1}
						title='Product 1'
						price={500}
						image='back.jpg'
						discount={50}
					/>
					<ProductCard
						id={1}
						title='Product 1'
						price={500}
						image='back.jpg'
						discount={50}
					/>
					<ProductCard
						id={1}
						title='Product 1'
						price={500}
						image='back.jpg'
						discount={50}
					/>
				</div>
			</div>
		</Layout>
	)
}

export default Main
