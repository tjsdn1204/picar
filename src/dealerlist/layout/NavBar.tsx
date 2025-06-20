import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="dealerlist-navbar">
      <img
        src="/icons/arrow_left.svg"
        alt="뒤로가기"
        className="back-icon"
        onClick={() => navigate(-1)}
      />
      <span className="dealerlist-title">보유 중인 딜러</span>
    </div>
  );
}