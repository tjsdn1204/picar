// src/dealerlist/components/Header.tsx
import React from 'react';
import './style.css';

type HeaderProps = {
  modelName: string;
};

export default function Header({ modelName }: HeaderProps) {
  return (
    <div className="dealer-intro">
      <p className="dealer-title">
        <span className="highlight">{modelName}</span>를 보유중인 딜러예요.
      </p>
      <p className="dealer-subtitle">
        픽카의 엄격한 심사를 통과한 딜러분들이에요.
      </p>
    </div>
  );
}
