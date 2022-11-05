import { Alert, TextField } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';
import { Button } from 'components/Button/Button';
import { Section } from 'components/Section/Section';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts, getError } from 'redux/selectors';

import s from './FormAddContacts.module.scss';

export const FormAddContacts = ({ inputFunc }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isExist, setIsExist] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isError, setIsError] = useState(false);
  const dispath = useDispatch();
  const contacts = useSelector(getContacts);

  const alert = func => {
    func(true);
    setTimeout(() => {
      func(false);
    }, 3000);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (contacts && contacts.findIndex(elem => elem.name === name) !== -1) {
      alert(setIsExist);
      return;
    }
    dispath(addContact({ id: nanoid(), name, number }));
    alert(setIsAdded);
  };
  return (
    <>
      {isAdded && (
        <Alert className="alert" severity="success">
          Contact was added
        </Alert>
      )}
      {isExist && (
        <Alert className="alert" severity="error">
          Contact is exist
        </Alert>
      )}

      <Section title="Add contact">
        <form action="" onSubmit={onSubmit} className={s['form']}>
          <div className={s['form__group']}>
            <TextField
              sx={{ width: '100%' }}
              onInput={e => setName(e.target.value)}
              id="standard-basic"
              label="Name"
              variant="standard"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required={true}
            />

            <TextField
              sx={{ width: '100%' }}
              onInput={e => setNumber(e.target.value)}
              id="standard-basic"
              label="Number"
              variant="standard"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required={true}
            />
          </div>

          <Button className={s['form__btn']} type="submit" text="submit">
            Add contact
          </Button>
        </form>
      </Section>
    </>
  );
};
