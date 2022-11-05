import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from 'page/HomePage/HomePage';
import { PhonebookPage } from 'page/PhonebookPage/PhonebookPage';
import { LoginPage } from 'page/LoginPage/LoginPage';
import { RegisterPage } from 'page/RegisterPage/RegisterPage';
import { Layout } from './Layout/Layout';

import { fetchContacts } from 'redux/operations';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { AppBarLayout } from './Layout/AppBarLayout';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      {isRefreshing ? (
        <b>Refreshing user...</b>
      ) : (
        <Routes>
          <Route path="/" element={<AppBarLayout />}>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="phonebook" element={<PhonebookPage />} />
            </Route>

            <Route
              path="register"
              element={<RestrictedRoute component={<RegisterPage />} />}
            />
            <Route
              path="login"
              element={<RestrictedRoute component={<LoginPage />} />}
            />
          </Route>
        </Routes>
      )}
    </>
  );
};
