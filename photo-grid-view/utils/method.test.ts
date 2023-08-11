import { getPhotoFromUnsplash, getKey } from './method'

const mockAPICall = jest.fn((x) => [
	{ id: 'testid1', description: 'description1', urls: { regular: 'reg-url', full: 'full-url' } }
])

describe('getPhotoFromUnsplash()', () => {
	it('should load photo data from unsplash', async () => {
		const res = await mockAPICall(getKey(1, []))
		expect(res).toBeDefined()
		expect(res[0].urls.full).toEqual('full-url')
	})
})
