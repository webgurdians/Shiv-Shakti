import { Language } from '@/types';

export const dictionary = {
  bn: {
    brandName: 'শিব শক্তি',
    brandSubtitle: 'ইলেকট্রনিক্স অ্যান্ড ফার্নিচার',
    tagline: 'স্মার্ট চিন্তা স্মার্ট জীবন',
    nav: {
      home: 'হোম',
      products: 'সমস্ত প্রোডাক্ট',
      categories: 'ক্যাটাগরি',
      offers: 'পুজো অফার',
      emi: 'সহজ কিস্তি (EMI)',
      about: 'শোরুম পরিচিতি',
      contact: 'যোগাযোগ ও লোকেশন',
      admin: 'অ্যাডমিন',
    },
    hero: {
      badge: 'কুপার্স ক্যাম্পের নিজস্ব শোরুম',
      title: 'আপনার পছন্দের ইলেকট্রনিক্স ও হোম অ্যাপ্লায়েন্স এখন কুপার্স ক্যাম্পেই',
      description:
        'সেরা ব্র্যান্ডের স্মার্ট টিভি, ফ্রিজ, এসি, ওয়াশিং মেশিন, মোবাইল ও আধুনিক ফার্নিচার — সরাসরি কুপার্স ক্যাম্প শোরুমে এসে দেখুন, যাচাই করুন এবং সহজ কিস্তিতে ঘরে নিয়ে যান।',
      viewOffers: 'বর্তমান অফার দেখুন',
      getDirections: 'দোকানে যাওয়ার পথ দেখুন',
      chatWhatsapp: 'WhatsApp করুন',
      callNow: 'সরাসরি ফোন করুন',
    },
    categoriesSection: {
      badge: 'প্রোডাক্ট ক্যাটাগরি',
      title: 'আপনার পছন্দের ক্যাটাগরি বেছে নিন',
      subtitle: 'প্রতিটি বিভাগে নামী ব্র্যান্ডের সেরা মডেল ও আকর্ষণীয় শোরুম ছাড়',
      viewAll: 'সব প্রোডাক্ট দেখুন',
    },
    promotionsSection: {
      badge: 'পুজো স্পেশাল অফার',
      exploreOffer: 'অফার দেখুন',
      validTill: 'মেয়াদ:',
      autoExpiringNotice: 'নির্দিষ্ট স্টক থাকা পর্যন্ত অফারটি প্রযোজ্য',
    },
    featuredSection: {
      badge: 'শোরুমের সেরা পছন্দ',
      title: 'জনপ্রিয় ও ট্রেন্ডিং প্রোডাক্ট',
      subtitle: 'কুপার্স ক্যাম্প শোরুমের সর্বাধিক বিক্রীত ও গ্রাহকদের বিশ্বস্ত মডেলসমূহ',
      todayPriceQuery: 'WhatsApp-এ আজকের দাম জানুন',
      viewDetails: 'বিস্তারিত দেখুন',
      emiAvailable: 'সহজ EMI সুবিধা',
      perMonth: '/ মাস থেকে শুরু',
      mrp: 'এম.আর.পি (MRP):',
      showroomPrice: 'শোরুম অফার দাম:',
      askPrice: 'আজকের সেরা দাম জানতে ক্লিক করুন',
      inStock: 'শোরুমে স্টক আছে',
      limitedStock: 'সীমিত স্টক',
    },
    financeSection: {
      badge: 'সহজ ফাইন্যান্স ও কিস্তি',
      title: 'সহজ EMI এবং Finance সুবিধা',
      subtitle:
        'বাজেটের চিন্তায় আটকে থাকবেন না। মাত্র ১৫-২০ মিনিটে সহজ ফাইন্যান্স সুবিধায় পছন্দের জিনিস নিয়ে যান ঘরে।',
      features: [
        {
          title: 'সহজ মাসিক কিস্তি (EMI)',
          desc: 'স্বল্পতম মাসিক কিস্তিতে টিভি, ফ্রিজ ও এসি কেনার দারুণ সুযোগ।',
        },
        {
          title: 'জিরো ডাউন পেমেন্ট সুবিধা',
          desc: 'যোগ্য স্কিমে কোনো অগ্রিম টাকা দেওয়া ছাড়াই পণ্য কেনার সুযোগ।',
        },
        {
          title: 'ন্যূনতম কাগজপত্র',
          desc: 'শুধু আধার কার্ড, প্যান কার্ড ও ব্যাংক অ্যাকাউন্টের তথ্যে তাৎক্ষণিক অনুমোদন।',
        },
        {
          title: 'বিশ্বস্ত ফাইন্যান্স পার্টনার',
          desc: 'বাজাজ ফিনসার্ভ, এইচডিএফসি, টিভিএস ক্রেডিট ও আইডিএক্সি ফার্স্ট ব্যাংক।',
        },
      ],
      calculatorTitle: 'আনুমানিক EMI ক্যালকুলেটর',
      calculatorSubtitle: 'পণ্যমূল্য ও কিস্তির মেয়াদ দিয়ে দেখে নিন আপনার সম্ভাব্য মাসিক খরচ',
      tenureMonths: 'মাসের কিস্তি',
      calculateEmi: 'হিসাব দেখুন',
      estimatedMonthlyEmi: 'আনুমানিক মাসিক কিস্তি:',
      disclaimer:
        '* শর্তাবলী প্রযোজ্য। সুদের হার ও কিস্তির স্কিম ফাইন্যান্স কোম্পানির নিয়মাবলী এবং গ্রাহকের CIBIL স্কোরের ওপর নির্ভর করবে।',
    },
    whyUsSection: {
      badge: 'কেন আমাদের বেছে নেবেন',
      title: 'কেন আসবেন শিব শক্তি শোরুমে?',
      subtitle:
        'অনলাইন কেনাকাটার চেয়ে সরাসরি শোরুমের নিশ্চয়তা ও স্থানীয় পরিষেবা সবসময় বেশি নির্ভরযোগ্য',
      reasons: [
        {
          title: 'স্থানীয় শোরুম',
          desc: 'কুপার্স ক্যাম্পেই অবস্থিত। পণ্য নিজের চোখে দেখে, চালিয়ে ও যাচাই করে কেনার পূর্ণ আত্মবিশ্বাস।',
        },
        {
          title: 'সহজ EMI / Finance',
          desc: 'বাজাজ ও শীর্ষস্থানীয় ব্যাংকের মাধ্যমে তাৎক্ষণিক কিস্তির সুবিধা।',
        },
        {
          title: 'বিভিন্ন ব্র্যান্ড',
          desc: 'স্যামসাং, এলজি, ভোল্টাস ইত্যাদি শীর্ষ ব্র্যান্ডের ১০০% আসল পণ্য ও কোম্পানির অফিসিয়াল ওয়ারেন্টি।',
        },
        {
          title: 'সরাসরি পণ্য দেখে কেনার সুবিধা ও বিক্রয় সহায়তা',
          desc: 'কুপার্স ক্যাম্প ও পার্শ্ববর্তী এলাকায় দ্রুত ডেলিভারি, ফিটিং ও বিক্রয়-পরবর্তী যেকোনো প্রয়োজনে সম্পূর্ণ সহায়তা।',
        },
      ],
    },
    reviewsSection: {
      badge: 'গ্রাহকদের অভিজ্ঞতা',
      title: 'Google-এ আমাদের রিভিউ দেখুন',
      subtitle: 'কুপার্স ক্যাম্প ও নদীয়া জেলার সম্মানিত ক্রেতাদের বাস্তব মতামত',
      viewAllReviews: 'Google-এ আমাদের রিভিউ দেখুন',
      writeReview: 'একটি রিভিউ লিখুন',
    },
    showroomSection: {
      badge: 'শোরুম লোকেশন',
      title: 'সরাসরি চলে আসুন আমাদের শোরুমে',
      subtitle: 'সপ্তাহের প্রতিদিন সকাল ১০টা থেকে রাত ১০টা পর্যন্ত খোলা',
      addressTitle: 'শোরুমের ঠিকানা:',
      timingsTitle: 'খোলা থাকার সময়:',
      openEveryDay: 'সকাল ১০:০০ টা – রাত ১০:০০ টা (প্রতিদিন খোলা)',
      landmarksTitle: 'ল্যান্ডমার্ক:',
      getDirectionsCta: 'Google Maps-এ দেখুন',
      callStoreCta: 'সরাসরি ফোন করুন',
    },
    stickyBar: {
      call: 'কল করুন',
      whatsapp: 'WhatsApp',
      directions: 'দোকানে আসুন',
    },
    footer: {
      aboutText:
        'শিব শক্তি ইলেকট্রনিক্স অ্যান্ড ফার্নিচার — কুপার্স ক্যাম্পের অন্যতম শীর্ষ ও নির্ভরযোগ্য ইলেকট্রনিক্স এবং ফার্নিচার শোরুম। আপনার পরিবারের স্মার্ট জীবনযাত্রার বিশ্বস্ত ঠিকানা।',
      quickLinks: 'প্রয়োজনীয় লিংক',
      categories: 'প্রোডাক্ট ক্যাটাগরি',
      contactInfo: 'যোগাযোগ ও সময়সূচী',
      copyright: 'সর্বস্বত্ব সংরক্ষিত © ২০২৬ শিব শক্তি ইলেকট্রনিক্স অ্যান্ড ফার্নিচার।',
      developedWith: 'রিকশা স্ট্যান্ড মোড়ের কাছে, কুপার্স বাজার, কুপার্স ক্যাম্প, নদীয়া ৭৪১২৩২',
    },
    common: {
      all: 'সমস্ত',
      viewMore: 'আরও দেখুন',
      close: 'বন্ধ করুন',
      back: 'পেছনে যান',
      specifications: 'প্রযুক্তিগত স্পেসিফিকেশন ও বিবরণ',
      modelNumber: 'মডেল নম্বর',
      brand: 'ব্র্যান্ড',
      share: 'শেয়ার করুন',
      copied: 'লিংক কপি করা হয়েছে!',
    },
  },
  en: {
    brandName: 'Shiv Shakti',
    brandSubtitle: 'Electronics and Furniture',
    tagline: 'Smart Thinking Smart Living',
    nav: {
      home: 'Home',
      products: 'All Products',
      categories: 'Categories',
      offers: 'Puja Offers',
      emi: 'Easy EMI & Finance',
      about: 'About Showroom',
      contact: 'Contact & Directions',
      admin: 'Admin',
    },
    hero: {
      badge: "Cooper's Camp Trusted Showroom",
      title: 'Your Favorite Electronics & Home Appliances Now in Cooper’s Camp',
      description:
        'Explore top-brand Smart LED TVs, Inverter ACs, Refrigerators, Washing Machines, 5G Mobiles, and Solid Wood Furniture. Touch, experience live demos, and take home with hassle-free EMI.',
      viewOffers: 'View Current Offers',
      getDirections: 'Get Showroom Directions',
      chatWhatsapp: 'WhatsApp Us',
      callNow: 'Call Showroom',
    },
    categoriesSection: {
      badge: 'Product Categories',
      title: 'Explore By Department',
      subtitle: 'Best brands, official company warranties, and special showroom deals',
      viewAll: 'View All Products',
    },
    promotionsSection: {
      badge: 'Puja Special Offer',
      exploreOffer: 'View Offers',
      validTill: 'Offer Validity:',
      autoExpiringNotice: 'Valid strictly while promotional stock lasts',
    },
    featuredSection: {
      badge: 'Showroom Highlights',
      title: 'Featured & Trending Products',
      subtitle: "Top-selling electronics and furniture handpicked for Cooper's Camp customers",
      todayPriceQuery: "Ask Today's Best Price on WhatsApp",
      viewDetails: 'View Product Details',
      emiAvailable: 'Easy EMI Available',
      perMonth: '/ month onwards',
      mrp: 'M.R.P:',
      showroomPrice: 'Showroom Offer Price:',
      askPrice: "Click for Today's Best Price",
      inStock: 'In Stock at Showroom',
      limitedStock: 'Limited Stock Remaining',
    },
    financeSection: {
      badge: 'Easy Financing & Installments',
      title: 'Hassle-Free EMI & Consumer Finance',
      subtitle:
        'Upgrade your lifestyle without budgetary strain. Get instant finance approval in under 20 minutes.',
      features: [
        {
          title: 'Easy Installment Schemes',
          desc: 'Flexible monthly tenures from 3 to 24 months on TVs, Fridges, and ACs.',
        },
        {
          title: 'Zero Down Payment Options',
          desc: 'Take home qualifying appliances immediately without hefty upfront cash.',
        },
        {
          title: 'Minimal Documentation',
          desc: 'Instant Aadhaar, PAN card, and bank verification on the showroom spot.',
        },
        {
          title: 'Trusted Finance Partners',
          desc: 'Official partner with Bajaj Finserv, HDB Financial, TVS Credit, and IDFC FIRST Bank.',
        },
      ],
      calculatorTitle: 'Estimated EMI Calculator',
      calculatorSubtitle: 'Select product value and tenure to calculate your approximate monthly payment',
      tenureMonths: 'Months Tenure',
      calculateEmi: 'Calculate',
      estimatedMonthlyEmi: 'Estimated Monthly Installment:',
      disclaimer:
        '* Note: Interest rates, zero down payment eligibility, and processing fees are subject to applicant CIBIL score and partnering financier approval policies.',
    },
    whyUsSection: {
      badge: 'Why Choose Us',
      title: 'Why Visit Shiv Shakti Over Online Shopping?',
      subtitle: 'Experience true peace of mind with local physical presence and dependable after-sales care',
      reasons: [
        {
          title: 'Local Showroom',
          desc: 'Located right in Cooper\'s Camp. Inspect screen brightness, cooling speed, and woodwork before paying a single rupee.',
        },
        {
          title: 'Easy EMI / Finance',
          desc: 'Instant zero-downpayment and low-cost installment schemes backed by major financial institutions.',
        },
        {
          title: 'Multiple Leading Brands',
          desc: 'Authorised supply from Samsung, LG, Voltas, and top manufacturers with valid GST invoices and official brand coverage.',
        },
        {
          title: 'Live Demo & Dedicated After-Sales Support',
          desc: 'Same-day delivery, expert installation setup, and face-to-face assistance right at our showroom counter.',
        },
      ],
    },
    reviewsSection: {
      badge: 'Customer Feedback',
      title: 'What Customers Say On Google',
      subtitle: "Authentic Google reviews from Cooper's Camp and neighboring communities",
      viewAllReviews: 'See All Google Reviews',
      writeReview: 'Write a Review',
    },
    showroomSection: {
      badge: 'Showroom Location',
      title: 'Visit Our Cooper’s Camp Showroom',
      subtitle: 'Welcoming you 7 days a week with expert guidance',
      addressTitle: 'Store Address:',
      timingsTitle: 'Opening Hours:',
      openEveryDay: '10:00 AM – 10:00 PM (Open Everyday)',
      landmarksTitle: 'Landmark:',
      getDirectionsCta: 'Open in Google Maps',
      callStoreCta: 'Call Showroom Directly',
    },
    stickyBar: {
      call: 'Call Now',
      whatsapp: 'WhatsApp',
      directions: 'Directions',
    },
    footer: {
      aboutText:
        'Shiv Shakti Electronics and Furniture — Cooper’s Camp’s premier electronics and home furnishing destination. Empowering smart living with dependable appliances.',
      quickLinks: 'Quick Links',
      categories: 'Categories',
      contactInfo: 'Contact & Timings',
      copyright: 'All Rights Reserved © 2026 Shiv Shakti Electronics & Furniture.',
      developedWith: 'Near Riksha Stand More, Coopers Camp, Nadia, WB 741232',
    },
    common: {
      all: 'All',
      viewMore: 'View More',
      close: 'Close',
      back: 'Back',
      specifications: 'Technical Specifications',
      modelNumber: 'Model No.',
      brand: 'Brand',
      share: 'Share',
      copied: 'Link copied to clipboard!',
    },
  },
};

export function getDictionary(lang: Language = 'bn') {
  return dictionary[lang] || dictionary.bn;
}
