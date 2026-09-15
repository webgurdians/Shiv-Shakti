'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { Language } from '@/types';
import { getDictionary } from '@/data/dictionary';
import { shopInfo } from '@/data/shopInfo';
import { categories } from '@/data/categories';
import { getWhatsAppLeadUrl } from '@/lib/whatsapp';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const dict = getDictionary(lang);
  const navPrefix = lang === 'bn' ? '/bn' : '';

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          {/* Brand Info & Motto */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 shrink-0 border border-white/20 flex items-center justify-center">
                <Image
                  src="/images/logo.jpg"
                  alt="Shiv Shakti"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-extrabold text-lg text-white">
                  {dict.brandName}
                </div>
                <div className="text-xs text-blue-400 font-semibold">
                  {dict.brandSubtitle}
                </div>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400">
              {dict.footer.aboutText}
            </p>

            <div className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-shakti-red font-bold font-bengali">
              {dict.tagline}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-3">
              {dict.footer.categories}
            </h4>
            <ul className="space-y-2 text-xs">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`${navPrefix}/${cat.slug}`}
                    className="hover:text-white hover:underline transition"
                  >
                    {cat.name[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-3">
              {dict.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href={navPrefix || '/'} className="hover:text-white transition">
                  {dict.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`${navPrefix}/products`} className="hover:text-white transition">
                  {dict.nav.products}
                </Link>
              </li>
              <li>
                <Link href={`${navPrefix}/offers`} className="text-shakti-red font-bold hover:underline transition">
                  {dict.nav.offers} (Sale)
                </Link>
              </li>
              <li>
                <Link href={`${navPrefix}/emi-finance`} className="hover:text-white transition">
                  {dict.nav.emi}
                </Link>
              </li>
              <li>
                <Link href={`${navPrefix}/about`} className="hover:text-white transition">
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`${navPrefix}/contact`} className="hover:text-white transition">
                  {dict.nav.contact}
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-slate-500 hover:text-slate-400 transition">
                  {dict.nav.admin}
                </Link>
              </li>
            </ul>
          </div>

          {/* Showroom Contacts & Hours */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-3">
              {dict.footer.contactInfo}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-shakti-red shrink-0 mt-0.5" />
                <span>
                  {shopInfo.address.line1[lang]}, {shopInfo.address.landmark[lang]}, {shopInfo.address.city} – {shopInfo.address.pin}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-festival-gold shrink-0" />
                <span>{shopInfo.timings[lang]}</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div>
                    <a href={`tel:${shopInfo.phone}`} className="hover:text-white font-bold">
                      {shopInfo.displayPhone}
                    </a>
                  </div>
                  {shopInfo.phoneSecondary && (
                    <div>
                      <a href={`tel:${shopInfo.phoneSecondary}`} className="hover:text-white font-bold">
                        {shopInfo.displayPhoneSecondary}
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-whatsapp shrink-0" />
                <a
                  href={getWhatsAppLeadUrl({ lang, source: 'footer' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-bold"
                >
                  WhatsApp: {shopInfo.displayWhatsapp}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>{dict.footer.copyright}</div>
          <div className="flex items-center gap-2">
            <span>{dict.footer.developedWith}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
