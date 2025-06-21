import { type DealerInfoProps } from '../../types/carType';
import {ReactComponent as RightArrow} from "../../../assets/right_arrow.svg"
import './DealerInfo.css';

const DealerInfo: React.FC<DealerInfoProps> = ({ dealer, onDealerDetail }) => {
  const {id, name, title, company, description, profileImage} = dealer;

  const handleClick = (): void => {
    onDealerDetail(id);
  }

  return (
    <div className="dealer-info-page">
      <h3 className="dealer-info-section-title">담당딜러</h3>
      
      <div className="dealer-info-card">
        <div className="dealer-info-img-container">
            <img 
              src={profileImage} 
              alt={`${name} 프로필`}
              className="dealer-info-img"/>
        </div>
        <div className="dealer-info-content">
          <div className="dealer-info-name-section">
            <span className="dealer-info-name">{name}</span>
            <span className="dealer-info-title">{title}</span>
          </div>
          <span className="dealer-info-company">{company}</span>
          <span className="dealer-info-description">{description}</span>
          <button className="dealer-info-more-btn" onClick={handleClick}>
            <span>자세히 보기</span>
            <div className="right-arrow"><RightArrow/></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealerInfo;