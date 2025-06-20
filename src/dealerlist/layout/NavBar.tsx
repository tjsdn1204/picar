// src/dealerlist/layout/NavBar.tsx
import React from 'react';
import './style.css';

export default function NavBar() {
  return (
    <div className="dealerlist-navbar">
      <img src="/icons/arrow_left.svg" alt="뒤로가기" className="back-icon" />
      <span className="title">보유 중인 딜러</span>
    </div>
  );
}