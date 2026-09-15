'use client';

import React from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyBottomBar } from '@/components/StickyBottomBar';
import { StoreLocationSection } from '@/components/StoreLocationSection';
import { Language } from '@/types';
import { getDictionary } from '@/data/dictionary';
import { ShieldCheck, Sparkles, Users, Award } from 'lucide-react';

interface AboutViewProps {
  lang: Language;
}

export const AboutView: React.FC<AboutViewProps> = ({ lang }) => {
  const dict = getDictionary(lang);

  return (
    <>
      <Header lang={lang} />
      <main className="flex-grow bg-slate-50 min-h-screen py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Hero Story Banner */}
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="bg-blue-50 text-shiv-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {dict.nav.about}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-shiv-navy tracking-tight leading-tight">
                {lang === 'bn'
                  ? 'কুপার্স ক্যাম্পের হৃদয়ে আপনার বিশ্বস্ত শো-রুম'
                  : 'Your Premier Electronics & Home Destination in Cooper\'s Camp'}
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {lang === 'bn'
                  ? 'শিব শক্তি ইলেকট্রনিক্স অ্যান্ড ফার্নিচার স্থাপিত হয়েছে নদীয়া জেলার কুপার্স ক্যাম্প ও পার্শ্ববর্তী রানাঘাটবাসীর কাছে আধুনিক গৃহস্থালি ইলেকট্রনিক্স এবং মানসম্মত আসবাবপত্র সহজলভ্য করার উদ্দেশ্যে।'
                  : 'Shiv Shakti Electronics & Furniture was founded with a clear mission: to bring top-tier home electronics, official brand warranties, and solid handcrafted furniture directly to the residents of Cooper\'s Camp, Ranaghat, and Nadia district.'}
              </p>
              <div className="inline-block p-2.5 rounded-xl bg-red-50 text-shakti-red font-bold text-sm font-bengali">
                {dict.tagline}
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-slate-50 p-6 border border-slate-200 shadow-md flex items-center justify-center">
                <Image
                  src="/images/logo.jpg"
                  alt="Shiv Shakti Emblem"
                  width={256}
                  height={256}
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-shiv-blue flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900">
                {lang === 'bn' ? '১০০% আসল পণ্যের অঙ্গীকার' : '100% Genuine Origin'}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {lang === 'bn'
                  ? 'স্যামসাং, এলজি, ভোল্টাস সহ প্রতিটি পণ্য সরাসরি অনুমোদিত ব্র্যান্ড ডিস্ট্রিবিউশন থেকে সংগৃহীত।'
                  : 'Every single electronic device is backed by official manufacturer guarantee, genuine GST bills, and company warranty.'}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-shakti-red flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900">
                {lang === 'bn' ? 'ব্যক্তিগত গ্রাহক সেবা' : 'Local Community Care'}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {lang === 'bn'
                  ? 'আমরা শুধু বিক্রেতা নই, আপনার পরিবারের ইলেকট্রনিক্স সহযোগী। যে কোনো প্রয়োজনে সরাসরি আমাদের শোরুমে কথা বলুন।'
                  : 'We are part of the Cooper\'s Camp community. Experience face-to-face friendly advice and dependable after-sales follow-through.'}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-festival-gold-dark flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-slate-900">
                {lang === 'bn' ? 'ন্যায্য মূল্য ও সহজ কিস্তি' : 'Transparent Pricing & EMI'}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {lang === 'bn'
                  ? 'অনলাইনের চেয়ে আকর্ষণীয় লোকাল অফার এবং বাজাজ ফিনসার্ভের সাথে সহজ কিস্তি সুবিধা।'
                  : 'Competitive pricing tailored to local shoppers with zero downpayment EMI schemes on qualifying models.'}
              </p>
            </div>
          </div>

          {/* Embedded Showroom Address */}
          <StoreLocationSection lang={lang} />
        </div>
      </main>

      <Footer lang={lang} />
      <StickyBottomBar lang={lang} />
    </>
  );
};
