'use client';

import { useLanguage } from '@/lib/language-context';
import Link from 'next/link';

export default function Footer() {
  const { t, isArabic } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Dolby</h3>
            <p className="text-sm text-white/70">
              {isArabic ? 'تقدم حلول صوتية وبصرية فاخرة.' : 'Premium audio and visual solutions.'}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('nav.products')}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/products" className="hover:text-white transition">{t('products.categories.audio')}</Link></li>
              <li><Link href="/products" className="hover:text-white transition">{t('products.categories.streaming')}</Link></li>
              <li><Link href="/products" className="hover:text-white transition">{t('products.categories.professional')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('nav.about')}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-white transition">{t('nav.about')}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">{t('nav.contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{isArabic ? 'اتصل بنا' : 'Contact'}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Email: info@dolby.com</li>
              <li>Phone: +1 (800) 323-2600</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-sm text-white/60">
            {currentYear} Dolby Laboratories, Inc. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
