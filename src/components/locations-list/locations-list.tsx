import { CitiesMap } from '../../const';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {MouseEvent, memo} from 'react';
import { getActiveCity } from '../../store/offers-process/offers-selectors';
import { setActiveCity } from '../../store/offers-process/offers-process';

function LocationsListComponent () {
  const activeCityName = useAppSelector(getActiveCity);
  const dispatch = useAppDispatch();

  const changeCityHandler = (city: string) => (evt: MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    dispatch(setActiveCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {
        CitiesMap.map((city) =>
          (
            <li
              className="locations__item"
              key={city}
              onClick={changeCityHandler(city)}
            >
              <Link className={classNames('locations__item-link', 'tabs__item', {'tabs__item--active': city === activeCityName})} to="#">
                <span>{city}</span>
              </Link>
            </li>
          )
        )
      }
    </ul>
  );
}

export const LocationsList = memo(LocationsListComponent);
