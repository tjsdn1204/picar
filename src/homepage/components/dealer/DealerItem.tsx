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
    <div className="dealer-card">
      <div className="dealer-image-container">
        <img src={imageUrl} alt={`${name} 사진`} className="dealer-image" />
        <div className="dealer-rating">
          <img src="/icons/star.svg" alt="별 아이콘" />
          <span>{rating.toFixed(1)}</span>
        </div>
      </div>

      <div className="dealer-info">
        <div className="dealer-title-row">
          <span className="dealer-name">{name}</span>
          <span className="dealer-position">{position}</span>
        </div>
        <div className="dealer-company">{company}</div>
      </div>
    </div>
  );
};

export default DealerItem;
