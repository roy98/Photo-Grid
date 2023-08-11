import styles from '@/styles/common.module.css'
import Image from 'next/image'

export default function Header() {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.logoContainer}>
					<span className={styles.appName}>Photo Grid</span>
					<span className={styles.logo}>
						<Image src='/images/logo.svg' alt='Vercel Logo' width={50} height={50} />
					</span>
				</div>
				<p>
					Powered by <a href=''>Unsplash</a>
				</p>
			</header>
			<p style={{ padding: '3rem 2rem 2rem 2rem', textAlign: 'center' }}>
				The most beautiful royalty-free photos and images shared for free by talented creators.
			</p>
		</>
	)
}
