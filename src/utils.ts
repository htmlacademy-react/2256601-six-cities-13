import dayjs from 'dayjs';
import { DATE_FORMAT} from './const';
import { OfferListItem } from './types/offer-list-item';

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

export function getOffersByCity (cityName: string | undefined, offers: OfferListItem[]): OfferListItem[] {
  return offers.filter((offer) => offer.city.name === cityName);
}
