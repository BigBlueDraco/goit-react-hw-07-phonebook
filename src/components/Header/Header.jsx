import { Avatar } from '@mui/material';
import { Card } from 'components/Card/Card';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import s from './Header.module.scss';

export const Header = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className="container">
      <Card className={s['phonebook-page__card']}>
        <p>Hello {user.name ? user.name : 'Anonimus'}</p>
        {isLoggedIn ? (
          <div className={s['user-info']}>
            <Avatar>{`${user.name[0]}`}</Avatar>
            <p>{user.email}</p>
          </div>
        ) : (
          <div className={s['user-info']}>
            <NavLink to="/login" className={s['btn']}>
              Login
            </NavLink>
            <NavLink to="/register" className={s['btn']}>
              Sing up
            </NavLink>
          </div>
        )}
      </Card>
    </div>
  );
};
