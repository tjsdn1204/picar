// src/components/results/CarCard.tsx
import React from 'react';
import {ReactComponent as RightArrow} from "../../../assets/right_arrow.svg";
import type { CarCardProps } from '../../types/resultType';
import './CarCard.css';

const CarCard: React.FC<CarCardProps> = ({ car, onViewDetails }) => {
  const {model, releaseDate, displacement, fuelType, averageMaintenancePrice, image} = car;

  // 유종 한글 대치
  const convertFuelTypeToKorean = (fuelType: string): string => {
    const fuelTypeMap: { [key: string]: string } = {
      'Gasoline': '가솔린',
      'LPG': 'LPG',
      'Diesel': '디젤',
      'Electric': '전기'
  } ;
  
    return fuelTypeMap[fuelType] || fuelType; // 매칭되지 않으면 원본 반환
  }

  const formatAverageMaintenancePrice = (price: number): string => {
    return `평균 유지비: 월 ${price.toLocaleString()}만원`;
  };

  const formatDisplacement = (displacement: string): string => {
    const intDisplacement = parseInt(displacement);
    return `${intDisplacement.toLocaleString()}cc`;
  };

  const handleViewDetails = () => {
    onViewDetails(car.model);
  }

  return (
    <div className="car-card">
        <div className="car-card-container">
            <div className="car-image-container">
                <h3 className="car-model">{model}</h3>
                <img 
                    src={image} 
                    alt={model}
                    className="car-image"
                />
            </div>
            <div className="car-seperate-line"></div>
            <div className="car-info">
                <ul className="car-specs">
                    <li>{releaseDate}년 출시</li>
                    <li>배기량: {formatDisplacement(displacement)}</li>
                    <li>유종: {fuelType}</li>
                    <li>{formatAverageMaintenancePrice(averageMaintenancePrice)}</li>
                </ul>
            </div>
      </div>
      <div className="car-card-button-container">
        <button 
            className="car-details-button"
            onClick={handleViewDetails}
            type="button">
            <span>{model}을 보유중인 딜러</span>
            <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default CarCard;