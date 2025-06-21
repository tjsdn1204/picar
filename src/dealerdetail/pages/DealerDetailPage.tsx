// DealerDetailPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dealerAPI } from '../../global/api/Axios';
import { DealerItem } from '../../global/api/Axios';

import NavBar from '../layout/NavBar';
import DealerProfileCard from '../components/DealerProfileCard';
import CarListSlider from '../components/CarListSlider';
import DealerLocation from '../components/DealerLocation';

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
          image: car.imagePaths[0], // 첫 번째 이미지 사용
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
    <div className="app-wrapper">
      <main>
        <DealerProfileCard
          name={dealer.name}
          company={dealer.affiliation}
          score={4.7}
          totalScore={5}
          rankPercent="상위 5%"
          profileImage={dealer.imagePath}
        />

        {cars.length > 0 && <CarListSlider carList={cars} />}

        <DealerLocation address="경기도 의왕시 계주구 율도로 123" />
      </main>
    </div>
  );
};

export default DealerDetailPage;