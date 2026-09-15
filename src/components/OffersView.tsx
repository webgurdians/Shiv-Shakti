'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Calendar, ArrowRight, Tag, ShieldAlert } from 'lucide-react';
import { Promotion, Language } from '@/types';
import { getDictionary } from '@/data/dictionary';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyBottomBar } from '@/components/StickyBottomBar';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

interface OffersViewProps {
  promotions: Promotion[];
  currentPromotion?: Promotion;
  lang: Language;
}

export const OffersView: React.FC<OffersViewProps> = ({
  promotions,
  currentPromotion,
  lang,
}) => {
  const dict = getDictionary(lang);
  const navPrefix = lang === 'en' ? '/en' : '';

  // Products eligible for current campaign if viewing a specific promotion
  const campaignProducts = currentPromotion
    ? products.filter(
        (p) =>
          currentPromotion.eligibleProductIds.includes(p.id) ||
          currentPromotion.eligibleCategories.includes(p.category)
      )
    : [];

  return (
    <>
      <Header lang={lang} />
      <main className="flex-grow bg-slate-50 min-h-screen py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentPromotion ? (
            /* Specific Campaign Landing View */
            <div className="space-y-8">
              {/* Campaign Hero Banner */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-shiv-navy via-slate-900 to-shakti-red text-white p-8 sm:p-12 shadow-xl">
                <div className="max-w-3xl space-y-4">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-festival-gold">
                    <Sparkles className="w-4 h-4 fill-festival-gold" />
                    <span>{currentPromotion.badgeText[lang]}</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                    {currentPromotion.title[lang]}
                  </h1>

                  <p className="text-base sm:text-lg text-blue-100 font-medium">
                    {currentPromotion.subtitle[lang]}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                    {currentPromotion.description[lang]}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-festival-gold font-bold pt-2">
                    <Calendar className="w-4 h-4" />
                    <span>{dict.promotionsSection.validTill} {currentPromotion.endDate}</span>
                  </div>
                </div>
              </div>

              {/* Eligible Products Section */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-black text-shiv-navy">
                    {lang === 'bn' ? 'অফারের অন্তর্ভুক্ত শোরুম পণ্যসমূহ' : 'Eligible Showroom Offers'}
                  </h2>
                  <span className="text-xs text-slate-500 font-medium">
                    {campaignProducts.length} {lang === 'bn' ? 'টি পণ্য পাওয়া গেছে' : 'Products Available'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {campaignProducts.map((prod) => (
                    <ProductCard key={prod.id} product={prod} lang={lang} />
                  ))}
                </div>
              </div>

              {/* Campaign Terms and Conditions */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 text-xs text-slate-500 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-slate-700">
                  <ShieldAlert className="w-4 h-4 text-shakti-red" />
                  <span>{lang === 'bn' ? 'অফার সংক্রান্ত নিয়মাবলী ও শর্তাবলী' : 'Terms & Conditions'}</span>
                </div>
                <p>{currentPromotion.termsAndConditions[lang]}</p>
              </div>
            </div>
          ) : (
            /* All Active Offers Hub */
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-shakti-red text-xs font-bold uppercase tracking-wider mb-2">
                  <Tag className="w-3.5 h-3.5" />
                  <span>{dict.nav.offers}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-shiv-navy">
                  {lang === 'bn' ? 'চলতি উৎসব অফার ও বিশেষ ছাড়' : 'Current Festival Deals & Offers'}
                </h1>
                <p className="mt-2 text-sm text-slate-600">
                  {lang === 'bn'
                    ? 'কুপার্স ক্যাম্প শোরুমের সমস্ত সীমিত সময়ের সেল ও ছাড়ের তালিকা'
                    : 'Discover limited-time showroom discounts, exchange benefits, and EMI offers.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {promotions.map((promo) => (
                  <div
                    key={promo.id}
                    className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-lg transition flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-shakti-red bg-red-50 px-2.5 py-1 rounded-full">
                          {promo.badgeText[lang]}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-festival-gold" />
                          {promo.endDate}
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-bold text-shiv-navy">
                        {promo.title[lang]}
                      </h2>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {promo.subtitle[lang]}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-100">
                      <Link
                        href={`${navPrefix}/offers/${promo.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-shiv-blue hover:text-shiv-navy transition"
                      >
                        <span>{dict.promotionsSection.exploreOffer}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer lang={lang} />
      <StickyBottomBar lang={lang} />
    </>
  );
};
