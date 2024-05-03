import styles from '../styles/ProductCard.module.css'
const ProductCard = ({
	id,
	title,
	price,
	image,
	discount,
}: {
	id: number
	title: string
	price: number
	image: string
	discount: number
}) => {
	return (
		<a href={`/product/${id}`} className={styles.productLink}>
			<div className={styles.card}>
				<div className={styles.image}>
					<img src={image} alt='' />
					{discount !== 0 && <div className={styles.overlay}>-{discount}%</div>}
					<button>Add to cart</button>
				</div>
				<div className={styles.info}>
					<p className={styles.name}>{title}</p>
					<div className={styles.prices}>
						<p className={styles.price}>${price}</p>
						{discount !== 0 && (
							<p className={styles.discount}>
								${((price * 100) / (100 - discount)).toFixed()}
							</p>
						)}
					</div>
				</div>
			</div>
		</a>
	)
}

export default ProductCard
