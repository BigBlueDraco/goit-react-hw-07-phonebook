import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import s from './navigation.module.scss';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={s['navgation']}>
      <NavLink to="/">PhonebookApp</NavLink>
      {/* {isLoggedIn && <NavLink to="/phonebook">Phonebook</NavLink>} */}
    </nav>
  );
};
