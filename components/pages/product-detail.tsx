'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { products } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

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
          <h1 className="text-3xl font-bold text-foreground mb-4">
            {isArabic ? 'المنتج غير موجود' : 'Product not found'}
          </h1>
          <Link href="/products">
            <Button>{isArabic ? 'العودة إلى المنتجات' : 'Back to Products'}</Button>
          </Link>
        </div>
      </main>
    );
  }

  const name = isArabic ? product.nameAr : product.nameEn;
  const description = isArabic ? product.descriptionAr : product.descriptionEn;
  const features = isArabic ? product.featuresAr : product.featuresEn;
  const specs = isArabic ? product.specsAr : product.specsEn;

  return (
    <main>
      {/* Back Button */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/products" className="flex items-center gap-2 text-primary hover:text-primary/80 transition w-fit">
            <ArrowLeft className="w-5 h-5" />
            {t('productDetail.backToProducts')}
          </Link>
        </div>
      </div>

      {/* Product Content */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Section */}
            <div className="flex items-center justify-center">
              <div className="w-full aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                <div className="text-9xl opacity-50">
                  {product.category === 'audio' ? '🎵' : product.category === 'streaming' ? '🎬' : '⚙️'}
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="flex flex-col justify-center">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {product.category === 'audio' ? t('products.categories.audio') : product.category === 'streaming' ? t('products.categories.streaming') : t('products.categories.professional')}
                </span>
              </div>

              <h1 className="text-5xl font-bold text-foreground mb-6">
                {name}
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <p className="text-4xl font-bold text-primary">
                  {product.price}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="flex-1">
                  {isArabic ? 'اطلب الآن' : 'Order Now'}
                </Button>
                <Button size="lg" variant="outline" className="flex-1 bg-transparent">
                  {isArabic ? 'اطلب عرض أسعار' : 'Request Quote'}
                </Button>
              </div>

              {/* Quick Features */}
              <div className="space-y-3">
                {features.slice(0, 4).map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12">
            {t('productDetail.features')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <Card key={i} className="p-6 border-l-4 border-l-primary">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature}
                </h3>
                <p className="text-muted-foreground">
                  {isArabic ? 'ميزة متقدمة توفر أفضل أداء' : 'Advanced feature for optimal performance'}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12">
            {t('productDetail.specifications')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specs.map((spec, i) => (
              <Card key={i} className="p-6 bg-white">
                <p className="text-sm text-muted-foreground mb-2 font-medium">
                  {spec.label}
                </p>
                <p className="text-2xl font-bold text-primary">
                  {spec.value}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12">
            {isArabic ? 'منتجات ذات صلة' : 'Related Products'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map(relatedProduct => (
                <Link
                  key={relatedProduct.id}
                  href={`/product/${relatedProduct.id}`}
                >
                  <Card className="h-full overflow-hidden hover:shadow-lg transition cursor-pointer">
                    <div className="h-48 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                      <div className="text-5xl">
                        {relatedProduct.category === 'audio' ? '🎵' : relatedProduct.category === 'streaming' ? '🎬' : '⚙️'}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-foreground mb-2">
                        {isArabic ? relatedProduct.nameAr : relatedProduct.nameEn}
                      </h3>
                      <p className="text-primary font-semibold">
                        {relatedProduct.price}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {isArabic ? 'استفسارات إضافية؟' : 'Have more questions?'}
          </h2>
          <p className="text-lg mb-8 text-white/90">
            {isArabic ? 'تواصل معنا مباشرة للحصول على المساعدة' : 'Contact us directly for assistance'}
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
