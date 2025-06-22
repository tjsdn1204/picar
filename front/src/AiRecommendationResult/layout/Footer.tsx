// src/components/results/RetryButton.tsx
import React from 'react';
import type { RetryButtonProps } from '../types/resultType';
import './Footer.css';

const RetryButton: React.FC<RetryButtonProps> = ({ onRetry }) => {
  return (
    <div className="retry-section">
        <p className="retry-question">원하던 결과가 아니신가요?</p>
        <button 
            className="retry-button"
            onClick={onRetry}
            type="button">
            AI에게 다시 물어보기
        </button>
    </div>
  );
};

export default RetryButton;