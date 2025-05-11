import React from "react";
import "../../assets/styles/home/Card-home.css";

const CardHome = ({ img, text}) => {
  return (
    <div className="card-contain">
        <div className="card-img">
            <img src={img} alt="imagen" />     
        </div>
        <div className="card-text">
            <p>{text}</p>
        </div>
    </div>
  );
};

export default CardHome;