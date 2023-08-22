import { Host } from './offer-card';

export type Review = {
  id: string;
  date: string;
  user: Host;
  comment: string;
  rating: number;
  }
