import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'prod-tv-samsung-55',
    slug: 'samsung-55-inch-4k-smart-tv',
    category: 'televisions',
    brand: 'Samsung',
    modelNumber: 'UA55DUE770KLXL',
    name: {
      bn: 'স্যামসাং ৫৫ ইঞ্চি ৪কে স্মার্ট টিভি',
      en: 'Samsung 55-inch 4K Smart TV',
    },
    shortDescription: {
      bn: 'ক্রিস্টাল প্রসেসর 4K, বেজেল-লেস ডিজাইন এবং ডলবি ডিজিটাল প্লাস সাউন্ড। কুপার্স ক্যাম্প শোরুমে সরাসরি লাইভ ডেমো দেখে কিনুন।',
      en: 'Crystal 4K processor, bezel-less immersive display, and Dolby Digital Plus audio. Live demo available in Cooper\'s Camp.',
    },
    mrp: 64900,
    offerPrice: 43990,
    showPrice: true,
    emiAvailable: true,
    emiStartingPerMonth: 2440,
    stockStatus: 'in_stock',
    badge: {
      bn: 'পুজো স্পেশাল অফার',
      en: 'Puja Special Offer',
    },
    images: [
      '/images/products/samsung-55-tv.jpg',
    ],
    specs: [
      {
        groupName: { bn: 'ডিসপ্লে ও অডিও', en: 'Display Specifications' },
        items: [
          { key: { bn: 'স্ক্রিন সাইজ', en: 'Screen Size' }, value: '55 Inch (138 cm)' },
          { key: { bn: 'রেজোলিউশন', en: 'Resolution' }, value: '4K Ultra HD (3840 x 2160)' },
          { key: { bn: 'সাউন্ড আউটপুট', en: 'Speaker Output' }, value: '20 Watts Dolby Digital' },
          { key: { bn: 'স্মার্ট ওএস', en: 'Operating System' }, value: 'Tizen OS with OTT Apps' },
        ],
      },
      {
        groupName: { bn: 'ওয়ারেন্টি ও ডেলিভারি', en: 'Warranty & Support' },
        items: [
          { key: { bn: 'ব্র্যান্ড ওয়ারেন্টি', en: 'Manufacturer Warranty' }, value: '1 Year Comprehensive + 1 Year on Panel' },
          { key: { bn: 'ডেলিভারি', en: 'Delivery' }, value: 'Same Day / Next Day in Cooper\'s Camp & Nadia' },
        ],
      },
    ],
    featured: true,
    activePromotionId: 'puja-mega-sale-2026',
    seoTitle: {
      bn: 'স্যামসাং ৫৫ ইঞ্চি ৪কে স্মার্ট টিভি কুপার্স ক্যাম্প | Shiv Shakti Electronics',
      en: 'Samsung 55-inch 4K Smart TV in Cooper\'s Camp | Shiv Shakti Electronics',
    },
    metaDescription: {
      bn: 'কুপার্স ক্যাম্পে স্যামসাং ৫৫ ইঞ্চি ৪কে স্মার্ট টিভি কিনুন সেরা অফার দামে ও সহজ কিস্তিতে শিব শক্তি ইলেকট্রনিক্স থেকে।',
      en: 'Buy Samsung 55-inch 4K Smart TV in Cooper\'s Camp with official warranty and easy zero down-payment EMI options.',
    },
  },
  {
    id: 'prod-tv-lg-43',
    slug: 'lg-43-inch-4k-uhd-smart-tv',
    category: 'televisions',
    brand: 'LG',
    modelNumber: '43UR7500PSC',
    name: {
      bn: 'এলজি ৪৩ ইঞ্চি ৪কে স্মার্ট টিভি',
      en: 'LG 43-inch 4K Smart TV',
    },
    shortDescription: {
      bn: 'α5 AI প্রসেসর 4K Gen6, WebOS 23 এবং ম্যাজিক রিমোট সাপোর্ট। পরিবারের বিনোদনের জন্য সেরা টিভি।',
      en: 'α5 AI Processor 4K Gen6, WebOS 23, and Magic Remote ready. Ideal family smart entertainment.',
    },
    mrp: 49990,
    offerPrice: 31990,
    showPrice: true,
    emiAvailable: true,
    emiStartingPerMonth: 1780,
    stockStatus: 'in_stock',
    badge: {
      bn: 'পুজো স্পেশাল অফার',
      en: 'Puja Special Offer',
    },
    images: [
      '/images/products/lg-43-tv.png',
    ],
    specs: [
      {
        groupName: { bn: 'ডিসপ্লে ও অডিও', en: 'Display & Audio' },
        items: [
          { key: { bn: 'স্ক্রিন সাইজ', en: 'Screen Size' }, value: '43 Inch (108 cm)' },
          { key: { bn: 'প্রসেসর', en: 'Processor' }, value: 'α5 AI Processor 4K' },
          { key: { bn: 'সাউন্ড', en: 'Sound' }, value: '20W AI Sound Pro' },
        ],
      },
    ],
    featured: true,
    activePromotionId: 'puja-mega-sale-2026',
  },
  {
    id: 'prod-ac-voltas-1-5',
    slug: 'voltas-1-5-ton-3-star-inverter-split-ac',
    category: 'air-conditioners',
    brand: 'Voltas',
    modelNumber: '183V Vectra Prism',
    name: {
      bn: 'ভোল্টাস ১.৫ টন ইনভার্টার স্প্লিট এসি',
      en: 'Voltas 1.5 Ton Inverter Split AC',
    },
    shortDescription: {
      bn: '৪-ইন-১ অ্যাডজাস্টেবল কুলিং মোড, ১০০% কপার কনডেন্সার এবং অ্যান্টি-মাইক্রোবিয়াল ফিল্টার।',
      en: 'Adjustable 4-in-1 cooling modes, 100% copper condenser, and turbo cooling for intense summers.',
    },
    mrp: 62990,
    offerPrice: 36990,
    showPrice: true,
    emiAvailable: true,
    emiStartingPerMonth: 2050,
    stockStatus: 'in_stock',
    badge: {
      bn: 'গরমের অফার',
      en: 'Summer Super Saver',
    },
    images: [
      '/images/products/hyundai-split-ac.jpg',
    ],
    specs: [
      {
        groupName: { bn: 'কুলিং ও পাওয়ার', en: 'Cooling Performance' },
        items: [
          { key: { bn: 'ক্যাপাসিটি', en: 'Tonnage' }, value: '1.5 Ton (150-180 sq ft)' },
          { key: { bn: 'স্টার রেটিং', en: 'Energy Rating' }, value: '3 Star BEE' },
          { key: { bn: 'কনডেন্সার', en: 'Condenser Coil' }, value: '100% Copper with Anti-Rust' },
          { key: { bn: 'ওয়ারেন্টি', en: 'Warranty' }, value: '10 Years on Inverter Compressor' },
        ],
      },
    ],
    featured: true,
    activePromotionId: 'summer-comfort-sale',
  },
  {
    id: 'prod-ac-lg-1-5-5star',
    slug: 'lg-1-5-ton-5-star-dual-inverter-ac',
    category: 'air-conditioners',
    brand: 'LG',
    modelNumber: 'TS-Q19YNZE',
    name: {
      bn: 'এলজি ১.৫ টন ৫-স্টার ইনভার্টার এসি',
      en: 'LG 1.5 Ton 5-Star Dual Inverter AC',
    },
    shortDescription: {
      bn: 'সুপার এনার্জি সেভার ৫-স্টার রেটিং, ওশেন ব্ল্যাক প্রোটেকশন এবং এআই ৬-ইন-১ কনভার্টিবল কুলিং।',
      en: 'High energy efficiency 5-star rating, Ocean Black protection, and AI Convertible 6-in-1 modes.',
    },
    mrp: 75990,
    offerPrice: 45990,
    showPrice: true,
    emiAvailable: true,
    emiStartingPerMonth: 2550,
    stockStatus: 'in_stock',
    images: [
      '/images/products/lg-dual-inverter-ac.jpg',
    ],
    specs: [
      {
        groupName: { bn: 'স্পেসিফিকেশন', en: 'Specifications' },
        items: [
          { key: { bn: 'ক্যাপাসিটি', en: 'Capacity' }, value: '1.5 Ton' },
          { key: { bn: 'স্টার রেটিং', en: 'Star Rating' }, value: '5 Star BEE' },
          { key: { bn: 'কনভার্টিবল মোড', en: 'Convertible Modes' }, value: 'AI 6-in-1' },
        ],
      },
    ],
    featured: false,
  },
  {
    id: 'prod-fridge-whirlpool-265',
    slug: 'whirlpool-265l-double-door-refrigerator',
    category: 'refrigerators',
    brand: 'Whirlpool',
    modelNumber: 'NEOFRESH 278H',
    name: {
      bn: 'হুইর্লপুল ২৬৫ লিটার ডাবল ডোর ফ্রিজ',
      en: 'Whirlpool 265L Double Door Refrigerator',
    },
    shortDescription: {
      bn: '১২ দিনের বাগানের মতো টাটকা রাখার প্রযুক্তি, ফ্রস্ট ফ্রি কুলিং এবং দ্রুত বরফ তৈরির সুবিধা।',
      en: 'Up to 12 days of garden freshness, Microblock antibacterial technology, and deep freeze chilling.',
    },
    mrp: 38990,
    offerPrice: 26490,
    showPrice: true,
    emiAvailable: true,
    emiStartingPerMonth: 1470,
    stockStatus: 'in_stock',
    badge: {
      bn: 'পুজো স্পেশাল অফার',
      en: 'Puja Special Offer',
    },
    images: [
      '/images/products/double-door-fridge.jpg',
    ],
    specs: [
      {
        groupName: { bn: 'ফ্রিজের স্পেসিফিকেশন', en: 'Refrigerator Details' },
        items: [
          { key: { bn: 'ক্যাপাসিটি', en: 'Capacity' }, value: '265 Litres' },
          { key: { bn: 'টাইপ', en: 'Defrosting Type' }, value: 'Frost Free Double Door' },
          { key: { bn: 'স্টার রেটিং', en: 'Energy Rating' }, value: '3 Star BEE' },
          { key: { bn: 'কম্প্রেসার ওয়ারেন্টি', en: 'Warranty' }, value: '10 Years on Compressor' },
        ],
      },
    ],
    featured: true,
    activePromotionId: 'puja-mega-sale-2026',
  },
  {
    id: 'prod-wm-lg-7kg',
    slug: 'lg-7kg-5-star-smart-inverter-washing-machine',
    category: 'washing-machines',
    brand: 'LG',
    modelNumber: 'T70SPSF2Z',
    name: {
      bn: 'এলজি ৭ কেজি ইনভার্টার ওয়াশিং মেশিন',
      en: 'LG 7.0 Kg Inverter Washing Machine',
    },
    shortDescription: {
      bn: 'টার্বোড্রাম প্রযুক্তি, স্টেইনলেস স্টিল ওয়াশ টাব এবং বিদ্যুৎ সাশ্রয়ী ৫-স্টার স্মার্ট ইনভার্টার মোটর।',
      en: 'Smart Motion, TurboDrum technology, and stainless steel wash tub with 5-star energy saving.',
    },
    mrp: 24990,
    offerPrice: 17490,
    showPrice: true,
    emiAvailable: true,
    emiStartingPerMonth: 970,
    stockStatus: 'in_stock',
    images: [
      '/images/products/lg-washing-machine.jpg',
    ],
    specs: [
      {
        groupName: { bn: 'ওয়াশিং মেশিন স্পেসিফিকেশন', en: 'Washing Specs' },
        items: [
          { key: { bn: 'ক্যাপাসিটি', en: 'Capacity' }, value: '7.0 Kg' },
          { key: { bn: 'মোটর', en: 'Motor Type' }, value: 'Smart Inverter Motor' },
          { key: { bn: 'স্টার রেটিং', en: 'Energy Rating' }, value: '5 Star' },
        ],
      },
    ],
    featured: true,
  },
  {
    id: 'prod-mob-apple-iphone-15',
    slug: 'apple-iphone-15-128gb',
    category: 'mobiles',
    brand: 'Apple',
    modelNumber: 'iPhone 15 128GB',
    name: {
      bn: 'অ্যাপল আইফোন ১৫ (১২৮ জিবি)',
      en: 'Apple iPhone 15 (128 GB)',
    },
    shortDescription: {
      bn: 'ডায়নামিক আইল্যান্ড, ৪৮ মেগাপিক্সেল মেইন ক্যামেরা, এ১৬ বায়োনিক চিপ এবং ইউএসবি-সি পোর্ট। আসল ব্র্যান্ড সিল্ড প্যাক।',
      en: 'Dynamic Island, 48MP main camera, A16 Bionic powerhouse chip, and USB-C connectivity.',
    },
    mrp: 79900,
    offerPrice: 65990,
    showPrice: true,
    emiAvailable: true,
    emiStartingPerMonth: 3660,
    stockStatus: 'in_stock',
    badge: {
      bn: 'বেস্ট সেলার',
      en: 'Best Seller',
    },
    images: [
      '/images/products/iphone-15.jpg',
    ],
    specs: [
      {
        groupName: { bn: 'স্মার্টফোন স্পেসিফিকেশন', en: 'Phone Specs' },
        items: [
          { key: { bn: 'ডিসপ্লে', en: 'Display' }, value: '6.1-inch Super Retina XDR' },
          { key: { bn: 'প্রসেসর', en: 'Processor' }, value: 'A16 Bionic Chip' },
          { key: { bn: 'ক্যামেরা', en: 'Camera' }, value: '48MP Main + 12MP Ultra Wide' },
          { key: { bn: 'স্টোরেজ', en: 'Storage' }, value: '128 GB' },
        ],
      },
    ],
    featured: true,
  },
  {
    id: 'prod-mob-samsung-s24',
    slug: 'samsung-galaxy-s24-5g',
    category: 'mobiles',
    brand: 'Samsung',
    modelNumber: 'Galaxy S24 5G 8GB/128GB',
    name: {
      bn: 'স্যামসাং গ্যালাক্সি এস২৪ ৫G',
      en: 'Samsung Galaxy S24 5G',
    },
    shortDescription: {
      bn: 'গ্যালাক্সি এআই (Galaxy AI) ফিচার, ৫০ মেগাপিক্সেল নাইটোগ্রাফি ক্যামেরা এবং ডায়নামিক অ্যামোলেড ২এক্স ডিসপ্লে।',
      en: 'Galaxy AI capabilities, 50MP pro-grade nightography camera, and Dynamic AMOLED 2X.',
    },
    mrp: 79999,
    offerPrice: 64999,
    showPrice: true,
    emiAvailable: true,
    emiStartingPerMonth: 3610,
    stockStatus: 'in_stock',
    images: [
      '/images/products/galaxy-s24.png',
    ],
    specs: [
      {
        groupName: { bn: 'মোবাইল স্পেসিফিকেশন', en: 'Mobile Specifications' },
        items: [
          { key: { bn: 'ডিসপ্লে', en: 'Display' }, value: '6.2-inch FHD+ 120Hz AMOLED' },
          { key: { bn: 'র‍্যাম / স্টোরেজ', en: 'RAM / Storage' }, value: '8 GB RAM / 128 GB Storage' },
          { key: { bn: 'ব্যাটারি', en: 'Battery' }, value: '4000 mAh' },
        ],
      },
    ],
    featured: true,
  },
  {
    id: 'prod-app-philips-mixer',
    slug: 'philips-750w-mixer-grinder',
    category: 'home-appliances',
    brand: 'Philips',
    modelNumber: 'HL7756/00',
    name: {
      bn: 'ফিলিপস ৭৫০ ওয়াট মিক্সার গ্রাইন্ডার',
      en: 'Philips 750-Watt Mixer Grinder',
    },
    shortDescription: {
      bn: 'শক্তিশালী ৭৫০W মোটর, উন্নত এয়ার ভেন্টিলেশন এবং ৩টি স্টেইনলেস স্টিল জার।',
      en: 'Powerful 750W motor with advanced air ventilation system and leak-proof stainless steel jars.',
    },
    mrp: 5295,
    offerPrice: 3499,
    showPrice: true,
    emiAvailable: false,
    stockStatus: 'in_stock',
    images: [
      '/images/products/mixer-grinder.jpg',
    ],
    specs: [
      {
        groupName: { bn: 'যন্ত্রের বিবরণ', en: 'Appliance Details' },
        items: [
          { key: { bn: 'ওয়াটেজ', en: 'Wattage' }, value: '750 Watts' },
          { key: { bn: 'জার সংখ্যা', en: 'No. of Jars' }, value: '3 Stainless Steel Jars' },
          { key: { bn: 'ওয়ারেন্টি', en: 'Warranty' }, value: '2 Years Manufacturer Warranty' },
        ],
      },
    ],
    featured: true,
  },
  {
    id: 'prod-furn-teak-bed',
    slug: 'royal-teak-finish-king-size-bed',
    category: 'furniture',
    brand: 'Shiv Shakti Woodcraft',
    modelNumber: 'SS-BED-KB01',
    name: {
      bn: 'সেগুন ফিনিশ কিং সাইজ বক্স খাট',
      en: 'Royal Teak Finish King Size Bed with Storage',
    },
    shortDescription: {
      bn: 'মজবুত কাঠ ও প্রিমিয়াম সেগুন ফিনিশ, বিশাল বক্স স্টোরেজ এবং আধুনিক হেডবোর্ড ডিজাইন।',
      en: 'Solid wood construction with teak finish, spacious hydraulic box storage, and modern padded headboard.',
    },
    mrp: 38000,
    offerPrice: 27500,
    showPrice: true,
    emiAvailable: true,
    emiStartingPerMonth: 1520,
    stockStatus: 'in_stock',
    badge: {
      bn: 'শোরুম চয়েস',
      en: 'Showroom Choice',
    },
    images: [
      '/images/products/wooden-bed.jpg',
    ],
    specs: [
      {
        groupName: { bn: 'ফার্নিচার বিবরণ', en: 'Furniture Details' },
        items: [
          { key: { bn: 'সাইজ', en: 'Dimensions' }, value: 'King Size (78" x 72")' },
          { key: { bn: 'কাঠ ও ফিনিশ', en: 'Primary Material' }, value: 'Engineered Hardwood with Teak Polish' },
          { key: { bn: 'স্টোরেজ', en: 'Storage' }, value: 'Dual Box Storage' },
          { key: { bn: 'ডেলিভারি', en: 'Delivery & Assembly' }, value: 'Free local delivery & setup in Cooper\'s Camp & Ranaghat' },
        ],
      },
    ],
    featured: true,
    activePromotionId: 'puja-mega-sale-2026',
  },
  {
    id: 'prod-furn-l-sofa',
    slug: 'modern-5-seater-fabric-l-shape-sofa',
    category: 'furniture',
    brand: 'Shiv Shakti Woodcraft',
    modelNumber: 'SS-SOFA-L05',
    name: {
      bn: 'আধুনিক ৫ সিটার এল-শেপ সোফা সেট',
      en: 'Modern 5-Seater Fabric L-Shape Sofa Set',
    },
    shortDescription: {
      bn: 'উচ্চ ঘনত্বের ফোম কুশনিং, টেকসই অ্যান্টি-স্টেইন ফ্যাব্রিক এবং আরামদায়ক বসার অভিজ্ঞতা।',
      en: 'High density foam cushioning, anti-stain durable upholstery, and comfortable lounge ergonomics.',
    },
    mrp: 36000,
    offerPrice: 24900,
    showPrice: true,
    emiAvailable: true,
    emiStartingPerMonth: 1380,
    stockStatus: 'in_stock',
    images: [
      '/images/products/living-sofa.jpg',
    ],
    specs: [
      {
        groupName: { bn: 'সোফার বিবরণ', en: 'Sofa Details' },
        items: [
          { key: { bn: 'আসন সংখ্যা', en: 'Seating Capacity' }, value: '5 Persons (3 Seater + Lounger)' },
          { key: { bn: 'ফ্যাব্রিক', en: 'Fabric' }, value: 'Premium Suede Grey/Navy Blue' },
          { key: { bn: 'ফ্রেম', en: 'Frame' }, value: 'Termite Treated Solid Sal Wood' },
        ],
      },
    ],
    featured: true,
  },
];
