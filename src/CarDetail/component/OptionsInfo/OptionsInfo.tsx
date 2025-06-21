import { type OptionsInfoProps } from '../../types/carType';
import './OptionsInfo.css';

const OptionsInfo: React.FC<OptionsInfoProps> = ({ options }) => {
  return (
    <div className="options-info">
      <div className="options-header">
        <h3 className="options-title">주요옵션</h3>
        <span className="options-count">{options.length}</span>
      </div>
      
      <div className="options-list">
        {options.map((option, index) => (
          <div key={index} className="option-item">
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionsInfo;