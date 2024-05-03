import styles from '../styles/Footer.module.css'
const Footer = () => {
	return (
		<div className={styles.footer}>
			<h1 className={styles.title}>Contact</h1>
			<div className={styles.cards}>
				<div className={styles.infoCards}>
					<div className={styles.card}>
						<p className={styles.cardTitle}>Phone</p>
						<p className={styles.cardText}>+7 (999) 999-99-99</p>
					</div>
					<div className={styles.card}>
						<p className={styles.cardTitle}>Socials</p>
						<p className={styles.cardText}>@garden</p>
					</div>
				</div>

				<div className={styles.infoCards}>
					<div className={styles.card}>
						<p className={styles.cardTitle}>Adress</p>
						<p className={styles.cardText}>Moscow, Russia</p>
					</div>
					<div className={styles.card}>
						<p className={styles.cardTitle}>Working hours</p>
						<p className={styles.cardText}>10:00 - 20:00</p>
					</div>
				</div>
				{/* <div className={styles.map}>
					<GoogleMapReact
						defaultCenter={{ lat: 59.95, lng: 30.33 }}
						defaultZoom={11}
					></GoogleMapReact>
				</div> */}
			</div>
		</div>
	)
}

export default Footer
