import React from 'react';
import './style.css';

const Footer: React.FC = () => {
  return (
    <footer className="bottom-footer">
      <button className="footer-item">
        <img src="/icons/logo.svg" alt="홈" />
        <span>홈</span>
      </button>
      <button className="footer-item">
        <img src="/icons/search.svg" alt="검색" />
        <span>검색</span>
      </button>
      <button className="footer-item">
        <img src="/icons/AI_Chat.svg" alt="AI 추천" />
        <span>AI 추천</span>
      </button>
      <button className="footer-item">
        <img src="/icons/heart.svg" alt="찜" />
        <span>찜</span>
      </button>
      <button className="footer-item">
        <img src="/icons/profile.svg" alt="마이페이지" />
        <span>마이페이지</span>
      </button>
    </footer>
  );
};

export default Footer;