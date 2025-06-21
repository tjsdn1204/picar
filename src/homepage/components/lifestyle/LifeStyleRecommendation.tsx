import React from 'react';
import './style.css';

const LifeStyleRecommendation: React.FC = () => {
  return (
    <div className="lifestyle-input-guide">
      <div className="lifestyle-input-text">
        <p>지금 나에게 어울리는 차는?</p>
        <h3 className="highlight-wrapper">
          내 라이프 스타일 입력하고
          <span className="highlight-lime"> AI 추천</span>
          <span className="highlight-skyblue"> 받기</span>
          <img
            src="/icons/arrow_right.svg"
            alt="화살표 아이콘"
            className="arrow-icon"
          />
        </h3>
      </div>
      <img
        src="/images/car_sorento.png"
        alt="추천 차량"
        className="lifestyle-car-image"
      />
    </div>
  );
};

export default LifeStyleRecommendation;
