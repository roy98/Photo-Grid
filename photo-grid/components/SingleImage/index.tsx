import Image from 'next/image'

export default function SingleImage({ url }: { url: string }) {
	return <Image src={url} objectFit='cover' width={'400px'} height={'400px'} />
}
