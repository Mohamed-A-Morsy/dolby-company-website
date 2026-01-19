'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { products } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function ProductsPage() {
  const { t, isArabic } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'electronics' | 'fashion' | 'home'>('all');

  const categories = [
    { id: 'all', label: isArabic ? 'الكل' : 'All Products' },
    { id: 'electronics', label: t('products.categories.electronics') },
    { id: 'fashion', label: t('products.categories.fashion') },
    { id: 'home', label: t('products.categories.home') },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <main>
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            {t('products.title')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('products.subtitle')}
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <Button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                className={selectedCategory === cat.id ? '' : ''}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer group">
                  {/* Product Image */}
                  <div className="relative h-64 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden flex items-center justify-center">
                    <div className="text-6xl group-hover:scale-110 transition duration-300">
                      {product.category === 'audio' ? '🎵' : product.category === 'streaming' ? '🎬' : '⚙️'}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition">
                      {isArabic ? product.nameAr : product.nameEn}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                      {isArabic ? product.descriptionAr : product.descriptionEn}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <ul className="space-y-1 text-sm">
                        {(isArabic ? product.featuresAr : product.featuresEn).slice(0, 3).map((feature, i) => (
                          <li key={i} className="text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price and Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        {product.price}
                      </span>
                    </div>
                  </div>

                  {/* Hover Button */}
                  <div className="px-6 pb-6">
                    <Button className="w-full" variant="default">
                      {t('productDetail.viewDetails')}
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {isArabic ? 'لم تجد ما تبحث عنه؟' : "Can't find what you're looking for?"}
          </h2>
          <p className="text-lg mb-8 text-white/90">
            {isArabic ? 'تواصل معنا لحلول مخصصة' : 'Contact us for custom solutions'}
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              {t('nav.contact')}
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
