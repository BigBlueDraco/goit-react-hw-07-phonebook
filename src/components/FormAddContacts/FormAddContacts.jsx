import { Alert, TextField } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';
import { Button } from 'components/Button/Button';
import { Section } from 'components/Section/Section';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';

export const FormAddContacts = ({ inputFunc }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isExist, setIsExist] = useState(false);
  const dispath = useDispatch();
  const contacts = useSelector(getContacts);

  const onSubmit = e => {
    e.preventDefault();
    if (contacts && contacts.findIndex(elem => elem.name === name) !== -1) {
      setIsExist(true);
      setTimeout(() => {
        setIsExist(false);
      }, 3000);
      return;
    }
    dispath(addContact({ id: nanoid(), name, number }));
  };
  return (
    <>
      {isExist && <Alert severity="error">Contact is exist</Alert>}

      <Section title="Add contact">
        <form action="" onSubmit={onSubmit}>
          <input
            onInput={e => setName(e.target.value)}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <input
            onInput={e => setNumber(e.target.value)}
            name="number"
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <Button type="submit" text="submit"></Button>
        </form>
      </Section>
    </>
  );
};
