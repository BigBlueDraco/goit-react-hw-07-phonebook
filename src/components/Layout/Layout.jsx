import { AppBar } from 'components/AppBar/AppBar';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <AppBar />

      <div className="content">
        <Header />
        <Outlet />
      </div>
    </>
  );
};
