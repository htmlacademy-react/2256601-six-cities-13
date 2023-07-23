import { OfferObject } from '../types/offer-object';

export const offersObjectMock: OfferObject[] = [
  {
    id: 'a724fe10-978c-4b24-b5aa-c033830de2cc',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    type: 'apartment',
    price: 471,
    images: [
      'https://13.design.pages.academy/static/hotel/2.jpg',
      'https://13.design.pages.academy/static/hotel/18.jpg',
      'https://13.design.pages.academy/static/hotel/5.jpg',
      'https://13.design.pages.academy/static/hotel/20.jpg',
      'https://13.design.pages.academy/static/hotel/17.jpg',
      'https://13.design.pages.academy/static/hotel/4.jpg'
    ],
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.941361,
      longitude: 6.956974,
      zoom: 16
    },
    goods: [
      'Coffee machine',
      'Heating',
      'Washer',
      'Kitchen',
      'Breakfast',
      'Wi-Fi',
      'Dishwasher',
      'Cable TV',
      'Fridge',
      'Baby sea',
      'Washing machine',
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://13.design.pages.academy/static/host/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: false,
    rating: 2,
    bedrooms: 4,
    maxAdults: 1
  },
  {
    id: '937e13a8-d128-42fc-9b67-b8b29e41b0dc',
    title: 'The Joshua Tree House',
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    type: 'hotel',
    price: 178,
    images: [
      'https://13.design.pages.academy/static/hotel/4.jpg',
      'https://13.design.pages.academy/static/hotel/19.jpg',
      'https://13.design.pages.academy/static/hotel/8.jpg',
      'https://13.design.pages.academy/static/hotel/13.jpg',
      'https://13.design.pages.academy/static/hotel/14.jpg',
      'https://13.design.pages.academy/static/hotel/5.jpg'
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    goods: [
      'Laptop friendly workspace',
      'Dishwasher',
      'Towels',
      'Coffee machine',
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://13.design.pages.academy/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 1.7,
    bedrooms: 1,
    maxAdults: 5
  },
  {
    id: 'e20ec930-ad5f-4bf1-a7fe-83de62cc0ac0',
    title: 'Beautiful & luxurious apartment at great location',
    description: 'This is a place for dreamers to reset, reflect, and create. Designed with a slow pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    type: 'room',
    price: 210,
    images: [
      'https://13.design.pages.academy/static/hotel/11.jpg',
      'https://13.design.pages.academy/static/hotel/14.jpg',
      'https://13.design.pages.academy/static/hotel/17.jpg',
      'https://13.design.pages.academy/static/hotel/12.jpg',
      'https://13.design.pages.academy/static/hotel/13.jpg',
      'https://13.design.pages.academy/static/hotel/9.jpg'
    ],
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.941361,
      longitude: 6.9799739999999995,
      zoom: 16
    },
    goods: [
      'Kitchen',
      'Wi-Fi',
      'Towels',
      'Coffee machine',
      'Washing machine',
      'Breakfast',
      'Cable TV',
      'Baby seat',
      'Air conditioning',
      'Dishwasher',
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://13.design.pages.academy/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 1.3,
    bedrooms: 1,
    maxAdults: 3
  },
  {
    id: 'cb73f9eb-7a6f-49e7-9758-94ec697d85bc',
    title: 'House in countryside',
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    type: 'house',
    price: 945,
    images: [
      'https://13.design.pages.academy/static/hotel/14.jpg',
      'https://13.design.pages.academy/static/hotel/2.jpg',
      'https://13.design.pages.academy/static/hotel/5.jpg',
      'https://13.design.pages.academy/static/hotel/19.jpg',
      'https://13.design.pages.academy/static/hotel/10.jpg',
      'https://13.design.pages.academy/static/hotel/13.jpg'
    ],
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.960361,
      longitude: 6.967974,
      zoom: 16
    },
    goods: [
      'Cable TV',
      'Heating',
      'Washer',
      'Coffee machine',
      'Air conditioning',
      'Baby seat',
      'Wi-Fi',
      'Washing machine',
      'Breakfast',
      'Kitchen',
      'Laptop friendly workspace',
      'Fridge',
      'Towels',
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://13.design.pages.academy/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 3.3,
    bedrooms: 5,
    maxAdults: 8
  },
];

