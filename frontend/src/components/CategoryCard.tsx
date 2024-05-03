import styles from '../styles/CategoryCard.module.css'
const CategoryCard = ({
	id,
	title,
	image,
}: {
	id: number
	title: string
	image: string
}) => {
	return (
		<a href={`/categories/${id}`}>
			<div className={styles.card}>
				<div className={styles.image}>
					<img src={image} alt={title} />
				</div>
				<p>{title}</p>
			</div>
		</a>
	)
}

export default CategoryCard
