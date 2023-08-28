import { CITIES_NAMES, CitiesNameValue } from '../../const';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {MouseEvent} from 'react';
import { getActiveCity } from '../../store/offers-process/offers-selectors';
import { setActiveCity } from '../../store/offers-process/offers-process';

export function LocationsList () {
  const activeCityName = useAppSelector(getActiveCity);
  const dispatch = useAppDispatch();

  const handleChangeCity = (city: CitiesNameValue) => (evt: MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    dispatch(setActiveCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {
        CITIES_NAMES.map((city) =>
          (
            <li
              className="locations__item"
              key={city}
              onClick={handleChangeCity(city)}
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

