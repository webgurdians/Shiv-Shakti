'use client';

import React from 'react';
import { Store, ShieldCheck, Truck, HeadphonesIcon } from 'lucide-react';
import { Language } from '@/types';
import { getDictionary } from '@/data/dictionary';

interface WhyUsSectionProps {
  lang: Language;
}

const icons = [
  <Store key="0" className="w-6 h-6 text-shiv-blue" />,
  <ShieldCheck key="1" className="w-6 h-6 text-emerald-600" />,
  <Truck key="2" className="w-6 h-6 text-festival-gold-dark" />,
  <HeadphonesIcon key="3" className="w-6 h-6 text-shakti-red" />,
];

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ lang }) => {
  const dict = getDictionary(lang);

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-shiv-blue mb-1">
            {dict.whyUsSection.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-shiv-navy">
            {dict.whyUsSection.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500">
            {dict.whyUsSection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.whyUsSection.reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-shiv-blue/60 shadow-xs hover:shadow-lg transition duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center mb-4">
                {icons[idx]}
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
