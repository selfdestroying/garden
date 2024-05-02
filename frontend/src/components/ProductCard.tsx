import styles from './ProductCard.module.css'
const ProductCard = ({
	title,
	price,
	image,
	discount,
}: {
	title: string
	price: number
	image: string
	discount?: number
}) => {
	return (
		<a href='' className={styles.productLink}>
			<div className={styles.card}>
				<div className={styles.image}>
					<img src={image} alt='' />
					{discount && <div className={styles.overlay}>-{discount}%</div>}
					<button>Add to cart</button>
				</div>
				<div className={styles.info}>
					<p className={styles.name}>{title}</p>
					<div className={styles.prices}>
						<p className={styles.price}>${price}</p>
						{discount && (
							<p className={styles.discount}>${(price * 100) / discount}</p>
						)}
					</div>
				</div>
			</div>
		</a>
	)
}

export default ProductCard
