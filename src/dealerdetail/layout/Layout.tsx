// src/dealerdetail/layout/DealerLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import './style.css'; // 반드시 포함

const DealerLayout = () => {
  return (
    <div className="dealer-layout-wrapper">
      <NavBar title="딜러 상세" />

      <main className="dealer-layout-main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default DealerLayout;
