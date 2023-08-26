import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header/header';
import { getRatingStarsStyle } from '../../utils';
import { ReviewsOffer } from '../../components/reviews-offer/reviews-offer';
import { ReviewsForm } from '../../components/review-form/review-form';
import { CardsList } from '../../components/cards-list/cards-list';
import { useParams } from 'react-router-dom';
import { Map } from '../../components/map/map';
import { memo, useMemo, useRef} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {useEffect} from 'react';
import { fetchNearByOffers, fetchOfferCard, fetchReviews } from '../../store/api-actions';
import { LoadingScreen } from '../loading-screen/loading-screen';
import { NotFoundPage } from '../not-found-page/not-found-page';
import { AuthStatus} from '../../const';
import { getCurrentOffer, getOfferCard, getOfferCardLoadStatus, getActiveId, getOfferPageLoadStatus} from '../../store/offers-process/offers-selectors';
import { getAuthStatus } from '../../store/user-process/user-selectors';
import { getCommentPostStatus, getReviews} from '../../store/reviews-process/reviews-selectors';
import { setActiveId, setCurrentOffer } from '../../store/offers-process/offers-process';
import { getNearByOffers} from '../../store/nearby-offers-process/nearby-offers-selectors';
import { Goods } from '../../components/goods/goods';
import { HostComponent } from '../../components/host/host';
import { Gallery } from '../../components/gallery/gallety';

function OfferPageComponent () {
  const dispatch = useAppDispatch();
  const {id: offerId = ''} = useParams();
  const activeId = useAppSelector(getActiveId);
  const isOfferCardLoading = useAppSelector(getOfferCardLoadStatus);
  const isCommentPosting = useAppSelector(getCommentPostStatus);
  const reviewsTitleRef = useRef<HTMLHeadingElement>(null);
  const authStatus = useAppSelector(getAuthStatus);

  useEffect(() => {
    if (offerId === undefined) {
      return;
    }
    dispatch(fetchOfferCard({id: offerId}));
    dispatch(fetchNearByOffers({id: offerId}));
    dispatch(fetchReviews({id: offerId}));
    dispatch(setActiveId(offerId));
    dispatch(setCurrentOffer());
  }, [offerId , dispatch, isCommentPosting, authStatus]
  );

  const offerCard = useAppSelector(getOfferCard);
  const loadNearByOffers = useAppSelector(getNearByOffers);
  const currentOffer = useAppSelector(getCurrentOffer);
  const reviews = useAppSelector(getReviews);
  const isPageLoadStatus = useAppSelector(getOfferPageLoadStatus);
  const isPageDataEmpty = offerCard === null || reviews.length === 0 || loadNearByOffers.length === 0;
  const nearByOffers = useMemo(() => {
    if (currentOffer === null) {
      return;
    }
    return [...loadNearByOffers, currentOffer];
  }, [currentOffer, loadNearByOffers]);

  const scrollToReviewsTitle = () => {
    reviewsTitleRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  if (!isOfferCardLoading) {
    return (
      <NotFoundPage/>
    );
  }

  if (isPageLoadStatus || isPageDataEmpty || nearByOffers === undefined) {
    return (
      <LoadingScreen/>
    );
  }

  const offerHoverHandler = (id: string | undefined) => {
    if (id !== undefined) {
      dispatch(setActiveId(id));
    }
  };

  const {title, city, type, price, isFavorite, isPremium, rating, description, bedrooms, goods, host, images, maxAdults} = offerCard;

  return (
    <div className="page">
      <Helmet>
        <title>{'6 cities - Offer'}</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <Gallery images={images} type={type}/>
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
              <Goods goods={goods}/>
              <HostComponent host={host} description={description}/>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title" ref={reviewsTitleRef}>
                  Reviews · <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewsOffer reviews={reviews}/>
                {authStatus === AuthStatus.Auth && <ReviewsForm scrollToReviewsTitle={scrollToReviewsTitle}/>}
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map city={city} offersList={nearByOffers} selectedId={activeId}/>
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
