export interface HeaderProps {
    goToPrevious?:() => void;
}

export interface VerifiedBannerProps {
    description: string;
}

export interface CarImageGalleryProps {
  images: string[];
}

export interface CarBasicInfoProps {
  carInfo: {
    id: number;
    model: string;
    subModel: string;
    year: string;
    month: string;
    releaseDate: string;
    mileage: number;
    price: number;
  }
}

export interface CarSpecsProps {
  specs: {
    transmission: string;       // 변속기
    warranty: string;           // 제조사 보증
    drivetrain: string;         // 구동방식
    insuranceHistory: string;   // 보험이력 (예: "1건")
    fuelType: string;           // 유종
    accidentHistory: string;    // 사고 이력
    displacement: string;       // 배기량
    power: string;              // 출력
    fuelEfficiency: string;     // 연비
  };
}

export interface AiRecommendationProps {
  recommendation: {
    title: string;
    reasons: Array<{
      title: string;
      descriptions: string[];
    }>;
  };
}

export interface DealerInfoProps {
  dealer: {
    id: number;
    name: string;
    title: string;
    company: string;
    description: string;
    profileImage: string;
  },
  onDealerDetail: (id: number) => void;
}

export interface OptionsInfoProps {
  options: string[];
}

export interface FooterProps {
  carId: number;
  carPrice: number;
  onCalc: (id: number) => void;
  onCalling: (id: number) => void;
  onChatting: (id: number) => void;
}