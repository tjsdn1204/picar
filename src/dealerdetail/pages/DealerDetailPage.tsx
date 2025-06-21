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
  const [dealer, setDealer] = useState<DealerItem | null>(null); // ✅ 타입 통일
  const [cars, setCars] = useState<CarItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const dealerRes = await dealerAPI.getDealerById(id);
      if (dealerRes.success && dealerRes.data) {
        setDealer(dealerRes.data); // ✅ 바로 할당
      } else {
        setError(dealerRes.error || '딜러 정보를 불러올 수 없습니다.');
      }

      const carRes = await dealerAPI.getDealerCars(id);
      if (carRes.success && carRes.data) {
        const mapped = carRes.data.map((car: any) => ({
          image: car.carImage,
          title: car.modelName,
          price: car.cost,
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
      <NavBar title="딜러 상세" />
      <main>
        <DealerProfileCard
          name={dealer.name}
          company={dealer.affiliation}
          score={4.7}
          totalScore={5}
          rankPercent="상위 5%"
          profileImage={dealer.dealerImg} // ✅ 필드 그대로 사용
        />

        {cars.length > 0 && <CarListSlider carList={cars} />}

        <DealerLocation address="경기도 의왕시 계주구 율도로 123" />
      </main>
    </div>
  );
};

export default DealerDetailPage;
