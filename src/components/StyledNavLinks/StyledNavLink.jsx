import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './styledNavLink.module.scss';
export const StyledNavLink = ({ to, children }) => {
  return (
    <NavLink to={to} className={s['btn']}>
      {children}
    </NavLink>
  );
};

StyledNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};
