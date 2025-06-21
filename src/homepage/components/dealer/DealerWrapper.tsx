import React, { useEffect, useState } from 'react';
import './style.css';
import DealerItem from './DealerItem';
import { dealerAPI } from '../../../global/api/Axios';

interface Dealer {
  id: string;
  name: string;
  position: string;
  company: string;
  rating: number;
  imageUrl: string;
}

const DealerWrapper: React.FC = () => {
  const [dealers, setDealers] = useState<Dealer[]>([]);

  useEffect(() => {
    dealerAPI.getDealers().then((res) => {
      if (res.success && res.data) {
        const mapped = res.data.map((dealer: any) => ({
          id: String(dealer.id),
          name: dealer.name,
          position: dealer.position, // ✅ 정상 필드명
          company: dealer.affiliation,
          rating: 4.7,
          imageUrl: dealer.imagePath,
        }));
        setDealers(mapped);
      }
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
