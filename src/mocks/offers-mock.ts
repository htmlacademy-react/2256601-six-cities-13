import { OffersList } from '../types/offers-list';

export const offersMock: OffersList[] = [
  {
    id: '1ed853d2-d662-4bb7-be8c-21ec3b3278b1',
    title: 'Amazing and Extremely Central Flat',
    type: 'apartment',
    price: 118,
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }},
    location: {
      latitude: 50.827557,
      longitude: 4.336697,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.9,
    previewImage: 'https://13.design.pages.academy/static/hotel/11.jpg'
  },
  {
    id: '34f50f68-803c-43a9-8d59-9556fb9c0eaa',
    title: 'The house among olive',
    type: 'hotel',
    price: 197,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }},
    location: {
      latitude: 52.367540000000005,
      longitude: 4.883976,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.1,
    previewImage: 'https://13.design.pages.academy/static/hotel/10.jpg'
  },
  {
    id: 'c99c9239-7836-4115-a767-ee81c4b835ad',
    title: 'Amazing and Extremely Central Flat',
    type: 'room',
    price: 224,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }},
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2,
    previewImage: 'https://13.design.pages.academy/static/hotel/3.jpg'
  },
  {
    id: 'e422297a-1bd1-4ef9-aeac-3af3c02eaf7f',
    title: '"Canal View Prinsengracht',
    type: 'hotel',
    price: 140,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }},
    location: {
      latitude: 50.932361,
      longitude: 6.937974,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.2,
    previewImage: 'https://13.design.pages.academy/static/hotel/20.jpg'
  },
];
