import { CITIES_NAMES } from '../../const';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {MouseEvent, memo} from 'react';
import { getActiveCity } from '../../store/offers-process/offers-selectors';
import { setActiveCity } from '../../store/offers-process/offers-process';

function LocationsListComponent () {
  const activeCityName = useAppSelector(getActiveCity);
  const dispatch = useAppDispatch();
  const changeCityHandler = (evt: MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    const changeCityName = evt.currentTarget.dataset.city as string;
    dispatch(setActiveCity(changeCityName));
  };

  return (
    <ul className="locations__list tabs__list">
      {
        CITIES_NAMES.map((cityName) =>
          (
            <li
              className="locations__item"
              key={cityName}
              data-city={cityName}
              onClick={changeCityHandler}
            >
              <Link className={classNames('locations__item-link', 'tabs__item', {'tabs__item--active': cityName === activeCityName})} to="#">
                <span>{cityName}</span>
              </Link>
            </li>
          )
        )
      }
    </ul>
  );
}

export const LocationsList = memo(LocationsListComponent);
