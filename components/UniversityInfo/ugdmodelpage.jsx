// import React from 'react';
"use client";
import "./aboutUspage.css";
import Counter from './counter';
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import Accordian from "../navbar/accordian";
import FAQ from "./faq";

const UGDModel = () => {
    useEffect(() => {
		AOS.init({
			offset: 150,
			duration: 800,
		});
	}, []);

  return (
    <div>
      <img id="background-imgugd" src={"/whoweare.jpg"} alt="Background Image" />

      <h1 style={{
        fontSize:"4rem",
      }} data-aos="fade-up" >Nuestro Modelo de Educación Virtual</h1>
      <h2  style={{
        fontSize:"2rem",
      }}data-aos="fade-up">Sistema de educación a distancia acreditado</h2>

      <main>
      <div  >

      <div style={{
        display:"flex",
        flexDirection:"column",
        height:"auto",
      }}>
            

            <div className='aboutuscontainerfirst' style={{
                backgroundColor:"#5C5ADB"
            }}>
                <div data-aos="fade-up" className='aboutusContent'>
            <p className='headingFontSize2'>Nuestro Modelo de Educación Virtual </p>

            <p className='paraFontSize2'>En 2017 la UGD evaluó y acreditó ante CONEAU su Sistema Institucional de Educación a Distancia (SIED). Nuestro equipo innova permanentemente a fin de aportar las mejores herramientas y estrategias para lograr los más efectivos métodos de formación en línea.
            </p>
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
                        src="imgmodel.webp" alt="UGDimage" />
                    </div>
                    
                </div>
            </div>
            
            <div className='aboutuscontainerthird' style={{
                height:"auto",
                backgroundColor:"#5C5ADB"
            }}>
                <div data-aos="fade-up" className='aboutusContent'>
                    <p className='headingFontSize2'>Principales características del SIED</p>

                    <p className='paraFontSize2'>El SIED de la UGD es un espacio virtual amigable, de fácil acceso y navegación, mediante el cual vas a establecer comunicación con el equipo docente y tus compañeros. Fue diseñado y organizado para garantizar una formación de calidad, donde se dispondrá de todos los materiales educativos, recursos y actividades previstas para favorecer el proceso de aprendizaje. Se tiene acceso a una amplia variedad de recursos en línea que facilitarán el abordaje y comprensión de los contenidos. El SIED brinda la posibilidad de estudiar desde cualquier lugar y en cualquier momento, lo que la convierte en una plataforma flexible y cómoda.
                    
                    </p>
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
                        src="imgmodel2.webp" alt="UGDimage" />
                    </div>
                    
                </div>
            </div>
            <div className='aboutuscontainersecond'>

                <p data-aos="fade-up" style={{
                    textAlign:"center",
                    color:"#1C3564",
                    fontFamily:"Poppins",
                    fontSize:"2rem",
                    fontWeight:"600",
                }}>A través del SIED la UGD te ofrece</p>
                <div className="aboutuscontainersecondContainer" >
                    <div className="aboutuscontainersecondCard">
                       <p data-aos="fade-up" className="modelheading">Una formación 100% remota</p>
                    </div>
                    <div className="aboutuscontainersecondCard">
                        <p  data-aos="fade-up" className="modelheading">Actividades formativas y con retroalimentación de tu docente</p>
                    </div>
                    <div className="aboutuscontainersecondCard">
                        <p data-aos="fade-up" className="modelheading">Encuentros sincrónicos semanales con los profesores, que son optativos</p>
                    </div>
                    <div className="aboutuscontainersecondCard">
                        <p data-aos="fade-up" className="modelheading">Acompañamiento personalizado</p>
                    </div>
                    <div className="aboutuscontainersecondCard2">
                       <p data-aos="fade-up" className="modelheading">Asesoramiento pedagógico y académico permanente</p>
                    </div>
                </div>
                   
                    
                    
                   
            </div>
            <div className="aboutuscontainerfifth">
                <div >
                <p data-aos="fade-up" style={{
                    textAlign:"center",
                    color:"white",
                    fontFamily: "Poppins",
                    fontSize: "2rem",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "38px",
                    }}>Acompañamos tu trayectoria </p>

                </div>
                <div  className="UGDModelPageFourthDivRoundedLineLeft2">
                    <p data-aos="fade-up" style={{
                    textAlign:"center",
                    color:"#1C3564",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "38px",
                    }}>Previo a la cursada  </p>
                </div>
                <div className="UGDModelPageFourthDivContainer">
                    <div data-aos="fade-up"  className='UGDModelPageFourthDivContentCard'>
                        <div>
                            <p  data-aos="fade-up" className='heading'>Encuentro de bienvenida</p>
                            <p  data-aos="fade-up" className='para'>Ofrecemos una charla para los ingresantes para contarles sobre el modelo pedagógico y la propuesta de la universidad. 
                            </p>
                        </div>
                    </div>
                    <div  data-aos="fade-up" className='UGDModelPageFourthDivContentCard'>
                        <div>
                            <p data-aos="fade-up" className='heading'>Taller Introductorio</p>
                            <p data-aos="fade-up" className='para'> Lo dictamos previo al inicio del cuatrimestre para que comiences a familiarizarte con el aula virtual, su organización, navegación y uso. 
                            </p>
                        </div>
                    </div>

                </div>
                <div className="UGDModelPageFourthDivRoundedLineRight2">
                    <p data-aos="fade-up" style={{
                        textAlign: "center",
                        color: "#1C3564",
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "38px",
                    }}>Durante la cursada</p>
                </div>
                <div style={{
                    marginTop:"5rem",
                    width:"100%",
                    height:"50%",
                    display:"flex",
                    justifyContent:"space-around",
                    padding:"0.5rem",
                    gap:"0.5rem",
                }}>
                <div  data-aos="fade-up" className='UGDModelPageFourthDivContentCard'>
                        <div>
                    
                        <p data-aos="fade-up" className='heading'>Espacios de tutoría</p>
                        <p data-aos="fade-up" className='para'> Encuentros optativos en los cuales podrás sumarte para conversar con la tutora facilitadora sobre algún tema en particular. 
                        Sala de Estudiantes: con información actualizada de manera permanente 
                        </p>
                        </div>
                    </div>
                    <div  data-aos="fade-up" className='UGDModelPageFourthDivContentCard'>
                        <div>
                        <p data-aos="fade-up" className='heading'>Tutora facilitadora</p>
                        <p data-aos="fade-up" className='para'>se encargará de orientarte y guiarte en la trayectoria académica, brindándote apoyo emocional, desarrollo de habilidades de estudio, asistencia en la resolución de problemas y todo lo que necesités.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutuscontainerfourth">
                <p style={{
                    textAlign:"center",
                    color:"#1C3564",
                    fontFamily:"Poppins",
                    fontSize:"2rem",
                    fontWeight:"600",
                }}>¿Qué garantiza nuestro modelo pedagógico?</p>
                <div className="aboutuscontainerfourthsubdiv">
                    <div data-aos="fade-up" className="aboutuscontainerfourthsubdiv2">
                        <div className="subdiv" style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center"
                            }}>
                            <Image alt='Mountains' src='/opportunity (1).png' width={100} height={100}/>
                            <p style={{
                                marginTop:"0.5rem",
                                textAlign:"center",
                                color:"#1C3564",
                                fontFamily: "Poppins",
                                fontSize: "1.5rem",
                                fontStyle: "normal",
                                fontWeight: "500",
                                lineHeight: "38px",
                            }}>Oportunidades</p>
                            <p style={{
                            marginTop:"2rem",
                            fontSize:"0.8rem",
                            color:"#6B6C6C"
                            }}>para quienes por distancia geográfica, ocupaciones laborales, personales y/o familiares encuentran en esta modalidad la posibilidad de realizar y sostener trayectoria académica. </p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="aboutuscontainerfourthsubdiv2">
                            <div className="subdiv" style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center"
                            }}>

                            <Image alt='Mountains' src='/arrows (1).png' width={100} height={100} />
                            <p style={{
                                marginTop:"0.5rem",
                                textAlign:"center",
                                color:"#1C3564",
                                fontFamily: "Poppins",
                                fontSize: "1.5rem",
                                fontStyle: "normal",
                                fontWeight: "500",
                                lineHeight: "38px",
                            }}>Flexibilidad</p>
                            <p style={{
                            marginTop:"2rem",
                            fontSize:"0.8rem",
                            color:"#6B6C6C"
                            }}> capacidad de los estudiantes para adaptar sus horarios de estudio a sus necesidades y rutinas. 
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="aboutuscontainerfourthsubdiv2">
                            <div className="subdiv" style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        textAlign: "center"
                                    }}>
                            <Image alt='Mountains' src='/autonomy.png' width={100} height={100} />
                            <p style={{
                                marginTop:"0.5rem",
                                textAlign:"center",
                                color:"#1C3564",
                                fontFamily: "Poppins",
                                fontSize: "1.5rem",
                                fontStyle: "normal",
                                fontWeight: "500",
                                lineHeight: "38px",
                            }}>Autonomía</p>
                            <p style={{
                            marginTop:"2rem",
                            fontSize:"0.8rem",
                            color:"#6B6C6C"
                            }}>Tendrás control sobre tu propio aprendizaje, con acceso al campus virtual sin límites de horario.  </p>
                            </div>
                    </div>
                    <div style={{
                        borderRight: "0.5px solid grey",
                    }} data-aos="fade-up" className="aboutuscontainerfourthsubdiv2">
                           <div className="subdiv" style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center"
                            }}>

                               
                                <Image alt='Mountains' src='/message.png' width={80} height={80} />
                                
                                
                                    <p style={{
                                        marginTop:"0.5rem",
                                        textAlign:"center",
                                        color:"#1C3564",
                                        fontFamily: "Poppins",
                                        fontSize: "1.5rem",
                                        fontStyle: "normal",
                                        fontWeight: "500",
                                        lineHeight: "38px",
                                    }}>Comunicación fluida</p>
                               
                           
                                <p style={{
                                marginTop:"2rem",
                                fontSize:"0.8rem",
                                color:"#6B6C6C"
                                }}> vías de comunicación directa con los docentes, compañeros y la universidad. 
                                </p>
                             
                             </div>
                    </div>

                </div>

            </div>
            <div data-aos="fade-up" className="aboutuscontainersix">
            

                <FAQ />
              
            
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

export default UGDModel;
