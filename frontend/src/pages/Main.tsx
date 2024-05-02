import CategoryCard from '../components/CategoryCard'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import ProductCard from '../components/ProductCard'
import styles from './Main.module.css'

const Main = () => {
	return (
		<Layout>
			<div className={styles.hero}>
				<h1>Amazing Discounts on Garden Products!</h1>
				<div className={styles.button}>
					<button>Check out</button>
				</div>
			</div>
			<div className={styles.categories}>
				<Heading title='Categories' btnTitle='All categories' />
				<div className={styles.categoriesCards}>
					<CategoryCard title='Category 1' image='back.jpg' />
					<CategoryCard
						title='Protective products and septic tanks'
						image='back.jpg'
					/>
					<CategoryCard title='Category 1' image='back.jpg' />
					<CategoryCard title='Category 1' image='back.jpg' />
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
						title='Product 1'
						price={500}
						image='back.jpg'
						discount={50}
					/>
					<ProductCard
						title='Product 1'
						price={500}
						image='back.jpg'
						discount={50}
					/>
					<ProductCard
						title='Product 1'
						price={500}
						image='back.jpg'
						discount={50}
					/>
					<ProductCard
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
