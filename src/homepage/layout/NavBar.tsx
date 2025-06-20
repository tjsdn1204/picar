import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './style.css';

export default function NavBar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/dealerlist?model=${encodeURIComponent(search.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  const showSearch = location.pathname === '/';

  return (
    <div className="navbar-wrapper">
      <img src="/icons/Picar_Logo_Max.svg" alt="픽카 로고" className="site-logo" />

      {showSearch && (
        <div className="search-box">
          <img src="/icons/search.svg" alt="search" className="search-icon" />
          <input
            type="text"
            placeholder="홍창영님, 어떤 차가 궁금하세요?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      )}
    </div>
  );
}
