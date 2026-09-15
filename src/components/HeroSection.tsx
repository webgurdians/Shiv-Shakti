'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, MapPin, MessageCircle, ArrowRight, ShieldCheck, CreditCard, Truck, BadgePercent } from 'lucide-react';
import { Language } from '@/types';
import { getDictionary } from '@/data/dictionary';
import { shopInfo } from '@/data/shopInfo';
import { getWhatsAppLeadUrl } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';

interface HeroSectionProps {
  lang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang }) => {
  const dict = getDictionary(lang);
  const navPrefix = lang === 'en' ? '/en' : '';

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/30 pt-6 pb-12 sm:pt-10 sm:pb-16 border-b border-slate-100">
      {/* Subtle decorative background circles with brand colors */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-shiv-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-shakti-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            {/* Showroom Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-shiv-navy text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-shakti-red" />
              <span>{dict.hero.badge}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-shiv-blue hidden sm:inline-block"></span>
              <span className="text-slate-600 hidden sm:inline-block font-medium">কুপার্স বাজার</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-shiv-navy tracking-tight leading-tight">
              {dict.hero.title}
            </h1>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {dict.hero.description}
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {/* View Offers Button */}
              <Link
                href={`${navPrefix}/offers`}
                className="inline-flex items-center gap-2 bg-shakti-red hover:bg-shakti-red-hover text-white px-5 py-3 rounded-xl font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
              >
                <span>{dict.hero.viewOffers}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Get Directions Button */}
              <a
                href={shopInfo.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('directions_click', { placement: 'hero' })}
                className="inline-flex items-center gap-2 bg-shiv-navy hover:bg-shiv-navy-light text-white px-5 py-3 rounded-xl font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
              >
                <MapPin className="w-4 h-4 text-festival-gold" />
                <span>{dict.hero.getDirections}</span>
              </a>

              {/* Secondary WhatsApp CTA */}
              <a
                href={getWhatsAppLeadUrl({ lang, source: 'hero_cta' })}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { placement: 'hero' })}
                className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white px-5 py-3 rounded-xl font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{dict.hero.chatWhatsapp}</span>
              </a>
            </div>

            {/* Value Props Strip */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/70 border border-slate-100 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-shiv-blue shrink-0" />
                <span className="text-xs font-semibold text-slate-800">
                  {lang === 'bn' ? '১০০% আসল ব্র্যান্ড' : '100% Genuine'}
                </span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/70 border border-slate-100 shadow-xs">
                <CreditCard className="w-5 h-5 text-shakti-red shrink-0" />
                <span className="text-xs font-semibold text-slate-800">
                  {lang === 'bn' ? 'সহজ EMI সুবিধা' : 'Easy Instant EMI'}
                </span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/70 border border-slate-100 shadow-xs">
                <Truck className="w-5 h-5 text-shiv-navy shrink-0" />
                <span className="text-xs font-semibold text-slate-800">
                  {lang === 'bn' ? 'শোরুম ডেলিভারি' : 'Local Delivery'}
                </span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/70 border border-slate-100 shadow-xs">
                <BadgePercent className="w-5 h-5 text-festival-gold shrink-0" />
                <span className="text-xs font-semibold text-slate-800">
                  {lang === 'bn' ? 'সেরা উৎসব ছাড়' : 'Festival Deals'}
                </span>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card with Logo & Flagship Appliance Collage */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-xl border border-slate-100">
              {/* Showroom Badge Ribbon */}
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-shakti-red to-red-600 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
                {lang === 'bn' ? 'খোলা সকাল ১০টা - রাত ১০টা' : '10 AM – 10 PM Everyday'}
              </div>

              {/* Official Brand Emblem Display */}
              <div className="flex flex-col items-center text-center pb-5 border-b border-slate-100">
                <div className="w-28 h-28 sm:w-32 sm:h-32 mb-3 flex items-center justify-center">
                  <Image
                    src="/images/logo.jpg"
                    alt="Shiv Shakti Official Logo"
                    width={128}
                    height={128}
                    className="w-28 h-28 sm:w-32 sm:h-32 object-contain rounded-2xl"
                    priority
                  />
                </div>
                <h2 className="text-xl font-extrabold text-shiv-navy">
                  {dict.brandName}
                </h2>
                <p className="text-xs font-bold text-shiv-blue uppercase tracking-wider">
                  {dict.brandSubtitle}
                </p>
                <div className="mt-1 px-3 py-0.5 rounded-full bg-red-50 text-shakti-red text-xs font-bold font-bengali">
                  {dict.tagline}
                </div>
              </div>

              {/* Quick Showroom Information snippet */}
              <div className="pt-4 space-y-2 text-xs text-slate-600">
                <div className="flex items-center justify-between py-1 border-b border-slate-50">
                  <span className="font-medium text-slate-500">{lang === 'bn' ? 'ঠিকানা:' : 'Location:'}</span>
                  <span className="font-semibold text-slate-800 text-right">{shopInfo.address.line1[lang]}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-50">
                  <span className="font-medium text-slate-500">{lang === 'bn' ? 'ল্যান্ডমার্ক:' : 'Landmark:'}</span>
                  <span className="font-semibold text-slate-800">{shopInfo.address.landmark[lang]}</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="font-medium text-slate-500">{lang === 'bn' ? 'যোগাযোগ:' : 'Call:'}</span>
                  <span className="font-bold text-shiv-blue">{shopInfo.displayPhone}</span>
                </div>
              </div>

              <div className="mt-4 pt-3">
                <a
                  href={`tel:${shopInfo.phone}`}
                  onClick={() => trackEvent('call_click', { placement: 'hero_box' })}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition"
                >
                  <MapPin className="w-3.5 h-3.5 text-shiv-blue" />
                  <span>{lang === 'bn' ? 'কুপার্স বাজার রিকশা স্ট্যান্ডের কাছে' : 'Near Riksha Stand More, Coopers Bazar'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
