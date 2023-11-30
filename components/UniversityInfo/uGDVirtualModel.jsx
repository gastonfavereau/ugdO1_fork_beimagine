import React from 'react';
import "./aboutUs.css";
import Image from 'next/image';


const UGDVirtualModel = () => {

  return (
    <div>
      {/* <video id="background-video" autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
        <source src="aboutus.mp4" type="video/mp4" />
      </video> */}
      <img id="background-video" src={"/pexels-julia-m-cameron-4145153 (1).jpg"} alt="Background Image" />

      <h1>Nuestro Modelo de Educación Virtual</h1>
      <h2>Unlocking Knowledge, Empowering Futures</h2>

      <main>
        <div style={{
          width:"100%",
          height:"100vh",
          backgroundColor:"white"
        }}>

        </div>
        
      </main>
    </div>
  );
};

export default UGDVirtualModel;
