'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { products } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const { t, isArabic } = useLanguage();
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">
            {isArabic ? 'المنتج غير موجود' : 'Product not found'}
          </h1>
          <Link href="/products">
            <Button>{t('productDetail.backToProducts')}</Button>
          </Link>
        </div>
      </main>
    );
  }

  const name = isArabic ? product.nameAr : product.nameEn;
  const description = isArabic ? product.descriptionAr : product.descriptionEn;
  const features = isArabic ? product.featuresAr : product.featuresEn;
  const specs = isArabic ? product.specsAr : product.specsEn;

  // ✅ images فقط – مفيش image
  const images =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images
      : ['/placeholder.png'];

  return (
    <main>
      {/* Back */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link
            href="/products"
            className="flex items-center gap-2 text-primary hover:opacity-80"
          >
            <ArrowLeft className="w-5 h-5" />
            {t('productDetail.backToProducts')}
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* IMAGE SLIDER */}
          {/* 🔑 مهم جدًا: dir="ltr" لحل مشكلة العربي */}
          <div className="w-full" dir="ltr">
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              loop
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="rounded-2xl overflow-hidden"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="relative aspect-square w-full">
                    <Image
                      src={img}
                      alt={name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* DETAILS */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-6">{name}</h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>

            {/* QUICK FEATURES */}
            <div className="space-y-3">
              {features.slice(0, 4).map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT DETAILS (بديل جدول الوصف اللي في الصورة) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">
            {isArabic ? 'تفاصيل المنتج' : 'Product Details'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specs.map((spec, i) => (
              <Card
                key={i}
                className="p-6 border-l-4 border-primary"
              >
                <h3 className="font-semibold mb-2">{spec.label}</h3>
                <p className="text-muted-foreground text-sm">
                  {spec.value}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {isArabic ? 'استفسارات إضافية؟' : 'Have more questions?'}
          </h2>
          <p className="mb-8 text-white/90">
            {isArabic
              ? 'تواصل معنا مباشرة للحصول على المساعدة'
              : 'Contact us directly for assistance'}
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
