export type Language = 'bn' | 'en';

export type ProductCategory =
  | 'mobiles'
  | 'televisions'
  | 'air-conditioners'
  | 'refrigerators'
  | 'washing-machines'
  | 'home-appliances'
  | 'furniture';

export interface LocalizedString {
  bn: string;
  en: string;
}

export interface SpecificationItem {
  key: LocalizedString;
  value: string;
}

export interface SpecificationGroup {
  groupName: LocalizedString;
  items: SpecificationItem[];
}

export interface Product {
  id: string;
  slug: string;
  category: ProductCategory;
  brand: string;
  modelNumber: string;
  name: LocalizedString;
  shortDescription: LocalizedString;
  mrp: number;
  offerPrice: number | null;
  showPrice: boolean; // If false, displays "আজকের দাম জানতে যোগাযোগ করুন"
  emiAvailable: boolean;
  emiStartingPerMonth?: number;
  stockStatus: 'in_stock' | 'limited_stock' | 'out_of_stock';
  images: string[];
  specs: SpecificationGroup[];
  featured: boolean;
  activePromotionId?: string | null;
  badge?: LocalizedString;
  seoTitle?: LocalizedString;
  metaDescription?: LocalizedString;
}

export interface CategoryInfo {
  id: ProductCategory;
  slug: string;
  name: LocalizedString;
  description: LocalizedString;
  iconName: string;
  image: string;
  itemCount: number;
  popularBrands: string[];
}

export interface Promotion {
  id: string;
  slug: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  bannerImage: string;
  startDate: string; // ISO format e.g. "2026-09-15"
  endDate: string;   // ISO format e.g. "2026-10-31"
  eligibleCategories: ProductCategory[];
  eligibleProductIds: string[];
  badgeText: LocalizedString;
  isActive: boolean;
  showOnHomepage: boolean;
  termsAndConditions: LocalizedString;
}

export interface Review {
  id: string;
  author: string;
  locality: string;
  rating: number;
  text: LocalizedString;
  date: string;
  verified: boolean;
}

export interface ShopInfo {
  name: LocalizedString;
  tagline: LocalizedString;
  address: {
    line1: LocalizedString;
    landmark: LocalizedString;
    city: string;
    pin: string;
    district: string;
    state: string;
  };
  phone: string;
  displayPhone: string;
  phoneSecondary?: string;
  displayPhoneSecondary?: string;
  whatsapp: string;
  displayWhatsapp: string;
  timings: LocalizedString;
  googleMapsEmbedUrl: string;
  googleMapsDirectionsUrl: string;
  googleReviewUrl: string;
  gstin?: string;
  plusCode?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  authorizedBrands?: string[];
  deliveryCoverage?: LocalizedString;
  warrantyGuarantee?: LocalizedString;
  financePartners: {
    name: string;
    logo?: string;
    description: LocalizedString;
  }[];
}
