import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const LifeStyleRecommendation: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/survey'); // ✅ 클릭 시 /survey 페이지로 이동
  };

  return (
    <div className="lifestyle-input-guide">
      <div className="lifestyle-input-text" onClick={handleClick}>
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
        src="/images/image_6.png"
        alt="추천 차량"
        className="lifestyle-car-image"
      />
    </div>
  );
};

export default LifeStyleRecommendation;
