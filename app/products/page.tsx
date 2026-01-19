'use client';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ProductsPage from '@/components/pages/products';

export default function Page() {
  return (
    <>
      <Navigation />
      <ProductsPage />
      <Footer />
    </>
  );
}
