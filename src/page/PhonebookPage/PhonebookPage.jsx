import { Card } from 'components/Card/Card';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { FormAddContacts } from 'components/FormAddContacts/FormAddContacts';
import { Section } from 'components/Section/Section';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import s from './PhonebookPage.module.scss';

export const PhonebookPage = () => {
  const dispatch = useDispatch();
  dispatch(fetchContacts());
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div className="container">
        <Card className={s['phonebook-page__card']}></Card>

        <div className={s['phonebook-page__wraper']}>
          <Card className={s['phonebook-page__add-contacts']}>
            <FormAddContacts />
          </Card>
          <Card className={s['phonebook-page__list-card']}>
            <Section title="Contacts">
              <Filter />
              <ContactsList />
            </Section>
          </Card>
        </div>
      </div>
    </>
  );
};
