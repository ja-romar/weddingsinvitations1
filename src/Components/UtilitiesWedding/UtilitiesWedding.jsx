import React from "react";
import "./styles.css";
export const UtilitiesWedding = ({ utilities }) => {
  return (
    <div className="utilitiesWedding-container-principal">
      <div className="utilitiesWedding-container">
        {utilities.map((utility) => (
          <div
            className={`utilitiesWedding-cards ${
              utility.isReverse ? "reverse-card" : ""
            }`}
            key={utility.id}
          >
            <img width="50%" src={utility.img} alt="utility.img" />
            <h2>{utility.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
