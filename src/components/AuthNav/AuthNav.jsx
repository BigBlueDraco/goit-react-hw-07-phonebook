import { StyledNavLink } from 'components/StyledNavLinks/StyledNavLink.jsx';
import s from './auth.module.scss';

export const AuthNav = () => {
  // const navClasses = classNames(s['btn'],{s[]});
  return (
    <div className={s['nav--wraper']}>
      <StyledNavLink to={'/register'}>Register</StyledNavLink>
      <StyledNavLink to={'/login'}>Log In</StyledNavLink>
    </div>
  );
};
