// src/components/results/CarCard.tsx
import React from 'react';
import {ReactComponent as RightArrow} from "../../../assets/right_arrow.svg";
import type { CarCardProps } from '../../types/resultType';
import './CarCard.css';

const CarCard: React.FC<CarCardProps> = ({ car, onViewDetails }) => {
  const formatPrice = (price: number): string => {
    return `평균 유지비: 월 ${price.toLocaleString()}만원`;
  };

  const handleViewDetails = () => {
    onViewDetails(car.model);
  }

  return (
    <div className="car-card">
        <div className="car-card-container">
            <div className="car-image-container">
                <h3 className="car-model">{car.model}</h3>
                <img 
                    src={car.image} 
                    alt={car.model}
                    className="car-image"
                />
            </div>
            <div className="car-seperate-line"></div>
            <div className="car-info">
                <ul className="car-specs">
                    <li>{car.year}년 출시</li>
                    <li>배기량: {car.engine}</li>
                    <li>유종: {car.fuelType}</li>
                    <li>{formatPrice(car.averagePrice)}</li>
                </ul>
            </div>
      </div>
      <div className="car-card-button-container">
        <button 
            className="car-details-button"
            onClick={handleViewDetails}
            type="button">
            <span>{car.model}을 보유중인 딜러</span>
            <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default CarCard;