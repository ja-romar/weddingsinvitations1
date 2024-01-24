import { useState } from "react";

import "./App.css";
import Salon from "./assets/SALON.png";
import Banner from "./assets/Banner.png";
import Iglesia from "./assets/IGLESIA.png";
import { Quote } from "./Components/Quote/Quote";
import { Header } from "./Components/Header/Header";
import DresscodeMen from "./assets/DresscodeMen.png";
import DresscodeWomen from "./assets/DresscodeWomen.png";
import { CountDown } from "./Components/CountDown/CountDown";
import { Itinerary } from "./Components/Itinerary/Itinerary";
import { DressCode } from "./Components/DressCode/DressCode";
import { UtilitiesWedding } from "./Components/UtilitiesWedding/UtilitiesWedding";
import playlistUtility from "./assets/playlistUtility.png";
import flowersUtility from "./assets/flowers_utility.png";
import attendanceUtility from "./assets/attendanceUtility.png";
import surprise1 from "./assets/surprise1.png";
import surprise2 from "./assets/surprise2.png";
import surprise3 from "./assets/surprise3.png";
import imgCarousel from "./assets/img_carousel.png";
import { Surprises } from "./Components/Surprises/Surprises";
import { Carousel } from "./Components/Carousel/Carousel";
import { Footer } from "./Components/Footer/Footer";

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

  const utilities = [
    { id: 1, img: flowersUtility, title: "Mesa de regalos" },
    {
      id: 2,
      img: attendanceUtility,
      title: "Confirmar asistencia",
      isReverse: true,
    },
    { id: 3, img: playlistUtility, title: "Playlist" },
  ];

  const surprises = [
    { id: 1, title: "Nuestra luna de miel sera en gracia", img: surprise1 },
    { id: 2, title: "Segunda sorpresa 22 de junio", img: surprise2 },
    { id: 3, title: "Tercera sorpresa 24 de julio", img: surprise3 },
  ];

  const imagesCarousel = [imgCarousel, imgCarousel, imgCarousel, imgCarousel];
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
      <UtilitiesWedding utilities={utilities} />
      <Surprises surprises={surprises} />
      <Carousel imagesCarousel={imagesCarousel} />
      <Footer />
    </main>
  );
}

export default App;
