import { CardsList } from '../cards-list/cards-list';
import { Sort } from '../sort/sort';
import { Map } from '../map/map';
import { useState, memo} from 'react';
import { useAppSelector } from '../../hooks';
import { getOffersByCity, sorting } from '../../utils';
import { Sorting } from '../../types/sorting';
import { LoadingScreen } from '../../pages/loading-screen/loading-screen';
import { getActiveCity, getOffers, getOffersLoadStatus } from '../../store/offers-process/offers-selectors';

function CitiesComponent () {
  const [selectedId, setselectedId] = useState<string| undefined> (undefined);
  const [activeSortType, setActiveSortType] = useState<Sorting>('Popular');
  const offersList = useAppSelector(getOffers);
  const isOffersLoading = useAppSelector(getOffersLoadStatus);
  const activeCityName = useAppSelector(getActiveCity);
  const offersByCity = getOffersByCity(activeCityName, offersList);
  const offersBySorting = sorting[activeSortType](offersByCity);

  if (isOffersLoading || offersList.length === 0) {
    return (
      <LoadingScreen/>
    );
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
          <Sort activeSortType={activeSortType} onChange={(newSortType) => setActiveSortType(newSortType)}/>
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
