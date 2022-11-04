import { TextField } from '@mui/material';
import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import s from './LoginForm.module.scss';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form);
    // 'BigBlueDragonTest@mail.com''examplepwd12345'
    dispatch(
      logIn({
        email: form.email.value,
        password: form.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={s['form']} onSubmit={handleSubmit} autoComplete="off">
      <div className={s['input__group']}>
        <TextField
          sx={{ width: '100%' }}
          name="email"
          type="email"
          id="standard-basic"
          label="Email"
          variant="standard"
          required={true}
        />
        <TextField
          sx={{ width: '100%' }}
          name="password"
          type="password"
          id="standard-basic"
          label="Password"
          variant="standard"
          required={true}
        />
      </div>

      <Button type="submit" className={s['form__btn']}>
        Log In
      </Button>
    </form>
  );
};
