import { useState, KeyboardEvent, memo, MouseEvent } from 'react';
import { SortingMap } from '../../const';
import classNames from 'classnames';
import { Sorting } from '../../types/sorting';
import { getSortingMap } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getActiveSortType } from '../../store/offers-process/offers-selectors';
import { setActiveSortType } from '../../store/offers-process/offers-process';

function SortComponent () {
  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useAppDispatch();
  const activeSortType = useAppSelector(getActiveSortType);
  const clickSortItemHandler = (type: Sorting) => (evt: MouseEvent<HTMLLIElement>) => {
    evt.preventDefault();
    dispatch(setActiveSortType(type));
    setIsOpened(false);
  };

  const clickTypeHandler = () => {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  };

  const keydownHandler = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape' && isOpened) {
      evt.preventDefault();
      setIsOpened(false);
    }
  };

  return (
    <form className="places__sorting" action="#" method="get" onKeyDown={keydownHandler}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={clickTypeHandler}>
        {SortingMap[activeSortType]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames('places__options', 'places__options--custom', {'places__options--opened': isOpened})}>
        {
          getSortingMap().map(([type, label]) => (
            <li className={classNames('places__option', {'places__option--active' : type === activeSortType})}
              key={type}
              tabIndex={0}
              onClick={() => clickSortItemHandler(type)}
            >
              {label}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export const Sort = memo(SortComponent);
