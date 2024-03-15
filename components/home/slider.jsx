// components/ImageSlider.js
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import data from '@/data/data';
import Image from 'next/image';
import './slider.css';
// import styles from "./slider.module.css";

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
              <div className='carousel-item'>
                <Image priority src={`/${course.footerbgimage}`} height={1200} width={2000} />
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


// const ImageSlider = () => {
//   const images = [
//     "./DESARROLLO SUSTENTABLE E INTEGRACIÓN_Mesa de trabajo 1.png",
//      "./GESTIÓN EDUCATIVA_Mesa de trabajo 1.png",
//      "./CICLO DE PROFESORADO_Mesa de trabajo 1.png",
//      "./ADMINISTRACIÓN_Mesa de trabajo 1.png",
//   ]
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isAutoSliding, setIsAutoSliding] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//        if (currentImageIndex < images.length) {
//         setCurrentImageIndex((prevIndex) => prevIndex + 1);
//       } else {
//         setCurrentImageIndex(0);
//       }
//     }, 3000); // Change the interval as needed (in milliseconds)

//     return () => clearInterval(interval);
//   }, [isAutoSliding, images.length]);

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const handleDotClick = (index) => {
//     setCurrentImageIndex(index);
//   };

//   return (
//     <div className={styles.imageSlider}>
//       {/* <button className={styles.navButton} onClick={prevImage}>
//         &lt;
//       </button> */}
//       <div className={styles.slideContainer}>
//         {images.map((image, index) => (
//           <img
//             id="#img1"
//             key={index}
//             src={image}
//             alt={`Slider Image ${index + 1}`}
//             className={
//               index === currentImageIndex
//                 ? styles.activeSlide
//                 : styles.hiddenSlide
//             }
//           />
//         ))}
//       </div>
//       <button className={styles.navButton} onClick={nextImage}>
//         &gt;
//       </button>
//       {/* <div className={styles.dotsContainer}>
//         {images.map((_, index) => (
//           <span
//             key={index}
//             className={`${styles.dot} ${
//               index === currentImageIndex ? styles.activeDot : ''
//             }`}
//             onClick={() => handleDotClick(index)}
//           />
//         ))}
//       </div> */}
//     </div>
//   );
// };

// export default ImageSlider;
