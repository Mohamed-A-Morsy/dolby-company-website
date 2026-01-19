'use client';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import HomePage from '@/components/pages/home';

export default function RootPage() {
  return (
    <>
      <Navigation />
      <HomePage />
      <Footer />
    </>
  );
}
