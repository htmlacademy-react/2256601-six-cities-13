import { useAppDispatch } from '../../hooks';
import { fetchOffers } from '../../store/api-actions';

export function ErrorScreen () {
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    dispatch(fetchOffers());
  };

  return (
    <>
      <p>Server is not available</p>
      <button
        onClick={clickHandler}
        type="button"
      >
        Try again later
      </button>
    </>
  );
}
