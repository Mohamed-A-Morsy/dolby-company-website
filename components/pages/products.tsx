'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { products } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ProductsPage() {
  const { t, isArabic } = useLanguage();

  // ✅ خلّيناها string عشان تبقى مرنة
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: isArabic ? 'الكل' : 'All Products' },
    { id: 'cheese', label: t('products.categories.cheese') },
    { id: 'legumes', label: t('products.categories.legumes') },
    { id: 'seeds', label: t('products.categories.seeds') },
    { id: 'vegetables', label: t('products.categories.vegetables') },
    { id: 'fruits', label: t('products.categories.fruits') },
    { id: 'pickles', label: t('products.categories.pickles') },
    { id: 'Olives', label: t('products.categories.Olives') },
    { id: 'naturalOils', label: t('products.categories.naturalOils') },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter(p => p.category === selectedCategory);

  return (
    <main>
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
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
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <Button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredProducts.map(product => (
              <Link key={product.id} href={`/product/${product.id}`}>

                <Card className="h-full overflow-hidden hover:shadow-xl transition cursor-pointer group">

                  {/* 🔥 IMAGE SWIPER (NO WHITE SPACE) */}
                  <div className="relative h-64 w-full overflow-hidden" dir="ltr">
  <Swiper
    key={`${product.id}-${isArabic}`} // 🔥 مهم جدًا
    modules={[Autoplay, Pagination]}
    slidesPerView={1}
    loop={product.images.length > 1} // 🔥 حل مشكلة الصورة الواحدة
    autoplay={
      product.images.length > 1
        ? { delay: 3000, disableOnInteraction: false }
        : false
    }
    pagination={product.images.length > 1 ? { clickable: true } : false}
    observer
    observeParents
    className="h-full w-full"
  >
    {(product.images.length > 0
      ? product.images
      : ['/placeholder.png']
    ).map((img, index) => (
      <SwiperSlide key={index}>
        <div className="relative h-64 w-full">
          <Image
            src={img}
            alt={isArabic ? product.nameAr : product.nameEn}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={index === 0}
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
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
                    <ul className="space-y-1 text-sm">
                      {(isArabic ? product.featuresAr : product.featuresEn)
                        .slice(0, 3)
                        .map((feature, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <div className="px-6 pb-6">
                    <Button className="w-full">
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
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {isArabic
              ? 'لم تجد ما تبحث عنه؟'
              : "Can't find what you're looking for?"}
          </h2>
          <p className="text-lg mb-8 text-white/90">
            {isArabic
              ? 'تواصل معنا لحلول مخصصة'
              : 'Contact us for custom solutions'}
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
