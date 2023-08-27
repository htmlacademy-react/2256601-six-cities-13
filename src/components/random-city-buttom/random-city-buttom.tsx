import { AppRoute, CitiesMap } from '../../const';
import { useAppDispatch} from '../../hooks';
import { setActiveCity } from '../../store/offers-process/offers-process';
import { getRandomValueFromArray } from '../../utils';
import { Link } from 'react-router-dom';
import { memo } from 'react';

const RandomCityButtonComponent = () => {
  const dispatch = useAppDispatch();
  const randomCity = getRandomValueFromArray(CitiesMap);
  const clickButtonHandler = () => {
    dispatch(setActiveCity(randomCity));
  };
  return (
    <div className="locations__item">
      <Link className="locations__item-link" to={AppRoute.Main} onClick={clickButtonHandler}>
        <span>{randomCity}</span>
      </Link>
    </div>
  );
};

export const RandomCityButton = memo(RandomCityButtonComponent);

