import React from 'react';
import SearchingBar from '../components/SearchingBar';
import BannerCard from '../components/BannerCard';
import DealerCarousel from '../components/DealerCarousel';
import AiRecommendCard from '../components/AiRecommendCard';
import FAQList from '../components/FAQList';

export default function Home() {
  return (
    <div style={styles.pageWrapper}>
      {/* 검색창 */}
      <div style={styles.section}>
        <SearchingBar />
      </div>

      {/* 라이프스타일 배너 */}
      <div style={styles.section}>
        <BannerCard />
      </div>

      {/* 딜러 리스트 */}
      <div style={styles.section}>
        <DealerCarousel />
      </div>

      {/* AI 추천 배너 */}
      <div style={styles.section}>
        <AiRecommendCard />
      </div>

      {/* 자주 묻는 질문 */}
      <div style={styles.section}>
        <FAQList />
      </div>
    </div>
  );
}

const styles = {
  pageWrapper: {
    paddingBottom: '100px', // NavBar 높이 확보
    maxWidth: '375px',
    margin: '0 auto',
    backgroundColor: '#FAFAFA',
  },
  section: {
    marginBottom: '24px',
  },
};