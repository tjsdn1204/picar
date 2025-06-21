// src/homepage/layout/Layout.tsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import './style.css';

const Layout: React.FC = () => {
  const location = useLocation();

  // 특정 페이지에서는 NavBar 숨기기
  const hideNavBarRoutes = ['/dealerlist']; // ✅ 이걸 꼭 포함해야 함!
  const shouldShowNavBar = !hideNavBarRoutes.includes(location.pathname);

  const shouldShowFooter = !location.pathname.startsWith('/dealer/');

  return (
    <div className="layout-wrapper">
      <div className="layout-inner">
        {shouldShowNavBar && <NavBar />} {/* 👈 homepage NavBar 조건부로 보여줌 */}
        <main className="layout-content">
          <Outlet />
        </main>
        {shouldShowFooter && <Footer />}
      </div>
    </div>
  );
};

export default Layout;