import React from 'react';
import './style.css';
import CarCard from './CarCard';

interface CarItem {
  id: number;
  image: string;
  title: string;
  price: number;
}

interface CarListSliderProps {
  carList: CarItem[];
  onClick?: (id: number) => void;
}

const CarListSlider: React.FC<CarListSliderProps> = ({ carList, onClick }) => {
  return (
    <div className="car-slider-wrapper">
      <div className="car-list-slider">
        {carList.map((car, idx) => (
          <div className="car-card-wrapper" key={idx}>
            <CarCard {...car} onClick={onClick} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarListSlider;