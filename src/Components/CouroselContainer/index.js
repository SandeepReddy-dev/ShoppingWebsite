import { React } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
const CorouselContainer = () => {
  return (
    <div class="parent ">
      <div class="div1 m-auto h-100 w-100 image-slider">
      <div class="slider-container">
        <div class="slide slide1"></div>
        <div class="slide slide2"></div>
        <div class="slide slide3"></div>
        <div class="slide slide4"></div>
      
    </div>
      </div>
      <div class="div2 bg-success side-img">
        <img
          src="https://i.pinimg.com/736x/f5/bf/35/f5bf35dc3b635bc57fdea3f1f35bdcdc.jpg"
          alt="offer image"
          className="corousel-image"
        />
      </div>
      <div class="div3 bg-danger  side-img">
        <img
          src="https://i.pinimg.com/736x/a6/55/5a/a6555a98d10be0ffbd985a095c4165cd.jpg"
          alt="offer image"
          className="corousel-image"
        />
      </div>
      <div className="div4  side-img  position-relative bg-purple text-white d-flex flex-row align-items-center justify-content-around p-3 overflow-hidden">
      <div className="bubble side-img"></div>
      {[...Array(10)].map((_, index) => (
        <div key={index} className={`bubble bubble-${index + 1}`}></div>
      ))}    
      <h1 className="fw-bold text-center offer-heading">✨<span className="text-light"> Flat $100 OFF</span>  on your 1st purchase ✨</h1>
    </div>
    </div>
  );
};

export default CorouselContainer;
