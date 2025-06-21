import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { dealerAPI } from '../../global/api/Axios';
import { DealerItem } from '../../global/api/Axios';

import DealerProfileCard from '../components/DealerProfileCard';
import CarListSlider from '../components/CarListSlider';
import DealerLocation from '../components/DealerLocation';

import './style.css'; // 👈 스타일 import

interface CarItem {
  id: number;
  image: string;
  title: string;
  price: number;
}

const DealerDetailPage: React.FC = () => {
  const { id } = useParams();
  const [dealer, setDealer] = useState<DealerItem | null>(null);
  const [cars, setCars] = useState<CarItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

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
          id: car.id,
          image: car.imagePaths[0],
          title: `${car.modelYear} ${car.brand} ${car.model}`,
          price: Math.round(car.priceMin + car.priceMax / 2),
        }));
        setCars(mapped);
      }
    };

    fetchData();
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!dealer) return <div>로딩 중...</div>;

  const onClick = (id: number):void => {
    const queryParam = new URLSearchParams({
      id: id.toString()
    }) 
    navigate(`/detail?${queryParam}`);
  }

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

        {cars.length > 0 && <CarListSlider carList={cars} onClick={onClick} />}

        <div className="section-divider" /> 
        
        <DealerLocation address="경기도 의왕시 계주구 율도로 123" />
      </main>
    </div>
  );
};

export default DealerDetailPage;