import { OfferListItem } from '../types/offer-list-item';

export const offersMock: OfferListItem[] = [
  {
    id: 'a724fe10-978c-4b24-b5aa-c033830de2cc',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'apartment',
    price: 471,
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
    isFavorite: true,
    isPremium: false,
    rating: 2,
    previewImage: 'https://13.design.pages.academy/static/hotel/11.jpg'
  },
  {
    id: '937e13a8-d128-42fc-9b67-b8b29e41b0dc',
    title: 'The Joshua Tree House',
    type: 'hotel',
    price: 178,
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
    isFavorite: true,
    isPremium: true,
    rating: 1.7,
    previewImage: 'https://13.design.pages.academy/static/hotel/10.jpg'
  },
  {
    id: 'e20ec930-ad5f-4bf1-a7fe-83de62cc0ac0',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'room',
    price: 210,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }},
    location: {
      latitude: 50.947361,
      longitude: 6.9799739999999995,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.3,
    previewImage: 'https://13.design.pages.academy/static/hotel/18.jpg'
  },
  {
    id: 'cb73f9eb-7a6f-49e7-9758-94ec697d85bc',
    title: 'House in countryside',
    type: 'house',
    price: 945,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }},
    location: {
      latitude: 50.960361,
      longitude: 6.967974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.3,
    previewImage: 'https://13.design.pages.academy/static/hotel/20.jpg'
  },
];
