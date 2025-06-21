import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeLayout from '../homepage/layout/Layout'; // ✔ 홈 레이아웃
import DealerLayout from '../dealerdetail/layout/Layout'; // ✔ 딜러 상세 레이아웃

import HomePage from '../homepage/pages/HomePage';
import DealerListPage from '../dealerlist/pages/DealerListPage';
import DealerDetailPage from '../dealerdetail/pages/DealerDetailPage';

import SurveyController from "../Survey/container/SurveyController";
import Recommendation from "../AiRecommendationResult/pages/AiRecommendationResult";
import Loading from "../AiRecommendationLoading/pages/AiRecommendationLoading"
import CarDetail from "../CarDetail/pages/CarDetail";
import SurveyComplete from "../SurveyComplete/pages/SurveyComplete";

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

        {/* AI 추천을 위한 설문조사 화면 */}
        <Route path="/survey" element={<SurveyController />}/>

        {/* AI 추천 결과 화면 */}
        <Route path="/recommendation" element={<Recommendation />}/>

        {/* 차량 상세 정보 화면 */}
        <Route path="/detail" element={<CarDetail />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
