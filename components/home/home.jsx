import React from 'react';
import "./home.css";
import Image from 'next/image';
import ImageSlider from "./slider";


const HomePage = ({params}) => {
  const images = [
    '/course.jpg',
    '/course2.jpg',
    '/course3.jpg',
    '/course4.jpg',
    '/course5.jpg',
    '/course6.jpg',
    '/course7.jpg',
    '/course8.jpg',
    '/course9.jpg',
    '/course10.jpg',
    '/course11.jpg',
  ];
  return (
    <div className='home'>
      <video id="background-video" autoPlay loop muted poster="/UGDVposter.png">
        <source src="UGDvideo.mp4" type="video/mp4" />
      </video>
      <div className='home-heading' style={{
        backgroundColor:"rgba(0, 0, 0, 0.5)",
      }}>
      <h1 >Bienvenidos a UGD Virtual</h1>
      </div>
      {/* <h2>Liberando conocimientos, potenciando futuros</h2> */}

      <main>
        <div style={{
          padding:"50px",
          paddingBottom:"100px",
          overflow:"hidden"
        }}>
        <p style={{
          textAlign:"center",
          color:"#1C3564",
          fontFamily: "Poppins",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "38px",
        }}>Carreras de UGD Virtual <br /> Educación que se adapta a vos </p>
        <ImageSlider params={params} images={images} />
     
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
