import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import CarCard from './CarCard';

interface CarItem {
  id: number;
  image: string;
  title: string;
  price: number;
}

interface CarListSliderProps {
  carList: CarItem[];
  onClick?: (id: number) => void;
}

const CarListSlider: React.FC<CarListSliderProps> = ({ carList, onClick }) => {

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [start, setStart] = useState(0);

  const [startPageX, setStartPageX] = useState(0);
  const [endPageX, setEndPageX] = useState(0);

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
  };

  const onMouseUp = (event) => {
    setEndPageX(event.pageX);
    setIsDrag(false);
  };

  const handleClick = (carId: number) => {
    if (startPageX - endPageX == 0) {
      onClick(carId);
    }
  }
  
  useEffect(() => {
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
    };
  }, []);
  
  return (
    <div className="car-slider-wrapper">
      <span className="car-slider-title"> 판매 중인 매물 </span>
      <div className="car-list-slider" 
            onMouseDown={onMouseDown}
            onMouseMove={isDrag ? onDragMove : undefined}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            ref={scrollRef}>
        {carList.map((car, idx) => (
          <div className="car-card-wrapper" key={idx}>
            <CarCard {...car} onClick={handleClick} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarListSlider;