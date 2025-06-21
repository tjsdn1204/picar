import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../layout/NavBar';
import Header from '../components/Header';
import DealerCard from '../components/DealerCard';
import { carAPI } from '../../global/api/Axios';
import type { CarModelItem } from '../../global/api/Axios';

import '../layout/style.css';
import '../components/style.css';
import '../pages/style.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function DealerListPage() {
  const query = useQuery();
  const modelName = query.get('model') || '차량';
  const words = modelName.split(' ');
  const model = words.length >= 2 ? words[1] : modelName;

  const [dealerList, setDealerList] = useState<CarModelItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await carAPI.getCarsByModel(model);
      if (res.success) {
        setDealerList(res.data);
      } else {
        setError(res.error ?? '데이터를 불러오지 못했습니다.');
      }
    };

    fetchData();
  }, [modelName]);

  return (
    <div className="app-wrapper">
      <div className="dealerlist-page-wrapper">
        <NavBar />
        <div className="dealerlist-page-content">
          <Header modelName={modelName} />

          {error && <div className="error-text">{error}</div>}

          <div className="dealerlist-card-list">
            {dealerList.map((dealer, index) => (
              <DealerCard
                key={index}
                name={dealer.dealerName}
                rating={dealer.priceMax / 1000} // 예: 4.8 이런 식으로
                reviews={0} // 리뷰 수가 없으므로 임의
                image={dealer.imagePaths[0]}
                profile={dealer.dealerImagePath}
                price={dealer.priceMax}
                year={`${dealer.modelYear}년식`}
                distance={`${(dealer.mileage / 10000).toFixed(1)}만 km`}
                comment={dealer.specialNote.replace(/ \/ /g, ' / ')} // A / B 형태로
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
