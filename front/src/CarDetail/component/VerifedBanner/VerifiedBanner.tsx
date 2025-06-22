import {ReactComponent as VerifiedIcon} from "../../../assets/Verified.svg";
import { type VerifiedBannerProps } from "../../types/carType";
import "./VerifiedBanner.css"

const VerifiedBanner: React.FC<VerifiedBannerProps> = ({description}) => {

    return (
        <div className="verified-banner">
            <VerifiedIcon />
            <p className="verified-banner-title">픽카 인증</p>
            <p className="verified-banner-description">{description}</p>
        </div>
    )
};

export default VerifiedBanner;