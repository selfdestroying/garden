import { Link } from 'react-router-dom'
import styles from '../styles/Heading.module.css'

const Heading = ({
	title,
	btnTitle,
	link = '/',
}: {
	title: string
	btnTitle: string
	link?: string
}) => {
	return (
		<div className={styles.heading}>
			<h1>{title}</h1>
			<div className={styles.btn}>
				<div className={styles.divider}></div>
				<Link to={link}>
					<button className='nav'>{btnTitle}</button>
				</Link>
			</div>
		</div>
	)
}

export default Heading
