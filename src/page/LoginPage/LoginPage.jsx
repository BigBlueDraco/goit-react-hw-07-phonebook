import classNames from 'classnames';
import { Card } from 'components/Card/Card';
import { LoginForm } from 'components/LogInForm/LoginForm';
import s from './LoginPage.module.scss';

export const LoginPage = () => {
  const containerClasses = classNames('container', s['login-page__wraper']);
  return (
    <div className={containerClasses}>
      <Card className={s['login-page__card']}>
        <p>Autorization</p>
        <LoginForm />
      </Card>
    </div>
  );
};
