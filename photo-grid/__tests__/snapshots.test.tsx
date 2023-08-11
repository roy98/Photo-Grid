import { render } from '@testing-library/react'
import Header from '@/components/Header'
import Error from '@/components/Error'
import SinglePhoto from '@/components/SingleImage'
import { PhotoUrl } from '@/utils/types'

describe('Header', () => {
	it('renders header unchanged', () => {
		const { container } = render(<Header />)
		expect(container).toMatchSnapshot()
	})
})

describe('Error', () => {
	it('renders error component', () => {
		const { container } = render(<Error />)
		expect(container).toMatchSnapshot()
	})
})

describe('SinglePhoto', () => {
	const src: PhotoUrl = { regular: '/images/error.svg' }
	it('renders header unchanged', () => {
		const { container } = render(<SinglePhoto src={src} handleOpenLightbox={() => {}} />)
		expect(container).toMatchSnapshot()
	})
})
