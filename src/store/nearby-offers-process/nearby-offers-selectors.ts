import { createSelector } from '@reduxjs/toolkit';
import { COUNT_NEARBY_OFFERS, NameSpace } from '../../const';
import { State } from '../../types/state';
import { getRandomUniqueValuesFromArray } from '../../utils';


export const getNearByOffers = (state: State) => state[NameSpace.NearbyOffers].nearbyOffers;
export const getRandomNearbyOffers = createSelector([getNearByOffers], (nearbyOffers) => getRandomUniqueValuesFromArray(nearbyOffers, COUNT_NEARBY_OFFERS));


