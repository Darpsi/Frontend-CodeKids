import React from "react";
import "../../assets/styles/home/Card-home2.css";

const CardHome2 = ({ img, text, reverse = false }) => {
    return (
        <div className={`card-contain2 ${reverse ? 'reverse' : ''}`}>
            <div className="card-img2">
                <img src={img} alt="imagen" />     
            </div>
            <div className="card-text2">
                <p>{text}</p>
            </div>
        </div>    
    ) 
}

export default CardHome2;
