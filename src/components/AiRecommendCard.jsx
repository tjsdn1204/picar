import React from 'react';

export default function AiRecommendCard() {
  return (
    <div style={styles.card}>
      <div style={styles.textBox}>
        <p style={styles.title}>오직, 당신만을 위한</p>
        <h3 style={styles.subtitle}>
          픽카의 <span style={styles.accent}>AI 맞춤 차량 추천!</span>
        </h3>
        <button style={styles.button}>AI 추천 과정 보기 &gt;</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: '335px',
    height: '416px',
    padding: '24px',
    borderRadius: '12px',
    backgroundImage: 'url(/images/key.jpg)', // 배경 이미지 경로는 프로젝트에 맞게 조정
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '10px',
    color: '#000',
    margin: '0 auto',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
  },
  textBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: '8px',
    padding: '16px',
  },
  title: {
    fontSize: '14px',
    margin: '0 0 4px 0',
  },
  subtitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0 0 8px 0',
    lineHeight: 1.4,
  },
  accent: {
    color: '#2DC5F4', // 피그마 시안에 가까운 파란색
  },
  button: {
    background: 'transparent',
    border: 'none',
    color: '#2DC5F4',
    fontSize: '14px',
    fontWeight: 'bold',
    padding: 0,
    cursor: 'pointer',
  },
};