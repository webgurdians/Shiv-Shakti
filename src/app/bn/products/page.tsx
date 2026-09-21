import React from 'react';
import { CategoryPageTemplate } from '@/components/CategoryPageTemplate';

export const metadata = {
  title: 'সমস্ত ইলেকট্রনিক্স ও আসবাবপত্র | Shiv Shakti Electronics Coopers Camp',
  description: 'কুপার্স ক্যাম্পে স্মার্ট টিভি, এসি, ফ্রিজ, ওয়াশিং মেশিন, মোবাইল ও আসবাবপত্রের সম্পূর্ণ তালিকা দেখুন।',
};

export default function AllProductsPage() {
  return <CategoryPageTemplate categorySlug="products" lang="bn" />;
}
