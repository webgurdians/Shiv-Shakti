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
    title: `${product.name.bn} | Shiv Shakti Electronics Cooper's Camp`,
    description: product.shortDescription.bn,
    alternates: {
      canonical: `https://shivshaktielectronics.com/product/${product.slug}`,
      languages: {
        'bn-IN': `https://shivshaktielectronics.com/product/${product.slug}`,
        'en-IN': `https://shivshaktielectronics.com/en/product/${product.slug}`,
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
