import { AppRoute, CITIES_NAMES} from '../../const';
import { useAppDispatch} from '../../hooks';
import { setActiveCity } from '../../store/offers-process/offers-process';
import { getRandomArrayElement } from '../../utils';
import { Link } from 'react-router-dom';
import { memo} from 'react';

const RandomCityButtonComponent = () => {
  const dispatch = useAppDispatch();
  const randomCity = getRandomArrayElement(CITIES_NAMES);

  const handleClickCity = () => {
    dispatch(setActiveCity(randomCity));
  };
  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <Link className="locations__item-link" to={AppRoute.Main} onClick={handleClickCity}>
          <span>{randomCity}</span>
        </Link>
      </div>
    </section>
  );
};

export const RandomCityButton = memo(RandomCityButtonComponent);

