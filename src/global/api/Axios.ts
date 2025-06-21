import axios from 'axios';

// Axios 인스턴스 생성
const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
});


// API

// 설문조사 관련 API
export const surveyAPI = {
    // survey 받아서 gpt에 넘기고 결과 받아오기
    submitSurvey: async (answers: QuestionAnswers): Promise<SurveyResponse> => {
        try {
            const response = await api.post('/survey', answers);
            const recommendations = Array.isArray(response.data) ? response.data : [];

            return {
                success: true,
                recommendations // 키와 값이 같으면 생략 가능
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(error.response?.data?.message || "설문 제출에 실패하셨습니다.");
            }
            throw new Error('네트워크 오류가 발생했습니다.');
        }
    },

    // AI 재추천 -> 지금은 submitSurvey와 동일 -> 추후 개선 예정
    retryRecommendation: async (answers: QuestionAnswers): Promise<SurveyResponse> => {
        try {
            const response = await api.post('/survey', answers);
            const recommendations = Array.isArray(response.data) ? response.data : [];

            return {
                success: true,
                recommendations
            }
        } catch(error) {
            if (axios.isAxiosError(error)) {
                throw new Error(error.response?.data?.message || '재추천에 실패했습니다.');
            }
            throw new Error('네트워크 오류가 발생했습니다.');
        }
    }
};

// 차량 관련 API
export const carAPI = {
    //id로 해당 중고차의 상세 정보 다 불러오기
    getCarDetail: async (carId: string): Promise<CarDetailAPIResponse> => {
        try {
            const response = await api.get(`/cars/${carId}`);
            
            return {
                success: true,
                data: response.data
            };
        } catch (error) {
            console.error('Car detail fetch error:', error);
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data?.message 
                    || error.response?.data?.error 
                    || `차량 정보를 불러올 수 없습니다. (${error.response?.status})`;
                return {
                    success: false,
                    error: errorMessage
                };
            }
            
            return {
                success: false,
                error: '네트워크 연결을 확인해주세요.'
            };
        }
    },

    //{모델명}에 해당하는 모든 차량 조회(보유중인 딜러 정보도 가져옴)

  // 모델명으로 차량 목록 조회
  getCarsByModel: async (modelName: string): Promise<CarModelListResponse> => {
    try {
        const response = await api.get(`/cars/model/${modelName}`);
        
        // 응답이 배열인지 확인
        const carList = Array.isArray(response.data) ? response.data : [];
        
        return {
            success: true,
            data: carList
        };
    } catch (error) {
        console.error('Car model list fetch error:', error);
        
        if (axios.isAxiosError(error)) {
            let errorMessage = '차량 목록을 불러올 수 없습니다.';
            
            if (error.response?.status === 404) {
                errorMessage = `'${modelName}' 모델을 찾을 수 없습니다.`;
            } else if (error.response?.data?.message) {
                errorMessage = error.response.data.message;
            } else if (error.response?.status) {
                errorMessage = `서버 오류가 발생했습니다. (${error.response.status})`;
            }
            
            return {
                success: false,
                error: errorMessage
            };
        }
        
        return {
            success: false,
            error: '네트워크 연결을 확인해주세요.'
        };
    }
  }
};


// 딜러 관련 API 
export const dealerAPI = {
    // 등록된 모든 딜러 목록 조회
    getDealers: async (): Promise<DealerListResponse> => {
        try {
            const response = await api.get('/dealers');
            
            // 응답이 배열인지 확인
            const dealerList = Array.isArray(response.data) ? response.data : [];
            
            return {
                success: true,
                data: dealerList
            };
        } catch (error) {
            console.error('Dealer list fetch error:', error);
            
            if (axios.isAxiosError(error)) {
                let errorMessage = '딜러 목록을 불러올 수 없습니다.';
                
                if (error.response?.status === 404) {
                    errorMessage = '등록된 딜러가 없습니다.';
                } else if (error.response?.data?.message) {
                    errorMessage = error.response.data.message;
                } else if (error.response?.status) {
                    errorMessage = `서버 오류가 발생했습니다. (${error.response.status})`;
                }
                
                return {
                    success: false,
                    error: errorMessage
                };
            }
            
            return {
                success: false,
                error: '네트워크 연결을 확인해주세요.'
            };
        }
    },

    // dealersId를 가진 dealer 하나 조회
    getDealerById: async (dealerId: string | number): Promise<DealerDetailResponse> => {
        try {
            const response = await api.get(`/dealers/${dealerId}`);
            
            return {
                success: true,
                data: response.data
            };
        } catch (error) {
            console.error('Dealer detail fetch error:', error);
            
            if (axios.isAxiosError(error)) {
                let errorMessage = '딜러 정보를 불러올 수 없습니다.';
                
                if (error.response?.status === 404) {
                    errorMessage = `ID ${dealerId}에 해당하는 딜러를 찾을 수 없습니다.`;
                } else if (error.response?.data?.message) {
                    errorMessage = error.response.data.message;
                } else if (error.response?.status) {
                    errorMessage = `서버 오류가 발생했습니다. (${error.response.status})`;
                }
                
                return {
                    success: false,
                    error: errorMessage
                };
            }
            
            return {
                success: false,
                error: '네트워크 연결을 확인해주세요.'
            };
        }
    },
    // 특정 딜러의 보유 차량 목록 조회
    getDealerCars: async (dealerId: string | number): Promise<DealerCarsResponse> => {
        try {
            const response = await api.get(`/api/dealers/${dealerId}/cars`);
            
            // 응답이 배열인지 확인
            const carList = Array.isArray(response.data) ? response.data : [];
            
            return {
                success: true,
                data: carList
            };
        } catch (error) {
            console.error('Dealer cars fetch error:', error);
            
            if (axios.isAxiosError(error)) {
                let errorMessage = '딜러의 차량 목록을 불러올 수 없습니다.';
                
                if (error.response?.status === 404) {
                    errorMessage = `딜러 ID ${dealerId}의 차량을 찾을 수 없습니다.`;
                } else if (error.response?.data?.message) {
                    errorMessage = error.response.data.message;
                } else if (error.response?.status) {
                    errorMessage = `서버 오류가 발생했습니다. (${error.response.status})`;
                }
                
                return {
                    success: false,
                    error: errorMessage
                };
            }
            
            return {
                success: false,
                error: '네트워크 연결을 확인해주세요.'
            };
        }
    }

}


// 타입 정의

// SurveyAPI

export interface QuestionAnswers {
    [questionId: string]: string | string[];
}

export interface SurveyResponse {
    success: boolean;
    recommendations?: string[];
    error?: string;
}

// carAPI
//    getCarDetail
export interface CarDetailResponse {
    id: number;
    brand: string;
    model: string;
    fuelType: string;
    origin: string;
    seatingCapacity: number;
    size: string;
    maintenanceCostMin: number;
    maintenanceCostMax: number;
    priceMin: number;
    priceMax: number;
    dealerName: string;
    dealerAffiliation: string;
}

export interface CarDetailAPIResponse {
    success: boolean;
    data?: CarDetailResponse;
    error?: string;
}

//    getCarsByModel
export interface CarModelItem {
    brand: string;
    model: string;
    fuelType: string;
    origin: string;
    priceMin: number;
    priceMax: number;
    dealerName: string;
}

export interface CarModelListResponse {
    success: boolean;
    data?: CarModelItem[];
    error?: string;
}

// dealerAPI 
//       getDealers
export interface DealerItem {
    id: number;
    name: string;
    affiliation: string;
}

export interface DealerListResponse {
    success: boolean;
    data?: DealerItem[];
    error?: string;
}

//        getDealerById
export interface DealerDetail {
    id: number;
    name: string;
    affiliation: string;
}

export interface DealerDetailResponse {
    success: boolean;
    data?: DealerDetail;
    error?: string;
}

//        getDealerCars
export interface DealerCarItem {
    brand: string;
    model: string;
    fuelType: string;
    origin: string;
    priceMin: number;
    priceMax: number;
}

export interface DealerCarsResponse {
    success: boolean;
    data?: DealerCarItem[];
    error?: string;
}