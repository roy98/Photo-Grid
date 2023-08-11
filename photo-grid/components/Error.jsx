import Image from 'next/image'
import styles from '../styles/common.module.css'

export default function Error() {
	return (
		<div className={styles.errorContainer}>
			<Image src={'/images/error.svg'} width={'400px'} height={'400px'} />
			<p>An error occured. Kyndly refresh the page or retry later</p>
			<button>Reload</button>
		</div>
	)
}
