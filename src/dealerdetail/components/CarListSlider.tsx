// CarListSlider.tsx
import React from 'react';
import './style.css';
import CarCard from './CarCard';

interface CarItem {
  image: string;
  title: string;
  price: number;
}

interface CarListSliderProps {
  carList: CarItem[];
}

const CarListSlider: React.FC<CarListSliderProps> = ({ carList }) => {
  return (
    <div className="car-list-slider">
      {carList.map((car, idx) => (
        <CarCard key={idx} {...car} />
      ))}
    </div>
  );
};

export default CarListSlider;
