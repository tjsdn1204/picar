import "./CarBasicInfo.css"
import { type CarBasicInfoProps } from "../../types/CarType";

const CarBasicInfo: React.FC<CarBasicInfoProps> = ({carInfo}) => {
    const {id, model, subModel, year, month, registrationDate, mileage, price} = carInfo;

    const formatDate = (date: string): string => {
        date = date.substring(date.length-2, date.length);
        return date;
    }

    const formatMileage = (km: number): string => {
        return `${km.toLocaleString()} km`;
    }

    const formatPrice = (price: number): string => {
        price/=10000;
        return `${price.toLocaleString()}`;
    }

    return (
        <div className="car-basic-info">
            <div className="car-title-section">
                <h1 className="car-model">{model}</h1>
                <h2 className="car-sub-model">{subModel}</h2>
            </div>

            <div className="car-details">
                <span className="car-year">{formatDate(year)} / {formatDate(month)}({formatDate(registrationDate)}식) · {formatMileage(mileage)}</span>
            </div>

            <div className="car-price-section">
                <span className="car-price">{formatPrice(price)}</span>
                <span className="car-price-unit">만원</span>
            </div>
        </div>
    )
};

export default CarBasicInfo;