import { AuthNav } from 'components/AuthNav/AuthNav';
import { StyledNavLink } from 'components/StyledNavLinks/StyledNavLink';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import s from './appbar.module.scss';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={s['appbar']}>
      {/* <Navigation /> */}
      <h1 className={s['logo']}>Phonebook APP</h1>
      {isLoggedIn && (
        <>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/phonebook">Phonebook</StyledNavLink>
        </>
      )}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
