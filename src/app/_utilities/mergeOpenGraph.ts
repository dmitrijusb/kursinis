import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'Scentage - Discover Your Senses',
  title: 'Scentage - Discover Your Senses',
  description:
    'Immerse yourself in the soothing glow of our scented candles, reed diffusers and home sprays',
  images: [
    {
      url: 'https://ecommerce-kurs.payloadcms.app/media/candles.jpg',
    },
  ],
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
