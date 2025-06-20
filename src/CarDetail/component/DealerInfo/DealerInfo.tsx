import { type DealerInfoProps } from '../../types/carType';
import {ReactComponent as RightArrow} from "../../../assets/right_arrow.svg"
import './DealerInfo.css';

const DealerInfo: React.FC<DealerInfoProps> = ({ dealer, onDealerDetail }) => {
  const {id, name, title, company, description, profileImage} = dealer;

  const handleClick = (): void => {
    onDealerDetail(id);
  }

  return (
    <div className="dealer-info">
      <h3 className="dealer-section-title">담당딜러</h3>
      
      <div className="dealer-card">
        <div className="dealer-img-container">
            <img 
              src={profileImage} 
              alt={`${name} 프로필`}
              className="dealer-img"/>
        </div>
        <div className="dealer-content">
          <div className="dealer-name-section">
            <span className="dealer-name">{name}</span>
            <span className="dealer-title">{title}</span>
          </div>
          <span className="dealer-company">{company}</span>
          <span className="dealer-description">{description}</span>
          <button className="dealer-more-btn" onClick={handleClick}>
            <span>자세히 보기</span>
            <div className="right-arrow"><RightArrow/></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealerInfo;