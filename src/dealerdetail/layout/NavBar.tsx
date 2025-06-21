import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

interface NavBarProps {
  title: string;
}

export default function NavBar({ title }: NavBarProps) {
  const navigate = useNavigate();

  return (
    <div className="nav-bar">
      <button className="back-buttons" onClick={() => navigate(-1)}>
        <img src="/icons/arrow_left.svg" alt="뒤로가기" />
      </button>
      <h2 className="nav-title">{title}</h2>
      <div className="nav-right-space" /> {/* 우측 여백용 (공간 맞추기) */}
    </div>
  );
}
