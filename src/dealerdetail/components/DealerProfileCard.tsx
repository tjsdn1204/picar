import React from 'react';
import './style.css';

interface DealerProfileCardProps {
  name: string;
  company: string;
  score: number;
  totalScore: number;
  rankPercent: string;
  profileImage: string;
}

export default function DealerProfileCard({
  name,
  company,
  score,
  totalScore,
  rankPercent,
  profileImage,
}: DealerProfileCardProps) {
  return (
    <div className="dealer-profile-card">
      <img className="dealer-profile-img" src={profileImage} alt={name} />
      <div className="dealer-info">
        <div className="dealer-name">{name}</div>
        <div className="dealer-company">{company}</div>
        <div className="dealer-score-label">딜러 정기 고사 성적</div>
        <div className="dealer-score">
          <span className="score-main">{score}</span>
          <span className="score-divider">/{totalScore} 점</span>
          <span className="score-sub"> ({rankPercent})</span>
        </div>
      </div>
    </div>
  );
}