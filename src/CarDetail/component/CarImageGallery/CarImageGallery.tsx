// CarDetail/components/CarImageGallery/CarImageGallery.tsx
import React, { useState, useEffect, useRef } from 'react';
import { type CarImageGalleryProps } from '../../types/carType';
import './CarImageGallery.css';

const CarImageGallery: React.FC<CarImageGalleryProps> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null); // 스크롤 영역 지정하기
  const [isDrag, setIsDrag] = useState(false);
  const [start, setStart] = useState(0);

  const onMouseDown = (event) => {
    event.preventDefault();
    setIsDrag(true);
    if (scrollRef.current) {
      setStart(event.pageX + scrollRef.current.scrollLeft);
    }
  };

  const onDragMove = (event) => {
    if (isDrag) {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = start - event.pageX;
        }
    }
  };

  const onMouseUp = (event) => {
    setIsDrag(false);
  };

  // 마우스 휠 이벤트로 가로 스크롤 구현
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // 세로 스크롤을 가로 스크롤로 변환
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
    <div className="car-image-gallery">
      {/* 메인 이미지 */}
      <div className="main-image-container">
        <img 
          src={images[selectedImageIndex]} 
          alt="Car main view"
          className="main-car-image"/>
        <div className="image-number"> {selectedImageIndex + 1}/{images.length}</div>
      </div>
      
      {/* 썸네일 이미지들 - 가로 스크롤 */}
      <div className="thumbnail-wrapper">
        <div 
          className="thumbnail-container"
            onMouseDown={onMouseDown}
            onMouseMove={isDrag ? onDragMove : undefined}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            ref={scrollRef}>
          {images.map((image, index) => (
            <button
              key={index}
              className={`thumbnail-btn ${selectedImageIndex === index ? 'active' : ''}`}
              onClick={isDrag ? () => {} : () => setSelectedImageIndex(index)}
                >
              <img 
                src={image} 
                alt={`Car view ${index + 1}`}
                className="thumbnail-image"/>
              {selectedImageIndex === index && <div className="thumbnail-active-border" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarImageGallery;