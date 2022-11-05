import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export const AppBarLayout = () => {
  return (
    <>
      <AppBar />

      <Outlet />
    </>
  );
};
