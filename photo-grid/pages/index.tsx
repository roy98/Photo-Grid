import useSWRInfinite from 'swr/infinite'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SingleImage from '../components/SingleImage'
import Loader from '../components/Loader'
import Header from '../components/Header'
import Error from '../components/Error'
import LighBoxPhoto from '../components/LightBoxPhoto'
import InfiniteScroll from 'react-infinite-scroll-component'
import { fetcher, getKey } from '../utils/method'
import { useState } from 'react'
import { LightboxProps } from '../utils/types'

export default function Home() {
	const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher)
	const images: Array<any> = data ? [].concat(...data) : []
	const [isLightBoxOpen, setIsLightBoxOpen] = useState<boolean>(false)
	const [currentPhoto, setCurrentPhoto] = useState<LightboxProps>(null)

	const isLoadingInitialData = !data && !error

	const onOpenLightBox = (index: number) => {
		const selectedPhoto = images[index]
		setCurrentPhoto({ ...selectedPhoto })
		setIsLightBoxOpen(true)
	}

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
							<SingleImage
								src={image.urls}
								key={`${image?.id} + ${index}`}
								handleOpenLightbox={() => onOpenLightBox(index)}
							/>
						))}
				</main>
			</InfiniteScroll>

			<LighBoxPhoto
				{...currentPhoto}
				isOpen={isLightBoxOpen}
				handleClose={() => setIsLightBoxOpen(false)}
			/>
		</div>
	)
}
