
'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const { t, isArabic } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      titleEn: 'Email',
      titleAr: 'البريد الإلكتروني',
      value: 'info@dolby-eg.com',
    },
    {
      icon: Phone,
      titleEn: 'Phone',
      titleAr: 'الهاتف',
      value: [' 0221922781', '+201000193434'],

    },
    {
      icon: MapPin,
      titleEn: 'Address',
      titleAr: 'العنوان',
      valueEn: '5G Alfarouqeya Buildings, El Nozha El Gadida, Cairo, Egypt.',
      valueAr: '٥ج عمارات الفاروقية، النزهة الجديدة، القاهرة، مصر',
    },
    {
      icon: Clock,
      titleEn: 'Hours',
      titleAr: 'الساعات',
      valueEn: 'Saturday - Thursday : 9AM - 6PM',
      valueAr: 'السبت - الخميس : 9 ص - 6 م',
    
    },
  ];
  const toArabicNumbers = (num: string) => {
    const arabicDigits = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
    return num.replace(/\d/g, d => arabicDigits[Number(d)]);
  };

  return (
    <main>
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h1>
          
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <Card key={i} className="p-6 text-center hover:shadow-lg transition">
                  <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                    <Icon className="w-6 h-6 text-primary m-auto" />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {isArabic ? info.titleAr : info.titleEn}
                  </h3>

                  <p className="font-semibold text-primary mb-2">
                    {Array.isArray(info.value)
                      ? info.value.map((v, idx) => (
                        isArabic ? <span dir='LTR' key={idx} className="block">{toArabicNumbers(v)}</span> : <span key={idx} className="block">{v}</span>
                       
                        ))
                      : isArabic && info.valueAr
                      ? info.valueAr
                      : info.valueEn || info.value}
                  </p>

            
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            {isArabic ? 'موقعنا على الخريطة' : 'Find Us'}
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-lg h-[450px]">
            <iframe
              title="Dolby Location"
             src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d3450.4372005845003!2d31.3925317!3d30.138914!3m2!1i1024!2i768!4f13.1!2m1!1z2LnZhdin2LHYp9iqINin2YTZgdin2LHZiNmC2YrYqSDYp9mE2YbYstmH2Kkg2KfZhNis2K_Zitiv2Kkg2KfZhNmC2KfZh9ix2Kkg2YXYtdix4oCt!5e0!3m2!1sar!2seg!4v1768835964438!5m2!1sar!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
           
          </div>
        </div>
      </section>
    </main>
  );
}
