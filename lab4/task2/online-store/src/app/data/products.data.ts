import { Product } from '../models/product.model';

const gallery = (label: string): string[] => [
  `https://picsum.photos/seed/${encodeURIComponent(label + '-1')}/800/500`,
  `https://picsum.photos/seed/${encodeURIComponent(label + '-2')}/800/500`,
  `https://picsum.photos/seed/${encodeURIComponent(label + '-3')}/800/500`,
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Apple iPhone 13 128GB Black',
    description:
      'A high-performance smartphone that is convenient for everyday use. It has a quality camera, a fast interface, and stable performance.',
    price: 329990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/',
  },
  {
    id: 2,
    name: 'Apple iPhone 13 128GB White',
    description:
      'An iPhone 13 model in a classic color. It offers excellent screen quality and battery life, making it very convenient for daily use.',
    price: 334990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-medium',
    images: [
      
      'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h3b/h93/64209085235230.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h8f/hce/64209121476638.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/',
  },
  {
    id: 3,
    name: 'Apple iPhone 13 128GB Blue',
    description:
      'A beautifully colored and high-performance smartphone. Suitable for studying, communication, photo/video, and social media.',
    price: 333990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hb4/h03/64206207352862.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hb8/h32/64206209384478.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/',
  },
  {
    id: 4,
    name: 'Apple iPhone 13 128GB Green',
    description:
      'The green version stands out with its design. Its fast performance and quality camera make this model popular.',
    price: 336990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd1/h2f/64255724159006.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hd1/h2f/64255724159006.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h51/h3e/64255726747678.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hdd/hf3/64255730286622.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-zelenyi-104078887/',
  },

  {
    id: 8,
    name: 'Apple iPhone 13 Pro Max 128GB Silver',
    description:
      'A flagship model with a large screen and a powerful camera system. Great for watching videos, gaming, and photography.',
    price: 599990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h26/64004762206238.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h1b/h26/64004762206238.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h28/he1/64004765810718.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h58/h6f/64004769054750.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-max-128gb-serebristyi-102298893/',
  },
  {
    id: 9,
    name: 'Apple AirPods with Charging Case',
    description:
      'Convenient wireless earbuds for daily music listening and calls. They connect quickly and easily with Apple devices.',
    price: 69990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hbc/h5a/63761265426462.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hbc/h5a/63761265426462.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h4a/h55/63761266081822.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h91/h97/63761266540574.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-with-charging-case-belyi-4804056/',
  },
  {
    id: 10,
    name: 'Apple AirPods Pro 2nd Gen',
    description:
      'Premium earbuds with active noise cancellation. They offer high sound quality and are comfortable for long-term use.',
    price: 129990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/',
  },
];