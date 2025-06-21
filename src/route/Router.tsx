import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeLayout from '../homepage/layout/Layout'; // ✔ 홈 레이아웃
import DealerLayout from '../dealerdetail/layout/Layout'; // ✔ 딜러 상세 레이아웃

import HomePage from '../homepage/pages/HomePage';
import DealerListPage from '../dealerlist/pages/DealerListPage';
import DealerDetailPage from '../dealerdetail/pages/DealerDetailPage';

import SurveyController from "../Survey/container/SurveyController.tsx";
import Recommendation from "../AiRecommendationResult/pages/AiRecommendationResult.tsx";
import Loading from "../AiRecommendationLoading/pages/AiRecommendationLoading.tsx"
import CarDetail from "../CarDetail/pages/CarDetail.tsx";
import SurveyComplete from "../SurveyComplete/pages/SurveyComplete.tsx";

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

        <Route path="/" element={<CarDetail />}/>
        <Route path="/survey" element={<SurveyController />}/>
        <Route path="/recommendation" element={<Recommendation />}/>
        <Route path="/detail/:id" element={<CarDetail />}/>
        <Route path="/loading" element={<Loading />}/>
        <Route path="/complete" element={<SurveyComplete />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;