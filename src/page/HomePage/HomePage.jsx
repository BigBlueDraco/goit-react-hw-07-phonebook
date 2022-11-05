import { Card } from 'components/Card/Card';
import s from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className="container">
      <Card className={s['home-page__card']}>
        <h2 className={s['home-page__title']}>Phonebook welcome page</h2>
      </Card>
    </div>
  );
};
