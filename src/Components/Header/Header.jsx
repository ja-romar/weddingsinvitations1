import React from "react";
import "./styles.css";
export const Header = ({ image, title, date }) => {
  const containerStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "80% center",
    width: "100%", // Cover the full width of the container
    height: "5000px",
  };

  return (
    <div style={containerStyle}>
      <div className="container-info-header">
        <div className="information">
          <h1>{title}</h1>
          <p className="container-info-date">{date}</p>
        </div>
      </div>
    </div>
  );
};
