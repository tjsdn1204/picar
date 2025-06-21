// src/dealerdetail/layout/DealerLayout.tsx
// src/dealerdetail/layout/DealerLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer'; // 👈 딜러용 Footer

const DealerLayout = () => {
  return (
    <div className="dealer-layout-wrapper">
      <main>
        <Outlet />
      </main>
      <Footer /> {/* 이건 딜러 전용 footer */}
    </div>
  );
};

export default DealerLayout;
