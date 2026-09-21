import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { CategoryGrid } from '@/components/CategoryGrid';
import { PromotionBanner } from '@/components/PromotionBanner';
import { ProductCard } from '@/components/ProductCard';
import { FinanceSection } from '@/components/FinanceSection';
import { WhyUsSection } from '@/components/WhyUsSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { AeoDirectAnswers } from '@/components/AeoDirectAnswers';
import { StoreLocationSection } from '@/components/StoreLocationSection';
import { Footer } from '@/components/Footer';
import { StickyBottomBar } from '@/components/StickyBottomBar';
import { products } from '@/data/products';
import { getDictionary } from '@/data/dictionary';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function EnglishHomePage() {
  const lang = 'en';
  const dict = getDictionary(lang);
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <>
      <Header lang={lang} />
      <main className="flex-grow">
        <HeroSection lang={lang} />
        <CategoryGrid lang={lang} />
        <PromotionBanner lang={lang} />

        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-shiv-blue mb-1">
                  {dict.featuredSection.badge}
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-shiv-navy">
                  {dict.featuredSection.title}
                </h2>
                <p className="text-slate-500 text-sm mt-1 max-w-xl">
                  {dict.featuredSection.subtitle}
                </p>
              </div>

              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-shiv-blue hover:text-shiv-navy transition"
              >
                <span>{dict.categoriesSection.viewAll}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} lang={lang} />
              ))}
            </div>
          </div>
        </section>

        <FinanceSection lang={lang} />
        <WhyUsSection lang={lang} />
        <ReviewsSection lang={lang} />
        <AeoDirectAnswers lang={lang} />
        <StoreLocationSection lang={lang} />
      </main>

      <Footer lang={lang} />
      <StickyBottomBar lang={lang} />
    </>
  );
}
