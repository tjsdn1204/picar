import React from 'react';
import './AiRecommendationLoading.css';
import carImg from "../assets/Car_3D_Icon.svg";
import lineImg from "../assets/Running_Effect.svg";

const AiRecommendationLoading = () => {
  return (
    <div className="ai-loading-container">
      {/* Main Content */}
      <div className="ai-loading-content">
        {/* Top Lines */}
        <div className="ai-loading-lines top1">
          <img src={lineImg} alt="top lines" className="ai-loading-line-image" />
        </div>

        {/* Top Lines2 */}
        <div className="ai-loading-lines top2">
          <img src={lineImg} alt="top lines" className="ai-loading-line-image" />
        </div>

        {/* Top Lines3 */}
        <div className="ai-loading-lines top3">
          <img src={lineImg} alt="top lines" className="ai-loading-line-image" />
        </div>

        {/* Car Image with Animation */}
        <div className="ai-loading-car-container">
          <div className="ai-loading-car-wrapper">
            <img
              src={carImg}
              alt="charging car"
              className="ai-loading-car-image"
            />
          </div>
        </div>

        {/* Bottom Lines */}
        <div className="ai-loading-lines bottom1">
          <img src={lineImg} alt="bottom lines" className="ai-loading-line-image" />
        </div>

        {/* Bottom Lines */}
        <div className="ai-loading-lines bottom2">
          <img src={lineImg} alt="bottom lines" className="ai-loading-line-image" />
        </div>

        {/* Bottom Lines */}
        <div className="ai-loading-lines bottom3">
          <img src={lineImg} alt="bottom lines" className="ai-loading-line-image" />
        </div>

        {/* Text Content */}
        <div className="ai-loading-text">
          <h2 className="ai-loading-title">
            AI가 추천 차종을 생각하는 중...
          </h2>
          <p className="ai-loading-subtitle">
            조금만 기다려주세요 AI가 힘내고 있어요...!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AiRecommendationLoading;