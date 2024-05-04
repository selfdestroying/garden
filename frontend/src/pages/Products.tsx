import { queryOptions, useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
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
	const [filteredProducts, setFilteredProducts] = useState([])
	const [minPrice, setMinPrice] = useState(0)
	const [maxPrice, setMaxPrice] = useState(99999999)
	const [sortState, setSortState] = useState<
		'none' | 'ascending' | 'descending'
	>('none')
	useEffect(() => {
		if (!isLoading) setFilteredProducts(data.products)
	}, [isLoading])
	const filterByPrice = () => {
		console.log(minPrice, maxPrice)

		setFilteredProducts(
			data.products.filter(
				(product: any) => product.price >= minPrice && product.price <= maxPrice
			)
		)
	}
	useEffect(() => {
		if (!isLoading) filterByPrice()
	}, [minPrice, maxPrice])

	const filterByDiscount = (checked: boolean) => {
		if (checked) {
			setFilteredProducts(
				data.products.filter((product: any) => product.discount !== 0)
			)
		} else setFilteredProducts(data.products)
	}

	const sortMethods: any = {
		none: { method: (_a: any, _b: any) => null },
		ascending: {
			method: (a: { price: number }, b: { price: number }) =>
				a.price > b.price ? 1 : -1,
		},
		descending: {
			method: (a: { price: number }, b: { price: number }) =>
				a.price > b.price ? -1 : 1,
		},
	}

	return (
		<Layout>
			<div className={styles.products}>
				<h1>Products</h1>
				<div className={styles.filtersContainer}>
					<div className={styles.priceFilter}>
						<p className={styles.title}>Price</p>
						<input
							type='number'
							onChange={(e: any) => {
								setMinPrice(e.target.value ? e.target.value : 0)
							}}
							placeholder='from'
						/>
						<input
							type='number'
							onChange={(e: any) => {
								setMaxPrice(e.target.value ? e.target.value : 99999999)
							}}
							placeholder='to'
						/>
					</div>
					<div className={styles.discountFilter}>
						<p className={styles.title}>Discount items</p>
						<input
							type='checkbox'
							onChange={(e: any) => filterByDiscount(e.target.checked)}
						/>
						<div className={styles.checkmark}></div>
					</div>
					<div className={styles.sortFilter}>
						<p className={styles.title}>Sorted</p>
						<select
							defaultValue={'none'}
							onChange={(e: any) => setSortState(e.target.value)}
						>
							<option value='none' disabled>
								Default
							</option>
							<option value='ascending'>Ascending</option>
							<option value='descending'>Descending</option>
						</select>
					</div>
				</div>
				<div className={styles.productsCards}>
					{!isLoading &&
						filteredProducts
							.sort(sortMethods[sortState].method)
							.map((product: any) => (
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
