import React from "react";
import "./Card.css";

const Card = ({
  title,
  value,
  change,
  className,
  Icon,
  backgroundColor,
  color,
  changeColor,
  Upicon,
}) => {
  return (
    <div className={`card-container ${className}`}>
      <div className="icon" style={{ backgroundColor, color }}>
        <Icon />
      </div>
      <picture className="card-title">{title}</picture>
      <div className="value-percent">
        <div className="card-value">
          <h1>{value}</h1>
        </div>
        <div className="arrowCardChangeContainer">
          <div
            className="arrow"
            style={{
              color: change.includes("-") ? "red" : "green",
              color: changeColor,
              marginTop:"25px",
              marginRight:"10px"
            }}
          >
            <Upicon />
          </div>
          <div
            className="card-change"
            style={{
              color: change.includes("-") ? "red" : "green",
              color: changeColor,
            }}
          >
            {change}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
