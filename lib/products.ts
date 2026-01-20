export interface Product {
  id: string;
  nameEn: string;
  nameAr: string;
  category: 'vegetables' | 'Fruits' | 'Legumes' | 'Seeds' | 'Pickles' | 'Olives' | 'Natural Oils'|'home'|"electronics"|"fashion";
  descriptionEn: string;
  descriptionAr: string;
  price: string;
  images: string[];
  featuresEn: string[];
  featuresAr: string[];
  specsEn: { label: string; value: string }[];
  specsAr: { label: string; value: string }[];
}

export const products: Product[] = [

  {
    id: '1',
    nameEn: 'Potatoes',
    nameAr: 'بطاطس',
    category: 'vegetables',
    descriptionEn: 'The potatoes are in saturated fats, sodium and cholesterols so they help maintain optimum health and memory function.they are a good source of vitamins and minerals, as they are high in vitamin C, vitamin B6, potassium and contain of magnesium, phosphorus and iron.',
    descriptionAr: 'تحتوي البطاطس على دهون مشبعة وصوديوم وكوليسترول، مما يساعد في الحفاظ على صحة مثلى ووظيفة الذاكرة.وهي مصدر جيد للفيتامينات والمعادن، حيث تحتوي على نسبة عالية من فيتامين C، وفيتامين B6، والبوتاسيوم، كما تحتوي على المغنيسيوم، والفوسفور، والحديد.',
    price: '$129.99',
    images: [
      '/Products/potatoes.jpg',
      '/Products/potatoes2.jpg',
      '/Products/potatoes3.jpg',
    ],
    featuresAr: [
      'جودة تصدير عالية',
      'أحجام متجانسة',
      'مناسبة للتخزين والنقل'
    ],
    featuresEn: [
      'Export Quality',
      'Uniform Size',
      'Suitable for Storage & Shipping'
    ],
    specsAr: [
      { label: 'متاح', value: 'من الأسبوع 1 إلى الأسبوع 24' },
      { label: 'التعبئة', value: 'أكياس 10 كجم، 15 كجم، 25 كجم' },
      { label: 'مقاسات', value: '40/60mm، 45/60mm، 50mm up، 60mm up' },
      { label: 'متنوع', value: 'Spunta – Cara – Lady Rosetta – Bellini' },
    ],
    
    specsEn: [
      { label: 'Availability', value: 'From week 1 to week 24' },
      { label: 'Packaging', value: '10kg, 15kg, 25kg bags' },
      { label: 'Sizes', value: '40/60mm, 45/60mm, 50mm up, 60mm up' },
      { label: 'Varieties', value: 'Spunta – Cara – Lady Rosetta – Bellini' },
    ],
  },
  
  
];
