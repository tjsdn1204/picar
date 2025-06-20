import React from 'react';
import './style.css';

const NavBar: React.FC = () => {
  return (
    <div className="search-bar">
      <img src="/icons/search.svg" alt="search" className="search-icon" />
      <input
        className="search-input"
        type="text"
        placeholder="홍창영님, 어떤 차가 궁금하세요?"
      />
    </div>
  );
};

export default NavBar;
