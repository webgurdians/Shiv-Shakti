'use client';

import React, { useState } from 'react';
import { CreditCard, CheckCircle, Calculator, Sparkles, Building2 } from 'lucide-react';
import { Language } from '@/types';
import { getDictionary } from '@/data/dictionary';
import { shopInfo } from '@/data/shopInfo';
import { trackEvent } from '@/lib/analytics';

interface FinanceSectionProps {
  lang: Language;
}

export const FinanceSection: React.FC<FinanceSectionProps> = ({ lang }) => {
  const dict = getDictionary(lang);

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState<number>(35000);
  const [tenureMonths, setTenureMonths] = useState<number>(12);

  // Calculate approximate EMI (approx 12-14% p.a. standard consumer durable interest or zero cost scheme)
  const calculateEstimatedEmi = (amount: number, months: number) => {
    // Simple estimation formula
    const annualInterestRate = 0.12;
    const monthlyRate = annualInterestRate / 12;
    const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(emi);
  };

  const estimatedEmi = calculateEstimatedEmi(loanAmount, tenureMonths);

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 to-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-shiv-blue text-xs font-bold uppercase tracking-wider mb-2">
            <CreditCard className="w-3.5 h-3.5" />
            <span>{dict.financeSection.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-shiv-navy">
            {dict.financeSection.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            {dict.financeSection.subtitle}
          </p>
        </div>

        {/* 4 Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {dict.financeSection.features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-shiv-blue flex items-center justify-center mb-3">
                <CheckCircle className="w-5 h-5 text-shiv-blue" />
              </div>
              <h3 className="font-bold text-base text-slate-800 mb-1">
                {feature.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive EMI Calculator & Financier Logos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-lg">
          {/* Calculator Controls */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-shakti-red" />
              <h3 className="font-extrabold text-lg sm:text-xl text-shiv-navy">
                {dict.financeSection.calculatorTitle}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              {dict.financeSection.calculatorSubtitle}
            </p>

            {/* Slider 1: Product / Loan Amount */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-slate-700">
                  {lang === 'bn' ? 'পণ্যের সম্ভাব্য মূল্য:' : 'Product Price:'}
                </span>
                <span className="font-black text-lg text-shiv-blue">
                  ₹{loanAmount.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min={10000}
                max={150000}
                step={2000}
                value={loanAmount}
                onChange={(e) => {
                  setLoanAmount(Number(e.target.value));
                  trackEvent('emi_click', { action: 'adjust_amount', value: e.target.value });
                }}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-shiv-blue"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>₹10,000</span>
                <span>₹75,000</span>
                <span>₹1,50,000</span>
              </div>
            </div>

            {/* Slider 2: Tenure Months */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-slate-700">
                  {dict.financeSection.tenureMonths}:
                </span>
                <span className="font-black text-lg text-shiv-blue">
                  {tenureMonths} {lang === 'bn' ? 'মাস' : 'Months'}
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[3, 6, 9, 12, 18, 24].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => {
                      setTenureMonths(m);
                      trackEvent('emi_click', { action: 'change_tenure', months: m });
                    }}
                    className={`py-2 text-xs font-bold rounded-xl border transition ${
                      tenureMonths === m
                        ? 'bg-shiv-navy text-white border-shiv-navy shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {m} {lang === 'bn' ? 'মাস' : 'M'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Calculator Output Display */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-shiv-navy text-white p-6 sm:p-8 rounded-2xl text-center space-y-4 shadow-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-festival-gold text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 fill-festival-gold" />
              <span>{lang === 'bn' ? 'আনুমানিক হিসাব' : 'Instant Estimation'}</span>
            </div>

            <p className="text-xs text-slate-300">
              {dict.financeSection.estimatedMonthlyEmi}
            </p>

            <div className="text-3xl sm:text-4xl font-black text-white">
              ₹{estimatedEmi.toLocaleString('en-IN')}
              <span className="text-xs sm:text-sm font-normal text-slate-300 block mt-1">
                {lang === 'bn' ? 'প্রতি মাসে (আনুমানিক)' : 'per month (approx)'}
              </span>
            </div>

            <div className="pt-2 border-t border-white/10 text-left text-xs space-y-1.5 text-slate-300">
              <div className="flex justify-between">
                <span>{lang === 'bn' ? 'মোট ঋণের পরিমাণ:' : 'Total Financed:'}</span>
                <span className="font-semibold text-white">₹{loanAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span>{lang === 'bn' ? 'কিস্তির মেয়াদ:' : 'Tenure Period:'}</span>
                <span className="font-semibold text-white">{tenureMonths} {lang === 'bn' ? 'মাস' : 'Months'}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${shopInfo.phone}`}
                className="block w-full py-2.5 bg-shakti-red hover:bg-shakti-red-hover text-white rounded-xl font-bold text-xs shadow-md transition"
              >
                {lang === 'bn' ? 'শোরুমে ফাইন্যান্সের জন্য কথা বলুন' : 'Inquire for Finance Scheme'}
              </a>
            </div>
          </div>
        </div>

        {/* Finance Partners Logos */}
        <div className="mt-8 pt-6 border-t border-slate-200 text-center">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-center gap-1.5">
            <Building2 className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'আমাদের অনুমোদিত ফাইন্যান্স পার্টনার্স' : 'Authorized Showroom Financing Partners'}</span>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {shopInfo.financePartners.map((partner, idx) => (
              <div
                key={idx}
                className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-xs flex flex-col items-center justify-center text-center"
              >
                <div className="font-extrabold text-sm text-shiv-navy">
                  {partner.name}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {partner.description[lang]}
                </div>
              </div>
            ))}
          </div>

          {/* Genuine Compliance Disclaimer */}
          <p className="mt-6 text-[11px] text-slate-400 max-w-3xl mx-auto leading-relaxed italic">
            {dict.financeSection.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};
