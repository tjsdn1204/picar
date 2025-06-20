import React from "react";
import type { ProgressBarProps } from '../../types/surveyType';
import "./ProgressBar.css"

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    return (
    <div className="survey-progress-bar">
        <div className="survey-progress-bar-background">
        <div 
            className="survey-progress"
            style={{ width: `${progress}%` }}
        ></div>
        </div>
    </div> 
    );
}

export default ProgressBar;