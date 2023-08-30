import { getRatingStarsStyle } from '../../utils';

type RatingProps = {
  parentClass: string;
  rating: number;
  isLabeled?: boolean;
};

export function Rating ({parentClass, rating, isLabeled}: RatingProps) {
  const wrapperClass = `${parentClass}__rating rating`;
  const starsClass = `${parentClass}__stars rating__stars`;
  const labelClass = `${parentClass}`;

  return (
    <div className={wrapperClass}>
      <div className={starsClass}>
        <span style={{ width: getRatingStarsStyle(rating) }} />
        <span className="visually-hidden">Rating</span>
      </div>
      {isLabeled && (<span className={labelClass}>{rating}</span>)}
    </div>
  );
}
