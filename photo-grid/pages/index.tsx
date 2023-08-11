import useSWRInfinite from 'swr/infinite'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SingleImage from '../components/SingleImage'
import Loader from '../components/Loader'
import Header from '../components/Header'
import Error from '../components/Error'
import InfiniteScroll from 'react-infinite-scroll-component'
import { fetcher, getKey } from '../utils/method'

export default function Home() {
	const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher)
	const images: Array<any> = data ? [].concat(...data) : []

	const isLoadingInitialData = !data && !error

	if (error) {
		return <Error />
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Photo Grid</title>
				<meta name='description' content='A simple photo grid app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />

			{isLoadingInitialData && <Loader />}

			<InfiniteScroll
				dataLength={images.length}
				next={() => setSize(size + 1)}
				hasMore
				loader={<Loader />}
			>
				<main className={styles.main}>
					{images &&
						images.map((image: any, index: number) => (
							<SingleImage url={image.urls?.regular} key={`${image?.id} + ${index}`} />
						))}
				</main>
			</InfiniteScroll>
		</div>
	)
}
