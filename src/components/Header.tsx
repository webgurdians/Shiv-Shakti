'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, MessageCircle, MapPin, Menu, X, Clock, ChevronDown } from 'lucide-react';
import { Language } from '@/types';
import { getDictionary } from '@/data/dictionary';
import { shopInfo } from '@/data/shopInfo';
import { categories } from '@/data/categories';
import { getWhatsAppLeadUrl } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';

interface HeaderProps {
  lang: Language;
}

export const Header: React.FC<HeaderProps> = ({ lang }) => {
  const dict = getDictionary(lang);
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [catDropdownOpen, setCatDropdownOpen] = useState(false);

  // Compute language toggle destination URL
  const getLanguageToggleUrl = (targetLang: Language) => {
    if (targetLang === 'bn') {
      // remove /en prefix
      if (pathname.startsWith('/en')) {
        const withoutEn = pathname.replace(/^\/en/, '');
        return withoutEn === '' ? '/' : withoutEn;
      }
      return pathname;
    } else {
      // add /en prefix
      if (pathname.startsWith('/en')) {
        return pathname;
      }
      return pathname === '/' ? '/en' : `/en${pathname}`;
    }
  };

  const navPrefix = lang === 'en' ? '/en' : '';

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-100">
      {/* Top Notification Bar */}
      <div className="bg-shiv-navy text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-slate-200">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-shakti-red shrink-0" />
              <span className="truncate">{shopInfo.address.line1[lang]}, {shopInfo.address.landmark[lang]}</span>
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-festival-gold shrink-0" />
              <span>{shopInfo.timings[lang]}</span>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            {/* Direct Dial */}
            <a
              href={`tel:${shopInfo.phone}`}
              onClick={() => trackEvent('call_click', { placement: 'top_bar' })}
              className="flex items-center gap-1 font-medium hover:text-blue-200 transition"
            >
              <Phone className="w-3 h-3 text-green-400 shrink-0" />
              <span>{shopInfo.displayPhone}</span>
            </a>

            {/* Language Switcher */}
            <div className="inline-flex items-center bg-shiv-navy-deep px-2 py-0.5 rounded text-xs border border-white/20">
              <Link
                href={getLanguageToggleUrl('bn')}
                className={`px-1.5 py-0.5 rounded font-medium transition ${
                  lang === 'bn' ? 'bg-white text-shiv-navy font-bold shadow-xs' : 'text-slate-300 hover:text-white'
                }`}
              >
                বাংলা
              </Link>
              <span className="text-white/40 px-0.5">|</span>
              <Link
                href={getLanguageToggleUrl('en')}
                className={`px-1.5 py-0.5 rounded font-medium transition ${
                  lang === 'en' ? 'bg-white text-shiv-navy font-bold shadow-xs' : 'text-slate-300 hover:text-white'
                }`}
              >
                English
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <Link href={navPrefix || '/'} className="flex items-center gap-3 shrink-0 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-shiv-blue shadow-xs bg-white flex items-center justify-center shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="Shiv Shakti Electronics & Furniture"
                width={56}
                height={56}
                className="w-full h-full object-contain p-0.5"
                priority
              />
            </div>
            <div>
              <div className="font-extrabold text-lg sm:text-xl tracking-tight text-shiv-navy leading-none">
                {dict.brandName}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-shiv-blue tracking-wide">
                {dict.brandSubtitle}
              </div>
              <div className="text-[10px] sm:text-xs text-shakti-red font-bold font-bengali">
                {dict.tagline}
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 font-medium text-slate-700 text-sm">
            <Link
              href={navPrefix || '/'}
              className="hover:text-shiv-blue transition py-1"
            >
              {dict.nav.home}
            </Link>

            {/* Categories dropdown */}
            <div className="relative" onMouseLeave={() => setCatDropdownOpen(false)}>
              <button
                type="button"
                onClick={() => setCatDropdownOpen(!catDropdownOpen)}
                onMouseEnter={() => setCatDropdownOpen(true)}
                className="flex items-center gap-1 hover:text-shiv-blue transition py-1"
              >
                <span>{dict.nav.categories}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {catDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-fadeIn">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`${navPrefix}/${cat.slug}`}
                      onClick={() => setCatDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-shiv-blue transition"
                    >
                      {cat.name[lang]}
                    </Link>
                  ))}
                  <div className="border-t border-slate-100 my-1 pt-1">
                    <Link
                      href={`${navPrefix}/products`}
                      onClick={() => setCatDropdownOpen(false)}
                      className="block px-4 py-2 text-xs font-semibold text-shiv-blue hover:underline"
                    >
                      {dict.categoriesSection.viewAll} →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href={`${navPrefix}/offers`}
              className="hover:text-shiv-blue transition py-1 flex items-center gap-1.5"
            >
              <span>{dict.nav.offers}</span>
              <span className="bg-shakti-red text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                Sale
              </span>
            </Link>

            <Link
              href={`${navPrefix}/emi-finance`}
              className="hover:text-shiv-blue transition py-1"
            >
              {dict.nav.emi}
            </Link>

            <Link
              href={`${navPrefix}/about`}
              className="hover:text-shiv-blue transition py-1"
            >
              {dict.nav.about}
            </Link>

            <Link
              href={`${navPrefix}/contact`}
              className="hover:text-shiv-blue transition py-1"
            >
              {dict.nav.contact}
            </Link>
          </nav>

          {/* Quick CTA Actions on Desktop */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={getWhatsAppLeadUrl({ lang, source: 'header' })}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', { placement: 'header' })}
              className="inline-flex items-center gap-1.5 bg-whatsapp hover:bg-whatsapp-hover text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow-xs transition transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>

            <a
              href={shopInfo.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('directions_click', { placement: 'header' })}
              className="inline-flex items-center gap-1.5 bg-shiv-blue hover:bg-shiv-blue-hover text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow-xs transition"
            >
              <MapPin className="w-4 h-4" />
              <span className="hidden md:inline">{dict.hero.getDirections}</span>
              <span className="md:hidden">Directions</span>
            </a>
          </div>

          {/* Mobile menu toggle button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="flex justify-between items-center pb-2 border-b border-slate-100">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {lang === 'bn' ? 'ভাষা পরিবর্তন করুন' : 'Change Language'}
            </span>
            <div className="inline-flex items-center bg-slate-100 p-0.5 rounded text-xs">
              <Link
                href={getLanguageToggleUrl('bn')}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-1 rounded font-medium ${
                  lang === 'bn' ? 'bg-shiv-blue text-white font-bold' : 'text-slate-600'
                }`}
              >
                বাংলা
              </Link>
              <Link
                href={getLanguageToggleUrl('en')}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-1 rounded font-medium ${
                  lang === 'en' ? 'bg-shiv-blue text-white font-bold' : 'text-slate-600'
                }`}
              >
                English
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            <Link
              href={navPrefix || '/'}
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-50 text-slate-800 hover:bg-slate-100"
            >
              {dict.nav.home}
            </Link>
            <Link
              href={`${navPrefix}/products`}
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-50 text-slate-800 hover:bg-slate-100"
            >
              {dict.nav.products}
            </Link>
            <Link
              href={`${navPrefix}/offers`}
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-red-50 text-shakti-red font-semibold hover:bg-red-100"
            >
              {dict.nav.offers} 🔥
            </Link>
            <Link
              href={`${navPrefix}/emi-finance`}
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-blue-50 text-shiv-blue font-semibold hover:bg-blue-100"
            >
              {dict.nav.emi}
            </Link>
            <Link
              href={`${navPrefix}/about`}
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-50 text-slate-800 hover:bg-slate-100"
            >
              {dict.nav.about}
            </Link>
            <Link
              href={`${navPrefix}/contact`}
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-50 text-slate-800 hover:bg-slate-100"
            >
              {dict.nav.contact}
            </Link>
          </div>

          <div className="pt-2">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              {dict.nav.categories}
            </p>
            <div className="grid grid-cols-2 gap-1.5 text-xs">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`${navPrefix}/${cat.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1.5 px-2 rounded hover:bg-slate-50 text-slate-700 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-shiv-blue"></span>
                  <span>{cat.name[lang]}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
