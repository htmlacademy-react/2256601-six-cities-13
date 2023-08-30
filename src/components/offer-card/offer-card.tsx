import { OfferListItem } from '../../types/offer-list-item';
import { getHeightImageCard, getWidthImageCard, capitalize } from '../../utils';
import { Link } from 'react-router-dom';
import { AppRoute} from '../../const';
import { memo} from 'react';
import { useAppDispatch} from '../../hooks';
import { setOfferHighlighted } from '../../store/offer-card-process/offer-card-process';
import { Price } from '../price/price';
import { FavoriteButton } from '../favorite-button/favorite-button';
import { Rating } from '../rating/rating';

type OfferCardProps = {
  offer: OfferListItem;
  parentClass: string;
}

function OfferCardComponent({offer, parentClass}: OfferCardProps) {
  const {id, title, type, price, previewImage, rating, isPremium, isFavorite} = offer;
  const dispatch = useAppDispatch();
  const handleMouseEnter = (offerId: string) => {
    dispatch(setOfferHighlighted(offerId));
  };
  const handleMouseLeave = () => {
    dispatch(setOfferHighlighted(null));
  };

  return (
    <article
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={handleMouseLeave}
      id={id}
      className={`${parentClass} place-card`}
    >
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`${parentClass} place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={getWidthImageCard(parentClass)}
            height={getHeightImageCard(parentClass)}
            alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <Price
            price={price}
            parentClass={parentClass}
            divider=' /'
          />
          <FavoriteButton
            parentClass={parentClass}
            isFavorite={isFavorite}
            offerId={id}
            iconHeight={19}
            iconWidth={18}
          />
        </div>
        <Rating
          parentClass={parentClass}
          rating={rating}
        />
        <h2 className="place-card__name">
          <Link to ={`${AppRoute.Offer}/${id}`}>
            {capitalize(title)}
          </Link>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>
  );
}

export const OfferCard = memo(OfferCardComponent);
