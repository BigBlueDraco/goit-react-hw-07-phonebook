import { HomePage } from 'page/HomePage';
import { LoginPage } from 'page/LoginPage';
import { RegisterPage } from 'page/RegisterPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchContacts } from 'redux/operations';
import { Layout } from './Layout/Layout';
import { Phonebook } from './Phonebook/Phonebook';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch();
  dispatch(fetchContacts());
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route
            path="register"
            element={<RestrictedRoute component={<RegisterPage />} />}
          />
          <Route
            path="login"
            element={<RestrictedRoute component={<LoginPage />} />}
          />
          {/* <Route path="login" element={} /> */}
        </Route>
      </Routes>
      <Phonebook />
    </>
  );
};
