import { Product, Language } from '@/types';
import { shopInfo } from '@/data/shopInfo';

export function getLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ElectronicsStore',
    '@id': 'https://shivshaktielectronics.com/#store',
    name: 'Shiv Shakti Electronics and Furniture',
    alternateName: 'শিব শক্তি ইলেকট্রনিক্স অ্যান্ড ফার্নিচার',
    description:
      'Premier electronics showroom and furniture dealer in Cooper\'s Camp, Ranaghat, Nadia. Selling Smart TVs, Inverter ACs, Refrigerators, Washing Machines, Mobiles, and Home Furniture with easy EMI options.',
    image: 'https://shivshaktielectronics.com/images/logo.jpg',
    telephone: shopInfo.displayPhone,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Near Riksha Stand More, Coopers Bazar',
      addressLocality: "Cooper's Camp",
      addressRegion: 'West Bengal',
      postalCode: '741232',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 23.2386,
      longitude: 88.5414,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '10:00',
        closes: '22:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Showroom Electronics & Furniture Catalogue',
      itemListElement: [
        { '@type': 'OfferCatalog', name: 'Smart TVs' },
        { '@type': 'OfferCatalog', name: 'Air Conditioners' },
        { '@type': 'OfferCatalog', name: 'Refrigerators' },
        { '@type': 'OfferCatalog', name: 'Washing Machines' },
        { '@type': 'OfferCatalog', name: 'Smartphones' },
        { '@type': 'OfferCatalog', name: 'Home Appliances' },
        { '@type': 'OfferCatalog', name: 'Wooden Furniture' },
      ],
    },
  };
}

export function getProductJsonLd(product: Product, lang: Language = 'bn') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name[lang],
    image: product.images,
    description: product.shortDescription[lang],
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    model: product.modelNumber,
    offers: {
      '@type': 'Offer',
      url: `https://shivshaktielectronics.com/product/${product.slug}`,
      priceCurrency: 'INR',
      price: product.offerPrice || product.mrp,
      priceValidUntil: '2026-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      availability:
        product.stockStatus === 'out_of_stock'
          ? 'https://schema.org/OutOfStock'
          : 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Shiv Shakti Electronics and Furniture',
      },
    },
  };
}
