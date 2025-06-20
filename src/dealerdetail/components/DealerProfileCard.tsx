import React from 'react';
import './style.css';

export default function DealerProfileCard() {
  return (
    <div className="dealer-profile-card">
      <img className="dealer-profile-img" src="/images/profile_moon.png" alt="문종수 부장" />
      <div className="dealer-info">
        <div className="dealer-name">문종수 부장</div>
        <div className="dealer-company">성수자동차상사</div>
        <div className="dealer-score-label">딜러 정기 고사 성적</div>
        <div className="dealer-score">
          <span className="score-main">985</span>
          <span className="score-divider">/990 점</span>
          <span className="score-sub"> (상위 0.1%)</span>
        </div>
      </div>
    </div>
  );
}
