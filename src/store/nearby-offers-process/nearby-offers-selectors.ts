import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { OfferListItem } from '../../types/offer-list-item';

export const getNearByOffers = (state: State): OfferListItem[] => state[NameSpace.NearbyOffers].nearByOffers;
export const getNearByoffersLoadStatus = (state: State): boolean => state[NameSpace.NearbyOffers].isNearByOffersLoading;

