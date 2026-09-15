'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  MessageCircle,
  Phone,
  CreditCard,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Share2,
  Check,
  Building2,
  Clock,
  Sparkles,
} from 'lucide-react';
import { Product, Language } from '@/types';
import { getDictionary } from '@/data/dictionary';
import { shopInfo } from '@/data/shopInfo';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyBottomBar } from '@/components/StickyBottomBar';
import { getWhatsAppLeadUrl } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';
import { getProductJsonLd } from '@/lib/seo';

interface ProductDetailViewProps {
  product: Product;
  lang: Language;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({ product, lang }) => {
  const dict = getDictionary(lang);
  const navPrefix = lang === 'en' ? '/en' : '';
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  // Related products from the same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const productJsonLd = getProductJsonLd(product, lang);

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const discountAmount = product.offerPrice ? product.mrp - product.offerPrice : 0;
  const discountPercent = product.offerPrice ? Math.round((discountAmount / product.mrp) * 100) : 0;

  return (
    <>
      {/* Product JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <Header lang={lang} />
      <main className="flex-grow bg-slate-50 min-h-screen py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-6 flex-wrap">
            <Link href={navPrefix || '/'} className="hover:text-shiv-blue">
              {dict.nav.home}
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link href={`${navPrefix}/${product.category}`} className="hover:text-shiv-blue capitalize">
              {product.category.replace('-', ' ')}
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-800 font-semibold truncate max-w-xs sm:max-w-md">
              {product.name[lang]}
            </span>
          </nav>

          {/* Main Product Display Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Gallery Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative w-full aspect-square rounded-2xl bg-slate-50 p-6 flex items-center justify-center border border-slate-100 overflow-hidden">
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 bg-shakti-red text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {product.badge[lang]}
                  </div>
                )}
                <Image
                  src={product.images[activeImageIdx] || product.images[0]}
                  alt={product.name[lang]}
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>

              {/* Thumbnails if multiple */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIdx(idx)}
                      className={`relative w-20 h-20 rounded-xl bg-slate-50 border-2 overflow-hidden transition ${
                        activeImageIdx === idx ? 'border-shiv-blue shadow-xs' : 'border-slate-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <Image src={img} alt="" fill className="object-contain p-1" />
                    </button>
                  ))}
                </div>
              )}

              {/* In-Showroom Live Demo Assurance */}
              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs text-shiv-navy space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-shiv-blue">
                  <Sparkles className="w-4 h-4" />
                  <span>{lang === 'bn' ? 'সরাসরি শোরুমে দেখে যাচাই করার সুযোগ' : 'Live Showroom Experience'}</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {lang === 'bn'
                    ? 'কুপার্স ক্যাম্প শোরুমে এসে পণ্যটি নিজের চোখে চালিয়ে দেখুন। অভিজ্ঞ বিক্রয়কর্মী সম্পূর্ণ তথ্য বুঝিয়ে দেবেন।'
                    : 'Visit our Cooper\'s Camp showroom to experience a live working demo before you buy.'}
                </p>
              </div>
            </div>

            {/* Product Meta & Purchase Action Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-shiv-blue bg-blue-50 px-2.5 py-1 rounded-md">
                    {product.brand}
                  </span>

                  <button
                    type="button"
                    onClick={handleShare}
                    className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 bg-slate-100 px-2.5 py-1 rounded-lg transition"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-semibold">{dict.common.copied}</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5" />
                        <span>{dict.common.share}</span>
                      </>
                    )}
                  </button>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 leading-tight">
                  {product.name[lang]}
                </h1>

                <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                  <span>{dict.common.modelNumber}: <strong className="text-slate-700">{product.modelNumber}</strong></span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {dict.featuredSection.inStock}
                  </span>
                </div>
              </div>

              {/* Price Block */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                {product.showPrice && product.offerPrice ? (
                  <div className="space-y-1">
                    <div className="text-xs text-slate-500">{dict.featuredSection.showroomPrice}</div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl sm:text-4xl font-black text-shiv-navy">
                        ₹{product.offerPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-base text-slate-400 line-through">
                        ₹{product.mrp.toLocaleString('en-IN')}
                      </span>
                      {discountPercent > 0 && (
                        <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-0.5 rounded-full">
                          {discountPercent}% OFF (Save ₹{discountAmount.toLocaleString('en-IN')})
                        </span>
                      )}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="text-sm font-extrabold text-shiv-navy">
                      {dict.featuredSection.askPrice}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {lang === 'bn'
                        ? 'বর্তমান স্টক ও বিশেষ অফার জানতে নিচের বোতামে ক্লিক করুন।'
                        : 'Contact us on WhatsApp or call to receive today\'s locked-in showroom rate.'}
                    </p>
                  </div>
                )}

                {/* EMI Box */}
                {product.emiAvailable && (
                  <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between flex-wrap gap-2 text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-slate-800">
                      <CreditCard className="w-4 h-4 text-shiv-blue" />
                      <span>
                        {product.emiStartingPerMonth
                          ? `EMI starts @ ₹${product.emiStartingPerMonth.toLocaleString('en-IN')}/month`
                          : 'Easy EMI available'}
                      </span>
                    </div>
                    <span className="text-slate-500 font-medium">
                      {lang === 'bn' ? 'বাজাজ ও অন্যান্য ফাইন্যান্স পার্টনার' : 'Bajaj, TVS, HDB accepted'}
                    </span>
                  </div>
                )}
              </div>

              {/* Short Description */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {product.shortDescription[lang]}
              </p>

              {/* Primary High-Conversion CTA Buttons */}
              <div className="space-y-3 pt-2">
                {/* 1. Contextual WhatsApp Lead Button */}
                <a
                  href={getWhatsAppLeadUrl({
                    product,
                    lang,
                    source: 'product_detail_main',
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent('whatsapp_click', {
                      product_id: product.id,
                      product_name: product.name[lang],
                      placement: 'product_detail',
                    })
                  }
                  className="w-full flex items-center justify-center gap-2.5 bg-whatsapp hover:bg-whatsapp-hover text-white py-3.5 px-6 rounded-2xl font-black text-sm sm:text-base shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                  <span>{dict.featuredSection.todayPriceQuery}</span>
                </a>

                {/* 2. Direct Call Showroom Button */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${shopInfo.phone}`}
                    onClick={() =>
                      trackEvent('call_click', {
                        product_id: product.id,
                        placement: 'product_detail',
                      })
                    }
                    className="flex items-center justify-center gap-2 bg-shiv-navy hover:bg-shiv-navy-light text-white py-3 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-md transition"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>{dict.hero.callNow}</span>
                  </a>

                  <a
                    href={shopInfo.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('directions_click', { placement: 'product_detail' })}
                    className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition"
                  >
                    <span>{dict.hero.getDirections}</span>
                  </a>
                </div>
              </div>

              {/* Showroom Assurances Grid */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                  <div className="font-bold text-[11px] text-slate-800">
                    {lang === 'bn' ? '১০০% জেনুইন' : '100% Brand Bill'}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {lang === 'bn' ? 'কোম্পানি ওয়ারেন্টি' : 'Authorized Store'}
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Truck className="w-5 h-5 text-shiv-blue mx-auto mb-1" />
                  <div className="font-bold text-[11px] text-slate-800">
                    {lang === 'bn' ? 'দ্রুত ডেলিভারি' : 'Local Delivery'}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {lang === 'bn' ? 'কুপার্স ও নদীয়া' : 'Same/Next Day'}
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Clock className="w-5 h-5 text-festival-gold mx-auto mb-1" />
                  <div className="font-bold text-[11px] text-slate-800">
                    {lang === 'bn' ? '১০টা - ১০টা' : '10 AM - 10 PM'}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {lang === 'bn' ? 'প্রতিদিন খোলা' : 'Open 7 Days'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Specifications Table */}
          {product.specs && product.specs.length > 0 && (
            <div className="mt-12 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-black text-shiv-navy mb-6">
                {dict.common.specifications}
              </h2>

              <div className="space-y-8">
                {product.specs.map((group, gIdx) => (
                  <div key={gIdx}>
                    <h3 className="text-sm font-bold text-shiv-blue uppercase tracking-wider mb-3 pb-1 border-b border-slate-100">
                      {group.groupName[lang]}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                      {group.items.map((item, iIdx) => (
                        <div
                          key={iIdx}
                          className="flex justify-between py-2 border-b border-slate-50 text-xs sm:text-sm"
                        >
                          <span className="font-semibold text-slate-600">
                            {item.key[lang]}
                          </span>
                          <span className="font-medium text-slate-900 text-right">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Products from Same Department */}
          {relatedProducts.length > 0 && (
            <div className="mt-14">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl sm:text-2xl font-black text-shiv-navy">
                  {lang === 'bn' ? 'একই বিভাগের অন্যান্য মডেল' : 'Related Models in this Category'}
                </h2>
                <Link
                  href={`${navPrefix}/${product.category}`}
                  className="text-xs font-bold text-shiv-blue hover:underline"
                >
                  {dict.categoriesSection.viewAll} →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} lang={lang} />
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
