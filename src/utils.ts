import dayjs from 'dayjs';
import { DATE_FORMAT, PageClass } from './const';

export function humanizeDate(date: string) {
  return date ? dayjs(date).format(DATE_FORMAT) : '';
}

export function getRatingStarsStyle(rating: number): string {
  return `${Math.round(rating) / 5 * 100}%`;
}

export function getClassCard(page: string): string {
  return `${page}__card place-card`;
}

export function getClassImageWrapper(page: string): string {
  return `${page}__image-wrapper place-card__image-wrapper`;
}

export function getWidthImageCard (page:string): number {
  if (page !== PageClass.Favofites) {
    return 260;
  }
  return 150;
}

export function getHeightImageCard (page:string): number {
  if (page !== PageClass.Favofites) {
    return 200;
  }
  return 110;
}
