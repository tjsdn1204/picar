import React from 'react';

export default function BannerCard() {
  return (
    <div style={styles.card}>
      <div style={styles.textBlock}>
        <p style={styles.title}>지금 나에게 어울리는 차는?</p>
        <h3 style={styles.subtitle}>내 라이프 스타일 입력하고</h3>
        <button style={styles.button}>
          <span style={styles.gradientText}>AI 추천 받기</span> &gt;
        </button>
      </div>
      <img
        src="/images/car.png"
        alt="추천 차량"
        style={styles.image}
      />
    </div>
  );
}

const styles = {
  card: {
    display: 'flex',
    width: '335px',
    height: '100px',
    padding: '12px 16px',
    backgroundColor: '#F3F3F3',
    borderRadius: '12px',
    alignItems: 'center',
    gap: '40px',
    margin: '16px auto'
  },
  textBlock: {
    flex: 1,
  },
  title: {
    fontSize: '13px',
    margin: 0,
    color: '#000',
  },
  subtitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '4px 0',
  },
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    padding: 0,
    marginTop: '4px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  gradientText: {
    background: 'linear-gradient(90deg, #AEFF17 0%, #2DBFF4 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  image: {
    height: '76px',
    width: 'auto',
    objectFit: 'contain',
  },
};
