// import React from 'react';
"use client";
import "./aboutUspage.css";
import Counter from './counter';
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";


const About = () => {
    // useEffect(() => {
    //     AOS.init({
    //          duration: 800,
    //          once: false,
    //        })
    //  }, [])
    useEffect(() => {
		AOS.init({
			offset: 150,
			duration: 800,
		});
	}, []);

  return (
    <div>
      <img id="background-video2" src={"/Quienes Somos Picture.jpg"} alt="Background Image" />

      <h1 data-aos="fade-up">Quienes somos</h1>
      <h2 data-aos="fade-up">Tu objetivo es nuestro objetivo</h2>

      <main>
      <div  style={{
        //   padding:"50px",
        //   paddingBottom:"100px",
        //   overflow:"hidden"
      }}>

      <div className='aboutus'>
       
            <div className='aboutuscontainerfirst'>
                <div data-aos="fade-up" className='aboutusContent'>
            <p className='headingFontSize2'>Quienes somos </p>

            <p className='paraFontSize2'>La Universidad Gastón Dachary (UGD) fue fundada en 1998 en Argentina. 
            En sus 25 años de actividad ha desarrollado una amplia gama de carreras en Ingeniería, Ciencias Económicas y Empresariales, Ciencias Jurídicas y Sociales, Ciencias de la Salud, Seguridad y Salud.
            <br/>
            Inició sus actividades en la provincia de Misiones, Argentina, desarrollando posteriormente sedes en la provincia del Chaco y en la Ciudad Autónoma de Buenos Aires, capital de la República Argentina.
            </p>
                </div>
                <div className='aboutusImage'>
                <video width="100%" height="100%" controls >
                <source src="/UGDvideo.mp4" type="video/mp4"/>
                </video>
                </div>
            </div>
            <div data-aos="fade-up" className='aboutuscontainersecond2'>
                    
                    <div className="counterCard">
                        <Counter number={25} title="años formando profesionales" />
                    </div>
                    <div className="counterCard">
                        <Counter number={4115} title="egresados" />
                    </div>
                    <div className="counterCard">
                        <Counter number={14} title="carreras y ciclos de grado " />
                    </div>
                    <div className="counterCard">
                        <Counter number={5} title="especializaciones y maestrías" />
                    </div>
                    <div className="counterCard">
                        <Counter number={1} title="doctorado" />
                    </div>
                    <div className="counterCard2">
                        <Counter number={4} title="continentes, en que se desempeñan nuestros egresados" />
                    </div>
                    
                    
                   
            </div>
            
            <div className='aboutuscontainerthird'>
                <div data-aos="fade-up" className='aboutusContent'>
                    <p className='headingFontSize2'>Evaluada por CONEAU</p>

                    <p className='paraFontSize2'>La UGD se somete a las evaluaciones externas de la Comisión Nacional de Evaluación y Acreditación Universitaria (CONEAU), que analiza todas sus funciones, y atiende las recomendaciones para el mejoramiento permanente de la calidad. Evaluaciones externas integrales periódicas Acreditación de carreras de grado de interés público y de posgrado
                    
                    </p>
                    <Image  style={{
                        marginTop:"2rem",
                    }} src={"/aboutIcon.png"} width={500} height={500}  />
                </div>
                <div className='aboutusImage'>
                    <div style={{
                        width:"100%",
                        height:"100%",
                        position:"relative",
                    }}>
                        <img 
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover", // Use "cover" to make the image cover the container while maintaining its aspect ratio
                        }}
                        src="/aboutuspage2.webp" alt="UGDimage" />
                    </div>
                    
                </div>
            </div>
        </div>
        

{/* 
        <p style={{
          marginTop:"3rem",
        }} className='headingFontSize'>Evaluada por CONEAU</p>
        <p className='paraFontSize'>La UGD se somete a las evaluaciones externas de la Comisión Nacional de Evaluación y Acreditación Universitaria (CONEAU), que analiza todas sus funciones, y atiende las recomendaciones para el mejoramiento permanente de la calidad. 
        Evaluaciones externas integrales periódicas
        Acreditación de carreras de grado de interés público y de posgrado
        </p>
       */}
      </div>
        
      </main>
      
    </div>
  );
};

export default About;
