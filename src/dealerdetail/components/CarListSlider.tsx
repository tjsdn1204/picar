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
    <div className="car-slider-wrapper">
      <div className="car-slider-scroll">
        {carList.map((car, idx) => (
          <div className="car-card-wrapper" key={idx}>
            <CarCard {...car} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarListSlider;
