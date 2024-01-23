import React from "react";
import { Separator } from "../Atoms/Separator/Separator";
import "./styles.css";
export const DressCode = ({ images }) => {
  const containerStyle = {
    backgroundSize: "cover",
    backgroundPosition: "top center",
    width: "100%",
    height: "100%",
  };
  return (
    <div className="dresscode-container-principal">
      <div className="dresscode-container">
        <h1>Dress Code</h1>
        <Separator />
        <div className="dresscode-container-cards">
          {images.map((image) => (
            <div
              className="dresscode-cards"
              key={image?.id}
              style={{
                backgroundImage: `url(${image?.img})`,
                ...containerStyle,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
