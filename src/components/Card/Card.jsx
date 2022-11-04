import classNames from 'classnames';
import s from './Card.module.scss';

export const Card = ({ children, className }) => {
  const classes = classNames(s['card'], className);
  return <div className={classes}>{children}</div>;
};
