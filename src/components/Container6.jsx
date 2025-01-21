import React, { useState } from "react";
import chef1 from "../images/chef1.jpg"
import chef2 from "../images/chef2.jpg"
import chef3 from "../images/chef3.jpg"

const Container6 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      imgURL: chef1,
      imgAlt: "Image 1",
    },
    {
      imgURL: chef2,
      imgAlt: "Image 2",
    },
    {
      imgURL: chef3,
      imgAlt: "Image 3",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <h1 className="slider-title">Our Chef's</h1>
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === activeIndex ? "active" : ""}`}
          >
            <img src={image.imgURL} alt={image.imgAlt} />
          </div>
        ))}
        <button className="prev-btn" onClick={prevSlide}>
          {"<"}
        </button>
        <button className="next-btn" onClick={nextSlide}>
          {">"}
        </button>
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
      <style>{`
        .slider-container {
          width: 100%;
          max-width: 500px;
          margin: 20px auto;
          text-align: center;
        }

        .slider-title {
          font-size: 24px;
          margin-bottom: 20px;
        }

        .slider {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 400px;
          border-radius: 10px;
        }

        .slide {
          display: none;
          width: 100%;
          height: 100%;
          transition: opacity 0.5s ease;
        }

        .slide.active {
          display: block;
        }

        .slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
        }

        .prev-btn,
        .next-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 50%;
          font-size: 18px;
          z-index: 2;
        }

        .prev-btn {
          left: 10px;
        }

        .next-btn {
          right: 10px;
        }

        .dots {
          margin-top: 10px;
        }

        .dot {
          width: 12px;
          height: 12px;
          background: #ddd;
          border-radius: 50%;
          display: inline-block;
          margin: 0 5px;
          cursor: pointer;
          border: none;
        }

        .dot.active {
          background: #333;
        }
      `}</style>
    </div>
  );
};

export default Container6;
