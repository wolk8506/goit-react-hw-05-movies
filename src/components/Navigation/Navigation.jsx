import { NavLink } from 'react-router-dom';

import s from 'components/Navigation/Navigation.module.css';

export const Navigation = () => {
  return (
    <header>
      <nav className={s.navigation}>
        <NavLink to="./" className={s.item} activeClassName={s.activeItem}>
          Home
        </NavLink>
        <NavLink
          to="./movies"
          className={s.item}
          activeClassName={s.activeItem}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
