'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const { t, isArabic } = useLanguage();

  const features = [
    {
      title: isArabic ? 'شحن عالمي' : 'Global Shipping',
      description: isArabic ? 'شحن موثوق إلى أكثر من 150 دولة حول العالم' : 'Reliable delivery to over 150 countries worldwide',
      icon: '🌍',
    },
    {
      title: isArabic ? 'منتجات مختارة' : 'Curated Products',
      description: isArabic ? 'أفضل العلامات التجارية والمنتجات الفاخرة من جميع أنحاء العالم' : 'Top brands and premium products from around the globe',
      icon: '⭐',
    },
    {
      title: isArabic ? 'دعم متخصص' : 'Expert Support',
      description: isArabic ? 'فريق متخصص لمساعدتك في جميع احتياجاتك التجارية' : 'Specialized team to assist with all your business needs',
      icon: '🤝',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-background overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
            {t('home.title')}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            {t('home.subtitle')}
          </p>
          <Link href="/products">
            <Button size="lg" className="gap-2 group">
              {t('home.cta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              {isArabic ? 'لماذا Dolby؟' : 'Why Choose Dolby?'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isArabic ? 'خصائص وميزات عالمية المستوى' : 'World-class features and excellence'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-gradient-to-br from-card to-white border border-border hover:shadow-lg transition duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {isArabic ? 'اكتشف مجموعتنا الكاملة من المنتجات' : 'Discover Our Complete Product Range'}
          </h2>
          <p className="text-lg mb-8 text-white/90">
            {isArabic ? 'استكشف الحلول الفاخرة المصممة لك' : 'Explore premium solutions designed for you'}
          </p>
          <Link href="/products">
            <Button size="lg" variant="secondary">
              {t('nav.products')}
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
