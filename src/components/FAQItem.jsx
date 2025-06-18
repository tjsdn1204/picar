import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <span style={styles.qIcon}>Q</span>
        <span style={styles.question}>{question}</span>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </div>

      {isOpen && (
        <div style={styles.body}>
          <span style={styles.qIcon}>Q</span>
          <div>
            <strong style={{ display: 'block', marginBottom: '6px' }}>{question}</strong>
            <p style={styles.answer}>{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '14px 11px',
    marginBottom: '12px',
    boxShadow: '0px 0px 6px rgba(0,0,0,0.06)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    gap: '8px',
  },
  qIcon: {
    color: '#00C851', // 연두색 느낌
    fontWeight: 'bold',
  },
  question: {
    flex: 1,
    fontSize: '14px',
  },
  body: {
    marginTop: '12px',
    display: 'flex',
    gap: '10px',
    fontSize: '13px',
    lineHeight: '1.5',
  },
  answer: {
    margin: 0,
    color: '#444',
  },
};
