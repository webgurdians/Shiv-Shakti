'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Calendar, ArrowRight, ShieldAlert } from 'lucide-react';
import { Language } from '@/types';
import { getDictionary } from '@/data/dictionary';
import { getHomepagePromotion } from '@/data/promotions';

interface PromotionBannerProps {
  lang: Language;
}

export const PromotionBanner: React.FC<PromotionBannerProps> = ({ lang }) => {
  const dict = getDictionary(lang);
  const promo = getHomepagePromotion();

  // If promotion is expired or none active, return null
  if (!promo) return null;

  const navPrefix = lang === 'en' ? '/en' : '';

  return (
    <section className="py-6 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-shiv-navy via-shiv-blue to-shakti-red text-white p-6 sm:p-10 shadow-xl">
          {/* Subtle festival background pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3 text-center lg:text-left">
              {/* Promotion Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-festival-gold tracking-wide">
                <Sparkles className="w-4 h-4 fill-festival-gold" />
                <span>{promo.badgeText[lang]}</span>
              </div>

              {/* Title & Subtitle */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-snug">
                {promo.title[lang]}
              </h2>

              <p className="text-sm sm:text-base text-blue-100 max-w-2xl font-medium">
                {promo.subtitle[lang]}
              </p>

              {/* Validity and Stock Note */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-white/80 pt-1">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-festival-gold" />
                  <span>{dict.promotionsSection.validTill} {promo.endDate}</span>
                </span>
                <span className="flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-white/60" />
                  <span>{dict.promotionsSection.autoExpiringNotice}</span>
                </span>
              </div>
            </div>

            {/* Call To Action */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-3">
              <Link
                href={`${navPrefix}/offers/${promo.slug}`}
                className="w-full text-center inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-shiv-navy px-6 py-3.5 rounded-xl font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl transition transform hover:scale-[1.02]"
              >
                <span>{dict.promotionsSection.exploreOffer}</span>
                <ArrowRight className="w-4 h-4 text-shakti-red" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
