import React from 'react';
import { notFound } from 'next/navigation';
import { CategoryPageTemplate } from '@/components/CategoryPageTemplate';
import { categories } from '@/data/categories';
import { Metadata } from 'next';

interface EnglishCategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: EnglishCategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};

  return {
    title: `${category.name.en} Showroom in Cooper's Camp | Shiv Shakti Electronics`,
    description: `Shop genuine ${category.name.en} in Cooper's Camp, Nadia with official warranty, easy zero downpayment EMI, and prompt delivery.`,
  };
}

export default async function EnglishCategoryPage({ params }: EnglishCategoryPageProps) {
  const { category: slug } = await params;
  const validCategory = categories.find((c) => c.slug === slug);

  if (!validCategory) {
    notFound();
  }

  return <CategoryPageTemplate categorySlug={slug} lang="en" />;
}
