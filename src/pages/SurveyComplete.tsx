// components/SurveyComplete.tsx
import React from 'react';
import './SurveyComplete.css';
import { ChevronLeft } from 'lucide-react';

const SurveyComplete = () => {
  return (
    <div className="survey-complete-container">
        {/* Header */}
        <div className="survey-complete-header">
            <div className="survey-complete-arrow-left">
                <ChevronLeft/>
            </div>
            <div className="survey-complete-title">개인 기본 정보</div>
            <div className="survey-complete-header-temp"></div>
        </div> 
        <div className="survey-complete-progress-bar">
            <div className="survey-complete-progress-bar-background">
                <div className="survey-complete-progress"></div>
            </div>
        </div>

        {/* Main Content */}
        <div className="survey-complete-content">
            <h1 className="survey-complete-content-title">조사완료!</h1>
            <p className="survey-complete-content-subtitle">고생하셨어요!</p>
        </div>
    </div>
  );
};

export default SurveyComplete;