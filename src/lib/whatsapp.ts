import { Language, Product } from '@/types';
import { shopInfo } from '@/data/shopInfo';

interface WhatsAppLeadOptions {
  product?: Product;
  lang?: Language;
  campaign?: string;
  source?: string;
  customMessage?: string;
}

/**
 * Generates natural, high-converting WhatsApp inquiry URLs
 * using the exact showroom conversational phrasing.
 */
export function getWhatsAppLeadUrl({
  product,
  lang = 'bn',
  campaign,
  source = 'showroom-web',
  customMessage,
}: WhatsAppLeadOptions): string {
  const phone = shopInfo.whatsapp;

  if (customMessage) {
    return `https://wa.me/${phone}?text=${encodeURIComponent(customMessage)}`;
  }

  if (product) {
    // Standard showroom product representation (e.g. Samsung 55" 4K TV)
    const productTitle = product.name.en;
    const campTag = campaign ? ` | Campaign: ${campaign}` : '';

    if (lang === 'bn') {
      const msg = `নমস্কার, Shiv Shakti Electronics & Furniture-এর ওয়েবসাইটে ${productTitle} দেখলাম। আজকের দাম এবং EMI option জানতে চাই। [Ref: ${product.id}${campTag} | Src: ${source}]`;
      return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    } else {
      const msg = `Hi, I saw the ${productTitle} on the Shiv Shakti website. Please share today's best price and available EMI options. [Ref: ${product.id}${campTag} | Src: ${source}]`;
      return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    }
  }

  // Generic showroom inquiry
  const defaultMsg =
    lang === 'bn'
      ? `নমস্কার, Shiv Shakti Electronics & Furniture (কুপার্স ক্যাম্প শোরুম)-এর বর্তমান অফার ও দাম জানতে চাই। [Src: ${source}]`
      : `Hello, I would like to inquire about products and latest offers at Shiv Shakti Electronics & Furniture (Cooper's Camp). [Src: ${source}]`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(defaultMsg)}`;
}
