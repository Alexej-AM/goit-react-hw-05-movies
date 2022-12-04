import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavBar } from 'components/navBar/NavBar';

export const Layout = () => {

  return (
    <div>
      <NavBar />
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

