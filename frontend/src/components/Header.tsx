import { NavLink } from 'react-router-dom'
import styles from '../styles/Header.module.css'
import Cart from './Icons/Cart'
const Header = () => {
	return (
		<div className={styles.header}>
			<img src='../../public/logo.svg' alt='logo' />
			<div className={styles.menuItems}>
				<NavLink to='/'>Main Page</NavLink>
				<NavLink to='/categories'>Categories</NavLink>
				<NavLink to='/products'>All products</NavLink>
				<a href='/'>All sales</a>
			</div>
			<a href='#'>
				<Cart />
			</a>
		</div>
	)
}

export default Header
