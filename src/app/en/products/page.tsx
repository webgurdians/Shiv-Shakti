import React from 'react';
import { CategoryPageTemplate } from '@/components/CategoryPageTemplate';

export const metadata = {
  title: 'All Electronics & Furniture | Shiv Shakti Electronics Cooper\'s Camp',
  description: 'Explore complete showroom catalogue of Smart TVs, ACs, Refrigerators, Mobiles, and Furniture in Cooper\'s Camp.',
};

export default function EnglishAllProductsPage() {
  return <CategoryPageTemplate categorySlug="products" lang="en" />;
}
