import React, { useState } from 'react';
import './style.css';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        className={`faq-question ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <div className="faq-question-left">
          <span className="faq-q-gradient">Q</span>
          <span className="faq-question-text">{question}</span>
        </div>
        <span className="faq-arrow">{open ? '⌃' : '⌵'}</span>
      </button>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

export default FaqItem;