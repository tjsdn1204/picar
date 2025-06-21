// src/dealerdetail/layout/DealerLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar'; // ✅ NavBar 추가
import Footer from './Footer';
import './style.css';

const DealerLayout = () => {
  return (
    <div className="dealer-layout-wrapper">
      <NavBar title="딜러 상세" /> {/* ✅ NavBar 위에 추가 */}
      <main className="dealer-main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DealerLayout;