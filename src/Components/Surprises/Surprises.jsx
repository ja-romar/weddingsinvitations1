import React, { useState } from "react";
import "./styles.css";
import { Separator } from "../Atoms/Separator/Separator";
export const Surprises = ({ surprises }) => {
  const [elementoExtendido, setElementoExtendido] = useState(1);

  const handleClick = (id) => {
    setElementoExtendido(id === elementoExtendido ? null : id);
  };
  return (
    <div className="surprises-container-principal">
      <div className="surprises-container">
        <h1>
          Sorpresas
          <span>
            <Separator />
          </span>
        </h1>
        <div className="surprises-cards">
          {surprises.map((surprise) => (
            <div
              className={`surprise-container ${
                elementoExtendido === surprise.id ? "extendido" : ""
              }`}
              style={{ flex: elementoExtendido === surprise.id ? 8 : 1 }}
              key={surprise.id}
              onClick={() => handleClick(surprise.id)}
            >
              <img
                height="168px"
                src={surprise.img}
                alt={surprise.img}
                width="100%"
              />
              <p>
                {elementoExtendido === surprise.id
                  ? surprise.title
                  : surprise.id}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
