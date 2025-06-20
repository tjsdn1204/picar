import React from 'react';
import './style.css';
import DealerItem from './DealerItem';

const dummyDealers = [
  {
    name: '문종수',
    position: '부장',
    company: '성수자동차상사',
    rating: 4.7,
    imageUrl: '/images/dealer1.jpg',
  },
  {
    name: '장승호',
    position: '실장',
    company: '장안오토모빌',
    rating: 4.8,
    imageUrl: '/images/dealer2.jpg',
  },
  {
    name: '김태형',
    position: '실장',
    company: '강서모터스',
    rating: 4.6,
    imageUrl: '/images/dealer3.jpg',
  },
];

const DealerWrapper: React.FC = () => {
  return (
    <div className="dealer-wrapper">
      <div className="dealer-title-bar">
        <span className="dealer-title-text">픽카에서 검증된 딜러예요!</span>
        <span className="dealer-title-icon">❯</span>
      </div>

      <div className="dealer-wrapper-scroll">
        {dummyDealers.map((dealer, idx) => (
          <DealerItem key={idx} {...dealer} />
        ))}
      </div>
    </div>
  );
};

export default DealerWrapper;
