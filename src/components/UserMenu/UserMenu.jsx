import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import s from './UserMenu.module.scss';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <Button
      className={s['logout']}
      type="button"
      onClick={() => dispatch(logOut())}
    >
      Logout
    </Button>
  );
};
