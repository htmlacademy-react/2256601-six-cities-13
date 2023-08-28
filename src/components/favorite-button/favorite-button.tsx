import {useState} from 'react';
import { useAppDispatch} from '../../hooks';
import { AppRoute, FavoriteChangeRequest } from '../../const';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useAuth } from '../../hooks/use-auth';
import { changeFavorite } from '../../store/favorite-offers-process/favorite-offers-thunks';

type FavoriteButtonProps = {
  parentCSSClass: string;
  isFavorite: boolean;
  offerId: string;
  iconWidth: number;
  iconHeight: number;
}

export function FavoriteButton({parentCSSClass, isFavorite, offerId, iconWidth, iconHeight}: FavoriteButtonProps) {
  const [isBookmarked, setBookmarked] = useState(isFavorite);
  const dispatch = useAppDispatch();
  const status = isBookmarked ? FavoriteChangeRequest.Remove : FavoriteChangeRequest.Add;
  const isAuthorized = useAuth();
  const navigate = useNavigate();
  const buttonClass = classNames(isBookmarked && `${parentCSSClass}___bookmark-button--active`, `${parentCSSClass}__bookmark-button button`);
  const svgClass = `${parentCSSClass}__bookmark-icon`;

  const handleClickButton = () => {
    if (isAuthorized) {
      setBookmarked((prevState) => !prevState);
      dispatch(changeFavorite({offerId, status}));
    }
    navigate(AppRoute.Login);
  };

  return (
    <button
      onClick={handleClickButton}
      className={buttonClass}
      type="button"
    >
      <svg
        className={svgClass}
        width={iconWidth}
        height={iconHeight}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{isBookmarked ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}
