import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { OffersView } from '@/components/OffersView';
import { promotions, getActivePromotions } from '@/data/promotions';

interface EnglishOfferCampaignPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return promotions.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: EnglishOfferCampaignPageProps): Promise<Metadata> {
  const { slug } = await params;
  const promo = promotions.find((p) => p.slug === slug);
  if (!promo) return {};

  return {
    title: `${promo.title.en} | Shiv Shakti Electronics Coopers Camp`,
    description: promo.description.en,
  };
}

export default async function EnglishOfferCampaignPage({ params }: EnglishOfferCampaignPageProps) {
  const { slug } = await params;
  const promo = promotions.find((p) => p.slug === slug);

  if (!promo) {
    notFound();
  }

  const allPromos = getActivePromotions();
  return <OffersView promotions={allPromos} currentPromotion={promo} lang="en" />;
}
