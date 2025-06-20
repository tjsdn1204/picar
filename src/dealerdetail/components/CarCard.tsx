import React from 'react';
import './style.css';

interface CarCardProps {
  image: string;
  title: string;
  price: number;
}

export default function CarCard({ image, title, price }: CarCardProps) {
  return (
    <div className="car-card">
      <img src={image} alt={title} className="car-image" />
      <div className="car-title">{title}</div>
      <div className="car-price">{price.toLocaleString()} 만 원</div>
    </div>
  );
}
