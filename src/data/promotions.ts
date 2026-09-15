import { Promotion } from '@/types';

export const promotions: Promotion[] = [
  {
    id: 'puja-mega-sale-2026',
    slug: 'durga-puja-2026',
    title: {
      bn: 'পুজো স্পেশাল অফার',
      en: 'Durga Puja Special Offer 2026',
    },
    subtitle: {
      bn: 'নির্বাচিত টিভি, ফ্রিজ ও এসি-তে বিশেষ ছাড় এবং সহজ EMI ও Finance সুবিধা',
      en: 'Special showroom discounts on select TVs, Fridges & ACs with easy EMI & Finance',
    },
    description: {
      bn: 'এই পুজোয় আপনার বাড়ি সাজান শিব শক্তি ইলেকট্রনিক্স অ্যান্ড ফার্নিচারের পুজো স্পেশাল অফারে। স্যামসাং, এলজি এবং সেরা ব্র্যান্ডের ওপর পেয়ে যান আকর্ষণীয় ছাড় ও উপহার।',
      en: 'Celebrate this Durga Puja with exclusive showroom pricing from Shiv Shakti Electronics & Furniture. Get exciting brand discounts, exchange benefits and instant EMI approvals.',
    },
    bannerImage: '/images/products/samsung-55-tv.jpg',
    startDate: '2026-09-01',
    endDate: '2026-10-31',
    eligibleCategories: ['televisions', 'refrigerators', 'washing-machines', 'furniture'],
    eligibleProductIds: [
      'prod-tv-samsung-55',
      'prod-tv-lg-43',
      'prod-fridge-whirlpool-265',
      'prod-furn-teak-bed',
    ],
    badgeText: {
      bn: 'পুজো স্পেশাল অফার',
      en: 'Puja Special Offer',
    },
    isActive: true,
    showOnHomepage: true,
    termsAndConditions: {
      bn: '* শর্তাবলী প্রযোজ্য। নির্দিষ্ট মডেল ও স্টকের ওপর অফার সীমাবদ্ধ। ফাইন্যান্স এবং কিস্তির শর্ত সংশ্লিষ্ট ব্যাংক ও আর্থিক প্রতিষ্ঠানের নিয়ম অনুযায়ী প্রযোজ্য।',
      en: '* Terms and conditions apply. Offer valid on select models until stock lasts. Finance & EMI schemes subject to verification by partnering finance companies.',
    },
  },
  {
    id: 'summer-comfort-sale',
    slug: 'summer-ac-sale',
    title: {
      bn: 'সামার এসি অফার – সেরা কুলিং সেরা দামে',
      en: 'Summer Cooling AC Sale – Beat The Heat',
    },
    subtitle: {
      bn: '১.৫ টন ও ১ টন ইনভার্টার এসির সাথে বিনামূল্যে শোরুম ইনস্টলেশন সহায়তা',
      en: '100% Copper Inverter Split ACs with priority local delivery in Nadia',
    },
    description: {
      bn: 'ভোল্টাস, এলজি এবং ডাইকিন এসিতে বিশেষ ছাড়। সরাসরি শোরুম থেকে কিনুন সঠিক সার্ভিস গ্যারান্টি সহ।',
      en: 'Special discounts on Voltas, LG, and Daikin inverter ACs with complete showroom warranty and fast installation.',
    },
    bannerImage: '/images/products/hyundai-split-ac.jpg',
    startDate: '2026-03-01',
    endDate: '2026-08-31',
    eligibleCategories: ['air-conditioners'],
    eligibleProductIds: ['prod-ac-voltas-1-5', 'prod-ac-lg-1-5-5star'],
    badgeText: {
      bn: 'সামার অফার',
      en: 'Summer Offer',
    },
    isActive: false, // Expired / inactive campaign
    showOnHomepage: false,
    termsAndConditions: {
      bn: '* ইনস্টলেশন পাইপিং ও ব্র্যাকেট চার্জ কোম্পানি পলিসি অনুযায়ী প্রযোজ্য হতে পারে।',
      en: '* Standard installation terms and copper piping limits as per brand policy.',
    },
  },
];

export function getActivePromotions(): Promotion[] {
  const todayStr = new Date().toISOString().split('T')[0];
  return promotions.filter((promo) => {
    if (!promo.isActive) return false;
    return promo.startDate <= todayStr && todayStr <= promo.endDate;
  });
}

export function getHomepagePromotion(): Promotion | undefined {
  const active = getActivePromotions();
  return active.find((p) => p.showOnHomepage) || active[0];
}
