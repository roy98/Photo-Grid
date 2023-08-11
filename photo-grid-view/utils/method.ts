import { Fetcher } from 'swr'

const getPhotoFromUnsplash = async (url: string) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_UNSPLASH_BASE_URL}${url}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
	)
	return res.json()
}

// Our Custom API Endpoint
const getPhotoFromPhotoBackendAPI = async (url: string) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_PHOTO_GRID_API}api${url}`)

	const transformedPhotos = await res.json()

	return transformedPhotos?.map((photo: any) => {
		// parse urls and user object
		photo.urls = JSON.parse(photo.urls)
		photo.user = JSON.parse(photo.user)
		return photo
	})
}

// SWR: a function that accepts the index and the previous page data, returns the key of a page
const getKey = (pageIndex, previousPageData) => {
	if (previousPageData && !previousPageData.length) return null // reached the end
	return `/photos?page=${pageIndex + 1}&per_page=10` // SWR key
}

// Wrap native fetch api for SWR
// Change the called method to either use Unsplash or our Custom API
const fetcher: Fetcher<string[]> = (...args: any) => getPhotoFromPhotoBackendAPI(args)

export { getPhotoFromUnsplash, getKey, fetcher }
