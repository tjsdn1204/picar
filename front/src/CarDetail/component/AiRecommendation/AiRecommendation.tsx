import React, { useState } from 'react';
import './AiRecommendation.css';
import { type AiRecommendationProps } from '../../types/carType';
import {ReactComponent as AiIcon} from '../../../assets/AI_icon.svg';

const AiRecommendation: React.FC<AiRecommendationProps> = ({ recommendation }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="ai-recommendation">
      <div className="ai-header">
        <div className="ai-icon"><AiIcon/></div>
        <h3 className="ai-title">{recommendation.title}</h3>
      </div>
      
        <div className={`ai-reasons ${isExpanded ? 'expanded' : 'collapsed'}`} onClick={toggleExpand}>
            {recommendation.reasons.map((reason, index) => (
                <div key={index} className="ai-reason-item">
                    <div className="reason-number">{index + 1}.</div>
                    <div className="reason-content">
                        <h4 className="reason-title">{reason.title}</h4>
                        <ul className="reason-descriptions">
                            {reason.descriptions.map((description, descIndex) => (
                            <li key={descIndex} className="reason-description">
                                {description}
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        
            <div className="ai-expand-indicator">
                <span className="expand-dots">
                    {isExpanded ? '접기' : '...'}
                </span>
            </div>
        </div>
    </div>
  );
};

export default AiRecommendation;