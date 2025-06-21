// DealerDetailPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import DealerProfileCard from '../components/DealerProfileCard';
import CarListSlider from '../components/CarListSlider';
import DealerLocation from '../components/DealerLocation';

interface DealerType {
  name: string;
  company: string;
  score: number;
  totalScore: number;
  rankPercent: string;
  profileImage: string;
}

interface CarItem {
  image: string;
  title: string;
  price: number;
}

const DealerDetailPage: React.FC = () => {
  const { id } = useParams();
  const [dealer, setDealer] = useState<DealerType | null>(null);
  const [cars, setCars] = useState<CarItem[]>([]);

  useEffect(() => {
    axios.get(`/api/dealers/${id}`)
      .then((res) => setDealer(res.data as DealerType))
      .catch((err) => console.error(err));

    axios.get(`/api/dealers/${id}/cars`)
      .then((res) => setCars(res.data as CarItem[]))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="app-wrapper">
      <NavBar title="딜러 상세" />
      <main>
        {dealer && (
          <DealerProfileCard
            name={dealer.name}
            company={dealer.company}
            score={dealer.score}
            totalScore={dealer.totalScore}
            rankPercent={dealer.rankPercent}
            profileImage={dealer.profileImage}
          />
        )}

        {cars.length > 0 && <CarListSlider carList={cars} />}

        {dealer && <DealerLocation address="경기 의왕시 계주구 율도로 123" />} {/* 주소는 예시 */}
      </main>
    </div>
  );
};

export default DealerDetailPage;
