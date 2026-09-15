'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyBottomBar } from '@/components/StickyBottomBar';
import { FinanceSection } from '@/components/FinanceSection';
import { Language } from '@/types';
import { getDictionary } from '@/data/dictionary';
import { shopInfo } from '@/data/shopInfo';
import { getWhatsAppLeadUrl } from '@/lib/whatsapp';
import { FileText, CheckCircle2, Clock, ShieldCheck, MessageCircle, Phone } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

interface EmiFinanceViewProps {
  lang: Language;
}

export const EmiFinanceView: React.FC<EmiFinanceViewProps> = ({ lang }) => {
  const dict = getDictionary(lang);

  const documents = [
    {
      title: lang === 'bn' ? 'আধার কার্ড' : 'Aadhaar Card',
      desc: lang === 'bn' ? 'ঠিকানা ও পরিচয় প্রমাণের জন্য' : 'For identity and local address proof',
    },
    {
      title: lang === 'bn' ? 'প্যান কার্ড' : 'PAN Card',
      desc: lang === 'bn' ? 'আর্থিক যাচাই ও সিআইবিআইএল যাচাইয়ের জন্য' : 'For financial verification & CIBIL score',
    },
    {
      title: lang === 'bn' ? 'ব্যাংক তথ্য' : 'Bank Details / ATM',
      desc: lang === 'bn' ? 'অটো-ডেবিট বা ই-ম্যানডেট সেটআপের জন্য' : 'Cancelled cheque or debit card for e-mandate',
    },
    {
      title: lang === 'bn' ? 'স্মার্টফোন' : 'Active Mobile Phone',
      desc: lang === 'bn' ? 'ওটিপি (OTP) ও তাৎক্ষণিক অনুমোদনের জন্য' : 'For real-time SMS OTP authentication',
    },
  ];

  return (
    <>
      <Header lang={lang} />
      <main className="flex-grow bg-slate-50 min-h-screen py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-shiv-navy via-slate-900 to-shiv-blue text-white rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="max-w-3xl space-y-4">
              <span className="bg-white/20 text-festival-gold text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {dict.nav.emi}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                {lang === 'bn'
                  ? 'সহজ কিস্তি ও ফাইন্যান্স সুবিধা — কুপার্স ক্যাম্প শোরুম'
                  : 'Easy EMI & Consumer Finance — Cooper\'s Camp Showroom'}
              </h1>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                {lang === 'bn'
                  ? 'বাজেটের চিন্তা ভুলে বাড়ি নিয়ে যান আপনার পছন্দের স্মার্ট টিভি, এসি, ফ্রিজ কিংবা আসবাবপত্র। বাজাজ ফিনসার্ভ এবং অন্যান্য প্রধান ফাইন্যান্স পার্টনারের সাহায্যে মাত্র ১৫-২০ মিনিটে অনুমোদন।'
                  : 'Upgrade your living space today. With Bajaj Finserv, TVS Credit, and HDB Finance, enjoy fast on-the-spot loan approval in under 20 minutes with zero hassle.'}
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  href={getWhatsAppLeadUrl({
                    lang,
                    campaign: 'emi-page',
                    source: 'emi_finance_page',
                    customMessage:
                      lang === 'bn'
                        ? 'নমস্কার, আমি Shiv Shakti Showroom-এ EMI বা কিস্তিতে পণ্য কেনা সম্পর্কে বিস্তারিত এবং আমার যোগ্যতা জানতে চাই।'
                        : 'Hello, I would like to check my EMI eligibility and available schemes at Shiv Shakti showroom.',
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click', { placement: 'emi_page_hero' })}
                  className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white px-5 py-3 rounded-xl font-bold text-sm shadow-md transition"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{lang === 'bn' ? 'WhatsApp-এ যোগ্যতা জানুন' : 'Check EMI on WhatsApp'}</span>
                </a>

                <a
                  href={`tel:${shopInfo.phone}`}
                  onClick={() => trackEvent('call_click', { placement: 'emi_page_hero' })}
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-shiv-navy px-5 py-3 rounded-xl font-bold text-sm shadow-md transition"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>{dict.hero.callNow}</span>
                </a>
              </div>
            </div>
          </div>

          {/* 4 Required Documents Checklist */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-black text-shiv-navy mb-2">
              {lang === 'bn' ? 'কিস্তি পেতে কী কী নথি প্রয়োজন?' : 'Documents Required for EMI Approval'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              {lang === 'bn'
                ? 'শোরুমে আসার সময় নিচের সাধারণ প্রমাণপত্রগুলি সাথে নিয়ে আসুন:'
                : 'Bring these basic documents when visiting our showroom for instantaneous processing:'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {documents.map((doc, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-shiv-blue flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-800">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-slate-500">{doc.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Embedded Finance Section with Calculator */}
          <FinanceSection lang={lang} />
        </div>
      </main>

      <Footer lang={lang} />
      <StickyBottomBar lang={lang} />
    </>
  );
};
