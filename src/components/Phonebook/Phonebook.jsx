import React from 'react';

import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { FormAddContacts } from 'components/FormAddContacts/FormAddContacts';

export const Phonebook = () => {
  return (
    <>
      <FormAddContacts />
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
};
