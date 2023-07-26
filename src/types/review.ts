import { Host } from './offer-card-data';

export type Review = {
  id: string;
  date: string;
  user: Host;
  comment: string;
  rating: number;
  }
