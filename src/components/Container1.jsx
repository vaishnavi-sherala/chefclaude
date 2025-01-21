import React, { useState, useEffect, useCallback } from "react";

const Container1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  const images = [
    {
      imgURL:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      imgAlt: "Image 1",
    },
    {
      imgURL:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      imgAlt: "Image 2",
    },
    {
      imgURL:
        "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      imgAlt: "Image 3",
    },
    {
      imgURL:
        "https://images.pexels.com/photos/54455/cook-food-kitchen-eat-54455.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      imgAlt: "Image 4",
    },
  ];

  const slideNext = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex >= images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 5000)
      );
    }
  }, [slideDone, slideNext]);

 

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
    <div className="container__slider" onMouseEnter={AutoPlayStop} onMouseLeave={AutoPlayStart}>
      <h1 className="slider-title">Eat Slightly</h1>
      {images.map((image, index) => (
        <div
          key={index}
          className={`slider__item ${index === activeIndex ? "slider__item-active" : ""}`}
        >
          <img src={image.imgURL} alt={image.imgAlt} />
        </div>
      ))}
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
  );
};

export default Container1;
