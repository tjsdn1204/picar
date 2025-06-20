import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../layout/NavBar';
import Header from '../components/Header';
import DealerCard from '../components/DealerCard';

import '../layout/style.css';
import '../components/style.css';
import '../pages/style.css';

// 쿼리스트링 파싱용 헬퍼
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function DealerListPage() {
  const query = useQuery();
  const modelName = query.get('model') || '차량';

  // 더미 딜러 데이터
  const dealerList = [
    {
      name: '문종수 부장',
      rating: 4.7,
      reviews: 86,
      image: '/images/car_bmw320d.png',
      profile: '/images/profile_moon.png',
      price: 4150,
      year: '20/12식',
      distance: '3만 km',
      comment: '무사고 / 비흡연자 차량',
    },
    {
      name: '김지훈 팀장',
      rating: 4.9,
      reviews: 123,
      image: '/images/car_bmw320d_2.png',
      profile: '/images/profile_kim.png',
      price: 3990,
      year: '21/03식',
      distance: '2.5만 km',
      comment: '무사고 / 1인 소유',
    },
    // ...더 추가 가능
  ];

  return (
    <div className="dealerlist-page-wrapper">
      <NavBar />
      <div className="dealerlist-page-content">
        <Header modelName={modelName} />

        <div className="dealerlist-card-list">
          {dealerList.map((dealer, index) => (
            <DealerCard key={index} {...dealer} />
          ))}
        </div>
      </div>
    </div>
  );
}
