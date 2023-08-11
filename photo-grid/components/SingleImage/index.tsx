import Image from 'next/image'
import { SinglePhotoProps } from '@/utils/types'

export default function SingleImage({ src, handleOpenLightbox }: SinglePhotoProps) {
	return (
		<Image
			src={src.regular}
			objectFit='cover'
			width={'400px'}
			height={'400px'}
			onClick={handleOpenLightbox}
			data-testid={'single-image'}
		/>
	)
}
