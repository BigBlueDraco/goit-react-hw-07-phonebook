import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getContacts, getIsLoading } from 'redux/selectors';
import { Phonebook } from './Phonebook/Phonebook';

export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  dispatch(fetchContacts());
  useEffect(() => {
    dispatch(fetchContacts());
    console.log('i');
  }, [dispatch]);

  // console.log(isLoading);
  return (
    <>
      <Phonebook />
    </>
  );
};
