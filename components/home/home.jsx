import React from 'react';
import "./home.css";
import Image from 'next/image';
import ImageSlider from "./slider";
// import AutomaticImageSlider from './slider';
import { FooterBgImageComp } from '../footer/footer';

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
    <>
    <div className='home'>
      {/* <video id="background-video" autoPlay loop muted poster="/UGDVposter.webp">
        <source src="ugdMediumVideo.mp4" type="video/mp4" />
      </video> */}
      <img id="background-video" src={"/UGDvirtual___ HOME WEB __.webp"} alt="Background Image" />
      <video id="backgroundMobile" autoPlay loop muted poster="/UGDVposter.webp">
        <source src="UGDVideoMobile2.mp4" type="video/mp4" />
      </video>
      <div className='home-heading' style={{
        backgroundColor:"rgba(0, 0, 0, 0.5)",
      }}>
      <h1 style={{
        fontFamily:"WorkSans-semibold"
      }} >Bienvenidos a UGD Virtual</h1>
      </div>
      {/* <h2>Liberando conocimientos, potenciando futuros</h2> */}

      <main>
        <div className='sliderDiv'>
        <p style={{
          textAlign:"center",
          color:"var(--primary-color)",
          fontFamily: "WorkSans-normal",
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
    <FooterBgImageComp />
    </>
  );
};

export default HomePage;
