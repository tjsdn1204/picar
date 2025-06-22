import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CarCard from '../component/CarCard/CarCard';
import img from "../../assets/test/BMW_320d.png" // Test용 사진
import AiRecommendationLoading from '../../AiRecommendationLoading/pages/AiRecommendationLoading';
import { type CarCardProps } from '../types/resultType';
import { surveyAPI, carAPI, type QuestionAnswers, API_BASE_URL } from '../../global/api/Axios';

import "./style.css"

const Layout: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isRetrying, setIsRetrying] = useState(false);
    const [carData, setCarData] = useState<any[]>([]); //추가
    const [loading, setLoading] = useState(true); //추가
    const navigate = useNavigate();

    const getFullImgUrl = (imagePath: string): string => {
        return `${API_BASE_URL}${imagePath}`;
    }

    // URL 쿼리에서 데이터 파싱
    const recommendationsParam = searchParams.get('recommendations');
    const answersParam = searchParams.get('answers');
    const recommendations = JSON.parse(recommendationsParam);
    const answers = JSON.parse(answersParam);

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
                                brand: apiCarData.brand, // 브랜드
                                model: apiCarData.model, // 모델 
                                releaseDate: apiCarData.modelYear, // 출시연도
                                displacement: apiCarData.engineDisplacement, // 배기량
                                fuelType: apiCarData.fuelType, // 유종
                                averageMaintenancePrice: Math.round((apiCarData.maintenanceCostMin + apiCarData.maintenanceCostMax)/2), // 평균 유지비용
                                image: getFullImgUrl(apiCarData.imagePaths[0]) // 차량 이미지
                            };
                        } else {
                            // API 데이터가 없으면 기본 데이터 사용
                            return {
                                brand: "Infiniti",
                                model: "Q50",
                                releaseDate: 2025,
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
                            brand: "Infiniti",
                            model: "Q50",
                            releaseDate: 2025,
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
                    brand: "Infiniti",
                    model: "Q50",
                    releaseDate: 2025,
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
    }, []);
    
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
        
        navigate(`/dealerlist?${queryParams.toString()}`);
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
// const car: CarCardProps["car"] = {
//     model: "BMW 320d",
//     releaseDate: 2019,
//     displacement: "1999",
//     fuelType: "디젤",
//     averageMaintenancePrice: 74,
//     image: img
// }

export default Layout;