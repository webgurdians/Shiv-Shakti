'use client';

import React from 'react';
import { Star, CheckCircle, ExternalLink, MessageSquare } from 'lucide-react';
import { Language } from '@/types';
import { getDictionary } from '@/data/dictionary';
import { reviews } from '@/data/reviews';
import { shopInfo } from '@/data/shopInfo';

interface ReviewsSectionProps {
  lang: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ lang }) => {
  const dict = getDictionary(lang);

  return (
    <section className="py-14 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-shiv-blue mb-1">
              {dict.reviewsSection.badge}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-shiv-navy">
              {dict.reviewsSection.title}
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              {dict.reviewsSection.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="font-extrabold text-xs text-amber-900 ml-1">4.9 / 5.0</span>
            </div>

            <a
              href={shopInfo.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-100 text-shiv-navy border border-slate-200 px-3.5 py-2 rounded-xl text-xs font-bold shadow-xs transition"
            >
              <span>{dict.reviewsSection.viewAllReviews}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400">{rev.date}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{rev.text[lang]}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-slate-900">
                    {rev.author}
                  </h4>
                  <p className="text-[10px] text-slate-400">{rev.locality}</p>
                </div>
                {rev.verified && (
                  <span className="inline-flex items-center gap-0.5 text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">
                    <CheckCircle className="w-3 h-3" />
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
