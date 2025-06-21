import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import CarCard from '../component/CarCard/CarCard';
import img from "../../assets/test/BMW_320d.png" // Test용 사진
import AiRecommendationLoading from '../../AiRecommendationLoading/pages/AiRecommendationLoading';
import { type CarCardProps } from '../types/resultType';
import { surveyAPI, carAPI, type QuestionAnswers } from '../../global/api/Axios';

import "./style.css"

const Layout: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isRetrying, setIsRetrying] = useState(false);
    const [carData, setCarData] = useState<any[]>([]); //추가
    const [loading, setLoading] = useState(true); //추가
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
    }

    useEffect(() => {
        if (recommendations.length === 0) {
            navigate('/');
            return;
        }

        const fetchCarData = async () => {
            try {
                setLoading(true);
                const carPromises = recommendations.map(async (model, index) => {
                    try {
                        // 실제 API에서 데이터 가져오기
                        const result = await carAPI.getCarsByModel(model);
                        
                        if (result.success && result.data && result.data.length > 0) {
                            // 첫 번째 차량 데이터 사용
                            const apiCarData = result.data[0];
                            return {
                                model: `${apiCarData.brand} ${apiCarData.model}`, // 브랜드 + 모델이 전체 모델
                                releaseDate: 2022, // 출시연도 필요함 - 백에서 추가하면 apiCarData.releaseDate 
                                displacement: "1998", // 배기량 - 하드 코딩
                                fuelType: apiCarData.fuelType, // 유종
                                averageMaintenancePrice: Math.round(apiCarData.priceMin / 10000), // - 백에서 추가하면 (apiCarData.maintenanceCostMin + apiCarData.maintenanceCostMax) / 2
                                image: img // 임시 이미지 - 백에서 추가하면 apiCarData.img
                            };
                        } else {
                            // API 데이터가 없으면 기본 데이터 사용
                            return {
                                model: model,
                                releaseDate: 2022,
                                displacement: "1998",
                                fuelType: "가솔린",
                                averagePrice: 50,
                                image: img
                            };
                        }
                    } catch (error) {
                        console.error(`차량 데이터 가져오기 실패 (${model}):`, error);
                        // 에러 시 기본 데이터 반환
                        return {
                            model: model,
                            releaseDate: 2022,
                            displacement: "1998",
                            fuelType: "가솔린",
                            averagePrice: 50,
                            image: img
                        };
                    }
                });

                const carResults = await Promise.all(carPromises);
                setCarData(carResults);
            } catch (error) {
                console.error('차량 데이터 로딩 실패:', error);
                // 전체 실패 시 기본 데이터 사용
                const defaultCarData = recommendations.map((model, index) => ({
                    model: model,
                    releaseDate: 2022,
                    displacement: "1998",
                    fuelType: "가솔린",
                    averagePrice: 50,
                    image: img
                }));
                setCarData(defaultCarData);
            } finally {
                setLoading(false);
            }
        };

        if (recommendations.length > 0) {
            fetchCarData();
        }
    }, [recommendations]);
    
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

    const onViewDetails = (model: string) => {
        const queryParams = new URLSearchParams({
              model: model
        });
        
        // [] 대신 검색 결과창
        navigate(`/dealerList/${queryParams.toString()}`);
    };

    const goToPrevious = () => { navigate('/survey') };
    //const handleRetry = () => {};
    //const onViewDetails = () => {};

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
                {carData.map((car, index) => (
                    <CarCard key={index} car={car} onViewDetails={onViewDetails} />
                ))}
            </div>
            <Footer onRetry={handleRetry}/>
        </div>
    );
};


// test용 data
const car: CarCardProps["car"] = {
    model: "BMW 320d",
    releaseDate: 2019,
    displacement: "1999",
    fuelType: "디젤",
    averageMaintenancePrice: 74,
    image: img
}

export default Layout;