import { Review } from '@/types';

export const reviews: Review[] = [
  {
    id: 'rev-01',
    author: 'Subhashish Ghosh',
    locality: "Cooper's Camp Bazar",
    rating: 5,
    text: {
      bn: 'কুপার্স ক্যাম্পে এত বড় আর সুন্দর শোরুম সত্যিই দরকার ছিল। স্যামসাং ৫৫ ইঞ্চি টিভি কিনেছি পুজোর অফারে, খুব ভালো দাম পেয়েছি আর বাজাজ ফাইন্যান্সের সহজ কিস্তিতে সাথে সাথেই অনুমোদন হয়ে গেছে।',
      en: 'A fantastic electronics showroom in Cooper\'s Camp. Bought a Samsung 55" TV during the festive sale at an unbeatable price. Bajaj Finserv EMI was approved within 20 minutes!',
    },
    date: '2026-08-28',
    verified: true,
  },
  {
    id: 'rev-02',
    author: 'Priyanka Biswas',
    locality: 'Ranaghat',
    rating: 5,
    text: {
      bn: 'দোকানের মালিক ও কর্মীদের ব্যবহার খুবই নম্র। ভোল্টাস এসি নিয়েছিলাম, পরের দিন সকালেই বাড়িতে এসে ফিটিং করে দিয়ে গেছে। কোনো বাড়তি ঝামেলা নেই।',
      en: 'Very polite and helpful staff. Purchased a Voltas inverter AC and their installation team delivered and fitted it the very next morning without hassle.',
    },
    date: '2026-08-15',
    verified: true,
  },
  {
    id: 'rev-03',
    author: 'Bikram Mondal',
    locality: 'Taherpur / Cooper\'s Camp',
    rating: 5,
    text: {
      bn: 'ফার্নিচারের কালেকশন খুব মজবুত আর ডিজাইনও আধুনিক। আমাদের ঘরের জন্য সেগুন ফিনিশ খাট আর আলমারি নিয়েছি। লোকাল শোরুম হওয়াতে আফটার সেলস সার্ভিস নিয়ে কোনো চিন্তা নেই।',
      en: 'Great furniture collection with solid wood finishing. Bought a king-size bed and wardrobe. Being a local showroom, after-sales service and delivery are completely stress-free.',
    },
    date: '2026-07-30',
    verified: true,
  },
  {
    id: 'rev-04',
    author: 'Debabrata Roy',
    locality: 'Cooper\'s Camp Station Road',
    rating: 5,
    text: {
      bn: 'অনলাইনের চেয়ে এখানে সামনাসামনি দেখে যাচাই করে কেনার আত্মবিশ্বাস আলাদা। ফ্রিজ আর ওয়াশিং মেশিনে অনেক ছাড় পেয়েছি। ধন্যবাদ শিব শক্তি!',
      en: 'Buying in person with a live showroom demo gives far more confidence than ordering online. Got great offers on refrigerator and washing machine.',
    },
    date: '2026-07-12',
    verified: true,
  },
];
