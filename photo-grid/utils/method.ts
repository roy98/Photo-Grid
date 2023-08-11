const getPhotoFromUnsplash = async (url: string) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_UNSPLASH_BASE_URL}${url}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
	)
	return res.json()
}

export { getPhotoFromUnsplash }
