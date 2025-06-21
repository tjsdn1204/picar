import Header from "../layout/Header.tsx"
import ProgressBar from '../components/progressBar/ProgressBar.tsx';
import './style.css';

const Layout = () => {
  return (
    <div className="survey-complete-container">
        {/* Header */}
        <Header title="개인 기본 정보"/>
        <ProgressBar progress={100}/>

        {/* Main Content */}
        <div className="survey-complete-content">
            <h1 className="survey-complete-content-title">조사완료!</h1>
            <p className="survey-complete-content-subtitle">고생하셨어요!</p>
        </div>
    </div>
  );
};

export default Layout;