import React from "react";
import {ReactComponent as LeftArrow} from "../../assets/left_arrow.svg"
import "./Header.css"

const Header: React.FC<HeaderProps> = ({ title, goToPrevious = () => {} }) => {
    return (
    <div className="survey-header">
                <div className="survey-arrow-left" onClick={goToPrevious}>
                    <LeftArrow />
                </div>
        <div className="survey-title">{title}</div>
        <div className="survey-header-temp"></div>
    </div> );

}

export default Header;