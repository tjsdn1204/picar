import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiUser } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa';
import { MdSmartToy } from 'react-icons/md';

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <nav style={styles.nav}>
      <NavItem label="홈" onClick={() => navigate('/')}>
        <span style={styles.logo}>P!</span>
      </NavItem>
      <NavItem label="검색">
        <FiSearch size={22} />
      </NavItem>
      <NavItem label="AI 추천">
        <MdSmartToy size={22} />
      </NavItem>
      <NavItem label="찜">
        <FaRegHeart size={22} />
      </NavItem>
      <NavItem label="마이페이지">
        <FiUser size={22} />
      </NavItem>
    </nav>
  );
}

function NavItem({ children, label, onClick }) {
  return (
    <div style={styles.item} onClick={onClick}>
      {children}
      <span style={styles.label}>{label}</span>
    </div>
  );
}

const styles = {
  nav: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '375px',
    height: '82px',
    padding: '8px 16px 36px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#FFFFFF',
    borderTop: '1.2px solid #EBEBED',
    borderRight: '1.2px solid #EBEBED',
    borderLeft: '1.2px solid #EBEBED',
    borderRadius: '12px 12px 0px 0px',
    boxSizing: 'border-box',
    zIndex: 999,
    margin: '0 auto',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '11px',
    color: '#121212',
    cursor: 'pointer',
  },
  label: {
    marginTop: '4px',
    fontWeight: '400',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '20px',
  },
};
