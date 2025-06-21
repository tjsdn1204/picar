import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

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

  return (
    <div className="dealer-card-wrapper">
      <div className="dealer-card">
        <img src="/icons/heart.svg" className="heart" alt="하트" />

        <div className="dealer-left">
          <div className="dealer-top">
            <img src={profile} className="profile" alt="프로필" />
            <div className="name-rating">
              <div className="name">{name}</div>
              <div className="rating">
                <img src="/icons/star.svg" alt="별 아이콘" className="star-icon" />
                {rating} ({reviews} 후기)
              </div>
            </div>
          </div>

          <div className="info">
            <div>• {year} / {distance}</div>
            <div>• {comment}</div>
          </div>

          <div className="price">
            → {price.toLocaleString()}<span className="unit">만원</span>
          </div>
        </div>

        <div className="dealer-right">
          <img src={image} className="car-image" alt="차량 이미지" />
        </div>
      </div>

      <div
        className="dealer-detail-bottom"
        onClick={() => navigate(`/detail?id=${id}`)}
      >
        자세히 보기 &gt;
      </div>
    </div>
  );
}
