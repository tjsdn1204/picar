// src/dealerlist/layout/NavBar.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'; // CSS는 아래에 있음

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="dealerlist-navbar">
      <div className="nav-left">
        <img
          src="/icons/arrow_left.svg"
          alt="뒤로가기"
          className="back-icon"
          onClick={() => navigate(-1)}
        />
      </div>
      <div className="nav-center">
        <span className="dealerlist-title">보유 중인 딜러</span>
      </div>
      <div className="nav-right">{/* 오른쪽 여백용 */}</div>
    </div>
  );
}
