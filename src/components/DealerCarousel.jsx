import React from 'react';
import DealerCard from './DealerCard';

// 더미 딜러 목록
const dealers = [
  {
    name: '문종수',
    title: '부장',
    company: '성수자동차상사',
    rating: '4.7',
    image: '/images/dealer1.jpg',
  },
  {
    name: '장승호',
    title: '실장',
    company: '장안오토모빌',
    rating: '4.8',
    image: '/images/dealer2.jpg',
  },
  {
    name: '김태형',
    title: '실장',
    company: '강서모터스',
    rating: '4.6',
    image: '/images/dealer3.jpg',
  },
  {
    name: '한지석',
    title: '부장',
    company: '오토하우스빌드업',
    rating: '4.9',
    image: '/images/dealer4.jpg',
  },
];

export default function DealerCarousel() {
  return (
    <div style={{ padding: '20px' }}>
      <h3 style={{ marginBottom: '12px' }}>픽카에서 검증된 딜러예요!</h3>
      <div style={styles.carousel}>
        {dealers.map((dealer, idx) => (
          <DealerCard key={idx} {...dealer} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  carousel: {
    display: 'flex',
    overflowX: 'auto',
    paddingBottom: '10px',
  },
};
