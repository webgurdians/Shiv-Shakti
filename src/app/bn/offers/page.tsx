import React from 'react';
import { OffersView } from '@/components/OffersView';
import { getActivePromotions } from '@/data/promotions';

export const metadata = {
  title: 'বর্তমান অফার ও উৎসব ছাড় | Shiv Shakti Electronics Coopers Camp',
  description: 'কুপার্স ক্যাম্পে পুজো সেল ও বিশেষ শোরুম ডিসকাউন্টের বিস্তারিত তালিকা। টিভি, ফ্রিজ, এসি ও আসবাবপত্রে সেরা ডিল।',
};

export default function OffersPage() {
  const activePromos = getActivePromotions();
  return <OffersView promotions={activePromos} lang="bn" />;
}
