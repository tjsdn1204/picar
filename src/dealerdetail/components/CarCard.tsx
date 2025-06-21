import React from 'react';
import './style.css';

interface CarCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  onClick?: (id: number) => void;
}

export default function CarCard({ id, image, title, price, onClick }: CarCardProps) {

  const handleClick = () => {
    onClick(id);
  }

  return (
    <div className="car-card" onClick={handleClick}>
      <div className="car-image-box">
        <img src={image} alt={title} className="car-image" />
      </div>
      <div className="car-text">
        <div className="car-titles">{title}</div>
        <div className="car-price">{price.toLocaleString()} 만 원</div>
      </div>
    </div>
  );
}