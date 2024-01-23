import React from "react";
import "./styles.css";
import { Separator } from "../Atoms/Separator/Separator";
export const Itinerary = ({ places }) => {
  const containerStyle = {
    backgroundSize: "cover",
    backgroundPosition: " center",
    width: "100%",
    height: "100%",
  };
  return (
    <div className="container-principal-itinerary">
      <div className="container-itinerary">
        <h2>
          ¿Cuándo y donde?
          <span>
            <Separator />
          </span>
        </h2>

        <div className="container-itinerary-cards">
          {places.map((place) => (
            <div className="itinerary-cards" key={place.id}>
              <div
                style={{
                  backgroundImage: `url(${place.placeImg})`,
                  ...containerStyle,
                }}
              >
                <div className="container-title">
                  <p>{place.title}</p>
                  <p>Como llegar</p>
                </div>
              </div>
              <div>
                <p>{place.date}</p>
                <p>{place.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
