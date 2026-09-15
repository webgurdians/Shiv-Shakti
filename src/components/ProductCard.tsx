'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, CheckCircle2, CreditCard } from 'lucide-react';
import { Product, Language } from '@/types';
import { getDictionary } from '@/data/dictionary';
import { getWhatsAppLeadUrl } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';

interface ProductCardProps {
  product: Product;
  lang: Language;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, lang }) => {
  const dict = getDictionary(lang);
  const navPrefix = lang === 'en' ? '/en' : '';

  // Extract key specs for quick snippet display
  const keySpecs = product.specs?.[0]?.items?.slice(0, 3) || [];

  return (
    <div className="group flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 hover:border-shiv-blue shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div>
        {/* Product Image Area */}
        <div className="relative w-full aspect-square bg-slate-50 overflow-hidden p-4 flex items-center justify-center">
          {/* Badge (Festival offer / Best Seller) */}
          {product.badge && (
            <div className="absolute top-3 left-3 z-10 bg-shakti-red text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
              {product.badge[lang]}
            </div>
          )}

          {/* Brand Tag */}
          <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-xs border border-slate-200 text-slate-700 text-[10px] font-extrabold px-2 py-0.5 rounded-md uppercase">
            {product.brand}
          </div>

          <Link
            href={`${navPrefix}/product/${product.slug}`}
            className="relative w-full h-full block"
          >
            <Image
              src={product.images[0]}
              alt={product.name[lang]}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </Link>
        </div>

        {/* Content Details */}
        <div className="p-4 sm:p-5">
          {/* Stock Status Indicator */}
          <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-600 mb-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{dict.featuredSection.inStock}</span>
          </div>

          {/* Title */}
          <Link href={`${navPrefix}/product/${product.slug}`}>
            <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-shiv-blue transition line-clamp-2 leading-snug">
              {product.name[lang]}
            </h3>
          </Link>

          {/* Quick Specifications bullet list */}
          {keySpecs.length > 0 && (
            <ul className="mt-2.5 space-y-1 text-xs text-slate-500">
              {keySpecs.map((spec, idx) => (
                <li key={idx} className="flex items-center gap-1.5 truncate">
                  <span className="w-1 h-1 rounded-full bg-slate-300 shrink-0"></span>
                  <span className="font-medium text-slate-600">{spec.key[lang]}:</span>
                  <span className="truncate">{spec.value}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Pricing & EMI Information */}
          <div className="mt-4 pt-3 border-t border-slate-100">
            {product.showPrice && product.offerPrice ? (
              <div className="flex items-baseline gap-2">
                <span className="text-lg sm:text-xl font-black text-shiv-navy">
                  ₹{product.offerPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-slate-400 line-through">
                  ₹{product.mrp.toLocaleString('en-IN')}
                </span>
              </div>
            ) : (
              <div className="text-xs font-bold text-shiv-blue">
                {dict.featuredSection.askPrice}
              </div>
            )}

            {/* EMI Starting badge */}
            {product.emiAvailable && product.emiStartingPerMonth && (
              <div className="mt-1.5 flex items-center gap-1 text-xs text-slate-700 bg-blue-50/70 text-blue-900 px-2 py-1 rounded-md border border-blue-100/60 font-medium">
                <CreditCard className="w-3.5 h-3.5 text-shiv-blue shrink-0" />
                <span>
                  EMI ₹{product.emiStartingPerMonth.toLocaleString('en-IN')} {dict.featuredSection.perMonth}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="p-4 sm:p-5 pt-0 grid grid-cols-1 gap-2">
        {/* WhatsApp Inquiry Button */}
        <a
          href={getWhatsAppLeadUrl({ product, lang, source: 'product_card' })}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent('whatsapp_click', {
              product_id: product.id,
              product_name: product.name[lang],
              placement: 'product_card',
            })
          }
          className="w-full flex items-center justify-center gap-1.5 bg-whatsapp hover:bg-whatsapp-hover text-white py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm shadow-xs hover:shadow-md transition active:scale-98"
        >
          <MessageCircle className="w-4 h-4 fill-white shrink-0" />
          <span className="truncate">{dict.featuredSection.todayPriceQuery}</span>
        </a>

        {/* View Details Link */}
        <Link
          href={`${navPrefix}/product/${product.slug}`}
          className="w-full text-center py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition"
        >
          {dict.featuredSection.viewDetails}
        </Link>
      </div>
    </div>
  );
};
