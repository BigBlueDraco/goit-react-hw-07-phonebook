import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { Phonebook } from './Phonebook/Phonebook';

export const App = () => {
  const dispatch = useDispatch();
  dispatch(fetchContacts());
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Phonebook />
    </>
  );
};
