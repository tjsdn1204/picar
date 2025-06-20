import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import './style.css'; // 레이아웃에 필요한 스타일이 있다면 여기에 작성

const Layout: React.FC = () => {
  const location = useLocation();

  // 특정 경로에서는 Footer 생략 가능 (예: 로그인 페이지 등)
  const hideFooterRoutes = ['/login'];
  const shouldShowFooter = !hideFooterRoutes.includes(location.pathname);

  return (
    <div className="layout-wrapper">
      <main className="layout-container">
        <Outlet />
        {shouldShowFooter && <Footer />}
      </main>
    </div>
  );
};

export default Layout;
