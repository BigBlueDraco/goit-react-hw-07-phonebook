import { Phonebook } from 'components/Phonebook/Phonebook';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

export const PhonebookPage = () => {
  const dispatch = useDispatch();
  dispatch(fetchContacts());
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return <Phonebook />;
};
