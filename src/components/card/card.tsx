import { OffersList } from '../../types/offers-list';
import { AdClass } from '../../const';
import { useState } from 'react';

type CardProps = {
  offer: OffersList;
  isMainPage?: boolean;
}

export function Card({offer, isMainPage}: CardProps) {
  const {id, title, type, price, previewImage, rating, isPremium, isFavorite} = offer;
  const [isHovered, setItsHovered] = useState(false);
  return (
    <article
      onMouseEnter={()=> setItsHovered(!isHovered)}
      onMouseLeave={() => setItsHovered(!isHovered)}
      key={id}
      className={isMainPage ? AdClass.CitiesCardClass : AdClass.FavotitesCardClass}
    >
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={isMainPage ? AdClass.CitiesImageWrapperClass : AdClass.FavoritesImageWrapperClass}>
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={isMainPage ? 260 : 150}
            height={isMainPage ? 200 : 110}
            alt={type}
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(rating) / 5 * 100}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href ="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

