import { OfferCardsList } from '../offer-cards-list/offer-cards-list';
import { Sort } from '../sort/sort';
import { Map } from '../map/map';
import { useState, memo} from 'react';
import { CitiesNameValue } from '../../const';
import { OfferListItem } from '../../types/offer-list-item';
import { Sorting } from '../../types/sorting';
import { getPlaceWord, sorting } from '../../utils';

type CitiesProps = {
  offersByCity: OfferListItem[];
  activeCity: CitiesNameValue;
}

function CitiesComponent ({offersByCity, activeCity}: CitiesProps) {
  const [activeSortType, setSortType] = useState<Sorting>('Popular');
  const parentClass = 'cities';
  const count = offersByCity.length;
  const offersBySorting = sorting[activeSortType](offersByCity);
  const currentCity = offersByCity[0].city;

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{count} {getPlaceWord(count)} to stay in {activeCity}</b>
          <Sort activeSortType={activeSortType} onChange={setSortType}/>
          <div className="cities__places-list places__list tabs__content">
            <OfferCardsList offerCardsList={offersBySorting} parentClass={parentClass}/>
          </div>
        </section>
        <div className="cities__right-section">
          <Map city={currentCity} offersList={offersByCity} className={'cities__map map'}/>
        </div>
      </div>
    </div>
  );
}

export const Cities = memo(CitiesComponent);
