import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import styles from './not-found-page.module.css';

export function NotFoundPage() {
  return (
    <div className={`page ${styles.NotFoundPage}`}>
      <Helmet>
        <title>{'6 cities - Not Found'}</title>
      </Helmet>
      <h1 className={styles.title}>404 Nof Found</h1>
      <p className={styles.text}>
        Return to the {' '}
        <Link to={AppRoute.Main} className={styles.link}>
          main page
        </Link>
      </p>
    </div>
  );
}
