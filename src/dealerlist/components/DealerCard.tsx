import React from 'react';
import './style.css';

interface DealerCardProps {
  name: string;
  rating: number;
  reviews: number;
  profile: string;
  image: string;
  year: string;
  distance: string;
  comment: string;
  price: number;
}

export default function DealerCard({
  name,
  rating,
  reviews,
  profile,
  image,
  year,
  distance,
  comment,
  price,
}: DealerCardProps) {
  return (
    <div className="dealer-card">
      <div className="dealer-left">
        <div className="dealer-top">
          <img src={profile} className="profile" alt="프로필" />
          <div className="name-rating">
            <div className="name">{name}</div>
            <div className="rating"><img src="/icons/star.svg" alt="별 아이콘" className="star-icon" />{rating} ({reviews} 후기)</div>
          </div>
          <img src="/icons/heart.svg" className="heart" alt="하트" />
        </div>

        <div className="info">
          <div>{year} / {distance}</div>
          <div>{comment}</div>
        </div>

        <div className="price">
          → <span>{price.toLocaleString()}<span className="unit">만원</span></span>
        </div>
      </div>

      <div className="dealer-right">
        <img src={image} className="car-image" alt="차량" />
        <div className="detail">자세히 보기 &gt;</div>
      </div>
    </div>
  );
}