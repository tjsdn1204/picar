import "./CarBasicInfo.css"
import { type CarBasicInfoProps } from "../../types/carType";

const CarBasicInfo: React.FC<CarBasicInfoProps> = ({carInfo}) => {
    const {id, brand, model, modelYear, releaseDate, mileage, price} = carInfo;

    const formatDate = (date: number): number => {
        date %= 100;
        return date;
    }

    const formatReleseDate = (releaseDate: string): string => {
        const date: Date = new Date(releaseDate);
        const year: string = String(date.getFullYear()).slice(2);
        const month: string = String(date.getMonth() + 1).padStart(2, '0');

        const formattedReleaseDate = `${year}/${month}`;
        return formattedReleaseDate;
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
            <div className="car-basic-info-title-section">
                <h1 className="car-basic-info-model">{brand}</h1>
                <h2 className="car-basic-info-sub-model">{model}</h2>
            </div>

            <div className="car-basic-info-details">
                <span className="car-basic-info-year">{formatReleseDate(releaseDate)}({formatDate(modelYear)}식) · {formatMileage(mileage)}</span>
            </div>

            <div className="car-basic-info-price-section">
                <span className="car-basic-info-price">{formatPrice(price)}</span>
                <span className="car-basic-info-price-unit">만원</span>
            </div>
        </div>
    )
};

export default CarBasicInfo;