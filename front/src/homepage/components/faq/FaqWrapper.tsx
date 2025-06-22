import React from 'react';
import FaqItem from './FaqItem';
import './style.css';

const faqData = [
  {
    question: '딜러는 어떤 기준으로 추천되나요?',
    answer: '이용자의 지역, 차량 선호도 등을 바탕으로 매칭된 딜러를 추천합니다.',
  },
  {
    question: '차량 구매 후에도 지원을 받을 수 있나요?',
    answer: '네. 구매 후 A/S 지원 및 보험 안내까지 도와드립니다.',
  },
  {
    question: 'AI 추천은 어떻게 이루어지나요?',
    answer: '사용자의 검색 이력과 조건에 따라 적합한 차량을 추천합니다.',
  },
];

const FaqWrapper: React.FC = () => {
  return (
    <div className="faq-wrapper">
      <h2 className="faq-title">자주 묻는 질문</h2>
      {faqData.map((item, idx) => (
        <FaqItem key={idx} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FaqWrapper;