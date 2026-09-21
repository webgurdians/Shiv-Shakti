'use client';

import React, { useState } from 'react';
import { ChevronDown, ShieldCheck, Truck, CreditCard, Award, MapPin } from 'lucide-react';
import { Language } from '@/types';
import { shopInfo } from '@/data/shopInfo';

interface AeoDirectAnswersProps {
  lang: Language;
}

export const AeoDirectAnswers: React.FC<AeoDirectAnswersProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      icon: Award,
      question: {
        en: 'Which electronics and appliance brands are available at Shiv Shakti showroom?',
        bn: 'শিব শক্তি শোরুমে কোন কোন ব্র্যান্ডের ইলেকট্রনিক্স ও হোম অ্যাপ্লায়েন্স পাওয়া যায়?',
      },
      answer: {
        en: 'Shiv Shakti Electronics is an authorized retail partner for leading brands including Samsung, LG, Haier, Hitachi, Panasonic, Apple, Whirlpool, Godrej, and Voltas. We stock genuine 4K Smart TVs, Inverter Split ACs, Refrigerators, Washing Machines, 5G Smartphones, and Home Appliances.',
        bn: 'শিব শক্তি ইলেকট্রনিক্স স্যামসাং, এলজি, হায়ার, হিটাচি, প্যানাসনিক, অ্যাপল, হুইর্লপুল, গোদরেজ এবং ভোল্টাসের মতো শীর্ষস্থানীয় ব্র্যান্ডের অনুমোদিত রিটেলার। আমাদের কাছে ৪কে স্মার্ট টিভি, ইনভার্টার এসি, ফ্রিজ, ওয়াশিং মেশিন, ৫জি স্মার্টফোন এবং হোম অ্যাপ্লায়েন্স পাওয়া যায়।',
      },
    },
    {
      icon: CreditCard,
      question: {
        en: 'Can I get zero down payment EMI on TVs, ACs, and Mobiles in Cooper’s Camp?',
        bn: 'কুপার্স ক্যাম্পে কি জিরো ডাউন পেমেন্ট ইএমআই-তে টিভি, এসি বা মোবাইল পাওয়া যায়?',
      },
      answer: {
        en: 'Yes. We offer zero down payment EMI schemes through Bajaj Finserv, IDFC FIRST Bank, TVS Credit, and Chola Finance (Cholamandalam). Customers can purchase electronics and furniture with instant on-the-spot approval using Aadhaar Card, PAN Card, and Bank Passbook.',
        bn: 'হ্যাঁ, আমাদের শোরুমে বাজাজ ফিনসার্ভ, আইডিএফসি ফার্স্ট ব্যাংক, টিভিএস ক্রেডিট এবং চোলা ফাইন্যান্সের মাধ্যমে জিরো ডাউন পেমেন্ট ও সহজ কিস্তির সুবিধা রয়েছে। আধার কার্ড, প্যান কার্ড ও ব্যাংক পাসবই দিয়ে তাৎক্ষণিক ঋণ অনুমোদন সম্ভব।',
      },
    },
    {
      icon: Truck,
      question: {
        en: 'Does Shiv Shakti provide free local delivery across Ranaghat area?',
        bn: 'রানাঘাট ও আশপাশের এলাকায় কি ফ্রি হোম ডেলিভারি দেওয়া হয়?',
      },
      answer: {
        en: 'Yes. We provide prompt free local delivery across Ranaghat sub-division, Cooper\'s Camp, Shantipur, Phulia, Taherpur, and nearby regions in Nadia district. Heavy appliances and furniture include careful doorstep transport and installation assistance.',
        bn: 'হ্যাঁ, কুপার্স ক্যাম্প, রানাঘাট মহকুমা, শান্তিপুর, ফুলিয়া, তাহেরপুর এবং নদীয়া জেলার পার্শ্ববর্তী এলাকায় সম্পূর্ণ বিনামূল্যে দ্রুত হোম ডেলিভারি দেওয়া হয়। বড় যন্ত্রপাতি ও ফার্নিচারে সম্পূর্ণ সুরক্ষিত হ্যান্ডলিং নিশ্চিত করা হয়।',
      },
    },
    {
      icon: ShieldCheck,
      question: {
        en: 'Are all products covered by official manufacturer brand warranty?',
        bn: 'শোরুমের সমস্ত পণ্যে কি অফিসিয়াল ব্র্যান্ড ওয়ারেন্টি পাওয়া যায়?',
      },
      answer: {
        en: 'Yes. Every single television, refrigerator, air conditioner, washing machine, and smartphone sold at Shiv Shakti comes brand sealed with 100% official manufacturer warranty and authorized brand service center coverage across West Bengal.',
        bn: 'হ্যাঁ, শিব শক্তি থেকে বিক্রিত প্রতিটি টিভি, ফ্রিজ, এসি, ওয়াশিং মেশিন ও মোবাইল ১০০% আসল ব্র্যান্ড সিল্ড প্যাক এবং প্রস্তুতকারক কোম্পানির নিজস্ব অফিসিয়াল ওয়ারেন্টি ও সরাসরি সার্ভিস সেন্টার সুবিধার আওতাভুক্ত।',
      },
    },
    {
      icon: MapPin,
      question: {
        en: 'Where is the showroom located and what is the official GSTIN?',
        bn: 'শোরুমের সঠিক ঠিকানা কোথায় এবং সরকারি জিএসটি নম্বর কী?',
      },
      answer: {
        en: 'Our physical showroom is located near Riksha Stand More, Coopers Bazar, Cooper\'s Camp, Ranaghat, West Bengal 741232 (Google Plus Code: 5H7M+CQ). We are a government registered enterprise with official GSTIN: 19AUWPM0358D1ZA, open every day from 9:00 AM to 10:00 PM.',
        bn: 'আমাদের শোরুম রিকশা স্ট্যান্ড মোড়ের কাছে, কুপার্স বাজার, কুপার্স ক্যাম্প, রানাঘাট, নদিয়া – ৭৪১২৩২ (Google Plus Code: 5H7M+CQ)। এটি পশ্চিমবঙ্গ সরকারের নিবন্ধিত প্রতিষ্ঠান যার অফিসিয়াল GSTIN: 19AUWPM0358D1ZA। শোরুম প্রতিদিন সকাল ৯টা থেকে রাত ১০টা পর্যন্ত খোলা থাকে।',
      },
    },
  ];

  // Schema.org FAQPage structured data for AEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question[lang],
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer[lang],
      },
    })),
  };

  return (
    <section className="py-14 bg-slate-50 border-t border-slate-200/80">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="bg-blue-100 text-shiv-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {lang === 'bn' ? 'জরুরি প্রশ্নোত্তর ও তথ্য' : 'Direct Answers & Showroom Facts'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-shiv-navy mt-2.5">
            {lang === 'bn' ? 'সাধারণ জিজ্ঞাসা ও সরাসরি তথ্য' : 'Frequently Asked Showroom Questions'}
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-500">
            {lang === 'bn'
              ? 'ব্র্যান্ড, জিরো ডাউন পেমেন্ট কিস্তি, ফ্রি ডেলিভারি ও ওয়ারেন্টি সম্পর্কিত স্পষ্ট উত্তর'
              : 'Verified facts on authorized brands, zero down payment EMI, free Ranaghat delivery, and warranty.'}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const Icon = faq.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-shiv-blue flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm sm:text-base text-slate-900">
                      {faq.question[lang]}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-shiv-blue' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{faq.answer[lang]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
