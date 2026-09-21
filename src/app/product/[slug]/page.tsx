import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ProductDetailView } from '@/components/ProductDetailView';
import { products } from '@/data/products';

interface EnglishProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((prod) => ({
    slug: prod.slug,
  }));
}

export async function generateMetadata({ params }: EnglishProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: `${product.name.en} in Coopers Camp | Shiv Shakti Electronics`,
    description: product.shortDescription.en,
    alternates: {
      canonical: `https://www.shivshaktielectronics.com/product/${product.slug}`,
      languages: {
        'en-IN': `https://www.shivshaktielectronics.com/product/${product.slug}`,
        'bn-IN': `https://www.shivshaktielectronics.com/bn/product/${product.slug}`,
      },
    },
  };
}

export default async function EnglishProductPage({ params }: EnglishProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailView product={product} lang="en" />;
}
