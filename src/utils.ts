import dayjs from 'dayjs';
import { DATE_FORMAT, RatingMap} from './const';
import { OfferListItem } from './types/offer-list-item';
import { Sorting } from './types/sorting';
import { SortingMap } from './const';
import { Review } from './types/review';

export function humanizeDate(date: string) {
  return date ? dayjs(date).format(DATE_FORMAT) : '';
}

export function getRatingStarsStyle(rating: number): string {
  return `${Math.round(rating) / 5 * 100}%`;
}

export function getWidthImageCard (pageClass:string): number {
  if (pageClass !== 'favorites__card') {
    return 260;
  }
  return 150;
}

export function getHeightImageCard (pageClass:string): number {
  if (pageClass !== 'favorites__card') {
    return 200;
  }
  return 110;
}

export const sortedReviewsByLatestDate = (reviews: Review[]) => [...reviews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function sortLowToHigh (a: OfferListItem, b: OfferListItem) {
  return a.price - b.price;
}

export function sortHighToLow (a: OfferListItem, b: OfferListItem) {
  return b.price - a.price;
}

export function sortByRating (a: OfferListItem, b: OfferListItem) {
  return b.rating - a.rating;
}

export const sorting: Record<Sorting, (offers: OfferListItem[]) => OfferListItem[]> =
{
  Popular: (offers: OfferListItem[]) => offers.slice(),
  HighToLow: (offers: OfferListItem[]) => offers.slice().sort(sortHighToLow),
  LowToHigh: (offers: OfferListItem[]) => offers.slice().sort(sortLowToHigh),
  TopRated: (offers: OfferListItem[]) => offers.slice().sort(sortByRating)
};

export const getRandomArrayElement = <T>(arr: T[] | readonly T[]): T => arr[Math.floor(Math.random() * arr.length)];

export function getRandomUniqueValuesFromArray<T>(arr: T[], n: number): T[] {
  if (arr.length <= n) {
    return arr;
  }
  const shuffled = arr.slice();
  const result: T[] = [];
  while (result.length < n) {
    const randomIndex = Math.floor(Math.random() * shuffled.length);
    const value = shuffled[randomIndex];
    if (!result.includes(value)) {
      result.push(value);
    }
  }
  return result;
}

export function getSortingMap () {
  return (Object.entries(SortingMap) as [Sorting, (typeof SortingMap)[Sorting]][]);
}

export function getReviewsRatingMap () {
  return (Object.entries(RatingMap).reverse());
}

export const getBedroomWord = (count: number) => count === 1 ? 'Bedroom' : 'Bedrooms';

export const getAdultWord = (count: number) => count === 1 ? 'adult' : 'adults';

export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const getCitiesByOffers = (offers: OfferListItem[]) => Array.from(new Set(offers.map((offer) => offer.city.name)));

export const getReviewWord = (count: number) => {
  if (count === 1) {
    return 'Review';
  }
  return 'Reviews';
};

export const getPlaceWord = (count: number) => {
  if (count === 1) {
    return 'place';
  }
  return 'places';
};
