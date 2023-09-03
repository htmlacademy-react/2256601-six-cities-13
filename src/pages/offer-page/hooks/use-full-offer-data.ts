import { useEffect } from 'react';
import { MAX_NEARBY_OFFERS, MAX_REVIEWS_QUANTITY } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import {
  getCurrentOffer,
  getErrorNearbyLoadingStatus,
  getErrorOfferLoadingStatus,
  getFullOfferLoadingStatus,
  getNearby,
  getNearbyLoadingStatus,
} from '../../../store/offer-data/selector';
import {
  fetchFullOfferAction,
  fetchNearbyAction,
  fetchReviewsAction,
} from '../../../store/api-actions';
import { useParams } from 'react-router-dom';
import { getRandomSlice } from '../../../utils/common';
import {
  getErrorReviewsLoadingStatus,
  getReviews,
  getReviewsLoadingStatus,
} from '../../../store/reviews-data/selector';

export function useFullOfferData() {
  const dispatch = useAppDispatch();
  const params = useParams();

  const fullOffer = useAppSelector(getCurrentOffer);

  const reviews = useAppSelector(getReviews);
  const newReviews = reviews
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, MAX_REVIEWS_QUANTITY);

  const nearby = useAppSelector(getNearby);
  const nearbyOffers = getRandomSlice(MAX_NEARBY_OFFERS, nearby);

  const isFullOfferLoading = useAppSelector(getFullOfferLoadingStatus);
  const isReviewsLoading = useAppSelector(getReviewsLoadingStatus);
  const isNearbyLoading = useAppSelector(getNearbyLoadingStatus);
  const isDataLoading =
    isFullOfferLoading || isReviewsLoading || isNearbyLoading;
  const hasErrorOfferLoading = useAppSelector(getErrorOfferLoadingStatus);
  const hasErrorReviewsLoading = useAppSelector(getErrorReviewsLoadingStatus);
  const hasErrorNearbyLoading = useAppSelector(getErrorNearbyLoadingStatus);
  const hasError =
    hasErrorOfferLoading || hasErrorReviewsLoading || hasErrorNearbyLoading;

  useEffect(() => {
    dispatch(fetchFullOfferAction(params.offerId as string));
    dispatch(fetchReviewsAction(params.offerId as string));
    dispatch(fetchNearbyAction(params.offerId as string));
  }, [dispatch, params.offerId]);

  return {
    fullOffer,
    reviews,
    newReviews,
    nearbyOffers,
    isDataLoading,
    hasError,
  };
}
