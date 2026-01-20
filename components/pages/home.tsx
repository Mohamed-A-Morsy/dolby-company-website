'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  const { t, isArabic } = useLanguage();

  const highlights = [
    {
      titleAr: 'شحن إلى جميع أنحاء العالم',
      titleEn: 'Worldwide Shipping',
      descAr: 'نوصل منتجاتنا إلى جميع الأسواق العالمية بكفاءة وأمان',
      descEn: 'We deliver our products to global markets efficiently and safely',
      icon: '🌍',
    },
    {
      titleAr: 'جودة تصديرية',
      titleEn: 'Export Quality',
      descAr: 'منتجات مختارة وفق أعلى معايير الجودة العالمية',
      descEn: 'Carefully selected products meeting international quality standards',
      icon: '✔️',
    },
    {
      titleAr: 'خبرة موثوقة',
      titleEn: 'Trusted Experience',
      descAr: 'سنوات من الخبرة في مجال التصدير والتجارة الدولية',
      descEn: 'Years of experience in export and international trade',
      icon: '🏆',
    },
  ];

  const categories = [
    { ar: 'الخضروات', en: 'Vegetables', image: '/Products/potatoes.jpg' },
    { ar: 'الفواكه', en: 'Fruits', image: '/Products/orange.jpg' },
    { ar: 'الأجبان', en: 'Cheese', image: '/Products/cheese.jpg' },
    { ar: 'البقوليات', en: 'Legumes', image: '/Products/beans.jpg' },
    { ar: 'المخللات', en: 'Pickles', image: '/Products/Pickles.jpg' },
  ];

  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {isArabic
              ? 'دولبي للتصدير والتجارة الدولية'
              : 'Dolby for Export & International Trade'}
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            {isArabic
              ? 'نقدم منتجات غذائية عالية الجودة للأسواق العالمية وفق أعلى المعايير'
              : 'Delivering high-quality food products to global markets with international standards'}
          </p>

          <Link href="/products">
            <Button size="lg" className="gap-2">
              {t('nav.products')}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-2xl border hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">
                  {isArabic ? item.titleAr : item.titleEn}
                </h3>
                <p className="text-muted-foreground">
                  {isArabic ? item.descAr : item.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-14">
            {isArabic ? 'فئات منتجاتنا' : 'Our Product Categories'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 text-center border hover:shadow-lg transition"
              >
                <div className="relative h-36 w-full mb-4 bg-gray-50 rounded-lg overflow-hidden">
  <Image
    src={cat.image}
    alt={cat.en}
    fill
    className="object-cover p-3"
  />
</div>
                <h3 className="font-semibold mb-4">
                  {isArabic ? cat.ar : cat.en}
                </h3>
                <Link href="/products">
                  <Button size="sm">
                    {isArabic ? 'عرض المزيد' : 'View More'}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              {isArabic ? 'رؤيتنا' : 'Our Vision'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isArabic
                ? 'أن نكون من رواد تصدير المنتجات الغذائية المصرية للأسواق العالمية'
                : 'To be a leading exporter of Egyptian food products worldwide'}
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">
              {isArabic ? 'مهمتنا' : 'Our Mission'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isArabic
                ? 'تقديم منتجات آمنة وعالية الجودة مع الالتزام بالمعايير الدولية'
                : 'Providing safe, high-quality products while adhering to international standards'}
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {isArabic
              ? 'ابدأ التعاون معنا اليوم'
              : 'Start Working With Us Today'}
          </h2>
          <p className="text-lg mb-8 text-white/90">
            {isArabic
              ? 'تواصل معنا لمعرفة المزيد عن منتجاتنا وخدماتنا'
              : 'Contact us to learn more about our products and services'}
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
