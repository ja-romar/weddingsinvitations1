import React from "react";
import LogoTuMomento from "../../assets/svg/logo_tumomento.svg";
import "./styles.css";
export const Footer = () => {
  return (
    <div className="footer-container-principal ">
      <div className="footer-container">
        <img src={LogoTuMomento} alt="LogoTuMomento" />
        <h1>Tu momento</h1>
      </div>
    </div>
  );
};
