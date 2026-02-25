export interface Product {
  id: number;
  name: string;
  description: string; // 2–3 sentences
  price: number; // KZT
  rating: number; // 1..5 (decimal allowed)
  image: string; // main image
  images: string[]; // at least 3 images
  link: string; // direct kaspi.kz product page URL
}