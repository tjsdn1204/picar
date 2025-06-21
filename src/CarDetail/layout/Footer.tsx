import type { FooterProps } from '../types/carType';
import {ReactComponent as Telephone} from "../../assets/Telephone.svg"
import {ReactComponent as Chatting} from "../../assets/Chatting.svg"

import './Footer.css';

const Footer: React.FC<FooterProps> = ({ carId, carPrice, onCalc, onCalling, onChatting }) => {

    const formatPrice = (price: number): string => {
        return `${price.toLocaleString()} 만원`;
    }

    return (
        <div className="car-detail-footer">
            <div className="car-detail-footer-price-section">
                <p className="car-detail-footer-price">{formatPrice(carPrice)}</p>
                <button className="car-detail-footer-cost" onClick={() => onCalc(carId)}>
                    <span>총 비용 계산기 &gt; </span>
                </button>
            </div>
            <div className="car-detail-footer-btn-section">
                <button className="car-detail-footer-calling-button" onClick={() => onCalling(carId)} type="button">
                    <Telephone/> 전화 문의
                </button>
                <button className="car-detail-footer-chatting-button" onClick={() => onChatting(carId)} type="button">
                    <Chatting/> 채팅 문의
                </button>
            </div>
        </div>
    );
};

export default Footer;