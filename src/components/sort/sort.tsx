import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOffers, setSortType } from '../../store/actions';
import { useState, MouseEvent } from 'react';
import { sorting } from '../../utils';
import { SortingMap } from '../../const';
import classNames from 'classnames';
import { Sorting } from '../../types/sorting';

export function Sort () {
  const [isOpened, setIsOpened] = useState(false);
  const activeSortType = useAppSelector((state) => state.sortType);
  const offersList = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();

  const clickHandler = (item: Sorting) => {
    dispatch(setSortType(item));
    dispatch(fetchOffers(sorting[item](offersList)));
  };

  const spanClickHandler = (evt: MouseEvent<HTMLFormElement>) => {
    evt.stopPropagation();
    setIsOpened((prevIsOpened) => !prevIsOpened);
  };

  const keydownHandler = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape' && isOpened) {
      evt.preventDefault();
      setIsOpened(false);
    }
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={spanClickHandler}>
        {SortingMap[activeSortType]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames('places__options', 'places__options--custom', {'places__options--opened': isOpened})}>
        {
          (Object.entries(SortingMap) as [Sorting, (typeof SortingMap)[Sorting]][]).map(([type, label]) => (
            <li className={classNames('places__option', {'places__option--active' : type === activeSortType})}
              key={type}
              tabIndex={0}
              onClick={() => clickHandler(type)}
              onKeyDown={() => keydownHandler}
            >
              {label}
            </li>
          ))
        }
      </ul>
    </form>
  );
}
