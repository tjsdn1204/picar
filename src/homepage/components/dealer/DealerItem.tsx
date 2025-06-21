import React from 'react';
import './style.css';

export interface DealerItemProps {
  name: string;
  position: string;
  company: string;
  rating: number;
  imageUrl: string;
}

const DealerItem: React.FC<DealerItemProps> = ({
  name,
  position,
  company,
  rating,
  imageUrl,
}) => {
  return (
    <div className="dealer-card-vertical">
      <div className="dealer-image-wrapper">
        <img src={imageUrl} alt={`${name} 사진`} className="dealer-image-full" />
        <div className="dealer-rating-badge">
          <img src="/icons/star.svg" alt="별 아이콘" className="star-icon" />
          <span>{rating.toFixed(1)}</span>
        </div>
      </div>

      <div className="dealer-info-block">
        <div className="dealer-name-line">
          <span className="dealer-name-bold">{name}</span>
          <span className="dealer-position">{position}</span>
        </div>
        <div className="dealer-company">{company}</div>
      </div>
    </div>
  );
};

export default DealerItem;