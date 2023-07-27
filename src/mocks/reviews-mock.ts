import { Review } from '../types/review';

export const reviewsMock: Review[] = [
  {
    id: '2da68c3b-a901-42d5-9163-9418eccb1cad',
    comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    date: '2023-06-23T21:00:00.625Z',
    rating: 1,
    user: {
      name: 'Zak',
      avatarUrl: 'https://13.design.pages.academy/static/avatar/7.jpg',
      isPro: true
    }
  },
  {
    id: '5abcc770-15be-46cb-85ba-07bbc0c50bdf',
    comment: 'This villa is perfect in every way: the view on mountains and waterfalls, the hot tub and the villa itself. The evening here became a great continuation of our journeys over country.',
    date: '2023-06-23T21:00:00.624Z',
    rating: 1,
    user: {
      name: 'Mollie',
      avatarUrl: 'https://13.design.pages.academy/static/avatar/6.jpg',
      isPro: true
    }
  },
  {
    id: '066bbea7-f41f-43bd-b597-b22c6efd351e',
    comment: 'This villa is perfect in every way: the view on mountains and waterfalls, the hot tub and the villa itself. The evening here became a great continuation of our journeys over country.',
    date: '2023-06-26T21:00:00.624Z',
    rating: 5,
    user: {
      name: 'Kendall',
      avatarUrl: 'https://13.design.pages.academy/static/avatar/5.jpg',
      isPro: true
    }
  },
  {
    id: 'cc23c22d-0c02-4ff3-bcd3-48aad06aac8a',
    comment: 'Bathed in the nature. Completely unplugged. Unforgettable.',
    date: '2023-06-25T21:00:00.625Z',
    rating: 1,
    user: {
      name: 'Christina',
      avatarUrl: 'https://13.design.pages.academy/static/avatar/4.jpg',
      isPro: true
    }
  },
];

