import React from 'react';
import { OffersView } from '@/components/OffersView';
import { getActivePromotions } from '@/data/promotions';

export const metadata = {
  title: 'Showroom Offers & Festive Deals | Shiv Shakti Electronics Cooper\'s Camp',
  description: 'Explore live showroom festival offers, exchange bonuses and zero downpayment EMI in Cooper\'s Camp, Nadia.',
};

export default function EnglishOffersPage() {
  const activePromos = getActivePromotions();
  return <OffersView promotions={activePromos} lang="en" />;
}
