import { CITIES } from '../../const';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export function LocationsList () {
  return (
    <ul className="locations__list tabs__list">
      {
        CITIES.map((city) =>
          (
            <li className="locations__item" key={city}>
              <Link className={classNames('locations__item-link', 'tabs__item', {'tabs__item--active': city === CITIES[0]})} to="#">
                <span>{city}</span>
              </Link>
            </li>
          )
        )
      }
    </ul>
  );
}
