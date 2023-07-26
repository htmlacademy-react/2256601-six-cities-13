import { CITIES } from '../../const';
import classNames from 'classnames';

export function CitiesList () {
  return (
    <ul className="locations__list tabs__list">
      {
        CITIES.map((citi) =>
          (
            <li className="locations__item" key={citi}>
              <a className={classNames('locations__item-link', 'tabs__item', {'tabs__item--active': true})} href="#">
                <span>{citi}</span>
              </a>
            </li>
          )
        )
      }
    </ul>
  );
}
