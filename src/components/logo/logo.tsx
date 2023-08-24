import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type LogoProps = {
  isFooter?: boolean;
}

export function Logo ({isFooter}: LogoProps) {
  return (
    <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
      <img className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width={isFooter ? 64 : 81 }
        height={isFooter ? 33 : 41}
      />
    </Link>
  );
}
