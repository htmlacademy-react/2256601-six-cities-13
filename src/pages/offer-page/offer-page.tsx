import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header/header';
import { getRandomUniqueValuesFromArray, getRatingStarsStyle } from '../../utils';
import { ReviewsOffer } from '../../components/reviews-offer/reviews-offer';
import { ReviewsForm } from '../../components/review-form/review-form';
import { CardsList } from '../../components/cards-list/cards-list';
import { useParams } from 'react-router-dom';
import { Map } from '../../components/map/map';
import { useState, memo} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {useEffect} from 'react';
import { fetchNearByOffers, fetchOfferCard, fetchReviews } from '../../store/api-actions';
import { LoadingScreen } from '../loading-screen/loading-screen';
import { NotFoundPage } from '../not-found-page/not-found-page';
import { AuthStatus, COUNT_NEARBY_OFFERS } from '../../const';
import { getOfferCard, getOfferCardLoadStatus, getOffers, getOffersLoadStatus } from '../../store/offers-process/offers-selectors';
import { getAuthStatus } from '../../store/user-process/user-selectors';
import { getCommentPostStatus, getReviews, getReviewsLoadStatus } from '../../store/reviews-process/reviews-selectors';
import { setActiveId } from '../../store/offers-process/offers-process';
import { getNearByOffers, getNearByoffersLoadStatus } from '../../store/nearby-offers-process/nearby-offers-selectors';
import { OfferListItem } from '../../types/offer-list-item';

function OfferPageComponent () {
  const [selectedId, setselectedId] = useState<string| undefined> (undefined);
  const dispatch = useAppDispatch();
  const offerId = useParams().id as string;
  const offersList = useAppSelector(getOffers);
  const isOffersLoading = useAppSelector(getOffersLoadStatus);
  const isIdExist = offersList.some((offer) => offer.id === offerId);
  const isCommentPosting = useAppSelector(getCommentPostStatus);

  useEffect(() => {
    if (!isIdExist) {
      return;
    }
    dispatch(fetchOfferCard({id: offerId}));
    dispatch(fetchNearByOffers({id: offerId}));
    dispatch(fetchReviews({id: offerId}));
    dispatch(setActiveId(offerId));
  }, [isIdExist, offerId, dispatch, isCommentPosting]
  );

  const offerCard = useAppSelector(getOfferCard);
  const loadNearByOffers = useAppSelector(getNearByOffers);
  const reviews = useAppSelector(getReviews);
  const isOfferCardLoading = useAppSelector(getOfferCardLoadStatus);
  const isNearByOffersLoading = useAppSelector(getNearByoffersLoadStatus);
  const isReviewsLoading = useAppSelector(getReviewsLoadStatus);
  const isPageLoading = isOfferCardLoading || isNearByOffersLoading || isReviewsLoading;
  const isSomethingMissingFromServer = offerCard === null || offersList.length === 0 || loadNearByOffers.length === 0 || reviews.length === 0;
  const currentOffer = offersList.find((offer) => offer.id === offerId) as OfferListItem;
  const nearByOffers = getRandomUniqueValuesFromArray(loadNearByOffers, COUNT_NEARBY_OFFERS);

  const authStatus = useAppSelector(getAuthStatus);

  if (!isIdExist && !isOffersLoading) {
    return (
      <NotFoundPage/>
    );
  }

  if (isPageLoading || isSomethingMissingFromServer) {
    return (
      <LoadingScreen/>
    );
  }

  const offerHoverHandler = (id: string | undefined) => {
    setselectedId(id);
  };

  const {title, type, price, isFavorite, isPremium, rating, description, bedrooms, goods, host, images, maxAdults} = offerCard;
  const {isPro, name, avatarUrl} = host;
  const currentCity = currentOffer.city;

  return !isIdExist ? <NotFoundPage/> : (
    <div className="page">
      <Helmet>
        <title>{'6 cities - Offer'}</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {
                images.map((image) =>
                  (
                    <div className="offer__image-wrapper" key={image}>
                      <img
                        className="offer__image"
                        src={image}
                        alt={type}
                      />
                    </div>
                  )
                )
              }
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {
                isPremium &&
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              }
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button className={`offer__bookmark-button button ${isFavorite ? 'offer__bookmark-button--active' : ''}`} type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: getRatingStarsStyle(rating) }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{type}</li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What`s inside</h2>
                <ul className="offer__inside-list">
                  {
                    goods.map((good) => <li className="offer__inside-item" key={good}>{good}</li>)
                  }
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={avatarUrl}
                      width={74}
                      height={74}
                      alt={name}
                    />
                  </div>
                  <span className="offer__user-name">{name}</span>
                  {
                    isPro &&
                    <span className="offer__user-status">Pro</span>
                  }
                </div>
                <div className="offer__description">
                  {
                    description.split('.').map((sentence) =>
                      <p className="offer__text" key={sentence}>{sentence}</p>)
                  }
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">1</span>
                </h2>
                <ReviewsOffer reviews={reviews}/>
                {authStatus === AuthStatus.Auth && <ReviewsForm/>}
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map city={currentCity} offersList={nearByOffers} selectedId={selectedId}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <CardsList cardsList={nearByOffers} pageClass={'near-places__card'} onOfferHover={offerHoverHandler}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export const OfferPage = memo(OfferPageComponent);
