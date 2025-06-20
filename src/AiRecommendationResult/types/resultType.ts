import type { QuestionAnswers } from "../../Survey/types/surveyType";

export interface CarInfo {
  id: string;
  model: string;
  year: number;
  displacement: string;
  fuelType: string;
  averagePrice: number;
  image: string;
}

export interface CarCardProps {
  car: CarInfo;
  onViewDetails: (carModel: string) => void;
}

export interface RetryButtonProps {
  onRetry: () => void;
}