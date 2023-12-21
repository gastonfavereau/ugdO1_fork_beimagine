// "use client";
// import Link from "next/link";
// import "./slider.css"
// import React, { useState } from 'react';

// const ImageSlider = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((currentIndex + 5) % images.length);
//     console.log(currentIndex)
//   };

//   const prevSlide = () => {
//     setCurrentIndex((currentIndex - 5 + images.length) % images.length);
//   };

//   return (
//     <div className="image-slider">
//       <div className="slider-images">
//         {images.slice(currentIndex, currentIndex + 5).map((image, index) => (
//           <div key={index} className="slider-card" >
//             <img src={image} alt={`Image ${index + 1}`} height={300} width={300}/>
//           </div>
//         ))}
//       </div>
//       <div className="slider-controls">
//         <button onClick={prevSlide}>Previous</button>
//         <button onClick={nextSlide}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;

"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import data from '@/data/data';
// import "./slider.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};



function ImageSlider({ images,params }) {

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
    }, 2000); // Change the interval as needed (in milliseconds)

    return () => {
      clearInterval(slideShowInterval);
    };
  }, [currentIndex]);

  const handleNextClick = () => {
    if (currentIndex < images.length - itemsPerRow) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div style={{
      marginTop:"50px",
      // border:"1px solid black",

    }}>
      <div className="image-container" style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:"1rem",
    

      }}>



      {/* {
        data.slice(currentIndex, currentIndex + itemsPerRow).map((image, index) => (
          <Link href={`courses/${image.path}`} className={image.path} key={index}>
            <img style={{
              transform: "translateX(10px)",
              transition: "transform 0.2s ease-in-out"

            }} src={image.image} alt={`Image ${index}`} height={300} width={300}/>
          </Link>
        ))
      } */}

       
          {/* {
            images.slice(currentIndex, currentIndex + itemsPerRow).map((imageUrl, index) => (
               
              
              <Link href={imageUrl}>
                
              <img style={{
                transform: `translateX(-${currentIndex }%)`,
                transition: 'transform 0.5s ease-in-out',
              }} key={index} src={imageUrl} alt={`Image ${index}`}  height={300} width={300}/>
              </Link>
            ))
            
          } */}
          
          <Carousel showDots={true} responsive={responsive} 
          autoPlay={true}
          autoPlaySpeed={1000}
          rewind={true}
          >
            {
              data.map((course,index)=>{
                return(
                  <Link  href={`${region}/courses/${course.path}`}>
                  <img  src={course.image} height={300} width={300}/>
                  </Link>
                )
              })
            }
        
      </Carousel>
      

      </div>

      {/* <button onClick={handlePrevClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button> */}
      <div>
      <Carousel showDots={true} responsive={responsive} 
      autoPlay={true}
      autoPlaySpeed={1000}
      rewind={true}
      // keyBoardControl={true}
      // customTransition="all .5"
      // transitionDuration={500}
      >
        {
              data.map((course,index)=>{
                return(
                  <Link  href={`${region}/courses/${course.path}`} key={index+9}>
                  <img src={course.image} height={300} width={300}/>
                  </Link>
                )
              })
            }
        
      </Carousel>
      </div>
    </div>
  );
}

export default ImageSlider;
