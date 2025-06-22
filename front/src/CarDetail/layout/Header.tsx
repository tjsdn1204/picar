import React from "react";
import {ReactComponent as LeftArrow} from "../../assets/left_arrow.svg";
import {ReactComponent as Heart} from "../../assets/heart.svg";
import type { HeaderProps } from "../types/carType";
import "./Header.css";

const Header: React.FC<HeaderProps> = ({goToPrevious}) => {
    return (
    <div className="car-detail-header">
        <div className="car-detail-arrow-left" onClick={goToPrevious}>
            <LeftArrow />
        </div>
        <div className="car-detail-heart">
            <Heart />
        </div>
    </div> );

}

export default Header;