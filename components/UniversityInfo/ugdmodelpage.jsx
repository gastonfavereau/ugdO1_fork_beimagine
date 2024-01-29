
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
      <img id="background-imgugd" src={"/student-class-looking-course.jpg"} alt="Background Image" />

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

            <p className='paraFontSize2'>Nuestro equipo innova permanentemente a fin de aportar las mejores herramientas y estrategias para lograr los más efectivos métodos de formación en línea. En 2017 la UGD sometió su Sistema Institucional de Educación a Distancia (SIED) a la evaluación de la CONEAU, organismo oficial al efecto, obteniendo su acreditación.
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
                        src="/imgmodel.webp" alt="UGDimage" />
                    </div>
                    
                </div>
            </div>
            
            <div className='aboutuscontainerthird' style={{
                height:"auto",
                backgroundColor:"#5C5ADB"
            }}>
                <div data-aos="fade-up" className='aboutusContent'>
                    <p className='headingFontSize2'>Principales características</p>

                    <p className='paraFontSize2'>Todo el proceso de enseñanza y aprendizaje se desarrolla a través de una plataforma de aprendizaje en línea donde vas a tener interacciones con tus docentes y compañeros de manera asincrónica y sincrónica, en un espacio virtual amigable, de fácil acceso y navegación, diseñado y organizado para garantizar una formación de calidad, donde encontrarás los materiales educativos y didácticos previstos para favorecer tu proceso de aprendizaje.
                        Tendrás acceso a una amplia variedad de recursos en línea que te facilitarán el abordaje y la comprensión de los contenidos.  Podrás estudiar y rendir tus exámenes finales desde el lugar donde te encuentres, organizando tus tiempos y espacios en función a tus necesidades. 
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
                        src="/imgmodel2.webp" alt="UGDimage" />
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
                            <p  data-aos="fade-up" className='para'>Ofrecemos a nuestros ingresantes una charla a fin de contarles sobre el modelo pedagógico y la propuesta que brinda nuestra Casa de Estudios.
                            </p>
                        </div>
                    </div>
                    <div  data-aos="fade-up" className='UGDModelPageFourthDivContentCard'>
                        <div>
                            <p data-aos="fade-up" className='heading'>Taller Introductorio</p>
                            <p data-aos="fade-up" className='para'> Dictamos un taller previo al inicio del cuatrimestre para que comiences a familiarizarte con el aula virtual, su organización, navegación y uso.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="UGDModelPageFourthDivRoundedLineLeft2">
                    <p data-aos="fade-up" style={{
                        textAlign: "center",
                        color: "#1C3564",
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "38px",
                    }}>Durante la cursada</p>
                </div>
                <div className="UGDModelPageFourthDivContainer" >
                <div  data-aos="fade-up" className='UGDModelPageFourthDivContentCard'>
                        <div>
                    
                        <p data-aos="fade-up" className='heading'>Encuentros sincrónicos</p>
                        <p data-aos="fade-up" className='para'> De carácter optativos, te permiten interactuar con tus docentes sobre temas que competen al desarrollo de las materias. También contarás con una Sala de Estudiantes en la que vas a encontrar información actualizada y relevante para el  cursado.
                        </p>
                        </div>
                    </div>
                    <div  data-aos="fade-up" className='UGDModelPageFourthDivContentCard'>
                        <div>
                        <p data-aos="fade-up" className='heading'>Tutores facilitadores</p>
                        <p data-aos="fade-up" className='para'>Te orientarán y guiarán durante tu trayectoria académica acompañándote en el desarrollo de habilidades para estudiar, brindándote apoyo durante la cursada y asistencia para resolver dificultades que puedan surgir. 
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
                            }}>Para los estudiantes que, por distancia geográfica, ocupaciones laborales, personales y/o familiares tengan la posibilidad por medio de esta modalidad, de comenzar y sostener sus trayectorias académicas de formación profesional.</p>
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
                            }}> Para que los estudiantes puedan adaptar los horarios de estudio a sus necesidades y rutinas, accediendo al campus virtual sin límites de tiempo.
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
                            }}>Para que los estudiantes puedan gestionar su propio proceso de aprendizaje, organizando los espacios y posibilidades acorde a su situación particular.</p>
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
                                }}> Para que los estudiantes puedan mantener una comunicación directa con los docentes, compañeros y demás áreas y autoridades de la universidad
                                </p>
                             
                             </div>
                    </div>

                </div>

            </div>
            {/* <div data-aos="fade-up" className="aboutuscontainersix">
            

                <FAQ />
              
            
            </div> */}
        </div>
        
      </div>
        
      </main>
      
    </div>


  );
};

export default UGDModel;
