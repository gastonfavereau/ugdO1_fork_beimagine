import React from 'react';
import "./home.css";
import Image from 'next/image';
import Courses from './Course';
import Footer from '../footer/footer';
import ImageSlider from "./slider"

const HomePage = () => {
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
    <div>
      <video id="background-video" autoPlay loop muted poster="/UGDVposter.png">
        <source src="UGDvideo.mp4" type="video/mp4" />
      </video>

      <h1 >Bienvenidos a UGD Virtual</h1>
      {/* <h2>Liberando conocimientos, potenciando futuros</h2> */}

      <main>
        {/* <Courses /> */}
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
        <ImageSlider images={images} />
        {/* <div style={{
          marginTop:"50px",
          display:"flex",
          justifyContent:"space-around"
        }}>
          <Image src={"/course.jpg"} width={200} height={200}  />
          <Image src={"/course.jpg"} width={200} height={200}  />
          <Image src={"/course.jpg"} width={200} height={200}  />
          <Image src={"/course.jpg"} width={200} height={200}  />
          <Image src={"/course.jpg"} width={200} height={200}  />
          <Image src={"/course.jpg"} width={200} height={200}  />
          <Image src={"/course.jpg"} width={200} height={200}  />
        </div> */}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
