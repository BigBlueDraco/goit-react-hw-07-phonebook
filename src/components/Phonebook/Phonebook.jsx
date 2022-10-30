import React from 'react';

import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { FormAddContacts } from 'components/FormAddContacts/FormAddContacts';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const Phonebook = () => {
  const contacts = useSelector(getContacts);
  return (
    <>
      {console.log(contacts)}
      <FormAddContacts />
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
};
