'use client';
import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
     <Image src="/logo.png" alt="logo" width={120} height={120} />
    </div>
  );
}
