import React from 'react';
import './style.css';

interface DealerProfileCardProps {
  name: string;
  position: string;
  company: string;
  profileImage: string;
}

export default function DealerProfileCard({
  name,
  position,
  company,
  profileImage,
}: DealerProfileCardProps) {
  return (
    <div className="dealer-profile-card">
      <img className="dealer-profile-img" src={profileImage} alt={name} />
      <div className="dealer-info">
        <div className="dealer-name-line">
          <span className="dealer-name">{name}</span>
          <span className="dealer-position">{position}</span>
        </div>
        <div className="dealer-companys">{company}</div>
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
