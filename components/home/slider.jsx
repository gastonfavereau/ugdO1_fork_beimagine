// components/ImageSlider.js
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import data from '@/data/data';
import Image from 'next/image';
import './slider.css';

const ImageSlider = ({ images, params }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerRow = 5;
  const [region, setRegion] = useState("ar");

  useEffect(() => {
    params.params.locales === "us" && setRegion("us");
    const slideShowInterval = setInterval(() => {
      if (currentIndex < images.length - itemsPerRow) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 2000);

    return () => {
      clearInterval(slideShowInterval);
    };
  }, [currentIndex]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
       
          {data.map((course, index) => (
             <div
             key={index+9}
             className="carousel-content"
             style={{ transform: `translateX(${-currentIndex * 100}%)` }}
           >
            <Link href={`${region}/courses/${course.path}`} key={index + 9}>
              <div className="carousel-item">
                <Image priority src={course.image} height={300} width={300} />
              </div>
            </Link>
          </div>
          ))}
        
      </div>
      <button className="prev-button" onClick={handlePrevClick}>
        &lt;-
      </button>
      <button className="next-button" onClick={handleNextClick}>
        -&gt;
      </button>
      <div className="dot-indicators">
        {data.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
