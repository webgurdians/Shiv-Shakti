import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { OffersView } from '@/components/OffersView';
import { promotions, getActivePromotions } from '@/data/promotions';

interface OfferCampaignPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return promotions.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: OfferCampaignPageProps): Promise<Metadata> {
  const { slug } = await params;
  const promo = promotions.find((p) => p.slug === slug);
  if (!promo) return {};

  return {
    title: `${promo.title.bn} | Shiv Shakti Electronics Cooper's Camp`,
    description: promo.description.bn,
  };
}

export default async function OfferCampaignPage({ params }: OfferCampaignPageProps) {
  const { slug } = await params;
  const promo = promotions.find((p) => p.slug === slug);

  if (!promo) {
    notFound();
  }

  const allPromos = getActivePromotions();
  return <OffersView promotions={allPromos} currentPromotion={promo} lang="bn" />;
}
