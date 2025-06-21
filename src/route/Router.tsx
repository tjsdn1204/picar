import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeLayout from '../homepage/layout/Layout'; // ✔ 홈 레이아웃
import DealerLayout from '../dealerdetail/layout/Layout'; // ✔ 딜러 상세 레이아웃

import HomePage from '../homepage/pages/HomePage';
import DealerListPage from '../dealerlist/pages/DealerListPage';
import DealerDetailPage from '../dealerdetail/pages/DealerDetailPage';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 홈 전용 레이아웃 */}
        <Route element={<HomeLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* 딜러 리스트: 레이아웃 없이 단독 */}
        <Route path="/dealerlist" element={<DealerListPage />} />

        {/* 딜러 상세 전용 레이아웃 */}
        <Route element={<DealerLayout />}>
          <Route path="/dealerdetail/:id" element={<DealerDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
