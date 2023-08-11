export type PhotoUrl = {
	full?: string
	regular?: string
	thumbnail?: string
}

export type PhotoUser = {
	name: string
	portfolio_url: string
}

export type LightboxProps = {
	isOpen: boolean
	urls: PhotoUrl
	description?: string
	downloads?: number
	likes?: number
	user?: PhotoUser
	handleClose: () => void
}

export type SinglePhotoProps = {
	src: PhotoUrl
	handleOpenLightbox: () => void
}
