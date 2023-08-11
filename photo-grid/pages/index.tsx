import useSWRInfinite from 'swr/infinite'
import { Key, Fetcher } from 'swr'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getPhotoFromUnsplash } from '../utils/method'
import SingleImage from '../components/SingleImage'
import Loader from '../components/Loader'
import Header from '../components/Header'
import Error from '../components/Error'
import InfiniteScroll from 'react-infinite-scroll-component'

const getKey = (pageIndex, previousPageData) => {
	if (previousPageData && !previousPageData.length) return null // reached the end
	return `/photos?page=${pageIndex + 1}&per_page=10` // SWR key
}

const fetcher: Fetcher<string[]> = (...args: any) => getPhotoFromUnsplash(args)

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
