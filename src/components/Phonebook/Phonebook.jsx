import React, { useEffect } from 'react';

import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { FormAddContacts } from 'components/FormAddContacts/FormAddContacts';

export const Phonebook = () => {
  return (
    <div className="container">
      <FormAddContacts />
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </div>
  );
};
