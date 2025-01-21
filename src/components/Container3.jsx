// import React, { useState, useEffect } from 'react';
import recipe1 from "../images/recipe1.jpg";
import recipe2 from "../images/recipe2.jpg";
import recipe3 from "../images/recipe3.jpg";  
import recipe4 from "../images/recipe4.jpg";  

import React, { useState, useEffect, useCallback } from "react";

const Container3 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  const images = [
    {
      imgURL:recipe1,
      imgAlt: "Image 1",
    },
    {
      imgURL:recipe2,
           imgAlt: "Image 2",
    },
    {
      imgURL:recipe3,
           imgAlt: "Image 3",
    },
    {
      imgURL:recipe4,
            imgAlt: "Image 4",
    },
  ];

  // Memoize slideNext function to avoid unnecessary re-renders
  const slideNext = useCallback(() => {
    setActiveIndex((prevIndex) => {
      if (prevIndex >= images.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  }, [images.length]);

  // Automatically move to the next slide
  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext(); // slideNext is used here
          setSlideDone(true);
        }, 5000)
      );
    }
  }, [slideDone, slideNext]); // Add slideNext here as a dependency


  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div className="grid">
    <div
      className="container__slider"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      {/* Title */}
      <h1 className="slider-title">Our Favourite Dishes</h1>

      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`slider__item ${
            index === activeIndex ? "slider__item-active" : ""
          }`}
        >
          <img src={image.imgURL} alt={image.imgAlt} />
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="container__slider__links">
        {images.map((_, index) => (
          <button
            key={index}
            className={`container__slider__links-small ${
              index === activeIndex ? "container__slider__links-small-active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Container3;
