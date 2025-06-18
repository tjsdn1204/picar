import React from 'react';

export default function DealerCard({ name, title, company, rating, image }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <div style={styles.rating}>
        <span style={styles.star}>★</span>
        <span style={styles.ratingText}>{rating}</span>
      </div>
      <div style={styles.nameBox}>
        <strong>{name}</strong> <span>{title}</span>
      </div>
      <p style={styles.company}>{company}</p>
    </div>
  );
}

const styles = {
  card: {
    width: '140px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.16)',
    marginRight: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '160px',
    objectFit: 'cover',
  },
  rating: {
    position: 'absolute',
    marginTop: '8px',
    marginLeft: '8px',
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '2px 6px',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '2px'
  },
  star: {
    color: '#2DA8F4',
    fontWeight: 'bold',
  },
  ratingText: {
    color: '#2DA8F4',
    fontWeight: 'bold',
  },
  nameBox: {
    backgroundColor: '#C2F000', // LimeDark
    width: '100%',
    textAlign: 'center',
    padding: '6px 0',
    fontSize: '15px',
    fontWeight: 'bold',
    color: '#000',
  },
  company: {
    fontSize: '12px',
    textAlign: 'center',
    padding: '6px',
    margin: 0,
  }
};
