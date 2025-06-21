import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dealerAPI } from '../../global/api/Axios';
import { DealerItem } from '../../global/api/Axios';

import DealerProfileCard from '../components/DealerProfileCard';
import CarListSlider from '../components/CarListSlider';
import DealerLocation from '../components/DealerLocation';

import './style.css'; // 👈 스타일 import

interface CarItem {
  image: string;
  title: string;
  price: number;
}

const DealerDetailPage: React.FC = () => {
  const { id } = useParams();
  const [dealer, setDealer] = useState<DealerItem | null>(null);
  const [cars, setCars] = useState<CarItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const useDummy = true; // ✅ 더미 데이터 사용

    if (useDummy) {
      const dummyDealer: DealerItem = {
        id: 1,
        name: '최지원',
        affiliation: '멋사중고차',
        position: '실장',
        imagePath: '/images/dealer1.png',
      };

      const dummyCars: CarItem[] = [
        {
          image: '/images/car1.png',
          title: '2020 현대 아반떼',
          price: 1350,
        },
        {
          image: '/images/car2.png',
          title: '2019 기아 K5',
          price: 1580,
        },
        {
          image: '/images/car3.png',
          title: '2021 쉐보레 스파크',
          price: 920,
        },
      ];

      setDealer(dummyDealer);
      setCars(dummyCars);
      return;
    }

    if (!id) return;

    const fetchData = async () => {
      const dealerRes = await dealerAPI.getDealerById(id);
      if (dealerRes.success && dealerRes.data) {
        setDealer(dealerRes.data);
      } else {
        setError(dealerRes.error || '딜러 정보를 불러올 수 없습니다.');
      }

      const carRes = await dealerAPI.getDealerCars(Number(id));
      if (carRes.success && carRes.data) {
        const mapped = carRes.data.map((car: any) => ({
          image: car.imagePaths[0],
          title: `${car.modelYear} ${car.brand} ${car.model}`,
          price: car.priceMin,
        }));
        setCars(mapped);
      }
    };

    fetchData();
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!dealer) return <div>로딩 중...</div>;

  return (
    <div className="dealer-detail-page">
      <main className="dealer-detail-container">
        <DealerProfileCard
          name={dealer.name}
          position={dealer.position}
          company={dealer.affiliation}
          profileImage={dealer.imagePath}
        />
        <div className="section-divider" /> 

        {cars.length > 0 && <CarListSlider carList={cars} />}

        <div className="section-divider" /> 
        
        <DealerLocation address="경기도 의왕시 계주구 율도로 123" />
      </main>
    </div>
  );
};

export default DealerDetailPage;
