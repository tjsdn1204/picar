import React from 'react';
import { FiSearch } from 'react-icons/fi'; // 돋보기 아이콘

export default function SearchingBar() {
  return (
    <div style={styles.container}>
      <FiSearch size={20} color="#000000" />
      <input
        type="text"
        placeholder="홍창영님, 어떤 차가 궁금하세요?"
        style={styles.input}
      />
    </div>
  );
}

const styles = {
  container: {
    width: '335px',
    height: '52px',
    padding: '14px 16px',
    backgroundColor: '#F3F3F3',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  input: {
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    fontSize: '16px',
    flex: 1,
  },
};
