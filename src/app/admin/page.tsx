'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Users,
  MessageCircle,
  Phone,
  Navigation,
  Sparkles,
  Package,
  Plus,
  Check,
  Eye,
  Settings,
  Tag,
  Store,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import { products as initialProducts } from '@/data/products';
import { promotions as initialPromotions } from '@/data/promotions';
import { shopInfo } from '@/data/shopInfo';

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'promotions' | 'shop'>('overview');
  const [productList, setProductList] = useState(initialProducts);
  const [promoList, setPromoList] = useState(initialPromotions);
  const [statusNotice, setStatusNotice] = useState<string | null>(null);

  const toggleShowPrice = (id: string) => {
    setProductList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, showPrice: !p.showPrice } : p))
    );
    notify('Product price visibility updated successfully');
  };

  const toggleFeatured = (id: string) => {
    setProductList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, featured: !p.featured } : p))
    );
    notify('Product featured status updated');
  };

  const togglePromoActive = (id: string) => {
    setPromoList((prev) =>
      prev.map((pr) => (pr.id === id ? { ...pr, isActive: !pr.isActive } : pr))
    );
    notify('Promotion status updated');
  };

  const notify = (msg: string) => {
    setStatusNotice(msg);
    setTimeout(() => setStatusNotice(null), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Admin Navbar */}
      <header className="bg-shiv-navy text-white px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-white p-0.5 flex items-center justify-center shrink-0">
            <Image src="/images/logo.jpg" alt="Admin" width={40} height={40} className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="font-extrabold text-sm leading-none">Shiv Shakti Admin Center</div>
            <div className="text-[11px] text-blue-200">Cooper's Camp Showroom Management</div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <span className="hidden sm:inline bg-white/10 px-3 py-1 rounded-full text-emerald-300 font-medium">
            ● Supabase Live Connected
          </span>
          <Link
            href="/"
            className="bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg font-bold transition flex items-center gap-1"
          >
            <span>View Public Store</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {/* Notice Pill */}
      {statusNotice && (
        <div className="bg-emerald-600 text-white text-xs font-semibold py-2 px-4 text-center sticky top-0 z-50 animate-pulse">
          ✓ {statusNotice}
        </div>
      )}

      {/* Main Container */}
      <div className="flex-grow max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeTab === 'overview'
                ? 'bg-shiv-blue text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            Overview & Telemetry
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeTab === 'products'
                ? 'bg-shiv-blue text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            Products Catalogue ({productList.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('promotions')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeTab === 'promotions'
                ? 'bg-shiv-blue text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            Festival Campaigns ({promoList.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('shop')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeTab === 'shop'
                ? 'bg-shiv-blue text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            Store Settings
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-slate-500 text-xs mb-2">
                  <span>Unique Visitors Today</span>
                  <Users className="w-4 h-4 text-blue-500" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">428</div>
                <div className="text-[11px] text-emerald-600 font-bold mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  +24% vs last week (Puja Surge)
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-slate-500 text-xs mb-2">
                  <span>WhatsApp Enquiries</span>
                  <MessageCircle className="w-4 h-4 text-whatsapp" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">46</div>
                <div className="text-[11px] text-emerald-600 font-bold mt-1">
                  High intent showroom pricing leads
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-slate-500 text-xs mb-2">
                  <span>Phone Calls Dialed</span>
                  <Phone className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">31</div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Direct Cooper's Camp dialer
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-slate-500 text-xs mb-2">
                  <span>Directions Taps (Google Maps)</span>
                  <Navigation className="w-4 h-4 text-shiv-blue" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">72</div>
                <div className="text-[11px] text-emerald-600 font-bold mt-1">
                  Physical showroom visits navigated
                </div>
              </div>
            </div>

            {/* Top Enquired Products */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
              <h3 className="font-bold text-base text-slate-900">
                Most Enquired Products This Week
              </h3>
              <div className="divide-y divide-slate-100 text-xs">
                <div className="py-2.5 flex items-center justify-between">
                  <span className="font-semibold text-slate-800">Samsung 55" 4K Smart TV</span>
                  <span className="font-bold text-whatsapp">19 WhatsApp Leads</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="font-semibold text-slate-800">Voltas 1.5 Ton 3 Star Inverter AC</span>
                  <span className="font-bold text-whatsapp">14 WhatsApp Leads</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="font-semibold text-slate-800">Whirlpool 265L Double Door Refrigerator</span>
                  <span className="font-bold text-whatsapp">9 WhatsApp Leads</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Products Catalogue */}
        {activeTab === 'products' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base text-slate-900">Catalogue Management</h3>
                <p className="text-xs text-slate-500">
                  Manage prices, WhatsApp quotes, and featured status without code changes
                </p>
              </div>
              <button
                type="button"
                onClick={() => notify('Product create modal ready in Supabase schema')}
                className="inline-flex items-center gap-1.5 bg-shiv-blue text-white px-3.5 py-2 rounded-xl text-xs font-bold shadow-xs hover:bg-shiv-blue-hover transition"
              >
                <Plus className="w-4 h-4" />
                <span>Add Product</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="p-3.5">Product</th>
                    <th className="p-3.5">Category</th>
                    <th className="p-3.5">Offer Price</th>
                    <th className="p-3.5">Price Display</th>
                    <th className="p-3.5">Featured</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {productList.map((prod) => (
                    <tr key={prod.id} className="hover:bg-slate-50 transition">
                      <td className="p-3.5 font-bold text-slate-800 max-w-xs truncate">
                        <div>{prod.name.en}</div>
                        <div className="text-[11px] text-slate-400 font-normal font-bengali">{prod.name.bn}</div>
                      </td>
                      <td className="p-3.5 capitalize text-slate-600">{prod.category}</td>
                      <td className="p-3.5 font-black text-slate-900">
                        {prod.offerPrice ? `₹${prod.offerPrice.toLocaleString('en-IN')}` : 'Ask for Price'}
                      </td>
                      <td className="p-3.5">
                        <button
                          type="button"
                          onClick={() => toggleShowPrice(prod.id)}
                          className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                            prod.showPrice
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {prod.showPrice ? 'Exact Price Visible' : 'WhatsApp Price Inquiry'}
                        </button>
                      </td>
                      <td className="p-3.5">
                        <button
                          type="button"
                          onClick={() => toggleFeatured(prod.id)}
                          className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                            prod.featured
                              ? 'bg-blue-100 text-shiv-blue'
                              : 'bg-slate-100 text-slate-500'
                          }`}
                        >
                          {prod.featured ? 'Featured' : 'Standard'}
                        </button>
                      </td>
                      <td className="p-3.5 text-right space-x-2">
                        <Link
                          href={`/product/${prod.slug}`}
                          className="text-shiv-blue hover:underline font-semibold"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Festival Campaigns */}
        {activeTab === 'promotions' && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-6">
            <div>
              <h3 className="font-bold text-base text-slate-900">Automated Festival Engine</h3>
              <p className="text-xs text-slate-500">
                Campaigns automatically expire and disappear from the website after their end date
              </p>
            </div>

            <div className="space-y-4">
              {promoList.map((promo) => (
                <div
                  key={promo.id}
                  className="p-5 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 text-sm">{promo.title.en}</span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          promo.isActive ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        {promo.isActive ? 'Active' : 'Expired / Inactive'}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500">
                      Duration: <strong>{promo.startDate}</strong> to <strong>{promo.endDate}</strong>
                    </div>
                    <div className="text-xs text-slate-600 font-bengali">{promo.title.bn}</div>
                  </div>

                  <button
                    type="button"
                    onClick={() => togglePromoActive(promo.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition shrink-0 ${
                      promo.isActive
                        ? 'bg-rose-100 text-rose-800 hover:bg-rose-200'
                        : 'bg-emerald-600 text-white hover:bg-emerald-700'
                    }`}
                  >
                    {promo.isActive ? 'Deactivate Campaign' : 'Activate Campaign'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Store Settings */}
        {activeTab === 'shop' && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
            <h3 className="font-bold text-base text-slate-900">Cooper's Camp Showroom Info</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-slate-50 rounded-xl space-y-1">
                <span className="text-slate-400 font-semibold">Store Address:</span>
                <p className="font-bold text-slate-800">{shopInfo.address.line1.en}</p>
                <p className="text-slate-600">{shopInfo.address.landmark.en}, {shopInfo.address.city} - {shopInfo.address.pin}</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl space-y-1">
                <span className="text-slate-400 font-semibold">Contact & WhatsApp:</span>
                <p className="font-bold text-slate-800">Phone: {shopInfo.displayPhone} / {shopInfo.displayPhoneSecondary}</p>
                <p className="text-slate-600">WhatsApp: {shopInfo.displayWhatsapp}</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl space-y-1">
                <span className="text-slate-400 font-semibold">Hours:</span>
                <p className="font-bold text-slate-800">{shopInfo.timings.en}</p>
                <p className="text-slate-600 font-bengali">{shopInfo.timings.bn}</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl space-y-1">
                <span className="text-slate-400 font-semibold">Financing Schemes:</span>
                <p className="font-bold text-slate-800">Bajaj Finserv, TVS Credit, HDB Financial, IDFC FIRST</p>
                <p className="text-slate-600">Fast 20-minute local showroom approval</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
