// src/dealerlist/components/DealerCard.tsx
import React from 'react';
import './style.css';

type DealerCardProps = {
  name: string;
  rating: number;
  reviews: number;
  image: string;
  profile: string;
  price: number;
  year: string;
  distance: string;
  comment: string;
};

export default function DealerCard({
  name,
  rating,
  reviews,
  image,
  profile,
  price,
  year,
  distance,
  comment,
}: DealerCardProps) {
  return (
    <div className="dealer-card">
      <div className="dealer-info">
        <div className="dealer-top">
          <img src={profile} alt="프로필" className="dealer-profile" />
          <div className="dealer-name-box">
            <span className="dealer-name">{name}</span>
            <span className="dealer-rating">⭐ {rating}({reviews} 후기)</span>
          </div>
          <img src="/icons/heart.svg" alt="찜" className="dealer-heart" />
        </div>

        <ul className="dealer-spec">
          <li>{year} / {distance}</li>
          <li>{comment}</li>
        </ul>

        <div className="dealer-price">
          <span className="price-arrow">→</span>
          <span className="price">{price.toLocaleString()}<span className="unit">만원</span></span>
        </div>
      </div>

      <img src={image} alt="차량 이미지" className="dealer-car-img" />
      
      <div className="dealer-detail">
        자세히 보기 <span className="arrow">{'>'}</span>
      </div>
    </div>
  );
}
