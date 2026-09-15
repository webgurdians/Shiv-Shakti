'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Filter, ShieldCheck, Truck, CreditCard, Sparkles, MessageCircle } from 'lucide-react';
import { ProductCategory, Language } from '@/types';
import { getDictionary } from '@/data/dictionary';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyBottomBar } from '@/components/StickyBottomBar';
import { getWhatsAppLeadUrl } from '@/lib/whatsapp';

interface CategoryPageTemplateProps {
  categorySlug: string;
  lang: Language;
}

export const CategoryPageTemplate: React.FC<CategoryPageTemplateProps> = ({
  categorySlug,
  lang,
}) => {
  const dict = getDictionary(lang);
  const navPrefix = lang === 'bn' ? '/bn' : '';

  const category = categories.find((c) => c.slug === categorySlug);
  const isAll = categorySlug === 'products';

  // Filter products
  const categoryProducts = isAll
    ? products
    : products.filter((p) => p.category === categorySlug);

  const [selectedBrand, setSelectedBrand] = useState<string>('all');

  const filteredProducts =
    selectedBrand === 'all'
      ? categoryProducts
      : categoryProducts.filter((p) => p.brand.toLowerCase() === selectedBrand.toLowerCase());

  // Unique brands
  const brands = Array.from(new Set(categoryProducts.map((p) => p.brand)));

  const title = isAll
    ? lang === 'bn'
      ? 'কুপার্স ক্যাম্পে সমস্ত ইলেকট্রনিক্স ও ফার্নিচার'
      : 'All Electronics & Furniture in Cooper\'s Camp'
    : category
    ? category.name[lang]
    : 'Products';

  const subtitle = isAll
    ? lang === 'bn'
      ? 'সেরা ব্র্যান্ডের জেনুইন হোম অ্যাপ্লায়েন্স, টিভি, ফ্রিজ ও আসবাবপত্র'
      : 'Official showroom models with verified brand warranties and EMI options'
    : category?.description[lang];

  return (
    <>
      <Header lang={lang} />
      <main className="flex-grow bg-slate-50 min-h-screen pb-16">
        {/* Breadcrumb & Hero Header */}
        <div className="bg-white border-b border-slate-200 py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
              <Link href={navPrefix || '/'} className="hover:text-shiv-blue">
                {dict.nav.home}
              </Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <Link href={`${navPrefix}/products`} className="hover:text-shiv-blue">
                {dict.nav.products}
              </Link>
              {!isAll && category && (
                <>
                  <ChevronRight className="w-3 h-3 text-slate-400" />
                  <span className="text-slate-800 font-semibold">{category.name[lang]}</span>
                </>
              )}
            </nav>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-shiv-navy">
                  {title}
                </h1>
                <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                  {subtitle}
                </p>
              </div>

              {/* Category-targeted WhatsApp CTA */}
              <a
                href={getWhatsAppLeadUrl({
                  lang,
                  campaign: categorySlug,
                  source: `category_${categorySlug}`,
                  customMessage:
                    lang === 'bn'
                      ? `নমস্কার, Shiv Shakti Showroom-এ ${title} সম্পর্কিত মডেল ও আজকের অফার দাম জানতে চাই।`
                      : `Hello, I would like to inquire about ${title} models and today's showroom best prices at Shiv Shakti.`,
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-xs transition"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{lang === 'bn' ? 'ক্যাটাগরির সেরা দাম জানুন' : 'Inquire Showroom Price'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Filter and Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          {/* Quick Brand Filter Pills */}
          {brands.length > 0 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-4 scrollbar-none">
              <span className="text-xs font-bold text-slate-500 flex items-center gap-1 shrink-0">
                <Filter className="w-3.5 h-3.5" />
                {lang === 'bn' ? 'ব্র্যান্ড ফিল্টার:' : 'Filter Brand:'}
              </span>
              <button
                type="button"
                onClick={() => setSelectedBrand('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition shrink-0 ${
                  selectedBrand === 'all'
                    ? 'bg-shiv-navy text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {dict.common.all} ({categoryProducts.length})
              </button>
              {brands.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setSelectedBrand(b)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition shrink-0 ${
                    selectedBrand.toLowerCase() === b.toLowerCase()
                      ? 'bg-shiv-navy text-white shadow-xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          )}

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredProducts.map((p) => (
                <ProductCard key={p.id} product={p} lang={lang} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-10 text-center border border-slate-200">
              <p className="text-slate-500 text-sm">
                {lang === 'bn'
                  ? 'এই ফিল্টারে কোনো পণ্য পাওয়া যায়নি। সরাসরি শোরুমে যোগাযোগ করুন।'
                  : 'No products found with this filter. Contact showroom directly for availability.'}
              </p>
            </div>
          )}

          {/* Local Showroom Trust Banner */}
          <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0" />
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                  {lang === 'bn' ? 'কোম্পানি জেনুইন ওয়ারেন্টি' : 'Manufacturer Warranty'}
                </h4>
                <p className="text-[11px] text-slate-500">
                  {lang === 'bn' ? 'অফিসিয়াল সার্ভিস নিশ্চয়তা' : '100% genuine brand billed'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <CreditCard className="w-8 h-8 text-shiv-blue shrink-0" />
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                  {lang === 'bn' ? 'সহজ মাসিক কিস্তি (EMI)' : 'Instant EMI Financing'}
                </h4>
                <p className="text-[11px] text-slate-500">
                  {lang === 'bn' ? 'বাজাজ ও অন্যান্য পার্টনার' : 'Bajaj, TVS, HDB available'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Truck className="w-8 h-8 text-festival-gold-dark shrink-0" />
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                  {lang === 'bn' ? 'স্থানীয় দ্রুত ডেলিভারি' : 'Local Showroom Delivery'}
                </h4>
                <p className="text-[11px] text-slate-500">
                  {lang === 'bn' ? 'কুপার্স ক্যাম্প ও নদীয়া জেলা' : 'Careful setup at your doorstep'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer lang={lang} />
      <StickyBottomBar lang={lang} />
    </>
  );
};
