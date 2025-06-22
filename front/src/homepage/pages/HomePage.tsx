import React from 'react';
import NavBar from '../layout/NavBar';
import AiRecommendation from '../components/ai/AiRecommendation';
import DealerWrapper from '../components/dealer/DealerWrapper';
import LifeStyleRecommendation from '../components/lifestyle/LifeStyleRecommendation';
import FaqWrapper from '../components/faq/FaqWrapper';
import Footer from '../layout/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="home-container">

      {/* 추천 카드 */}
      <LifeStyleRecommendation />

      {/* 딜러 목록 */}
      <DealerWrapper />

      {/* AI 추천 배너 */}
      <AiRecommendation />

      {/* 자주 묻는 질문 */}
      <FaqWrapper />


    </div>
  );
};

export default HomePage;