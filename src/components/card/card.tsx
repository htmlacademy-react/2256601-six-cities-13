import { OfferListItem } from '../../types/offer-list-item';
import { useState } from 'react';
import { getHeightImageCard, getRatingStarsStyle, getWidthImageCard } from '../../utils';
import classNames from 'classnames';

type CardProps = {
  offer: OfferListItem;
  pageClass: string;
}

export function Card({offer, pageClass}: CardProps) {
  const {id, title, type, price, previewImage, rating, isPremium, isFavorite} = offer;
  const [isHovered, setItsHovered] = useState(false);
  return (
    <article
      onMouseEnter={()=> setItsHovered(!isHovered)}
      onMouseLeave={() => setItsHovered(!isHovered)}
      key={id}
      className={`${pageClass} place-card`}
    >
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`${pageClass} place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={getWidthImageCard(pageClass)}
            height={getHeightImageCard(pageClass)}
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
            className={classNames('place-card__bookmark-button', {'place-card__bookmark-button--active': isFavorite}, 'button')}
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
            <span style={{ width: getRatingStarsStyle(rating) }} />
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

