import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../homepage/layout/Layout';
import HomePage from '../homepage/pages/HomePage';
import DealerListPage from '../dealerlist/pages/DealerListPage';
import DealerDetailPage from '../dealerdetail/pages/DealerDetailPage';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/dealerlist" element={<DealerListPage />} />
          <Route path="/dealerdetail/:id" element={<DealerDetailPage />} />
          {/* 추후 다른 페이지는 여기 추가 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
