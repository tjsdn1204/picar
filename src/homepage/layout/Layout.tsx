// src/homepage/layout/Layout.tsx
import React, { useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import './style.css';

const Layout: React.FC = () => {
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null); // ✅ NavBar 참조용 ref

  const hideNavBarRoutes = ['/dealerlist'];
  const shouldShowNavBar = !hideNavBarRoutes.includes(location.pathname);

  const shouldShowFooter = !location.pathname.startsWith('/dealer/');

  return (
    <div className="layout-wrapper">
      <div className="layout-inner">
        {shouldShowNavBar && <NavBar ref={navRef} />}
        <main className="layout-content">
          <Outlet />
        </main>
        {shouldShowFooter && <Footer navRef={navRef} />}
      </div>
    </div>
  );
};

export default Layout;
