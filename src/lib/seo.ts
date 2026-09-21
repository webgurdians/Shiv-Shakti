import { Product, Language } from '@/types';
import { shopInfo } from '@/data/shopInfo';

export function getLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['ElectronicsStore', 'FurnitureStore'],
    '@id': 'https://www.shivshaktielectronics.com/#store',
    name: 'Shiv Shakti Electronics and Furniture',
    alternateName: [
      'Shiv Shakti Electronic and Furniture',
      'শিব শক্তি ইলেকট্রনিক্স অ্যান্ড ফার্নিচার',
      'শিব শক্তি ইলেকট্রনিক অ্যান্ড ফার্নিচার',
    ],
    description:
      'Premier electronics showroom and furniture store in Cooper\'s Camp, Ranaghat, Nadia. Authorized dealer for Samsung, LG, Haier, Hitachi, Panasonic, Apple, Whirlpool, Godrej, and Voltas. Zero down payment EMI available with Bajaj Finserv, IDFC FIRST, TVS Credit, and Chola. Free local delivery across Ranaghat area.',
    image: 'https://www.shivshaktielectronics.com/images/logo.jpg',
    telephone: shopInfo.displayPhone,
    taxID: shopInfo.gstin,
    vatID: shopInfo.gstin,
    priceRange: '₹₹',
    hasMap: shopInfo.googleMapsDirectionsUrl,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '2',
    },
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
      latitude: shopInfo.coordinates?.latitude ?? 23.163562,
      longitude: shopInfo.coordinates?.longitude ?? 88.584438,
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: "Cooper's Camp" },
      { '@type': 'AdministrativeArea', name: 'Ranaghat' },
      { '@type': 'AdministrativeArea', name: 'Shantipur' },
      { '@type': 'AdministrativeArea', name: 'Phulia' },
      { '@type': 'AdministrativeArea', name: 'Nadia' },
    ],
    paymentAccepted: [
      'Cash',
      'UPI',
      'Credit Card',
      'Debit Card',
      'Bajaj Finserv Zero Down Payment EMI',
      'IDFC FIRST Zero Down Payment EMI',
      'TVS Credit Zero Down Payment EMI',
      'Chola Finance Zero Down Payment EMI',
    ],
    brand: (shopInfo.authorizedBrands || []).map((b) => ({
      '@type': 'Brand',
      name: b,
    })),
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
        opens: '09:00',
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
      url: `https://www.shivshaktielectronics.com/product/${product.slug}`,
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
