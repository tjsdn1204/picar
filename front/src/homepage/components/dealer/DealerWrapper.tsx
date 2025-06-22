import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import DealerItem from './DealerItem';
import { dealerAPI } from '../../../global/api/Axios'; // ✅ 실제 API 사용

interface Dealer {
  id: number;
  name: string;
  position: string;
  company: string;
  rating: number;
  imageUrl: string;
}

const DealerWrapper: React.FC = () => {
  const [dealers, setDealers] = useState<Dealer[]>([]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [start, setStart] = useState(0);
  const [startPageX, setStartPageX] = useState(0);
  const [endPageX, setEndPageX] = useState(0);

  const navigate = useNavigate();
  
  const onMouseDown = (event) => {
    event.preventDefault();
    setIsDrag(true);
    if (scrollRef.current) {
      setStart(event.pageX + scrollRef.current.scrollLeft);
      setStartPageX(event.pageX);
    }
  }

  const onDragMove = (event) => {
    if (isDrag) {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft = start - event.pageX;
      }
    }
  }

  const onMouseUp = (event) => {
    setEndPageX(event.pageX);
    setIsDrag(false);
  }


  useEffect(() => {
    // ✅ 실제 API 사용
    dealerAPI.getDealers().then((res) => {
      if (res.success && res.data) {
        const mapped = res.data.map((dealer: any) => ({
          id: dealer.id,
          name: dealer.name,
          position: dealer.position,
          company: dealer.affiliation,
          rating: 4.7,
          imageUrl: dealer.imagePath,
        }));
        setDealers(mapped);
      }
    });

    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    }
  }, []);

  const handleClick = (id: number): void => {
    if (startPageX - endPageX == 0) {
      navigate(`/dealerdetail/${id}`);
    }
  }

  return (
    <div className="dealer-wrapper">
      <div className="dealer-title-bar">
        <span className="dealer-title-text">픽카에서 검증된 딜러예요!</span>
        <span className="dealer-title-icon">❯</span>
      </div>
      <div className="dealer-wrapper-scroll"
        onMouseDown={onMouseDown}
        onMouseMove={isDrag ? onDragMove : undefined}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        ref={scrollRef}>
        {dealers.map((dealer) => (
          <DealerItem key={dealer.id} {...dealer} onClick={isDrag ? () => {} : () => handleClick(dealer.id)}/>
        ))}
      </div>
    </div>
  );
};

export default DealerWrapper;