import React from 'react';
import FAQItem from './FAQItem';

const faqData = [
  {
    question: '어떻게 저에게 맞는 차량을 추천해주나요?',
    answer:
      '몇 가지 간단한 질문에 답해주시면, AI가 라이프스타일과 차량 사용 목적, 선호도를 분석해 최적의 차량을 추천해드립니다.',
  },
  {
    question: '추천 차량을 실제로 구매하려면 어떻게 하나요?',
    answer:
      '추천 결과에 따라 픽카 인증 딜러에게 연결해드립니다. 상담 후 직접 시승 및 구매가 가능합니다.',
  },
  {
    question: '제 정보는 안전하게 관리되나요?',
    answer:
      '모든 개인정보는 암호화되어 저장되며, 마케팅 목적 외 제3자 제공은 절대 없습니다.',
  },
];

export default function FAQList() {
  return (
    <div style={styles.wrapper}>
      <h3 style={styles.title}>자주 묻는 질문</h3>
      {faqData.map((item, idx) => (
        <FAQItem key={idx} {...item} />
      ))}
    </div>
  );
}

const styles = {
  wrapper: {
    padding: '20px',
  },
  title: {
    marginBottom: '16px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};
