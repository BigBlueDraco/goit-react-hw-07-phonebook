import { TextField } from '@mui/material';
import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import s from './RegistrationForm.module.scss';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <p>Registration</p>
      <form onSubmit={handleSubmit} autoComplete="off" className={s['form']}>
        {/* <div className={s['input-group']}> */}
        <TextField
          sx={{ width: '100%' }}
          name="name"
          type="text"
          id="standard-basic"
          label="Username"
          variant="standard"
          required={true}
        />
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
        {/* </div> */}
        <Button className={s['btn']} type="submit">
          Sign up
        </Button>
      </form>
    </>
  );
};
