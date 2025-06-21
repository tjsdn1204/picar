import React from 'react';
import './style.css';

const AiRecommendation: React.FC = () => {
  return (
    <div className="ai-card">
      <p className="ai-title-small">오직, 당신만을 위한</p>
      <h3 className="ai-title-highlight">
        픽카의 <span className="highlight-skyblue">AI 맞춤 차량 추천!</span>
      </h3>
      <p className="ai-link">AI 추천 과정 보기 &gt;</p>
    </div>
  );
};

export default AiRecommendation;