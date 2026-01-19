export interface Product {
  id: string;
  nameEn: string;
  nameAr: string;
  category: 'electronics' | 'fashion' | 'home';
  descriptionEn: string;
  descriptionAr: string;
  price: string;
  image: string;
  featuresEn: string[];
  featuresAr: string[];
  specsEn: { label: string; value: string }[];
  specsAr: { label: string; value: string }[];
}

export const products: Product[] = [
  {
    id: '1',
    nameEn: 'Wireless Earbuds Pro',
    nameAr: 'سماعات لاسلكية احترافية',
    category: 'electronics',
    descriptionEn: 'Premium wireless earbuds with noise cancellation and extended battery life. Perfect for travelers and professionals.',
    descriptionAr: 'سماعات لاسلكية فاخرة مع إلغاء الضوضاء وعمر بطارية طويل. مثالية للمسافرين والمحترفين.',
    price: '$129.99',
    image: '/products/earbuds.jpg',
    featuresEn: [
      'Active noise cancellation',
      '10-hour battery life',
      'Waterproof design',
      'Premium sound quality',
      'Quick charging'
    ],
    featuresAr: [
      'إلغاء ضوضاء نشط',
      'عمر بطارية 10 ساعات',
      'تصميم مقاوم للماء',
      'جودة صوت عالية',
      'شحن سريع'
    ],
    specsEn: [
      { label: 'Driver', value: '6mm' },
      { label: 'Battery', value: '10 hours' },
      { label: 'Water Resistance', value: 'IPX5' },
    ],
    specsAr: [
      { label: 'السماعة', value: '6mm' },
      { label: 'البطارية', value: '10 ساعات' },
      { label: 'مقاومة الماء', value: 'IPX5' },
    ],
  },
  {
    id: '2',
    nameEn: 'Smart Watch Elite',
    nameAr: 'ساعة ذكية نخبة',
    category: 'electronics',
    descriptionEn: 'Feature-rich smartwatch with health tracking, GPS, and seamless smartphone integration.',
    descriptionAr: 'ساعة ذكية غنية بالميزات مع تتبع الصحة وGPS والتكامل السلس مع الهاتف الذكي.',
    price: '$299.99',
    image: '/products/smartwatch.jpg',
    featuresEn: [
      'AMOLED display',
      'Heart rate monitor',
      'GPS tracking',
      '7-day battery',
      'Water resistant'
    ],
    featuresAr: [
      'شاشة AMOLED',
      'مراقب معدل ضربات القلب',
      'تتبع GPS',
      'بطارية 7 أيام',
      'مقاوم للماء'
    ],
    specsEn: [
      { label: 'Screen', value: '1.9" AMOLED' },
      { label: 'Battery', value: '7 days' },
      { label: 'Water Resistance', value: '5ATM' },
    ],
    specsAr: [
      { label: 'الشاشة', value: '1.9" AMOLED' },
      { label: 'البطارية', value: '7 أيام' },
      { label: 'مقاومة الماء', value: '5ATM' },
    ],
  },
  {
    id: '3',
    nameEn: 'Premium Leather Handbag',
    nameAr: 'حقيبة يد جلدية فاخرة',
    category: 'fashion',
    descriptionEn: 'Sophisticated Italian leather handbag with elegant design. Durable and timeless style for everyday use.',
    descriptionAr: 'حقيبة يد من الجلد الإيطالي الراقي بتصميم أنيق. تصميم دائم وخالد للاستخدام اليومي.',
    price: '$249.99',
    image: '/products/handbag.jpg',
    featuresEn: [
      'Genuine Italian leather',
      'Multiple compartments',
      'Adjustable straps',
      'Protective dust bag',
      'Lifetime warranty'
    ],
    featuresAr: [
      'جلد إيطالي أصلي',
      'حجرات متعددة',
      'أحزمة قابلة للتعديل',
      'كيس حماية',
      'ضمان مدى الحياة'
    ],
    specsEn: [
      { label: 'Material', value: 'Genuine Leather' },
      { label: 'Dimensions', value: '35cm x 28cm x 15cm' },
      { label: 'Weight', value: '1.2kg' },
    ],
    specsAr: [
      { label: 'المادة', value: 'جلد أصلي' },
      { label: 'الأبعاد', value: '35cm x 28cm x 15cm' },
      { label: 'الوزن', value: '1.2kg' },
    ],
  },
  {
    id: '4',
    nameEn: 'Organic Bedding Set',
    nameAr: 'مجموعة فراش عضوية',
    category: 'home',
    descriptionEn: 'Luxurious organic cotton bedding set with hypoallergenic properties. Perfect for a good night\'s sleep.',
    descriptionAr: 'مجموعة فراش من القطن العضوي الفاخر مع خصائص مضادة للحساسية. مثالية للنوم الهانئ.',
    price: '$189.99',
    image: '/products/bedding.jpg',
    featuresEn: [
      '100% organic cotton',
      'Hypoallergenic',
      'Soft and breathable',
      'Easy to care for',
      'Queen size'
    ],
    featuresAr: [
      '100% قطن عضوي',
      'مضاد للحساسية',
      'ناعم وقابل للتنفس',
      'سهل العناية',
      'حجم كبير'
    ],
    specsEn: [
      { label: 'Material', value: '100% Organic Cotton' },
      { label: 'Size', value: 'Queen' },
      { label: 'Thread Count', value: '400TC' },
    ],
    specsAr: [
      { label: 'المادة', value: '100% قطن عضوي' },
      { label: 'الحجم', value: 'حجم كبير' },
      { label: 'عدد الخيوط', value: '400TC' },
    ],
  },
  {
    id: '5',
    nameEn: 'Designer Sunglasses',
    nameAr: 'نظارات شمسية مصممة',
    category: 'fashion',
    descriptionEn: 'Stylish UV-protective sunglasses with premium frames. Fashion-forward design for every occasion.',
    descriptionAr: 'نظارات شمسية أنيقة مع حماية من الأشعة فوق البنفسجية وإطارات عالية الجودة. تصميم عصري لكل مناسبة.',
    price: '$179.99',
    image: '/products/sunglasses.jpg',
    featuresEn: [
      ' UV400 protection',
      'Polarized lenses',
      'Lightweight frames',
      'Comfortable fit',
      'Protective case included'
    ],
    featuresAr: [
      'حماية UV400',
      'عدسات مستقطبة',
      'إطارات خفيفة',
      'مريحة',
      'حالة حماية مدرجة'
    ],
    specsEn: [
      { label: 'Lens Type', value: 'Polarized' },
      { label: 'Frame Material', value: 'Acetate' },
      { label: 'UV Protection', value: 'UV400' },
    ],
    specsAr: [
      { label: 'نوع العدسة', value: 'مستقطبة' },
      { label: 'مادة الإطار', value: 'Acetate' },
      { label: 'حماية من الأشعة فوق البنفسجية', value: 'UV400' },
    ],
  },
  {
    id: '6',
    nameEn: 'Modern Coffee Maker',
    nameAr: 'آلة قهوة حديثة',
    category: 'home',
    descriptionEn: 'Smart coffee maker with programmable brewing and mobile app control. Create café-quality coffee at home.',
    descriptionAr: 'آلة قهوة ذكية مع تحضير قابل للبرمجة والتحكم عبر تطبيق الهاتف. اصنع قهوة بجودة المقهى في المنزل.',
    price: '$159.99',
    image: '/products/coffee-maker.jpg',
    featuresEn: [
      'Programmable brewing',
      'Mobile app control',
      'Thermal carafe',
      'Keeps coffee hot for 12 hours',
      'Auto-shutoff'
    ],
    featuresAr: [
      'تحضير قابل للبرمجة',
      'التحكم عبر التطبيق',
      'إبريق حراري',
      'تحافظ على الحرارة 12 ساعة',
      'إيقاف تلقائي'
    ],
    specsEn: [
      { label: 'Capacity', value: '12 cups' },
      { label: 'Power', value: '1000W' },
      { label: 'Material', value: 'Stainless Steel' },
    ],
    specsAr: [
      { label: 'السعة', value: '12 فنجان' },
      { label: 'الطاقة', value: '1000W' },
      { label: 'المادة', value: 'الفولاذ المقاوم للصدأ' },
    ],
  },
];
