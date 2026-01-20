'use client';

import { useLanguage } from '@/lib/language-context';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook } from 'lucide-react';

export default function Footer() {
  const { t, isArabic } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* BRAND + LOGO */}
          <div className="space-y-4">
            <div className="relative w-40 h-16 ">
              <Image
                src="/logo.png"
                alt="Dolby Trading Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <p className="text-sm text-white/70 leading-relaxed">
              {isArabic
                ? 'شركة متخصصة في تصدير المنتجات الغذائية عالية الجودة للأسواق العالمية.'
                : 'A company specialized in exporting high-quality food products to global markets.'}
            </p>
          </div>

          {/* WORKING HOURS */}
          <div className="space-y-2">
            <h4 className="font-semibold mb-2">
              {isArabic ? 'مواعيد العمل' : 'Working Hours'}
            </h4>

            <p className="text-sm text-white/70">
              {isArabic ? 'من السبت إلى الخميس' : 'Saturday to Thursday'}
            </p>
            <p className="text-sm text-white/70">
              {isArabic ? 'من 9 صباحاً حتى 6 مساءً' : '9:00 AM – 6:00 PM'}
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold mb-4">
              {t('nav.about')}
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  {isArabic ? 'من نحن' : 'About Us'}
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition">
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4">
              {isArabic ? 'تواصل معنا' : 'Contact Us'}
            </h4>

            <ul className="space-y-2 text-sm text-white/70">
              <li>
                {isArabic ? 'البريد الإلكتروني:' : 'Email:'}{' '}
                <span className="text-white">info@dolby-eg.com</span>
              </li>
              <li className="flex gap-1">
                <span>{isArabic ? 'الهاتف الأرضي:' : 'Phone:'}</span>
                <span
                  dir="ltr"
                  className="text-white inline-flex"
                >
                  02 2192 2781
                </span>
              </li>

              <li className="flex gap-1">
                <span>{isArabic ? 'الهاتف المحمول:' : 'Mobile:'}</span>
                <span
                  dir="ltr"
                  className="text-white inline-flex"
                >
                  +20 100 001 93434
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-white/60 text-center md:text-left">
            © {currentYear} Dolby Trading. {t('footer.copyright')}
          </p>

          {/* SOCIAL */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
