import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dealer_Carousel.css"
import star from "../assets/star_filled.svg"

interface DealerProps {
    id: number;
    imgUrl: string;
    rating: number;
    name: string;
    jobGrade: string;
    company: string;
}

const Dealer_Carousel: React.FC<DealerProps> = ({id, imgUrl, rating, name, jobGrade, company}) => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/dealer/${id}`, {
            state: {id, imgUrl, rating, name, jobGrade, company}
        });
    };

    return (
        <div className="dealer-carousel" onClick={handleClick}>
            <div className="dealer-carousel-img">
                <img src={imgUrl} alt={name} />
            </div>
            <div className="dealer-carousel-rating">
                <img src={star} alt="start"/>
                <p>{rating.toFixed(1)}</p>
            </div>
            <div className="dealer-carousel-text">
                <div className="dealer-name-line">                
                    <p>{name}</p>
                    <p>{jobGrade}</p>
                </div>
                <p>{company}</p>
            </div>
        </div>
    );
}

export default Dealer_Carousel;