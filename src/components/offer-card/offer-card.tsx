import { Link } from 'react-router-dom';
import type { ServerOffer } from '../../types/offer';
import { AppRoute, OFFER_TYPES } from '../../const';
import { HTMLAttributes, memo} from 'react';
import { BookmarkButtonMemo } from '../bookmark-button/bookmark-button';
import classNames from 'classnames';

type OfferCardProps = Pick<
  ServerOffer,
  | 'id'
  | 'title'
  | 'type'
  | 'price'
  | 'isFavorite'
  | 'isPremium'
  | 'rating'
  | 'previewImage'
> &
  Pick<HTMLAttributes<HTMLElement>, 'onMouseEnter' | 'onMouseLeave'> & {
    block: string;
  };

function OfferCard({
  block,
  previewImage,
  price,
  rating,
  title,
  type,
  id,
  isPremium = false,
  isFavorite = false,
  onMouseEnter,
  onMouseLeave,
}: OfferCardProps): JSX.Element {
  let isFavoriteCard = false;
  if (block === 'favorites') {
    isFavoriteCard = true;
  }

  return (
    <article
      className={`place-card ${block}__card`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-testid="offerCard"
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`place-card__image-wrapper ${block}__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={isFavoriteCard ? '150' : '260'}
            height={isFavoriteCard ? '110' : '200'}
            alt="Place image"
          />
        </Link>
      </div>
      <div
        className={classNames('place-card__info', {
          'favorites__card-info': isFavoriteCard,
        })}
        data-testid="card-info"
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <BookmarkButtonMemo
            id={id}
            isFavorite={isFavorite}
            block={'place-card'}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(rating) * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">
          {OFFER_TYPES[type as keyof typeof OFFER_TYPES]}
        </p>
      </div>
    </article>
  );
}

export const OfferCardMemo = memo(OfferCard);
