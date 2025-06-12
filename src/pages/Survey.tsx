import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from 'lucide-react';
import "./Survey.css"

interface QuestionOption {
    id: string;
    label: string;
}

interface SurveyQuestion {
    id: string;
    title: string;
    subtitle: string;
    options: QuestionOption[];
    multiple: boolean;
}

interface QuestionAnswers {
    [questionId: string]: string | string[];
}


const Survey = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [answers, setAnswers] = useState<QuestionAnswers>({});

    const currentQuestion: SurveyQuestion = questionsData[currentStep];
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
    };

    const canProceed = (): boolean => {
        const answer = answers[currentQuestion.id];

        return currentQuestion.multiple ? 
        (Array.isArray(answer) && answer.length > 0) : 
        (answer !== undefined);
    };

    const handleComplete = (): void => {
        console.log('설문 완료!', answers);
        // 여기서 결과 처리 또는 API 호출
    };

    return (
        <div className="survey">
            {/* Header */}
            <div className="survey-header">
                <div className="survey-arrow-left" onClick={goToPrevious}>
                    <ChevronLeft/>
                </div>
                <div className="survey-title">개인 기본 정보</div>
                <div className="survey-header-temp"></div>
            </div>

            {/* Progress Bar */}
            <div className="survey-progress-bar">
                <div className="survey-progress-bar-background">
                <div 
                    className="survey-progress"
                    style={{ width: `${progress}%` }}
                ></div>
                </div>
            </div>

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


const questionsData : SurveyQuestion[] = [
    {
        id: 'family_structure',
        title: '가구형태를 선택해주세요.',
        subtitle: '가구형태는 하나만 선택 가능해요.',
        options: [
            { id: '1person', label: '1인 가구' },
            { id: '2person', label: '2인 가구' },
            { id: '3person', label: '3인 가구' },
            { id: '4person', label: '4인 가구' },
            { id: '5person', label: '5인 가구' },
            { id: '6plus', label: '6인 이상 가구' }
        ],
        multiple: false
    },
    {
        id: 'main_purpose',
        title: '차량 주사용 목적을 \n알려주세요.',
        subtitle: '다양한 항목을 선택 가능해요.',
        options: [
            { id: 'commute', label: '출퇴근 이용' },
            { id: 'town', label: '동네 마실용' },
            { id: 'leisure', label: '레저 스포츠' },
            { id: 'offroad', label: '오프로드' },
            { id: 'travel', label: '여행/장거리 이동' },
            { id: 'circuit', label: '서킷/와인딩' },
            { id: 'business', label: '비즈니스/의전용' },
            { id: 'study', label: '화물적재' }
        ],
        multiple: true 
    },
    {
        id: 'fuel type',
        title: '선호하는 유종을 선택해주세요.',
        subtitle: '다양한 유종을 선택 가능해요.',
        options: [
            { id: 'gasoline', label: '휘발유' },
            { id: 'diesel', label: '경유' },
            { id: 'lpg', label: 'LPG' },
            { id: 'eco', label: '친환경(전기, 수소)' }
        ],
        multiple: true   
    },
    {
        id: 'fuel_performance_preference',
        title: '연비와 성능, 어느 쪽을 더 \n중시하시나요?',
        subtitle: '연비 : 성능 으로, 하나만 선택할 수 있어요.',
        options: [
            { id: 'fuel_only', label: '연비만 중시\n (10:0)' },
            { id: 'fuel_mostly', label: '연비 약간 중시\n (7:3)' },
            { id: 'balanced', label: '반반\n (5:5)' },
            { id: 'performance_mostly', label: '성능 약간 중시\n (3:7)' },
            { id: 'performance_only', label: '성능만 중시\n (0:10)' }
        ],
        multiple: false   
    },
    {
        id: 'car_origin',
        title: '국산차와 수입차 중 어느 쪽을\n 선호하시나요?',
        subtitle: '하나만 선택해주세요.',
        options: [
            { id: 'domestic', label: '국산' },
            { id: 'foreign', label: '외제' }
        ],
        multiple: false
    },
    {
        id: 'budget_range',
        title: '차량 구매 예산 범위를\n 알려주세요.',
        subtitle: '원하시는 예산대를 선택해주세요.',
        options: [
            { id: 'under_1000', label: '1,000만원 이하' },
            { id: '1000_2000', label: '1,000만원 \n~ 2,000만원' },
            { id: '2000_3000', label: '2,000만원 \n~ 3,000만원' },
            { id: '4000_5000', label: '4,000만원 \n~ 5,000만원' },
            { id: '5000_6000', label: '5,000만원 \n~ 6,000만원' },
            { id: '7000_8000', label: '7,000만원 \n~ 8,000만원' },
            { id: '8000_9000', label: '8,000만원 \n~ 9,000만원' },
            { id: '9000_10000', label: '9,000만원 \n~ 1억원' },
            { id: 'over_10000', label: '1억원 이상' }
        ],
        multiple: false
    },
    {
        id: 'maintenance_budget',
        title: '연간 차량 유지비 예산은 \n얼마나 되시나요?',
        subtitle: '보험료, 유지보수비 등을 포함한 예산이에요.',
        options: [
            { id: '100_150', label: '약 100~150만원' },
            { id: '150_200', label: '약 150~200만원' },
            { id: '200_250', label: '약 200~250만원' },
            { id: '250_300', label: '약 250~300만원' },
            { id: '300_400', label: '약 300~400만원' },
            { id: '400_500', label: '약 400~500만원' },
            { id: 'over_500', label: '500만원 이상' }
        ],
        multiple: false
    },
    {
        id: 'car_size',
        title: '선호하는 차량 크기를 \n선택해주세요.',
        subtitle: '용도에 맞는 차량 크기를 알려주세요.',
        options: [
            { id: 'mini', label: '경형(경차)' },
            { id: 'compact', label: '소형' },
            { id: 'mid_compact', label: '준중형' },
            { id: 'midsize', label: '중형' },
            { id: 'mid_large', label: '준대형' },
            { id: 'large', label: '대형' }
        ],
        multiple: false
    }
]

export default Survey;