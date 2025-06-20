import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../homepage/layout/Layout';
import HomePage from '../homepage/pages/HomePage';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          {/* 추후 다른 페이지는 여기 추가 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
