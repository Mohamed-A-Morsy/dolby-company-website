'use client';

import React from "react"

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const { t, isArabic } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would send this data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      titleEn: 'Email',
      titleAr: 'البريد الإلكتروني',
      value: 'info@dolby.com',
      descEn: 'We respond within 24 hours',
      descAr: 'نرد في غضون 24 ساعة',
    },
    {
      icon: Phone,
      titleEn: 'Phone',
      titleAr: 'الهاتف',
      value: '+1 (800) 323-2600',
      descEn: 'Call us anytime',
      descAr: 'اتصل بنا في أي وقت',
    },
    {
      icon: MapPin,
      titleEn: 'Address',
      titleAr: 'العنوان',
      value: 'San Francisco, CA 94105',
      descEn: 'Dolby Laboratories, Inc.',
      descAr: 'Dolby Laboratories, Inc.',
    },
    {
      icon: Clock,
      titleEn: 'Hours',
      titleAr: 'الساعات',
      value: 'Mon - Fri: 9AM - 6PM',
      descEn: 'Pacific Standard Time',
      descAr: 'توقيت المحيط الهادئ',
    },
  ];

  return (
    <main>
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
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
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {isArabic ? info.titleAr : info.titleEn}
                  </h3>
                  <p className="font-semibold text-primary mb-2">
                    {info.value}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {isArabic ? info.descAr : info.descEn}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              {isArabic ? 'أرسل لنا رسالة' : 'Send us a Message'}
            </h2>
            <p className="text-muted-foreground mb-8">
              {isArabic ? 'سنرد عليك في أقرب وقت ممكن' : 'We\'ll get back to you as soon as possible'}
            </p>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">
                  {isArabic ? 'شكراً لك! تم استقبال رسالتك.' : 'Thank you! Your message has been received.'}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={isArabic ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={isArabic ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form.subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder={isArabic ? 'ما موضوع رسالتك؟' : 'What is your message about?'}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder={isArabic ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full">
                {t('contact.form.submit')}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            {isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h2>

          <div className="space-y-6">
            {[
              {
                qEn: 'How do I contact customer support?',
                qAr: 'كيف أتصل بدعم العملاء؟',
                aEn: 'You can reach our support team via email, phone, or by filling out the contact form above. We respond within 24 hours.',
                aAr: 'يمكنك التواصل مع فريق الدعم عبر البريد الإلكتروني أو الهاتف أو ملء نموذج الاتصال أعلاه. نرد في غضون 24 ساعة.',
              },
              {
                qEn: 'What is your return policy?',
                qAr: 'ما سياسة الاسترجاع الخاصة بك؟',
                aEn: 'We offer a 30-day return policy on all products. Please contact us for more details.',
                aAr: 'نقدم سياسة استرجاع لمدة 30 يوماً على جميع المنتجات. يرجى الاتصال بنا للمزيد من التفاصيل.',
              },
              {
                qEn: 'Do you offer technical support?',
                qAr: 'هل تقدمون الدعم الفني؟',
                aEn: 'Yes, we provide comprehensive technical support for all our products. Visit our support portal or contact us directly.',
                aAr: 'نعم، نقدم دعماً فنياً شاملاً لجميع منتجاتنا. تفضل بزيارة بوابة الدعم أو اتصل بنا مباشرة.',
              },
            ].map((faq, i) => (
              <Card key={i} className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {isArabic ? faq.qAr : faq.qEn}
                </h3>
                <p className="text-muted-foreground">
                  {isArabic ? faq.aAr : faq.aEn}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            {isArabic ? 'ابحث عنا' : 'Find Us'}
          </h2>
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-xl font-semibold text-foreground">
                {isArabic ? 'San Francisco, California' : 'San Francisco, California'}
              </p>
              <p className="text-muted-foreground mt-2">
                {isArabic ? 'انقر للحصول على الاتجاهات' : 'Click for directions'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
