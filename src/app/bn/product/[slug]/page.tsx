import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ProductDetailView } from '@/components/ProductDetailView';
import { products } from '@/data/products';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((prod) => ({
    slug: prod.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: `${product.name.bn} | Shiv Shakti Electronics Coopers Camp`,
    description: product.shortDescription.bn,
    alternates: {
      canonical: `https://www.shivshaktielectronics.com/bn/product/${product.slug}`,
      languages: {
        'en-IN': `https://www.shivshaktielectronics.com/product/${product.slug}`,
        'bn-IN': `https://www.shivshaktielectronics.com/bn/product/${product.slug}`,
      },
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailView product={product} lang="bn" />;
}
