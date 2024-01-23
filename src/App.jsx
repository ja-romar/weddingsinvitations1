import { useState } from "react";
import FlowersDown from "./assets/svg/flowers_down.svg";
import "./App.css";
import { Header } from "./Components/Header/Header";
import Banner from "./assets/Banner.png";
import Salon from "./assets/SALON.png";
import Iglesia from "./assets/IGLESIA.png";
import { CountDown } from "./Components/CountDown/CountDown";
import { Itinerary } from "./Components/Itinerary/Itinerary";
import { DressCode } from "./Components/DressCode/DressCode";
import DresscodeWomen from "./assets/DresscodeWomen.png";
import DresscodeMen from "./assets/DresscodeMen.png";
import { Quote } from "./Components/Quote/Quote";

function App() {
  const places = [
    {
      id: 1,
      title: "Nuestra señora de la paz",
      date: "16:30 PM",
      address: "Revolucion/n, Zona Central 23000",
      placeImg: Salon,
    },
    {
      id: 2,
      title: "Salon Vitana",
      date: "21:00 P.M.",
      address: "Blvd. Hector Teran Teran No. 21066",
      placeImg: Iglesia,
    },
  ];

  const dressCodeImgs = [
    {
      id: 1,
      img: DresscodeWomen,
    },
    {
      id: 2,
      img: DresscodeMen,
    },
  ];
  return (
    <main>
      <Header image={Banner} title="Odeth & Antonio" date="26 | 08 | 2023" />
      <CountDown date="128 dias y 22 horas" />
      <Itinerary places={places} />
      <DressCode images={dressCodeImgs} />
      <Quote
        quoteAutor="-Antonio Alonso"
        quote="“Voy a amarte todos los dias de mi vida, voy a cuidarte todos los dias de mi vida”"
      />
      {/* <img src={FlowersDown} className="absolute bottom-0" alt="FlowersDown" /> */}
    </main>
  );
}

export default App;
