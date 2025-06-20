import axios from 'axios';

// Axios 인스턴스 생성
const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
});


// 타입 정의
export interface SurveyResponse {
    success: boolean;
    recommendations: string[];
    error?: string;
}

export interface QuestionAnswers {
  [questionId: string]: string | string[];
}

// API
export const surveyAPI = {
  // AI 추천 (첫 번째 설문 제출)
  submitSurvey: async (answers: QuestionAnswers): Promise<SurveyResponse> => {
    try {
        const response = await api.post('/api/survey', { answers });

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || "설문 제출에 실패하셨습니다.");
        }
        throw new Error('네트워크 오류가 발생했습니다.');
    }
  },

  // AI 재추천
  retryRecommendation: async (answers: QuestionAnswers): Promise<SurveyResponse> => {
    try {
        const response = await api.post('/api/survey', { answers });
        return response.data;
    } catch(error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || '재추천에 실패했습니다.');
        }
        throw new Error('네트워크 오류가 발생했습니다.');
    }
  }
};