import { QueryClient, queryOptions, useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import Layout from '../components/Layout'
import styles from '../styles/Product.module.css'

const productsListQuery = (productId: string) =>
	queryOptions({
		queryKey: ['product'],
		queryFn: async () =>
			await fetch(`http://localhost:3000/api/products/${productId}`).then(res =>
				res.json()
			),
	})

export const loader =
	(_queryClient: QueryClient) =>
	async ({ params }: LoaderFunctionArgs) => {
		if (!params.productId) {
			throw new Error('No contact ID provided')
		}
		return { productId: params.productId }
	}

const Product = () => {
	const { productId } = useLoaderData() as Awaited<
		ReturnType<ReturnType<typeof loader>>
	>

	const { isLoading, data } = useQuery(productsListQuery(productId))

	const [amount, setAmount] = useState<number>(1)

	return (
		<Layout>
			{!isLoading && (
				<div className={styles.product}>
					<div className={styles.image}>
						<img src='../../public/back.jpg' alt={data.product.name} />
					</div>
					<div className={styles.info}>
						<h2>{data.product.name}</h2>
						<div className={styles.priceInfo}>
							<p className={styles.priceWithDiscount}>
								${data.product.price * amount}
							</p>
							{data.product.discount !== 0 && (
								<>
									<p className={styles.price}>
										$
										{(
											((data.product.price * 100) /
												(100 - data.product.discount)) *
											amount
										).toFixed()}
									</p>
									<p className={styles.discount}>{data.product.discount}%</p>
								</>
							)}
						</div>
						<div className={styles.amountInfo}>
							<div className={styles.amountContainer}>
								<button
									onClick={() => {
										if (amount > 1) setAmount(amount - 1)
									}}
								>
									-
								</button>
								<p className={styles.amount}>{amount}</p>
								<button
									onClick={() => {
										if (amount < data.product.quantity) setAmount(amount + 1)
									}}
								>
									+
								</button>
							</div>
							<button>Add to cart</button>
						</div>
						<div className={styles.descriptionContainer}>
							<h3>Description</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Expedita, praesentium non, ducimus a consequatur necessitatibus
								unde cupiditate maiores molestias nobis optio sed dignissimos
								voluptatibus sapiente distinctio veritatis hic incidunt nihil!
								Libero beatae consequuntur iusto! Esse pariatur aliquid eligendi
								quos voluptas alias numquam totam nihil minima, facilis expedita
								id sunt soluta inventore nisi quidem. Porro natus explicabo ut
								quam sit iusto. Dolore harum expedita cum esse sequi enim
								voluptates culpa veritatis ullam quibusdam distinctio libero
								animi repellendus eveniet ea, natus possimus voluptatem magni
								sit illum commodi! Nostrum obcaecati expedita nihil animi!
								Eveniet labore accusamus sed, eaque perspiciatis obcaecati esse
								dolorem magnam ducimus illo iure provident praesentium natus
								corporis quasi temporibus fugit in? Facilis, recusandae tempora
								similique ad consectetur dolores nisi provident! Nam doloremque
								saepe optio, natus voluptates, voluptas tenetur quis sint
								officia facilis eum assumenda perspiciatis adipisci quod
								accusantium praesentium? Adipisci dolorem eveniet nulla ea ipsum
								ex laudantium perspiciatis mollitia illum.
							</p>
						</div>
					</div>
				</div>
			)}
		</Layout>
	)
}

export default Product
