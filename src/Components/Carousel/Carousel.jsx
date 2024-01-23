import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import FlowersDown from "../../assets/svg/flowers_down.svg";
import "./styles.css";
import { Navigation } from "swiper/modules";
import { Separator } from "../Atoms/Separator/Separator";
export const Carousel = ({ imagesCarousel }) => {
  return (
    <div className="carousel-container-principal">
      <div className="carousel-container">
        <h1>
          Nuestros mejores momentos
          <span>
            <Separator />
          </span>
        </h1>
        <Swiper navigation={true} modules={[Navigation]} className="swiper">
          {imagesCarousel.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                width="100%"
                height="100%"
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <img
        className="flowers-image"
        width="100%"
        src={FlowersDown}
        alt="FlowersDown"
      /> */}
    </div>
  );
};
