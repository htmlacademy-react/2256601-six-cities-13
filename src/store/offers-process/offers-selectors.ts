import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { OfferListItem } from '../../types/offer-list-item';
import { OfferCard } from '../../types/offer-card';

export const getActiveCity = (state: State): string => state[NameSpace.Offers].activeCity;
export const getActiveId = (state: State): string | null => state[NameSpace.Offers].activeId;
export const getOffers = (state: State): OfferListItem[] => state[NameSpace.Offers].offers;
export const getOfferCard = (state: State): OfferCard | null => state[NameSpace.Offers].offerCard;
export const getOffersLoadStatus = (state: State): boolean => state[NameSpace.Offers].isOffersLoading;
export const getOfferCardLoadStatus = (state: State): boolean => state[NameSpace.Offers].isOfferCardLoading;

