'use client';

import { useLanguage } from '@/lib/language-context';
import { Card } from '@/components/ui/card';

export default function AboutPage() {
  const { isArabic } = useLanguage();

  const values = [
    {
      titleEn: 'Global Reach',
      titleAr: 'التوصول العالمي',
      descEn: 'Connecting businesses across 150+ countries with reliable trade solutions.',
      descAr: 'ربط الشركات عبر 150+ دولة بحلول تجارية موثوقة.',
      icon: '🌍',
    },
    {
      titleEn: 'Quality Assurance',
      titleAr: 'ضمان الجودة',
      descEn: 'Every product is carefully sourced and inspected for excellence.',
      descAr: 'تتم مراجعة كل منتج بعناية فائقة لضمان التميز.',
      icon: '✅',
    },
    {
      titleEn: 'Trusted Partners',
      titleAr: 'شركاء موثوقون',
      descEn: 'Working with leading suppliers and trusted brands worldwide.',
      descAr: 'التعاون مع أفضل الموردين والعلامات التجارية الموثوقة.',
      icon: '🤝',
    },
    {
      titleEn: 'Customer Care',
      titleAr: 'رعاية العملاء',
      descEn: 'Dedicated support to ensure your business success every step of the way.',
      descAr: 'دعم متخصص لضمان نجاح عملك في كل خطوة.',
      icon: '💼',
    },
  ];

  const timeline = [
    {
      yearEn: '2010',
      yearAr: '2010',
      titleEn: 'Founded',
      titleAr: 'التأسيس',
      descEn: 'GlobalTrade founded to connect businesses worldwide with premium consumer goods.',
      descAr: 'تم تأسيس GlobalTrade لربط الشركات حول العالم بسلع استهلاكية فاخرة.',
    },
    {
      yearEn: '2015',
      yearAr: '2015',
      titleEn: 'Global Expansion',
      titleAr: 'التوسع العالمي',
      descEn: 'Established operations in 50+ countries across multiple continents.',
      descAr: 'أنشأنا عمليات في 50+ دولة عبر قارات متعددة.',
    },
    {
      yearEn: '2022',
      yearAr: '2022',
      titleEn: 'Digital Platform',
      titleAr: 'منصة رقمية',
      descEn: 'Launched digital platform for seamless global trade and real-time inventory.',
      descAr: 'أطلقنا منصة رقمية لتجارة عالمية سلسة والمخزون الفوري.',
    },
    {
      yearEn: '2024',
      yearAr: '2024',
      titleEn: 'Market Leadership',
      titleAr: 'قيادة السوق',
      descEn: 'Recognized as leading import-export platform for consumer goods.',
      descAr: 'اعترف بها كمنصة رائدة لاستيراد وتصدير السلع الاستهلاكية.',
    },
  ];

  return (
    <main>
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            {isArabic ? 'حول Dolby' : 'About Dolby'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {isArabic ? 'قيادة مستقبل تكنولوجيا الصوت والصورة' : 'Leading the future of audio and visual technology'}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                {isArabic ? 'قصتنا' : 'Our Story'}
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                {isArabic
                  ? 'منذ التأسيس في عام 1965، كان شغفنا واضحاً: إعادة تعريف تجربة الصوت والصورة. بدأنا برؤية بسيطة - تمكين الفنانين والمبدعين من الوصول إلى جمهورهم بأصدق صورة ممكنة.'
                  : 'Since our founding in 1965, our passion has been clear: redefine the audio and visual experience. We started with a simple vision - empowering artists and creators to reach their audiences in the truest way possible.'
                }
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {isArabic
                  ? 'على مدار العقود، طورنا تقنيات رائدة مثل Dolby Atmos و Dolby Vision التي غيرت صناعات بأكملها. اليوم، نستمر في دفع حدود الابتكار.'
                  : 'Over the decades, we\'ve developed groundbreaking technologies like Dolby Atmos and Dolby Vision that transformed entire industries. Today, we continue pushing the boundaries of innovation.'
                }
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-9xl opacity-30">🎬</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              {isArabic ? 'قيمنا' : 'Our Values'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isArabic ? 'المبادئ التي توجه كل قرار نتخذه' : 'The principles that guide every decision we make'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <Card key={i} className="p-8 text-center hover:shadow-lg transition">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {isArabic ? value.titleAr : value.titleEn}
                </h3>
                <p className="text-muted-foreground">
                  {isArabic ? value.descAr : value.descEn}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              {isArabic ? 'رحلتنا' : 'Our Journey'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {isArabic ? 'ستة عقود من الابتكار المستمر' : 'Six decades of continuous innovation'}
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-8 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {i + 1}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-1 h-24 bg-primary/20 mt-4" />
                  )}
                </div>
                <div className="pt-2 pb-8 flex-1">
                  <p className="text-sm font-semibold text-primary mb-1">
                    {isArabic ? item.yearAr : item.yearEn}
                  </p>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {isArabic ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-muted-foreground">
                    {isArabic ? item.descAr : item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">1000+</p>
              <p className="text-white/80">
                {isArabic ? 'براءات اختراع' : 'Patents'}
              </p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">150+</p>
              <p className="text-white/80">
                {isArabic ? 'دول' : 'Countries'}
              </p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">1B+</p>
              <p className="text-white/80">
                {isArabic ? 'متجهز' : 'Devices'}
              </p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">58</p>
              <p className="text-white/80">
                {isArabic ? 'سنة' : 'Years'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
