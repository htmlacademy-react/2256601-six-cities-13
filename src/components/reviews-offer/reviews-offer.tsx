import { Review } from '../../types/review';
import { humanizeDate } from '../../utils';
import { getRatingStarsStyle } from '../../utils';

type ReviewsOfferProps = {
  reviews: Review[];
}

export function ReviewsOffer ({reviews}: ReviewsOfferProps) {
  return (
    <ul className="reviews__list">
      {
        reviews.map (({rating, id, user, comment, date}) =>
          (
            <li className="reviews__item" key={id}>
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img
                    className="reviews__avatar user__avatar"
                    src={user.avatarUrl}
                    width={54}
                    height={54}
                    alt={user.name}
                  />
                </div>
                <span className="reviews__user-name">{user.name}</span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={{ width: getRatingStarsStyle(rating) }} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">
                  {comment}
                </p>
                <time className="reviews__time" dateTime={date}>
                  {humanizeDate(date)}
                </time>
              </div>
            </li>
          )
        )
      }
    </ul>
  );
}
