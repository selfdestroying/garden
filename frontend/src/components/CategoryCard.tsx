import styles from './CategoryCard.module.css'
const CategoryCard = ({ title, image }: { title: string; image: string }) => {
	return (
		<a href=''>
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
