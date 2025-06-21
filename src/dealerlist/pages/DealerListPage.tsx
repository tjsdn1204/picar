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

// 쿼리 파라미터 파싱용 커스텀 훅
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
                id={dealer.id} // ✅ 차량 ID 정확히 넘기기
                name={dealer.dealerName}
                rating={4.8} // 임시 고정값
                reviews={0} // 임시 고정값
                image={dealer.imagePaths[0]}
                profile={dealer.dealerImagePath}
                price={dealer.priceMax}
                year={`${dealer.modelYear}년식`}
                distance={`${(dealer.mileage / 10000).toFixed(1)}만 km`}
                comment={dealer.specialNote.replace(/ \/ /g, ' / ')}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
