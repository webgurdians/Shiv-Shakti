import { CategoryInfo } from '@/types';

export const categories: CategoryInfo[] = [
  {
    id: 'mobiles',
    slug: 'mobiles',
    name: {
      bn: 'মোবাইল',
      en: 'Smartphones & Mobiles',
    },
    description: {
      bn: 'সর্বশেষ ৫G স্মার্টফোন, ব্র্যান্ডেড হ্যান্ডসেট ও সহজ কিস্তি সুবিধা।',
      en: 'Latest 5G smartphones from leading brands with hassle-free EMI.',
    },
    iconName: 'Smartphone',
    image: '/images/products/iphone-15.jpg',
    itemCount: 24,
    popularBrands: ['Samsung', 'Apple', 'Redmi', 'Realme', 'OnePlus', 'Vivo'],
  },
  {
    id: 'televisions',
    slug: 'televisions',
    name: {
      bn: 'টিভি',
      en: 'Smart TVs',
    },
    description: {
      bn: '৩২ ইঞ্চি থেকে ৬৫ ইঞ্চি 4K আল্ট্রা এইচডি স্মার্ট এলইডি টিভি।',
      en: '32-inch to 65-inch 4K Ultra HD Smart LED TVs with genuine warranty.',
    },
    iconName: 'Tv',
    image: '/images/products/samsung-55-tv.jpg',
    itemCount: 18,
    popularBrands: ['Samsung', 'LG', 'Sony', 'Mi', 'TCL'],
  },
  {
    id: 'air-conditioners',
    slug: 'air-conditioners',
    name: {
      bn: 'এয়ার কন্ডিশনার',
      en: 'Air Conditioners',
    },
    description: {
      bn: '১ টন ও ১.৫ টন ইনভার্টার স্প্লিট এসি – শোরুম ইনস্টলেশন সুবিধা।',
      en: '1 Ton & 1.5 Ton Inverter Split ACs with fast showroom delivery & installation.',
    },
    iconName: 'Wind',
    image: '/images/products/hyundai-split-ac.jpg',
    itemCount: 12,
    popularBrands: ['Voltas', 'LG', 'Daikin', 'Lloyd', 'Blue Star'],
  },
  {
    id: 'refrigerators',
    slug: 'refrigerators',
    name: {
      bn: 'রেফ্রিজারেটর',
      en: 'Refrigerators',
    },
    description: {
      bn: 'সিঙ্গেল ডোর ও ডাবল ডোর ফ্রস্ট ফ্রি ফ্রিজ – টাটকা রাখুন প্রতিদিন।',
      en: 'Single & Double Door Frost Free Refrigerators for everyday freshness.',
    },
    iconName: 'Refrigerator',
    image: '/images/products/double-door-fridge.jpg',
    itemCount: 16,
    popularBrands: ['Whirlpool', 'Samsung', 'LG', 'Godrej', 'Haier'],
  },
  {
    id: 'washing-machines',
    slug: 'washing-machines',
    name: {
      bn: 'ওয়াশিং মেশিন',
      en: 'Washing Machines',
    },
    description: {
      bn: 'টপ লোড ও ফ্রন্ট লোড অটোমেটিক ওয়াশিং মেশিন – কাপড় কাচা এখন সহজ।',
      en: 'Top Load & Front Load Fully Automatic Washing Machines with quick wash.',
    },
    iconName: 'Shirt',
    image: '/images/products/lg-washing-machine.jpg',
    itemCount: 14,
    popularBrands: ['LG', 'Samsung', 'Whirlpool', 'IFB', 'Bosch'],
  },
  {
    id: 'home-appliances',
    slug: 'home-appliances',
    name: {
      bn: 'হোম অ্যাপ্লায়েন্স',
      en: 'Home Appliances',
    },
    description: {
      bn: 'মিক্সার গ্রাইন্ডার, মাইক্রোওয়েভ ওভেন, গিজার ও ইন্ডাকশন কুকার।',
      en: 'Mixer grinders, microwave ovens, water geysers, induction cooktops and fans.',
    },
    iconName: 'Coffee',
    image: '/images/products/mixer-grinder.jpg',
    itemCount: 30,
    popularBrands: ['Philips', 'Bajaj', 'Prestige', 'Havells', 'Crompton'],
  },
  {
    id: 'furniture',
    slug: 'furniture',
    name: {
      bn: 'ফার্নিচার',
      en: 'Showroom Furniture',
    },
    description: {
      bn: 'মজবুত কাঠের খাট, ওয়ার্ডরোব, আধুনিক সোফা সেট ও ড্রেসিং টেবিল।',
      en: 'Designer wooden beds, wardrobes, sofa sets, dressing tables & dining sets.',
    },
    iconName: 'Armchair',
    image: '/images/products/living-sofa.jpg',
    itemCount: 22,
    popularBrands: ['Shiv Shakti Woodcraft', 'Nilkamal', 'Durian'],
  },
];
