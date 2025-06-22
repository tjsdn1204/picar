import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const AiRecommendation: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/survey'); // ✅ Survey로 이동
  };

  return (
    <div className="ai-card">
      <p className="ai-title-small">오직, 당신만을 위한</p>
      <h3 className="ai-title-highlight">
        픽카의 <span className="highlight-skyblue">AI 맞춤 차량 추천!</span>
      </h3>
      <p className="ai-link" onClick={handleClick}>
        AI 추천 과정 보기 &gt;
      </p>
    </div>
  );
};

export default AiRecommendation;
