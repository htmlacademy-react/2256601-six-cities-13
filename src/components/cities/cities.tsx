import { CardsList } from '../cards-list/cards-list';
import { Sort } from '../sort/sort';
import { Map } from '../map/map';
import { useState, memo} from 'react';
import { useAppSelector } from '../../hooks';
import { LoadingScreen } from '../../pages/loading-screen/loading-screen';
import { getActiveCity, getOffersByCity, getOffersBySorting, getOffersLoadStatus } from '../../store/offers-process/offers-selectors';
import { CitiesEmpty } from '../cities-empty/cities-empty';
import { getAuthStatus } from '../../store/user-process/user-selectors';
import { AuthStatus } from '../../const';

function CitiesComponent () {
  const [selectedId, setselectedId] = useState<string| undefined> (undefined);
  const isOffersLoading = useAppSelector(getOffersLoadStatus);
  const activeCityName = useAppSelector(getActiveCity);
  const offersByCity = useAppSelector(getOffersByCity);
  const offersBySorting = useAppSelector(getOffersBySorting);
  const authStatus = useAppSelector(getAuthStatus);

  if (authStatus === AuthStatus.Unknown || isOffersLoading) {
    return (
      <LoadingScreen/>
    );
  }
  if (offersByCity.length === 0) {
    return <CitiesEmpty activeCity={activeCityName}/>;
  }

  const offerHoverHandler = (id: string | undefined) => {
    setselectedId(id);
  };

  const currentCity = offersByCity[0].city;

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersByCity.length} places to stay in {activeCityName}</b>
          <Sort/>
          <div className="cities__places-list places__list tabs__content">
            <CardsList cardsList={offersBySorting} pageClass={'cities__card'} onOfferHover={offerHoverHandler}/>
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map"><Map city={currentCity} offersList={offersByCity} selectedId={selectedId}/></section>
        </div>
      </div>
    </div>
  );
}

export const Cities = memo(CitiesComponent);
