import { Card } from 'components/Card/Card';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import s from './RegisterPage.module.scss';
export const RegisterPage = () => {
  return (
    <Card className={s['reg-page__card']}>
      <RegistrationForm />{' '}
    </Card>
  );
};
