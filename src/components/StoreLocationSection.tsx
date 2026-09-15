'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Clock, Navigation, CheckCircle2, MessageCircle } from 'lucide-react';
import { Language } from '@/types';
import { getDictionary } from '@/data/dictionary';
import { shopInfo } from '@/data/shopInfo';
import { getWhatsAppLeadUrl } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';

interface StoreLocationSectionProps {
  lang: Language;
}

export const StoreLocationSection: React.FC<StoreLocationSectionProps> = ({ lang }) => {
  const dict = getDictionary(lang);

  return (
    <section className="py-14 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-bold uppercase tracking-widest text-shiv-blue mb-1">
            {dict.showroomSection.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-shiv-navy">
            {dict.showroomSection.title}
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            {dict.showroomSection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Store Info Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-shiv-navy via-slate-900 to-shiv-navy-deep text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              {/* Showroom Header */}
              <div className="flex items-center gap-3 pb-5 border-b border-white/15">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-1 shrink-0 flex items-center justify-center">
                  <Image
                    src="/images/logo.jpg"
                    alt="Shiv Shakti Emblem"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg sm:text-xl text-white">
                    {dict.brandName}
                  </h3>
                  <p className="text-xs text-blue-200">{dict.brandSubtitle}</p>
                </div>
              </div>

              {/* Address Details */}
              <div className="space-y-4 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-shakti-red shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white text-base">
                      {shopInfo.address.line1[lang]}
                    </div>
                    <div className="text-slate-300">
                      {shopInfo.address.landmark[lang]}
                    </div>
                    <div className="text-slate-400 text-xs mt-0.5">
                      {shopInfo.address.city}, {shopInfo.address.district} — {shopInfo.address.pin} ({shopInfo.address.state})
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-white/10">
                  <Clock className="w-5 h-5 text-festival-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">
                      {dict.showroomSection.timingsTitle}
                    </div>
                    <div className="text-blue-100 text-xs">
                      {shopInfo.timings[lang]}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-white/10">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">
                      {lang === 'bn' ? 'সরাসরি সহায়তা ও অনুসন্ধান:' : 'Direct Phone & Assistance:'}
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 mt-0.5">
                      <a
                        href={`tel:${shopInfo.phone}`}
                        className="text-white hover:underline text-sm font-bold"
                      >
                        {shopInfo.displayPhone}
                      </a>
                      {shopInfo.phoneSecondary && (
                        <>
                          <span className="text-white/40">|</span>
                          <a
                            href={`tel:${shopInfo.phoneSecondary}`}
                            className="text-white hover:underline text-sm font-bold"
                          >
                            {shopInfo.displayPhoneSecondary}
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Trust Checkmarks */}
              <div className="pt-2 space-y-1.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{lang === 'bn' ? 'শোরুমের সামনে সুবিধাজনক পার্কিং' : 'Ample convenient parking space'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{lang === 'bn' ? 'ক্যাশ, ইউপিআই, কার্ড ও ইএমআই সুবিধা' : 'Cash, UPI, Cards, and Instant EMI accepted'}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={shopInfo.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('directions_click', { placement: 'store_section' })}
                className="flex items-center justify-center gap-2 bg-shiv-blue hover:bg-shiv-blue-hover text-white py-3 px-4 rounded-xl font-bold text-xs shadow-md transition"
              >
                <Navigation className="w-4 h-4" />
                <span>{dict.showroomSection.getDirectionsCta}</span>
              </a>

              <a
                href={`tel:${shopInfo.phone}`}
                onClick={() => trackEvent('call_click', { placement: 'store_section' })}
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-shiv-navy py-3 px-4 rounded-xl font-bold text-xs shadow-md transition"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>{dict.showroomSection.callStoreCta}</span>
              </a>
            </div>
          </div>

          {/* Embedded Interactive Google Map */}
          <div className="lg:col-span-7 bg-slate-100 rounded-3xl overflow-hidden shadow-lg border border-slate-200 min-h-[380px] relative">
            <iframe
              src={shopInfo.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shiv Shakti Electronics & Furniture Location"
              className="w-full h-full"
            />
            {/* Quick Floating Directions Pill */}
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-slate-200 hidden sm:flex items-center gap-3">
              <div>
                <div className="text-xs font-bold text-slate-800">Cooper's Camp 741232</div>
                <div className="text-[11px] text-slate-500">Nadia, West Bengal</div>
              </div>
              <a
                href={shopInfo.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-shiv-blue hover:bg-shiv-blue-hover text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-xs transition"
              >
                Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
