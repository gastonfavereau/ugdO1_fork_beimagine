"use client";
import React, { useState } from 'react';
import "./aboutUs.css";
import Image from 'next/image';
import Counter from './counter';


const AboutUsPage = () => {

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
  };


  return (
    <div>
    <img id="background-video" src={"/whoweare.jpg"} alt="Background Image" />

    <h1>Who we are</h1>
    <h2>Unlocking Knowledge, Empowering Futures</h2>

    <main>
    <div  style={{
        padding:"50px",
        paddingBottom:"100px",
        overflow:"hidden"
    }}>

      <div className='aboutus'>
     
     <div className='aboutusContent'>
      <p className='headingFontSize'>Quienes somos </p>

      <p className='paraFontSize'>La Universidad Gastón Dachary (UGD) fue fundada en 1998 en Argentina. 
         En sus 25 años de actividad ha desarrollado una amplia gama de carreras en Ingeniería, Ciencias Económicas y Empresariales, Ciencias Jurídicas y Sociales, Ciencias de la Salud, Seguridad y Salud.
         <br/>
         Inició sus actividades en la provincia de Misiones, Argentina, desarrollando posteriormente sedes en la provincia del Chaco y en la Ciudad Autónoma de Buenos Aires, capital de la República Argentina.
      </p>
      </div>
      <div className='aboutusContent'>
      <video width="750" height="500" controls >
        <source src="UGDvideo.mp4" type="video/mp4"/>
      </video>
      </div>
      </div>
      
      <div className='mainCounter' >
       <div className='submainCounter'>
        <div className='counterDiv'>
          <Counter number={25} title="años formando profesionales" />
        </div>
        <div style={{
          width:"200px",
          height:"120px",
          backgroundColor:"white",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          textAlign:"center",
          borderRadius:"10px",
          boxShadow:" 0 8px 8px 0 rgba(0,0,0,0.2)",

        }}>
          <Counter number={3800} title="egresados" />
        </div>
        <div style={{
          width:"200px",
          height:"120px",
          backgroundColor:"white",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          textAlign:"center",
          borderRadius:"10px",
          boxShadow:" 0 8px 8px 0 rgba(0,0,0,0.2)",

        }}>
          <Counter number={14} title="carreras y ciclos de grado " />
        </div>
        <div style={{
          width:"200px",
          height:"120px",
          backgroundColor:"white",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          textAlign:"center",
          borderRadius:"10px",
          boxShadow:" 0 8px 8px 0 rgba(0,0,0,0.2)",

        }}>
          <Counter number={5} title="especializaciones y maestrías" />
        </div>
        <div style={{
          width:"200px",
          height:"120px",
          backgroundColor:"white",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          textAlign:"center",
          borderRadius:"10px",
          boxShadow:" 0 8px 8px 0 rgba(0,0,0,0.2)",

        }}>
          <Counter number={1} title="doctorado" />
        </div>
        <div style={{
          width:"200px",
          height:"120px",
          backgroundColor:"white",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          textAlign:"center",
          borderRadius:"10px",
          boxShadow:" 0 8px 8px 0 rgba(0,0,0,0.2)",

        }}>
          <Counter number={4} title="continentes, en que se desempeñan nuestros egresados" />
        </div>
        
        
      </div>

    </div>

      <p style={{
        marginTop:"3rem",
      }} className='headingFontSize'>Evaluada por CONEAU</p>
      <p className='paraFontSize'>La UGD se somete a las evaluaciones externas de la Comisión Nacional de Evaluación y Acreditación Universitaria (CONEAU), que analiza todas sus funciones, y atiende las recomendaciones para el mejoramiento permanente de la calidad. 
      Evaluaciones externas integrales periódicas
      Acreditación de carreras de grado de interés público y de posgrado
      </p>
    
    </div>
      
    </main>
    
  </div>
  );
};

export default AboutUsPage;
