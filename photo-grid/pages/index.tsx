import { useEffect, useState } from 'react'
import useSWRInfinite from 'swr/infinite'
import { Key, Fetcher } from 'swr'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getPhotoFromUnsplash } from '../utils/method'
import SingleImage from '../components/SingleImage'
import { Bars } from 'react-loader-spinner'

const getKey = (pageIndex, previousPageData) => {
	if (previousPageData && !previousPageData.length) return null // reached the end
	return `/photos?page=${pageIndex + 1}&per_page=10` // SWR key
}

const fetcher: Fetcher<string[]> = (...args: any) => getPhotoFromUnsplash(args)

export default function Home() {
	const { data, error, isValidating, size, setSize } = useSWRInfinite(getKey, fetcher)
	const images: Array<any> = data ? [].concat(...data) : []

	const isLoadingInitialData = true || (!data && !error)
	const isLoadingMore = size > 0 && data && typeof data[size - 1] === 'undefined'

	if (isLoadingInitialData) {
		return (
			<div className={styles.loaderContainer}>
				<Bars height='80' width='80' visible color='#640aa1' ariaLabel='Loader' />
			</div>
		)
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Photo Grid</title>
				<meta name='description' content='A simple photo grid app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				{images &&
					images.map((image: any) => <SingleImage url={image.urls?.regular} key={image?.id} />)}
			</main>

			<footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					Powered by{' '}
					<span className={styles.logo}>
						<Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	)
}
