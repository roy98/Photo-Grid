import { render, screen, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SinglePhoto from '@/components/SingleImage'
import LightBoxPhoto from '@/components/LightBoxPhoto'
import { LightboxProps, PhotoUrl } from '@/utils/types'

describe('Single Photo component', () => {
	it('renders a photo', () => {
		const src: PhotoUrl = { regular: '/images/error.svg' }
		const photoBase64: string =
			'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

		render(<SinglePhoto src={src} handleOpenLightbox={() => {}} />)

		const renderedPhoto = screen.getByTestId('single-image')
		expect(renderedPhoto).toBeTruthy()
		expect(renderedPhoto).toHaveAttribute('src', photoBase64)
	})
})

describe('Home', () => {
	it('render a lightbox component with a photo', async () => {
		let isOpen = true
		const lightboxData: LightboxProps = {
			isOpen,
			urls: { full: '/images/error.svg' },
			description: 'test description',
			likes: 20,
			handleClose: () => (isOpen = false)
		}

		render(<LightBoxPhoto {...lightboxData} />)

		const lightboxText = screen.findByText('test description')
		expect(lightboxText).toBeTruthy()
	})
})
