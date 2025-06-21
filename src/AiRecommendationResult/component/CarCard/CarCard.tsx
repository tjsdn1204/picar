// src/components/results/CarCard.tsx
import React from 'react';
import {ReactComponent as RightArrow} from "../../../assets/right_arrow.svg";
import type { CarCardProps } from '../../types/resultType';
import './CarCard.css';

const CarCard: React.FC<CarCardProps> = ({ car, onViewDetails }) => {
  const {brand, model, releaseDate, displacement, fuelType, averageMaintenancePrice, image} = car;

  const formatModel = (model: string) => {
    return model.replace(/_/g, ' ');
  }

  const formatAverageMaintenancePrice = (price?: number): string => {
    if (typeof price !== 'number') return '정보 없음';
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
    <div className="car-card-page">
        <div className="car-card-container">
            <div className="car-card-left-section">
                <div className="car-card-title-section">
                    <span className="car-card-brand">{formatModel(brand)}</span>
                    <span className="car-card-model">{formatModel(model)}</span>
                </div>
                <div className="car-card-image-container">
                    <img 
                        src={image}
                        alt={`${brand} ${model}`}
                        className="car-card-image"
                    />
                </div>
            </div>
            
            <div className="car-card-seperate-line"></div>
            
            <div className="car-card-info">
                <ul className="car-card-specs">
                    <li>{releaseDate}년 출시</li>
                    <li>배기량: {formatDisplacement(displacement)}</li>
                    <li>유종: {fuelType}</li>
                    <li>{formatAverageMaintenancePrice(averageMaintenancePrice)}</li>
                </ul>
            </div>
      </div>
      <div className="car-card-button-container">
        <button 
            className="car-card-details-button"
            onClick={handleViewDetails}
            type="button">
            <span>{formatModel(model)}을 보유중인 딜러</span>
            <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default CarCard;