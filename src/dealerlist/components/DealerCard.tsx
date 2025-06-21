import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

interface DealerCardProps {
  id: number;
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
  id,
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
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/detail?id=${id}`);
  };

  return (
    <div className="dealer-card">
      <div className="dealer-left">
        <div className="dealer-profile-row">
          <img src={profile} alt="프로필" className="dealer-profile" />
          <div className="dealer-info-text">
            <div className="dealer-name">{name}</div>
            <div className="dealer-rating">
              <img src="/icons/star.svg" alt="별" className="star-icon" />
              {rating.toFixed(1)} ({reviews} 후기)
            </div>
          </div>
          <img src="/icons/heart.svg" alt="하트" className="heart-icon" />
        </div>

        <div className="dealer-car-info">
          <div>{year} / {distance}</div>
          <div>{comment}</div>
        </div>

        <div className="dealer-price">
          → <span>{price.toLocaleString()}<span className="unit">만원</span></span>
        </div>
      </div>

      <div className="dealer-right">
        <img src={image} alt="차량 이미지" className="dealer-car-image" />
        <div className="dealer-detail-button" onClick={handleDetailClick}>
          자세히 보기 &gt;
        </div>
      </div>
    </div>
  );
}
