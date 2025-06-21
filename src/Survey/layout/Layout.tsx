import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "./Header.tsx"
import ProgressBar from '../components/ProgressBar/ProgressBar.tsx';
import { questionsData } from "../../global/data/QuestionData.ts";
import type { SurveyProps } from '../types/surveyType';
import type { QuestionAnswers } from '../types/surveyType';
import "./style.css";



const Layout: React.FC<SurveyProps> = ({ onComplete }) => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [answers, setAnswers] = useState<QuestionAnswers>({});
    const navigate = useNavigate();

    const currentQuestion = questionsData[currentStep];
    const progress: number = ((currentStep + 1) / questionsData.length) * 100;


    const handleAnswer = (optionId : string): void => {
        if (currentQuestion.multiple) {
            const currentAnswers = answers[currentQuestion.id] as string[] || [];
            const updateAnswers = currentAnswers.includes(optionId) ? currentAnswers.filter(id => id !== optionId) : [...currentAnswers, optionId];
        
            setAnswers(prev => ({
                ...prev, [currentQuestion.id]: updateAnswers
            }));
        } else {
            setAnswers(prev => ({
                ...prev, [currentQuestion.id]: optionId
            }));
        }
    }

    const isSelected = (optionId: string): boolean => {
        if (currentQuestion.multiple) {
            const currentAnswers = answers[currentQuestion.id] as string[] | undefined;
            return (currentAnswers || []).includes(optionId);
        }
        return answers[currentQuestion.id] === optionId;
    }


    const goToNext = (): void => {
        if (currentStep < questionsData.length - 1){
            setCurrentStep(prev => prev + 1);
        }
    }

    const goToPrevious = (): void => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
        else {
            navigate('/');
        }
    };

    const canProceed = (): boolean => {
        const answer = answers[currentQuestion.id];

        return currentQuestion.multiple ? 
        (Array.isArray(answer) && answer.length > 0) : 
        (answer !== undefined);
    };

    const handleComplete = (): void => {
        onComplete(answers);
    };

    return (
        <div className="survey">
            {/* Header */}
            <Header title="개인 기본 정보" goToPrevious={goToPrevious}/>

            {/* Progress Bar */}
            <ProgressBar progress={progress}/>
            
            <div className="survey-contents"> 
                <h2 className="survey-contents-title">
                    {currentQuestion.title}
                </h2>
                <p className="survey-contents-subtitle">
                    {currentQuestion.subtitle}
                </p>

                {/* Options Grid */}
                <div className="survey-contents-grid">
                {currentQuestion.options.map((option) => (
                    <button
                    key={option.id}
                    onClick={() => handleAnswer(option.id)}
                    type="button"
                    className={`survey-contents-button ${isSelected(option.id) ? "selected" : ""}`}>
                    {option.label}
                    </button>
                ))}
                </div>

                {/* Next Button */}
                <button
                    onClick={currentStep === questionsData.length - 1 ? handleComplete : goToNext}
                    type="button"
                    className="survey-next-button"
                    disabled={!canProceed()}
                >
                    {canProceed() ? currentStep === questionsData.length - 1 ? '완료' : '다음 단계' : '선택 후 계속할 수 있어요'}
                </button>
            </div>
            

            {/* Debug Info
            <div className="p-4 mt-8 bg-gray-100 text-sm">
                <div>현재 단계: {currentStep + 1}/{questionsData.length}</div>
                <div>진행률: {Math.round(progress)}%</div>
                <div>선택된 답변: {JSON.stringify(answers, null, 2)}</div>
            </div> */}
        </div>
    );
}

export default Layout;