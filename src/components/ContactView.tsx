'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyBottomBar } from '@/components/StickyBottomBar';
import { StoreLocationSection } from '@/components/StoreLocationSection';
import { Language } from '@/types';
import { getDictionary } from '@/data/dictionary';
import { shopInfo } from '@/data/shopInfo';
import { getWhatsAppLeadUrl } from '@/lib/whatsapp';
import { Phone, MessageCircle, Navigation, Clock, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

interface ContactViewProps {
  lang: Language;
}

export const ContactView: React.FC<ContactViewProps> = ({ lang }) => {
  const dict = getDictionary(lang);
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to pre-filled WhatsApp lead with user's specific note
    const customMsg =
      lang === 'bn'
        ? `নমস্কার, আমি ${name} (${phone})। কুপার্স ক্যাম্প শোরুম থেকে জানতে চাই: ${query}`
        : `Hello, I am ${name} (${phone}). Inquiry for Shiv Shakti showroom: ${query}`;

    const url = getWhatsAppLeadUrl({
      lang,
      source: 'contact_form',
      customMessage: customMsg,
    });

    trackEvent('whatsapp_click', { placement: 'contact_form', author: name });
    setFormSent(true);
    window.open(url, '_blank');
  };

  return (
    <>
      <Header lang={lang} />
      <main className="flex-grow bg-slate-50 min-h-screen py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="bg-blue-50 text-shiv-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {dict.nav.contact}
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-shiv-navy mt-2">
              {lang === 'bn' ? 'শোরুমের সাথে সরাসরি যোগাযোগ করুন' : 'Get In Touch & Visit Store'}
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              {lang === 'bn'
                ? 'কুপার্স বাজারে আমাদের শোরুমে সরাসরি আসুন অথবা ফোন ও WhatsApp-এ কথা বলুন'
                : 'Visit our showroom at Cooper\'s Camp Bazar or reach out directly via call and WhatsApp.'}
            </p>
          </div>

          {/* Contact Fast Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Dial */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-900">
                  {lang === 'bn' ? 'সরাসরি ফোন করুন' : 'Call Directly'}
                </h3>
                <p className="text-xs text-slate-500">
                  {lang === 'bn' ? 'তাৎক্ষণিক স্টক ও দাম জানতে' : 'For instant pricing and stock availability'}
                </p>
                <div className="text-sm font-extrabold text-shiv-navy space-y-0.5">
                  <div>
                    <a href={`tel:${shopInfo.phone}`} className="hover:underline">
                      {shopInfo.displayPhone}
                    </a>
                  </div>
                  {shopInfo.phoneSecondary && (
                    <div>
                      <a href={`tel:${shopInfo.phoneSecondary}`} className="hover:underline text-slate-700">
                        {shopInfo.displayPhoneSecondary}
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex gap-2">
                <a
                  href={`tel:${shopInfo.phone}`}
                  onClick={() => trackEvent('call_click', { placement: 'contact_cards_1' })}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-center rounded-xl font-bold text-xs transition"
                >
                  Call 1
                </a>
                {shopInfo.phoneSecondary && (
                  <a
                    href={`tel:${shopInfo.phoneSecondary}`}
                    onClick={() => trackEvent('call_click', { placement: 'contact_cards_2' })}
                    className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-center rounded-xl font-bold text-xs transition"
                  >
                    Call 2
                  </a>
                )}
              </div>
            </div>

            {/* WhatsApp Chat */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-green-50 text-whatsapp flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 fill-whatsapp" />
                </div>
                <h3 className="font-bold text-base text-slate-900">
                  {lang === 'bn' ? 'WhatsApp বার্তা পাঠান' : 'Chat on WhatsApp'}
                </h3>
                <p className="text-xs text-slate-500">
                  {lang === 'bn' ? 'ছবি, ব্রোশিওর ও অফার দেখতে' : 'Request product brochures, quotes and photos'}
                </p>
                <div className="text-base font-extrabold text-whatsapp">
                  {shopInfo.displayWhatsapp}
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <a
                  href={getWhatsAppLeadUrl({ lang, source: 'contact_cards' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click', { placement: 'contact_cards' })}
                  className="block w-full py-2.5 bg-whatsapp hover:bg-whatsapp-hover text-white text-center rounded-xl font-bold text-xs shadow-xs transition"
                >
                  {dict.hero.chatWhatsapp}
                </a>
              </div>
            </div>

            {/* Timings */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-festival-gold-dark flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-slate-900">
                  {dict.showroomSection.timingsTitle}
                </h3>
                <p className="text-xs text-slate-500">
                  {lang === 'bn' ? 'সপ্তাহের সাত দিনই খোলা' : 'Open 7 days a week, no holiday closure'}
                </p>
                <div className="text-sm font-extrabold text-shiv-navy">
                  {shopInfo.timings[lang]}
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <a
                  href={shopInfo.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('directions_click', { placement: 'contact_cards' })}
                  className="block w-full py-2.5 bg-shiv-blue hover:bg-shiv-blue-hover text-white text-center rounded-xl font-bold text-xs shadow-xs transition"
                >
                  <Navigation className="w-3.5 h-3.5 inline-block mr-1" />
                  {dict.showroomSection.getDirectionsCta}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-black text-shiv-navy mb-2">
              {lang === 'bn' ? 'দ্রুত মেসেজ পাঠান' : 'Send an Instant Showroom Inquiry'}
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              {lang === 'bn'
                ? 'আপনার পছন্দের পণ্য ও প্রশ্নের বিবরণ দিলে শোরুম কর্মী সরাসরি WhatsApp-এ উত্তর দেবেন।'
                : 'Fill your inquiry below to open an immediate WhatsApp conversation with store managers.'}
            </p>

            {formSent ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="font-bold text-emerald-900">
                  {lang === 'bn' ? 'আপনার বার্তা গৃহীত হয়েছে!' : 'Inquiry dispatched!'}
                </h3>
                <p className="text-xs text-emerald-700">
                  {lang === 'bn'
                    ? 'আপনার WhatsApp উইন্ডো খুলে দেওয়া হয়েছে। শোরুম থেকে শীঘ্রই উত্তর দেওয়া হবে।'
                    : 'Your inquiry has been channeled through WhatsApp for priority attention.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'bn' ? 'আপনার নাম:' : 'Your Name:'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === 'bn' ? 'যেমন: রাহুল বিশ্বাস' : 'e.g. Rahul Biswas'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-shiv-blue text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'bn' ? 'মোবাইল নম্বর:' : 'Phone Number:'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-shiv-blue text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'bn' ? 'কী পণ্য বা অফার সম্পর্কে জানতে চান?' : 'Product or scheme of interest:'}
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={
                      lang === 'bn'
                        ? 'যেমন: স্যামসাং ৫৫ ইঞ্চি টিভির পুজো অফার এবং জিরো ডাউনপেমেন্ট ইএমআই...'
                        : 'e.g. Inquiring about Samsung 55" 4K TV EMI offer...'
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-shiv-blue text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-whatsapp hover:bg-whatsapp-hover text-white rounded-xl font-bold text-sm shadow-md transition"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'bn' ? 'WhatsApp-এ পাঠিয়ে দিন' : 'Send via WhatsApp'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Showroom Location Map & Address */}
          <StoreLocationSection lang={lang} />
        </div>
      </main>

      <Footer lang={lang} />
      <StickyBottomBar lang={lang} />
    </>
  );
};
