import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from '../layout/Header.tsx';
import Footer from '../layout/Footer.tsx';
import CarCard from '../component/CarCard/CarCard.tsx';
import img from "../../assets/test/BMW_320d.png"
import AiRecommendationLoading from '../../AiRecommendationLoading/pages/AiRecommendationLoading.tsx';
import { surveyAPI, type QuestionAnswers } from '../../global/api/Axios.ts';

import "./style.css"

const Layout: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isRetrying, setIsRetrying] = useState(false);
    const navigate = useNavigate();

    // URL 쿼리에서 데이터 파싱
    const recommendationsParam = searchParams.get('recommendations');
     const answersParam = searchParams.get('answers');

    // JSON 파싱 (에러 처리 포함)
    let recommendations: string[] = [];
    let answers: any = {};

    try {
        if (recommendationsParam) {
         recommendations = JSON.parse(recommendationsParam);
        }
        if (answersParam) {
         answers = JSON.parse(answersParam);
        }
    } catch (error) {
        console.error('URL 파라미터 파싱 오류:', error);
        navigate('/');
        return null;
    }

    // 데이터가 없으면 홈으로 리다이렉트
    if (!recommendations || recommendations.length === 0) {
        navigate('/');
        return null;
    }
    
    const handleRetry = async () => {
        try {
        setIsRetrying(true); 
        
        // 기존 답변으로 재추천 API 호출
        const result = await surveyAPI.retryRecommendation(answers);
        
        if (result.success) {
            // 새로운 추천 결과로 URL 업데이트
            const newQueryParams = new URLSearchParams({
                recommendations: JSON.stringify(result.recommendations),
                answers: JSON.stringify(answers)
            });
            
            setSearchParams(newQueryParams);
        }
        
        } catch (error) {
        console.error('재추천 실패:', error);
        } finally {
            setIsRetrying(false); 
        }
    };

    const onViewDetails = () => {};
    const goToPrevious = () => { navigate('/survey') };


    if (isRetrying) {
        return <AiRecommendationLoading />;
    }
    return (
        <div className="result">
            <Header title="AI 추천 결과" goToPrevious={goToPrevious}/>
            <div className="results-title">
                <h2 className="results-main-title">
                    고객님 맞춤 차량은 다음과 같아요.
                </h2>
                <p className="results-subtitle">
                해당 맞춤 차량을 갖고 있는 딜러도 소개시켜 드릴게요.
                </p>
            </div>
            <div className="results-contents">
                <CarCard car={car} onViewDetails={onViewDetails}/>
                <CarCard car={car} onViewDetails={onViewDetails}/>
                <CarCard car={car} onViewDetails={onViewDetails}/>
                <CarCard car={car} onViewDetails={onViewDetails}/>
            </div>
            <Footer onRetry={handleRetry}/>
        </div>
    );
};


// test용 data
const car = {
        id: "1",
        model: "BMW 320d",
        year: 2019,
        engine: "1,999cc",
        fuelType: "Disel",
        averagePrice: 74,
        image: img
    }

export default Layout;