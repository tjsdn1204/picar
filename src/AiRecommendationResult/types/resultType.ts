import type { QuestionAnswers } from "../../Survey/types/surveyType";

export interface CarInfo {
  model: string;
  releaseDate: number;
  displacement: string;
  fuelType: string;
  averageMaintenancePrice: number;
  image: string;
}

export interface CarCardProps {
  car: CarInfo;
  onViewDetails: (carModel: string) => void;
}

export interface RetryButtonProps {
  onRetry: () => void;
}