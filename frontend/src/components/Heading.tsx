import styles from './Heading.module.css'

const Heading = ({
	title,
	btnTitle,
	onClick,
}: {
	title: string
	btnTitle: string
	onClick?: () => void
}) => {
	return (
		<div className={styles.heading}>
			<h1>{title}</h1>
			<div className={styles.btn}>
				<div className={styles.divider}></div>
				<button className='nav' onClick={onClick}>
					{btnTitle}
				</button>
			</div>
		</div>
	)
}

export default Heading
