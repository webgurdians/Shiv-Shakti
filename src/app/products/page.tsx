import React from 'react';
import { CategoryPageTemplate } from '@/components/CategoryPageTemplate';

export const metadata = {
  title: 'All Electronics and Furniture | Shiv Shakti Electronics Coopers Camp',
  description: 'Explore complete showroom catalogue of Smart TVs, ACs, Refrigerators, Mobiles, and Furniture in Coopers Camp.',
};

export default function EnglishAllProductsPage() {
  return <CategoryPageTemplate categorySlug="products" lang="en" />;
}
