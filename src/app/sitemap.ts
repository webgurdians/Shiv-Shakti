import { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import { promotions } from '@/data/promotions';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.shivshaktielectronics.com';
  const lastModified = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, priority: 1.0 },
    { url: `${baseUrl}/bn`, lastModified, priority: 0.9 },
    { url: `${baseUrl}/products`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/bn/products`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/offers`, lastModified, priority: 0.9 },
    { url: `${baseUrl}/bn/offers`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/emi-finance`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/bn/emi-finance`, lastModified, priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified, priority: 0.7 },
    { url: `${baseUrl}/bn/about`, lastModified, priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/bn/contact`, lastModified, priority: 0.7 },
  ];

  // Category pages
  categories.forEach((cat) => {
    routes.push(
      { url: `${baseUrl}/${cat.slug}`, lastModified, priority: 0.85 },
      { url: `${baseUrl}/bn/${cat.slug}`, lastModified, priority: 0.8 }
    );
  });

  // Product pages
  products.forEach((prod) => {
    routes.push(
      { url: `${baseUrl}/product/${prod.slug}`, lastModified, priority: 0.8 },
      { url: `${baseUrl}/bn/product/${prod.slug}`, lastModified, priority: 0.75 }
    );
  });

  // Offer campaigns
  promotions.forEach((promo) => {
    routes.push(
      { url: `${baseUrl}/offers/${promo.slug}`, lastModified, priority: 0.85 },
      { url: `${baseUrl}/bn/offers/${promo.slug}`, lastModified, priority: 0.8 }
    );
  });

  return routes;
}
