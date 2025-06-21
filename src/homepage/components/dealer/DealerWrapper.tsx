import React, { useEffect, useState } from 'react';
import './style.css';
import DealerItem from './DealerItem';
import axios from 'axios';

interface Dealer {
  id: string;
  name: string;
  position: string;
  company: string;
  rating: number;        // 👈 없으므로 임의 값 넣자
  imageUrl: string;
}

const DealerWrapper: React.FC = () => {
  const [dealers, setDealers] = useState<Dealer[]>([]);

  useEffect(() => {
    axios.get('/api/dealers')
      .then((res) => {
        const mapped = res.data.map((dealer: any) => ({
          id: String(dealer.id),
          name: dealer.name,
          position: dealer.position,
          company: dealer.affiliation,             // 이름 맞춤
          rating: 4.7,                              // 임의 평점 (추후 API 확장 가능)
          imageUrl: dealer.imagePath               // 이름 맞춤
        }));
        setDealers(mapped);
      })
      .catch((err) => {
        console.error('❌ 딜러 목록 가져오기 실패:', err);
      });
  }, []);

  return (
    <div className="dealer-wrapper">
      <div className="dealer-title-bar">
        <span className="dealer-title-text">픽카에서 검증된 딜러예요!</span>
        <span className="dealer-title-icon">❯</span>
      </div>

      <div className="dealer-wrapper-scroll">
        {dealers.map((dealer) => (
          <DealerItem key={dealer.id} {...dealer} />
        ))}
      </div>
    </div>
  );
};

export default DealerWrapper;
