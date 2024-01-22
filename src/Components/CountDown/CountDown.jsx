import React from "react";
import RosaIMG from "../../assets/svg/ROSA1.svg";
import RosaIMG2 from "../../assets/svg/ROSA2.svg";
import "./styles.css";
export const CountDown = ({ date }) => {
  return (
    <div className="container-principal-countDown">
      <div className="container-date">
        <div className="date">
          <h3>Faltan</h3>
          <p>{date}</p>
        </div>

        <img
          src={RosaIMG}
          width="250px"
          height="250px"
          alt="RosaIMG"
          className="rosa-img"
        />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};
