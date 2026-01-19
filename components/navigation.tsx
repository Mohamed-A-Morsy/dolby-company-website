'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from '@/lib/theme-context';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';

export default function Navigation() {
  const { language, setLanguage, t, isArabic } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition">
              {t('nav.home')}
            </Link>
            <Link href="/products" className="text-sm font-medium text-foreground hover:text-primary transition">
              {t('nav.products')}
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition">
              {t('nav.about')}
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition">
              {t('nav.contact')}
            </Link>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              className="w-10 h-10 p-0 bg-transparent"
            >
              {theme === 'light' ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.121-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM7 11a1 1 0 100-2 1 1 0 000 2zm-4.536.464a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm10.607 2.121a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 111.414-1.414l.707.707zM17 13a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              )}
            </Button>

            {/* Language Switcher */}
            <div className="flex gap-1">
              <Button
                variant={language === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('en')}
                className="w-10"
              >
                EN
              </Button>
              <Button
                variant={language === 'ar' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('ar')}
                className="w-10"
              >
                AR
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
