import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

interface DealerCardProps {
  id: number; // ✅ 차량 고유 ID
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
      <div className="dealer-card-top">
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
        </div>
      </div>

      {/* 🔽 "자세히 보기" 클릭 시 페이지 이동 */}
      <div className="dealer-detail-button" onClick={handleDetailClick}>
        자세히 보기 &gt;
      </div>
    </div>
  );
}
