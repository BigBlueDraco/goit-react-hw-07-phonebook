import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Button } from 'components/Button/Button';
import s from './UserMenu.module.scss';
import { NavLink } from 'react-router-dom';

export const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <div className={s['logout']}>
      <Button
        className={s['logout__btn']}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        <NavLink to="/">Log Out</NavLink>
      </Button>
    </div>
  );
};
