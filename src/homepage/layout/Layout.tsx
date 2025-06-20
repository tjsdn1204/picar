import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import './style.css';

const Layout: React.FC = () => {
  const location = useLocation();

  // 특정 경로에서 Footer 또는 NavBar 숨기기
  const hideFooterRoutes = ['/login'];
  const hideNavBarRoutes = ['/dealerlist']; // dealerlist에서는 NavBar 없음
  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);
  const shouldShowNavBar = !hideNavBarRoutes.includes(location.pathname);

  return (
    <div className="layout-wrapper">
      <div className="layout-inner">
        <NavBar />
        <main className="layout-content">
          <Outlet />
        </main>
        {shouldShowFooter && <Footer />}
      </div>
    </div>
  );
};

export default Layout;