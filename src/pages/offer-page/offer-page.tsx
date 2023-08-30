import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/header/header';
import { capitalize, } from '../../utils';
import { ReviewsList } from '../../components/reviews-list/reviews-list';
import { OfferCardsList } from '../../components/offer-cards-list/offer-cards-list';
import { useParams } from 'react-router-dom';
import { Map } from '../../components/map/map';
import { memo} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {useEffect} from 'react';
import { LoadingScreen } from '../loading-screen/loading-screen';
import { NotFoundPage } from '../not-found-page/not-found-page';
import { MAX_OFFER_IMAGES, RequestStatusMap} from '../../const';
import { getReviewsSortedByLatestDate} from '../../store/reviews-process/reviews-selectors';
import { getRandomNearbyOffers} from '../../store/nearby-offers-process/nearby-offers-selectors';
import { GoodsList } from '../../components/goods-list/goods-list';
import { HostComponent } from '../../components/host/host';
import { Gallery } from '../../components/gallery/gallety';
import { getOfferCard, getOfferCardFetchingStatus } from '../../store/offer-card-process/offer-card-selectors';
import { fetchOfferCard } from '../../store/offer-card-process/offer-card-thunks';
import { fetchNearbyOffers } from '../../store/nearby-offers-process/nearby-offers-thunks';
import { fetchReviews } from '../../store/reviews-process/reviews-thunks';
import { clearOfferCard } from '../../store/offer-card-process/offer-card-process';
import { clearReviews } from '../../store/reviews-process/reviews-process';
import { FavoriteButton } from '../../components/favorite-button/favorite-button';
import { Rating } from '../../components/rating/rating';
import { FeaturesList } from '../../components/features-list/features-list';
import { Price } from '../../components/price/price';

function OfferPageComponent () {
  const dispatch = useAppDispatch();
  const {id: offerId = ''} = useParams();
  const offerCard = useAppSelector(getOfferCard);
  const nearbyOffers = useAppSelector(getRandomNearbyOffers);
  const offerCardFetchingStatus = useAppSelector(getOfferCardFetchingStatus);
  const reviews = useAppSelector(getReviewsSortedByLatestDate);
  const isFailed = offerCardFetchingStatus === RequestStatusMap.Failed;
  const isSucces = offerCardFetchingStatus === RequestStatusMap.Success;
  const parentClass = 'offer';
  const parentClassNear = 'near-places';

  useEffect(() => {
    if (offerId) {
      dispatch(fetchOfferCard(offerId));
      dispatch(fetchNearbyOffers(offerId));
      dispatch(fetchReviews(offerId));
    }
    return () => {
      dispatch(clearOfferCard());
      dispatch(clearReviews());
    };
  }, [offerId , dispatch]
  );
  if (offerCard === null) {
    return <LoadingScreen/>;
  }
  if (isFailed) {
    return <NotFoundPage/>;
  }

  const {title, city, type, price, isFavorite, isPremium, rating, description, bedrooms, goods, host, images, maxAdults} = offerCard;
  let detailedImages: string[] = images;
  if (images.length > 6) {
    detailedImages = images.slice(0, MAX_OFFER_IMAGES);
  }
  return (
    <div className="page">
      <Helmet>
        <title>{'6 cities - Offer'}</title>
      </Helmet>
      <Header/>
      {isSucces && offerCard && (
        <main className="page__main page__main--offer">
          <section className="offer">
            <div className="offer__gallery-container container">
              <Gallery images={detailedImages}/>
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
                    {capitalize(title)}
                  </h1>
                  <FavoriteButton
                    parentClass={parentClass}
                    isFavorite={isFavorite}
                    offerId={offerId}
                    iconHeight={31}
                    iconWidth={33}
                  />
                </div>
                <Rating
                  parentClass={parentClass}
                  rating={rating}
                  isLabeled
                />
                <FeaturesList
                  bedrooms={bedrooms}
                  maxAdults={maxAdults}
                  type={type}
                />
                <Price
                  parentClass={parentClass}
                  price={price}
                />
                <GoodsList goods={goods}/>
                <HostComponent
                  host={host}
                  description={description}
                />
                <ReviewsList reviews={reviews}/>
              </div>
            </div>
            <Map
              city={city}
              offersList={nearbyOffers}
              className={'offer__map map'}
              currentOffer={offerCard}
            />
          </section>
          <OfferCardsList offerCardsList={nearbyOffers} parentClass={parentClassNear}/>
        </main>
      )}
    </div>
  );
}

export const OfferPage = memo(OfferPageComponent);
