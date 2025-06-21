// src/dealerdetail/layout/DealerLayout.tsx
// DealerLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import './style.css';

const DealerLayout = () => {
  return (
    <div className="dealer-layout-wrapper">
      <main className="dealer-main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DealerLayout;
