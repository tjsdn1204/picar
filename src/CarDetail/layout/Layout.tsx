import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from "../layout/Header";
import CarImageGallery from "../component/CarImageGallery/CarImageGallery";
import VerifedBanner from "../component/VerifedBanner/VerifiedBanner";
import CarBasicInfo from "../component/CarBasicInfo/CarBasicInfo";
import { type CarBasicInfoProps } from "../types/carType";
import CarSpecs from "../component/CarSpecs/CarSpecs";
import { type CarSpecsProps } from "../types/carType";
import AiRecommendation from "../component/AiRecommendation/AiRecommendation";
import { type AiRecommendationProps } from "../types/carType";
import SeperateLine from "../component/SeperateLine/SeperateLine";
import DealerInfo from "../component/DealerInfo/DealerInfo";
import { type DealerInfoProps } from "../types/carType";
import OptionsInfo from '../component/OptionsInfo/OptionsInfo';
import { type OptionsInfoProps } from '../types/carType';
import Footer from './Footer';
import { FooterProps } from '../types/carType';
import { carAPI } from "../../global/api/Axios";
import { API_BASE_URL } from "../../global/api/Axios"

import carImg1 from "../../assets/test/carImgs/carImg1.png";
import carImg2 from "../../assets/test/carImgs/carImg2.png";
import carImg3 from "../../assets/test/carImgs/carImg3.png";
import carImg4 from "../../assets/test/carImgs/carImg4.png";
import carImg5 from "../../assets/test/carImgs/carImg5.png";
import carImg6 from "../../assets/test/carImgs/carImg6.png";
import carImg7 from "../../assets/test/carImgs/carImg7.png";
import carImg8 from "../../assets/test/carImgs/carImg8.png";
import carImg9 from "../../assets/test/carImgs/carImg9.png";
import carImg10 from "../../assets/test/carImgs/carImg10.png";
import carImg11 from "../../assets/test/carImgs/carImg11.png";
import carImg12 from "../../assets/test/carImgs/carImg12.png";
import dealerImg from "../../assets/test/dealer_img.png";

import "./style.css"

const Layout = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const [carData, setCarData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const getFullImgUrl = (imagePath: string): string => {
      return `${API_BASE_URL}${imagePath}`;
    }

    const makeCarImgs = (imagePaths: string[]): string[] => {
      const carImgs: string[] = imagePaths.map((link, index) => getFullImgUrl(link));
      return carImgs;
    }

    // URL 쿼리에서 데이터 파싱
    const carId = searchParams.get('id');
    const carModel = searchParams.get('model');

    useEffect(() => {
        const fetchCarDetail = async () => {
            if (!carId) {
                setError('차량 ID가 지정되지 않았습니다.');
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(null);
                
                const result = await carAPI.getCarDetail(carId);
                if (result.success && result.data) {
                    setCarData(result.data);
                } else {
                    setError(result.error || '차량 정보를 불러올 수 없습니다.');
                }
            } catch (err) {
                setError('차량 정보를 불러오는 중 오류가 발생했습니다.');
                console.error('차량 상세 정보 가져오기 실패:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchCarDetail();
    }, [carId]);

    // API 데이터를 컴포넌트 props에 맞게 변환
    const mapApiDataToProps = (apiData: any) => {
        const carImgs: string[] = makeCarImgs(apiData.imagePaths);

        const carInfo: CarBasicInfoProps["carInfo"] = {
            id: apiData.id,
            brand: apiData.brand,
            model: apiData.model,
            releaseDate: apiData.releaseDate, // 연식
            modelYear: apiData.modelYear, // 출시연도
            mileage: apiData.mileage, // 주행거리
            price: Math.round((apiData.priceMin + apiData.priceMax) / 2) // 가격
        };

        const carSpecs: CarSpecsProps["specs"] = {
            transmission: "자동", // API에 없는 데이터 - 변속기
            warranty: "소모품", // API에 없는 데이터 - 제조사 보증
            drivetrain: "후륜", // API에 없는 데이터 - 구동 방식(전륜 후륜 사륜) 
            insuranceHistory: "0", // API에 없는 데이터 - 사고 횟수
            fuelType: apiData.fuelType || "가솔린", // 유종
            accidentHistory: "무사고", // API에 없는 데이터 - 사고 유무
            displacement: apiData.engineDisplacement, // 배기량
            power: "192", // API에 없는 데이터 - 마력 
            fuelEfficiency: "14.5" // API에 없는 데이터 - 연비
        };

        const dealerInfo: DealerInfoProps["dealer"] = {
            id: apiData.id,
            name: apiData.dealerName || "담당 딜러", // 딜러 이름 
            title: apiData.position, // 딜러 직급 
            company: apiData.dealerAffiliation || "딜러사", // 딜러 회사
            description: "", // 설명문
            profileImage: getFullImgUrl(apiData.dealerImagePath), // 딜러 사진
        };

        return { carImgs, carInfo, carSpecs, dealerInfo };
    };

    const formatDealerInfo = (dealer: DealerInfoProps["dealer"]):DealerInfoProps["dealer"] => {
      dealer.description = `고객님! 안녕하십니까?\n${dealer.company}의 ${dealer.name} ${dealer.title}입니다.\n픽카 딜러고사 수석에 빛나는 실력으로 고객님에게 알맞은 차량을 안내해드리도록 최선을 다하겠습니다!`
      return dealer;
    }

    const onDealerDetail = (id:number):void => {
      navigate(`/dealerDetail/${id}`);
    }

    const goToPrevious = () => { 
      const queryParams = new URLSearchParams({
            model: carModel
      });
      navigate(`/dealerlist?${queryParams.toString()}`);
    };

    const onCalc = (id: number): void => {
    }
    const onCalling = (id: number): void => {
    }
    const onChatting = (id: number): void => {
    }
    if (loading || !carData) return null;
    if (error) return null;

    const {carImgs, carInfo, carSpecs, dealerInfo } = mapApiDataToProps(carData);
    
    return (
      <div className="car-detail">
          {/* Header */}
          <Header goToPrevious={goToPrevious}/>
          <CarImageGallery images={carImgs}/>
          <VerifedBanner description="완전 무사고•검증된 딜러" />
          <CarBasicInfo carInfo={carInfo}/>
          <CarSpecs specs={carSpecs}/>
          <AiRecommendation recommendation={aiRecommendationSample}/>
          <SeperateLine />
          <DealerInfo dealer={formatDealerInfo(dealerInfo)} onDealerDetail={onDealerDetail}/>
          <SeperateLine />
          <OptionsInfo options={optionsSample} />
          <Footer carId={carInfo.id} carPrice={carInfo.price} onCalc={onCalc} onCalling={onCalling} onChatting={onChatting}/>
      </div>
    );
};


// SampleData들
const imgs: string[] = [
    carImg1,
    carImg2,
    carImg3,
    carImg4,
    carImg5,
    carImg6,
    carImg7,
    carImg8,
    carImg9,
    carImg10,
    carImg11,
    carImg12
];

const carInfoSample: CarBasicInfoProps["carInfo"] = {
  id: 1,
  brand: "Hyundai Sonata",
  model: "Smart 2.0",
  releaseDate: "2022-08-17",
  modelYear: 2022,
  mileage: 35000,
  price: 18900000
};

const carSpecsSample: CarSpecsProps["specs"] = {
    transmission: "자동",                 // 변속기
    warranty: "소모품",                        // 제조사 보증
    drivetrain: "후륜",                        // 구동방식
    insuranceHistory: "0",                   // 보험이력
    fuelType: "경유",                      // 유종
    accidentHistory: "무사고",                 // 사고
    displacement: "1998",                    // 배기량
    power: "192",                           // 출력
    fuelEfficiency: "14.5",               // 연비
};

const aiRecommendationSample: AiRecommendationProps['recommendation'] = {
  title: 'AI가 추천하는 이유',
  reasons: [
    {
      title: '뛰어난 연비와 경제성',
      descriptions: [
        'BMW 320d는 디젤 엔진 특유의 높은 연비(복합 14~20km/L 수준)로 장거리 운행 시 연료비 부담이 적어 경제적입니다.',
        '연간 유지비 역시 동급 가솔린 모델이나 고성능 모델보다 낮아, 장거리 출퇴근이나 여행이 잦은 1인 가정에 적합합니다.'
      ]
    },
    {
      title: '강력한 성능과 안정성',
      descriptions: [
        '2.0리터 디젤 엔진(약 190마력, 40.8kg.m 토크)은 고속도로 주행에서 안정적이고 여유로운 가속 성능을 제공합니다.',
        '후륜구동 기반의 밸런스와 정교한 핸들링, 어댑티브 서스펜션 등으로 장거리 운전 시에도 피로감이 적고, 운전의 재미를 느낄 수 있습니다.'
      ]
    },
    {
      title: '편의성과 실용성',
      descriptions: [
        '크루즈 컨트롤, 다양한 운전자 보조 시스템, 넓은 시야와 트렁크 자동 오픈 등 1인 가정이 실생활에서 자주 활용할 수 있는 편의 기능이 풍부합니다.',
        '실내 공간도 1~2인 기준으로 충분하며, 혼자 이동하거나 가끔 짐을 싣는 용도로도 매우 실용적입니다.',
      ]
    },
    {
      title: '유지비와 내구성',
      descriptions: [
        '디젤 엔진의 특성상 장거리 운행이 많을수록 엔진과 DPF(디젤 미립자 필터) 관리에 유리하여, 도심 위주 운행보다 오히려 고장이 적을 수 있습니다.',
        '보험료, 세금 등 유지비가 합리적이며, 장거리 운전자에게 실질적인 비용 절감 효과가 큽니다.'
      ]
    },
    {
      title: '브랜드 가치와 운전의 즐거움',
      descriptions: [
        'BMW 특유의 스포티한 주행감과 브랜드 이미지, 프리미엄 인테리어는 1인 가정의 만족도를 높여줍니다.'
      ]
    }
  ]
};

const dealerSample: DealerInfoProps["dealer"] = {
  id: 1,
  name: "문종수",
  title: "부장", 
  company: "성수자동차사",
  description: "",
  profileImage: dealerImg 
};

const optionsSample: OptionsInfoProps["options"] = [
  "메모리시트(운전석)",
  "열선시트", 
  "전동시트(앞지석)",
  "차선유지보조(LSS)",
  "LED 헤드라이트"
]

export default Layout;