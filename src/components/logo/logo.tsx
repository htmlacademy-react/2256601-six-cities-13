import { NavLink} from 'react-router-dom';
import { AppRoute } from '../../const';

type LogoProps = {
  isFooter?: boolean;
}

export function Logo ({isFooter}: LogoProps) {

  return (
    <NavLink
      className={isFooter ? 'footer__logo-link' : 'header__logo-link'}
      to={AppRoute.Main}
    >
      <img
        className={isFooter ? 'footer__logo' : 'header__logo'}
        src="img/logo.svg"
        alt="6 cities logo"
        width={isFooter ? 64 : 81 }
        height={isFooter ? 33 : 41}
      />
    </NavLink>
  );
}
