import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import DealerProfileCard from '../components/DealerProfileCard';
import CarListSlider from '../components/CarListSlider';
import DealerLocation from '../components/DealerLocation';

const DealerDetailPage = () => {
  return (
    <div className="app-wrapper">
      <NavBar title="딜러 상세 정보" />
      <main>
        <DealerProfileCard />
        <CarListSlider />
        <DealerLocation />
      </main>
      <Footer />
    </div>
  );
};

export default DealerDetailPage;