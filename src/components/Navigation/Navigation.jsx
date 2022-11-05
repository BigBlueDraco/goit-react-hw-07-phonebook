import { NavLink } from 'react-router-dom';
import s from './navigation.module.scss';

export const Navigation = () => {
  return (
    <nav className={s['navgation']}>
      <NavLink to="/">PhonebookApp</NavLink>
    </nav>
  );
};
