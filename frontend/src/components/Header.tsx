import styles from './Header.module.css'
import Cart from './Icons/Cart'
const Header = () => {
	return (
		<div className={styles.header}>
			<img src='logo.svg' alt='logo' />
			<div className={styles.menuItems}>
				<a href='/'>Main Page</a>
				<a href='/'>Categories</a>
				<a href='/'>All products</a>
				<a href='/'>All sales</a>
			</div>
			<a href='#'>
				<Cart />
			</a>
		</div>
	)
}

export default Header
