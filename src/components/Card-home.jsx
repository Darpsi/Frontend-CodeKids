import React from "react";
import "../assets/styles/Card-home.css";

const CardHome = ({ img, text, title, reverse = false }) => {
  return (
    <div className={`card-content ${reverse ? 'reverse-layout' : ''}`}>
      <div className="card-img">
        <img src={img} alt={title || "Imagen descriptiva"} />
      </div>
      <div className="card-text">
        {title && <h3 className="card-title">{title}</h3>}
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CardHome;