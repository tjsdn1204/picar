import React from 'react';
import './style.css';

interface DealerLocationProps {
  address: string;
}

export default function DealerLocation({ address }: DealerLocationProps) {
  return (
    <div className="dealer-location">
      <p className="location-title">딜러 위치</p>
      <p className="location-address">{address}</p>
    </div>
  );
}