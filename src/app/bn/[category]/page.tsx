import React from 'react';
import { notFound } from 'next/navigation';
import { CategoryPageTemplate } from '@/components/CategoryPageTemplate';
import { categories } from '@/data/categories';
import { Metadata } from 'next';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};

  return {
    title: `${category.name.bn} শোরুম কুপার্স ক্যাম্প | Shiv Shakti Electronics`,
    description: `কুপার্স ক্যাম্পে সেরা মূল্যে ও সহজ কিস্তিতে ${category.name.bn} কিনুন। সরাসরি শোরুমে এসে লাইভ ডেমো দেখুন।`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const validCategory = categories.find((c) => c.slug === slug);

  if (!validCategory) {
    notFound();
  }

  return <CategoryPageTemplate categorySlug={slug} lang="bn" />;
}
