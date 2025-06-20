import React from 'react';
import { type CarSpecsProps } from '../../types/carType';
import './CarSpecs.css';

const CarSpecs: React.FC<CarSpecsProps> = ({ specs }) => {
  const specItems = [
    { label: "변속기", value: specs.transmission },
    { label: "구동방식", value: specs.drivetrain },
    { label: "유종", value: specs.fuelType },
    { label: "배기량", value: specs.displacement },
    { label: "연비", value: specs.fuelEfficiency },
    { label: "출력", value: specs.power },
    { label: "제조사 보증", value: specs.warranty },
    { label: "보험이력", value: specs.insuranceHistory },
    { label: "사고", value: specs.accidentHistory },
 ];

  // 2열로 재배열
  const leftColumn = specItems.slice(0, Math.ceil(specItems.length / 2));
  const rightColumn = specItems.slice(Math.ceil(specItems.length / 2));

  return (
    <div className="car-specs">
      <div className="specs-grid-columns">
        <div className="specs-column">
          {leftColumn.map((item, index) => (
            <div key={index} className="spec-item">
              <span className="spec-label">{item.label}</span>
              <span className="spec-value">{item.value}</span>
            </div>
          ))}
        </div>
        <div className="specs-column">
          {rightColumn.map((item, index) => (
            <div key={index} className="spec-item">
              <span className="spec-label">{item.label}</span>
              <span className="spec-value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarSpecs;