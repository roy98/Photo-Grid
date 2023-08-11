import { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import { LightboxProps } from '../../utils/types'

export default function LightboxPhoto({
	isOpen,
	urls,
	description,
	downloads,
	likes,
	user,
	handleClose
}: LightboxProps) {
	const [loading, setLoading] = useState<boolean>(false)
	return (
		isOpen && (
			<Lightbox
				mainSrc={urls.full}
				onCloseRequest={() => {
					setLoading(false)
					handleClose()
				}}
				enableZoom={false}
				mainSrcThumbnail={urls.thumbnail}
				onImageLoad={() => {
					setLoading(true)
				}}
				imagePadding={60}
				imageTitle={`${user.name} ${user.portfolio_url ? '- ' + user.portfolio_url : ''}`}
				imageCaption={`${description ? description + ' - ' : ''} ${
					likes ? 'Likes: ' + likes : ''
				} ${downloads ? ' - Dowloads: ' + downloads : ''}`}
				wrapperClassName='lightboxPhoto'
			/>
		)
	)
}
