export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: any;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 16 Pro Max',
    description: 'Apple iPhone 16 Pro Max with A18 Bionic chip, 6.7" Super Retina XDR display, and 48MP main camera.',
    price: 1199,
    image: require('../assets/images/iphone.png'),  
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Samsung Galaxy S24 Ultra with Snapdragon 8 Gen 3, 6.8" Dynamic AMOLED 2X display, and 200MP main camera.',
    price: 1299,
    image: require('../assets/images/s24ultra.png'),  
  },
  {
    id: '3',
    name: 'Google Pixel 9 Pro',
    description: 'Google Pixel 9 Pro with Tensor G4 chip, 6.7" LTPO OLED display, and 50MP main camera.',
    price: 999,
    image: require('../assets/images/pixel.png'),  
  },
  {
    id: '4',
    name: 'OnePlus 13',
    description: 'OnePlus 13 with Snapdragon 8 Gen 3, 6.7" Fluid AMOLED display, and 50MP main camera.',
    price: 799,
    image: require('../assets/images/oneplus13.png'),  
  },
  {
    id: '5',
    name: 'Xiaomi 14',
    description: 'Xiaomi 14 with Snapdragon 8 Gen 3, 6.73" AMOLED display, and 50MP Leica camera system.',
    price: 899,
    image: require('../assets/images/xiaomi14.png'),  
  },
  {
    id: '6',
    name: 'Sony Xperia V',
    description: 'Sony Xperia V with Snapdragon 8 Gen 3, 6.5" OLED display, and 48MP triple camera setup.',
    price: 1199,
    image: require('../assets/images/sony.png'),  
  },
  {
    id: '7',
    name: 'Oppo Find X7 Ultra',
    description: 'Oppo Find X7 Ultra with Snapdragon 8 Gen 3, 6.82" AMOLED display, and 50MP triple camera system.',
    price: 1099,
    image: require('../assets/images/oppo.png'),  
  },
  {
    id: '8',
    name: 'Huawei Mate 60 Pro',
    description: 'Huawei Mate 60 Pro with Kirin 9000S, 6.82" OLED display, and 50MP triple camera system.',
    price: 1299,
    image: require('../assets/images/huawei.png'),  
  },
];
