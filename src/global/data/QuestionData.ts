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

export const questionsData : SurveyQuestion[] = [
    {
        id: 'familyType',
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
        id: 'purpose',
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
        id: 'fuelType',
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
        id: 'carOrigin',
        title: '국산차와 수입차 중 어느 쪽을\n 선호하시나요?',
        subtitle: '하나만 선택해주세요.',
        options: [
            { id: 'domestic', label: '국산' },
            { id: 'foreign', label: '외제' },
            { id: 'all', label: '상관없음'}
        ],
        multiple: false
    },
    {
        id: 'fuelPerformancePreference',
        title: '연비와 성능, 어느 쪽을 더 \n중시하시나요?',
        subtitle: '연비 : 성능 으로, 하나만 선택할 수 있어요.',
        options: [
            { id: 'fuel_only', label: '연비만 중시 (10:0)' },
            { id: 'fuel_mostly', label: '연비 약간 중시 (7:3)' },
            { id: 'balanced', label: '반반 (5:5)' },
            { id: 'performance_mostly', label: '성능 약간 중시 (3:7)' },
            { id: 'performance_only', label: '성능만 중시 (0:10)' }
        ],
        multiple: false   
    },
    {
        id: 'budgetRange',
        title: '차량 구매 예산 범위를\n 알려주세요.',
        subtitle: '구매 예산 범위는 한 가지만 선택할 수 있어요.',
        options: [
            { id: 'under_1000', label: '1,000만 원 이하' },
            { id: '1000_2000', label: '1,000만 원대' },
            { id: '2000_3000', label: '2,000만 원대' },
            { id: '4000_5000', label: '4,000만 원대' },
            { id: '5000_6000', label: '5,000만 원대' },
            { id: '7000_8000', label: '7,000만 원대' },
            { id: '8000_9000', label: '8,000만 원대' },
            { id: '9000_10000', label: '9,000만 원대' },
            { id: '10000_20000', label: '1억 원대' },
            { id: 'over_20000', label: '2억 원 이상' }
        ],
        multiple: false
    },
    {
        id: 'maintenanceRange',
        title: '생각하시는 월 유지비를 \n알려주세요.',
        subtitle: '월 유지비는 한 가지만 선택할 수 있어요.',
        options: [
            { id: 'under_30', label: '30만 원 이하' },
            { id: '30_50', label: '30~50만 원' },
            { id: '50_80', label: '50~80만 원' },
            { id: '80_100', label: '80~100만 원' },
            { id: '100_120', label: '100~120만 원' },
            { id: '120_150', label: '120~150만 원' },
            { id: 'over_150', label: '150만 원 이상' }
        ],
        multiple: false
    },
    {
        id: 'carSize',
        title: '선호하는 차량 크기를 \n선택해주세요.',
        subtitle: '다양한 항목을 선택할 수 있어요.',
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