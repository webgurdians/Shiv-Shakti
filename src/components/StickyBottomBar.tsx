'use client';

import React from 'react';
import { Phone, MessageCircle, Navigation } from 'lucide-react';
import { Language } from '@/types';
import { getDictionary } from '@/data/dictionary';
import { shopInfo } from '@/data/shopInfo';
import { getWhatsAppLeadUrl } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';

interface StickyBottomBarProps {
  lang: Language;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ lang }) => {
  const dict = getDictionary(lang);

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-3 gap-2">
        {/* Direct Call Button */}
        <a
          href={`tel:${shopInfo.phone}`}
          onClick={() => trackEvent('call_click', { placement: 'sticky_bottom_bar' })}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition active:scale-95"
        >
          <Phone className="w-5 h-5 text-shiv-navy mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">
            {dict.stickyBar.call}
          </span>
        </a>

        {/* WhatsApp Inquiry Button */}
        <a
          href={getWhatsAppLeadUrl({ lang, source: 'sticky_bottom_bar' })}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('whatsapp_click', { placement: 'sticky_bottom_bar' })}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white shadow-md transition active:scale-95"
        >
          <MessageCircle className="w-5 h-5 fill-white mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">
            {dict.stickyBar.whatsapp}
          </span>
        </a>

        {/* Google Maps Directions Button */}
        <a
          href={shopInfo.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('directions_click', { placement: 'sticky_bottom_bar' })}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-shiv-blue hover:bg-shiv-blue-hover text-white shadow-md transition active:scale-95"
        >
          <Navigation className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">
            {dict.stickyBar.directions}
          </span>
        </a>
      </div>
    </div>
  );
};
