import { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import { promotions } from '@/data/promotions';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shivshaktielectronics.com';
  const lastModified = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, priority: 1.0 },
    { url: `${baseUrl}/en`, lastModified, priority: 0.9 },
    { url: `${baseUrl}/products`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/en/products`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/offers`, lastModified, priority: 0.9 },
    { url: `${baseUrl}/en/offers`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/emi-finance`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/en/emi-finance`, lastModified, priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified, priority: 0.7 },
    { url: `${baseUrl}/en/about`, lastModified, priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/en/contact`, lastModified, priority: 0.7 },
  ];

  // Category pages
  categories.forEach((cat) => {
    routes.push(
      { url: `${baseUrl}/${cat.slug}`, lastModified, priority: 0.85 },
      { url: `${baseUrl}/en/${cat.slug}`, lastModified, priority: 0.8 }
    );
  });

  // Product pages
  products.forEach((prod) => {
    routes.push(
      { url: `${baseUrl}/product/${prod.slug}`, lastModified, priority: 0.8 },
      { url: `${baseUrl}/en/product/${prod.slug}`, lastModified, priority: 0.75 }
    );
  });

  // Offer campaigns
  promotions.forEach((promo) => {
    routes.push(
      { url: `${baseUrl}/offers/${promo.slug}`, lastModified, priority: 0.85 },
      { url: `${baseUrl}/en/offers/${promo.slug}`, lastModified, priority: 0.8 }
    );
  });

  return routes;
}
