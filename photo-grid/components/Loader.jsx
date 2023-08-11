import { Bars } from 'react-loader-spinner'
import styles from '../styles/common.module.css'

export default function Loader() {
	return (
		<div className={styles.loaderContainer}>
			<Bars height='80' width='80' visible color='#640aa1' ariaLabel='Loader' />
		</div>
	)
}
