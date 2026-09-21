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
  customMessage,
}: WhatsAppLeadOptions): string {
  const phone = shopInfo.whatsapp;

  if (customMessage) {
    return `https://wa.me/${phone}?text=${encodeURIComponent(customMessage)}`;
  }

  if (product) {
    const productTitle = product.name[lang] || product.name.en;

    if (lang === 'bn') {
      const msg = `নমস্কার! শিব শক্তি শোরুমের ওয়েবসাইটে "${productTitle}" প্রোডাক্টটি দেখলাম। আজকের সেরা দাম ও সহজ কিস্তি (EMI) সুবিধা সম্পর্কে বিস্তারিত জানতে চাই।`;
      return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    } else {
      const msg = `Hello! I saw "${product.name.en}" on the Shiv Shakti website. Please share today's best price and available EMI options.`;
      return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    }
  }

  // Generic showroom inquiry
  const defaultMsg =
    lang === 'bn'
      ? `নমস্কার! শিব শক্তি ইলেকট্রনিক্স অ্যান্ড ফার্নিচার শোরুমের প্রোডাক্ট ও আজকের সেরা অফার সম্পর্কে জানতে চাই।`
      : `Hello! I would like to inquire about products and latest offers at Shiv Shakti Electronics and Furniture (Coopers Camp).`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(defaultMsg)}`;
}
