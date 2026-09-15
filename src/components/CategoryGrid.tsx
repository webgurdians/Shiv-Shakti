'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Smartphone, Tv, Wind, Refrigerator, Shirt, Coffee, Armchair, ArrowUpRight } from 'lucide-react';
import { Language, ProductCategory } from '@/types';
import { getDictionary } from '@/data/dictionary';
import { categories } from '@/data/categories';

interface CategoryGridProps {
  lang: Language;
}

const iconMap: Record<ProductCategory, React.ReactNode> = {
  mobiles: <Smartphone className="w-6 h-6" />,
  televisions: <Tv className="w-6 h-6" />,
  'air-conditioners': <Wind className="w-6 h-6" />,
  refrigerators: <Refrigerator className="w-6 h-6" />,
  'washing-machines': <Shirt className="w-6 h-6" />,
  'home-appliances': <Coffee className="w-6 h-6" />,
  furniture: <Armchair className="w-6 h-6" />,
};

export const CategoryGrid: React.FC<CategoryGridProps> = ({ lang }) => {
  const dict = getDictionary(lang);
  const navPrefix = lang === 'bn' ? '/bn' : '';

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-shiv-blue mb-1">
              {dict.categoriesSection.badge}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-shiv-navy">
              {dict.categoriesSection.title}
            </h2>
            <p className="text-slate-500 text-sm mt-1 max-w-xl">
              {dict.categoriesSection.subtitle}
            </p>
          </div>
          <Link
            href={`${navPrefix}/products`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-shiv-blue hover:text-shiv-navy transition"
          >
            <span>{dict.categoriesSection.viewAll}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`${navPrefix}/${cat.slug}`}
              className="group relative flex flex-col justify-between bg-slate-50 hover:bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 hover:border-shiv-blue shadow-xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Background preview image */}
              <div className="relative w-full h-28 sm:h-36 rounded-xl overflow-hidden mb-3 bg-white">
                <Image
                  src={cat.image}
                  alt={cat.name[lang]}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 p-1.5 rounded-lg bg-white/90 text-shiv-navy shadow-xs backdrop-blur-xs">
                  {iconMap[cat.id]}
                </div>
              </div>

              {/* Text Meta */}
              <div>
                <h3 className="font-bold text-base sm:text-lg text-slate-800 group-hover:text-shiv-blue transition">
                  {cat.name[lang]}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                  {cat.description[lang]}
                </p>

                {/* Popular Brands Tags */}
                <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex flex-wrap gap-1">
                  {cat.popularBrands.slice(0, 3).map((brand) => (
                    <span
                      key={brand}
                      className="text-[10px] bg-white px-1.5 py-0.5 rounded text-slate-600 border border-slate-200"
                    >
                      {brand}
                    </span>
                  ))}
                  {cat.popularBrands.length > 3 && (
                    <span className="text-[10px] text-slate-400 self-center">
                      +{cat.popularBrands.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
