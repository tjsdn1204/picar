import React from 'react';
import './style.css';
import CarCard from './CarCard';

const carList = [
  {
    image: '/images/car_sm6.png',
    title: '르노코리아(삼성) 더 뉴 SM6 1.8TCe 프리미엄',
    price: 2160,
  },
  {
    image: '/images/car_grandeur.png',
    title: '현대 그랜저 IG 3.0 익스클루시브 스페셜',
    price: 1950,
  },
  {
    image: '/images/car_golf.png',
    title: '폭스바겐 골프 8세대 2.0 TDI 프레스티지',
    price: 3140,
  },
  {
    image: '/images/car_k8.png',
    title: '기아 K8 2.5 가솔린 2WD 노블레스',
    price: 3245,
  },
  {
    image: '/images/car_bmw_m4.png',
    title: 'BMW M4 (F82) 쿠페 CS',
    price: 6980,
  },
];

export default function CarListSlider() {
  return (
    <div className="car-list-slider">
      {carList.map((car, idx) => (
        <CarCard key={idx} {...car} />
      ))}
    </div>
  );
}
