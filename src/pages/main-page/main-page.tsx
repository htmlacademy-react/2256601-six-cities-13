import { Header } from '../../components/header/header';
import { LocationsList } from '../../components/locations-list/locations-list';
import { Cities } from '../../components/cities/cities';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getActiveCity, getOffersByCity, getOffersFetchingStatus } from '../../store/offers-process/offers-selectors';
import { RequestStatusMap } from '../../const';
import classNames from 'classnames';
import { LoadingScreen } from '../loading-screen/loading-screen';
import { CitiesEmpty } from '../../components/cities-empty/cities-empty';

export function MainPage () {
  const offetsByCity = useAppSelector(getOffersByCity);
  const activeCity = useAppSelector(getActiveCity);
  const offersFetchingStatus = useAppSelector(getOffersFetchingStatus);
  const isLoading = offersFetchingStatus === RequestStatusMap.Pending;
  const hasOffers = offetsByCity && offetsByCity.length > 0;

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header/>
      <main className={classNames('page__main page__main--index', {'page__main--index-empty' : !hasOffers})}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList/>
          </section>
        </div>
        {isLoading && <LoadingScreen/>}
        {hasOffers
          ? <Cities offersByCity={offetsByCity} activeCity={activeCity}/>
          : <CitiesEmpty activeCity={activeCity}/>}
      </main>
    </div>
  );
}

