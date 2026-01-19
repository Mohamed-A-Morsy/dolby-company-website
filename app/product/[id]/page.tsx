'use client';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ProductDetail from '@/components/pages/product-detail';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return (
    <>
      <Navigation />
      <ProductDetail productId={id} />
      <Footer />
    </>
  );
}
