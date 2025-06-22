import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';

interface DealerProfileCardProps {
  name: string;
  position: string;
  company: string;
  profileImage: string;
  score?: number;
}

export default function DealerProfileCard({
  name,
  position,
  company,
  profileImage,
  score = 985
}: DealerProfileCardProps) {

  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    const countingAnimation = () => {
      const duration = 1500;
      const startTime = Date.now(); 
      
      const animate = () => {
        const elapsed = Date.now() - startTime; // 경과 시간
        const progress = Math.min(elapsed / duration, 1); // 브라우저 실행 성능에 따라 1을 넘을 수도 있어서 가드 컨디션
        
        const easeProgress = 1 - Math.pow(1-progress, 3); // easeOutCubic
        const newValue = Math.floor(easeProgress * score);

        setCurrentScore(newValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCurrentScore(score);
        }
      };

      requestAnimationFrame(animate);
    };

    const timer = setTimeout(countingAnimation, 300);

    return () => clearTimeout(timer);
  }, [score]);

  const formatingTop = (score: number): string => {
    return (100 - (score/990 * 100)).toFixed(1);
  }

  return (
    <div className="dealer-profile-card">
      <img className="dealer-profile-img" src={profileImage} alt={name} />
      <div className="dealer-info">
        <div className="dealer-basic-info">
          <span className="dealer-name-position">{name} {position}</span>
          <span className="dealer-companys">{company}</span>
        </div>
        <div className="dealer-score-label">딜러 정기 고사 성적</div>
        <div className="dealer-score">
          <span className="score-main">{currentScore.toLocaleString()}</span>
          <span className="score-divider">/990점</span>
          <span className="score-sub"> (상위 {formatingTop(score)}%)</span>
        </div>
      </div>
    </div>
  );
}