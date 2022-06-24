import { NavLink } from 'react-router-dom';

import s from 'components/Pages/Pages.module.css';

export const Navigation = () => {
  return (
    <header>
      <nav className={s.navigation}>
        <NavLink to="/" className={s.item}>
          Home
        </NavLink>
        <NavLink to="/movies" className={s.item}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
