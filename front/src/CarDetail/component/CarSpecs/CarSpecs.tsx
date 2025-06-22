import React from 'react';
import { type CarSpecsProps } from '../../types/carType';
import './CarSpecs.css';

const CarSpecs: React.FC<CarSpecsProps> = ({ specs }) => {

    const formatinsuranceHistory = (insuranceHistory: string): string => {
      const intInsuranceHistory = parseInt(insuranceHistory);
      return `${intInsuranceHistory.toLocaleString()}건`;
    };

    const formatdisplacement = (displacement: string): string => {
      const intDisplacement = parseInt(displacement);
      return `${intDisplacement.toLocaleString()}cc`;
    };

    const formatPower = (power: string): string => {
        const intPower = parseInt(power);
        return `${intPower.toLocaleString()} 마력`;
    };

    const formatFuelEfficiency = (fuelEfficiency: string): string => {
        const intFuelEfficiency = parseFloat(fuelEfficiency);
        return `${intFuelEfficiency.toLocaleString()} km/L`;
    };

    const formatFuelType = (fuelType: string): string => {
      if (!fuelType.substring(0, 3).localeCompare("친환경")){
        return fuelType.substring(0, 3) + "\n" + fuelType.substring(3);
      } 

      return fuelType;
    }

  const specItems = [
    { label: "변속기", value: specs.transmission },
    { label: "구동방식", value: specs.drivetrain },
    { label: "유종", value: formatFuelType(specs.fuelType) },
    { label: "배기량", value: formatdisplacement(specs.displacement) },
    { label: "출력", value: formatPower(specs.power) },
    { label: "연비", value: formatFuelEfficiency(specs.fuelEfficiency) },
    { label: "제조사 보증", value: specs.warranty },
    { label: "보험이력", value: formatinsuranceHistory(specs.insuranceHistory) },
    { label: "사고", value: specs.accidentHistory },
 ];

  // 2열로 재배열
  const leftColumn = specItems.slice(0, Math.ceil(specItems.length / 2) + 1);
  const rightColumn = specItems.slice(Math.ceil(specItems.length / 2) + 1);

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