import React from 'react';
import './style.css';

interface DealerLocationProps {
  address: string;
}

export default function DealerLocation({ address }: DealerLocationProps) {
  return (
    <div className="dealer-location">
      <h2 className="location-title">딜러 위치</h2>
      <p className="location-address">{address}</p>
    </div>
  );
}
