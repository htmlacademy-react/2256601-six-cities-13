import { useState, KeyboardEvent, memo } from 'react';
import { SortingMap } from '../../const';
import classNames from 'classnames';
import { Sorting } from '../../types/sorting';

type SortProps = {
  activeSortType: Sorting;
  onChange: (newSortType: Sorting) => void;
};

function SortComponent ({activeSortType, onChange}: SortProps) {
  const [isOpened, setIsOpened] = useState(false);
  const clickSortItemHandler = (type: Sorting) => {
    onChange(type);
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
          (Object.entries(SortingMap) as [Sorting, (typeof SortingMap)[Sorting]][]).map(([type, label]) => (
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
