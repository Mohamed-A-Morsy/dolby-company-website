'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { Card } from '@/components/ui/card';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import Image from 'next/image';
import { ZoomIn, X } from 'lucide-react';

import DolbyCertificate from '@/public/DolbyCertificate.jpg';
import DolbyCertificate2 from '@/public/DolbyCertificate2.jpg';

import 'swiper/css';
import 'swiper/css/pagination';

export default function AboutPage() {
  const { isArabic } = useLanguage();

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: DolbyCertificate, alt: 'Dolby Certificate' },
    { src: DolbyCertificate2, alt: 'Dolby Certificate 2' },
  ];

  const values = [
    {
      titleEn: 'Global Reach',
      titleAr: 'الوصول العالمي',
      descEn: 'Connecting businesses across 150+ countries with reliable trade solutions.',
      descAr: 'ربط الشركات في أكثر من 150 دولة بحلول تجارية موثوقة.',
      icon: '🌍',
    },
    {
      titleEn: 'Quality Assurance',
      titleAr: 'ضمان الجودة',
      descEn: 'Every product is carefully sourced and inspected for excellence.',
      descAr: 'يتم اختيار وفحص كل منتج بعناية لضمان أعلى مستويات الجودة.',
      icon: '✅',
    },
    {
      titleEn: 'Trusted Partners',
      titleAr: 'شركاء موثوقون',
      descEn: 'Working with leading suppliers and trusted brands worldwide.',
      descAr: 'التعاون مع أفضل الموردين والعلامات التجارية الموثوقة حول العالم.',
      icon: '🤝',
    },
    {
      titleEn: 'Customer Care',
      titleAr: 'رعاية العملاء',
      descEn: 'Dedicated support to ensure your business success every step of the way.',
      descAr: 'دعم متواصل لضمان نجاح عملائنا في كل مرحلة.',
      icon: '💼',
    },
  ];

  const storyEn = [
    'Our journey began in 2002.',
    'We started supplying food products to tourist hotels and petroleum companies within the Arab Republic of Egypt.',
    'We then moved towards packaging food products under our brand and distributing them to various governorates.',
    'After that, we expanded by opening new international markets through exporting to many countries worldwide.',
    'Now, we hold a share in the global markets.',
    'We will continue to strive for quality improvement and to capture new markets.',
  ];

  const storyAr = [
    'بدأت رحلتنا في عام 2002.',
    'بدأنا بتوريد المنتجات الغذائية للفنادق السياحية وشركات البترول داخل جمهورية مصر العربية.',
    'ثم اتجهنا إلى تعبئة المنتجات الغذائية تحت علامتنا التجارية وتوزيعها على مختلف المحافظات.',
    'بعد ذلك توسعنا بفتح أسواق دولية جديدة من خلال التصدير إلى العديد من دول العالم.',
    'واليوم نمتلك حصة قوية في الأسواق العالمية.',
    'وسنواصل السعي لتحسين الجودة وفتح أسواق جديدة.',
  ];

  return (
    <main>
      {/* Header */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900">
            {isArabic ? 'حول الشركة' : 'About Us'}
          </h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                {isArabic ? 'قصتنا' : 'Our Story'}
              </h2>

              <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
                <p className="text-xl font-semibold text-gray-900">
                  {isArabic ? storyAr[0] : storyEn[0]}
                </p>

                {(isArabic ? storyAr : storyEn).slice(1).map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>

            {/* Swiper */}
            <div
              className="relative h-[420px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg"
              dir="ltr"
            >
              <button
                onClick={() => {
                  setActiveIndex(0);
                  setOpen(true);
                }}
                className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition"
              >
                <ZoomIn size={20} />
              </button>

              <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                loop
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className="h-full"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="relative w-full h-full cursor-pointer"
                      onClick={() => {
                        setActiveIndex(index);
                        setOpen(true);
                      }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {isArabic ? 'قيمنا' : 'Our Values'}
            </h2>
            <p className="text-lg text-gray-600">
              {isArabic
                ? 'المبادئ التي تقوم عليها شركتنا'
                : 'The principles that define our company'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <Card
                key={i}
                className="p-8 text-center rounded-2xl bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {isArabic ? value.titleAr : value.titleEn}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {isArabic ? value.descAr : value.descEn}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Swiper */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={32} />
          </button>

          <div className="w-full max-w-5xl h-[80vh]" dir="ltr">
            <Swiper
              initialSlide={activeIndex}
              slidesPerView={1}
              loop
              pagination={{ clickable: true }}
              className="h-full"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </main>
  );
}
