import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Survey from '../pages/Survey.tsx';
import AiRecommendationLoading from '../../AiRecommendationLoading/pages/AiRecommendationLoading.tsx';
import SurveyComplete from '../../SurveyComplete/pages/SurveyComplete.tsx';
import { surveyAPI, type QuestionAnswers } from '../../global/api/Axios.ts';

const SurveyController = () => {
  const [currentPhase, setCurrentPhase] = useState<'survey' | 'complete' | 'loading' >('survey');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSurveyComplete = async (answers: QuestionAnswers) => {
    try {
      setCurrentPhase('complete');

      // 1.5초 후 로딩 화면으로 전환
      setTimeout(async () => {
        setCurrentPhase('loading');
        
        try {
          // 백엔드에 데이터 전송 + GPT 처리
          const result = await surveyAPI.submitSurvey(answers);
          
          if (result.success) {
            // 결과 페이지로 이동
            const queryParams = new URLSearchParams({
              recommendations: JSON.stringify(result.recommendations),
              answers: JSON.stringify(answers)
            });
            
            navigate(`/recommendation?${queryParams.toString()}`);
          } else {
            setError(result.error || '처리 중 오류가 발생했습니다.');
            setCurrentPhase('survey'); // 에러 시 설문으로 돌아감
          }
        } catch (err) {
          console.error('설문 제출 오류:', err);
          setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
          setCurrentPhase('survey');
        }
      }, 1500); // 1.5초
      
    } catch (err) {
      console.error('설문 완료 처리 오류:', err);
      setError('설문 완료 처리 중 오류가 발생했습니다.');
    }
  };

  // 에러 재시도
  const handleRetry = () => {
    setError(null);
    setCurrentPhase('survey');
  };

  // 조건부 렌더링
  if (error) {
    return (
      <AiRecommendationLoading />
      // <div className="error-container">
      //   <h2>오류가 발생했습니다</h2>
      //   <p>{error}</p>
      //   <button onClick={handleRetry}>다시 시도</button>
      // </div>
    );
  }

  if (currentPhase === 'complete') {
    return <SurveyComplete />;
  }

  if (currentPhase === 'loading') {
    return <AiRecommendationLoading />;
  }

  return <Survey onComplete={handleSurveyComplete} />;
};

export default SurveyController;