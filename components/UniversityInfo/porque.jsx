"use client";
import "./aboutUspage.css";
import Image from 'next/image';
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Porque = () => {
    useEffect(() => {
		AOS.init({
			offset: 150,
			duration: 800,
		});
	}, []);

    return (
        <div style={{
            width:"100%",
            backgroundColor:"white",
            paddingTop:"5rem",
            backgroundImage:"url(/cool-background.png)",
        }}>
           
           <div className='porqueMainDiv'>
                <div className='porqueRow'>
                    <div className='porqueImage'>
                        <Image src={"/1.png"} width={300} height={300}  />
                    </div>
                    <div className='porqueContent'>
                        <p style={{
                            fontSize:"1.5rem",
                            color:"#1C3564",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "38px",
                            }}>EXPERIENCIA E INNOVACIÓN 
                            </p>
                            <p style={{
                                marginTop:"2rem",
                                fontSize:"1rem",
                                color:"#6B6C6C"
                              }}>Nos avala una trayectoria de más de 25 años con más de 4.000 graduados que se desempeñan en posiciones relevantes en distintos países del mundo.</p>

                            <p style={{
                                marginTop:"2rem",
                                fontSize:"1rem",
                                color:"#6B6C6C"
                              }}>Nuestro equipo del Sistema Institucional de Educación a Distancia  (SIED-UGD) reúne a profesionales con formación especializada en tecnología y experiencia en metodologías de formación virtual.  Nos ocupamos de explorar permanentemente las innovaciones y nuevas tendencias y aplicarlas a nuestros métodos de enseñanza.
                              </p>


                    </div>
                
                </div>
                <div data-aos="fade-up" className='porqueRow'>
                    <div className='porqueImage'>
                        <Image src={"/2.png"} width={300} height={300}  />
                    </div>
                    <div className='porqueContent'>
                        <p style={{
                            fontSize:"1.5rem",
                            color:"#1C3564",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "38px",
                            }}>MODALIDAD VIRTUAL, A  TU RITMO, CON TRATO PERSONAL
                            </p>
                            <p style={{
                                marginTop:"2rem",
                                fontSize:"1rem",
                                color:"#6B6C6C"
                              }}>El modelo pedagógico que implementa el SIED de la UGD, utiliza las más modernas herramientas tecnológicas para desarrollar los procesos de enseñanza y de aprendizaje, garantizando una educación de calidad.</p>

                            <p style={{
                                marginTop:"2rem",
                                fontSize:"1rem",
                                color:"#6B6C6C"
                              }}>Te permite estudiar desde donde te encuentres y a tu ritmo, realizando las propuestas asincrónicas y dedicando el tiempo preciso para cada materia,  disponiendo de encuentros sincrónicos optativos para que tengas la posibilidad de interactuar, analizar y debatir con tus profesores y compañeros. En el caso de que no puedas asistir, dispondrás de todas las grabaciones.
                              </p>


                    </div>
                
                </div>
                <div data-aos="fade-up" className='porqueRow'>
                    <div className='porqueImage'>
                        <Image src={"/3.png"} width={300} height={300}  />
                    </div>
                    <div className='porqueContent'>
                        <p style={{
                            fontSize:"1.5rem",
                            color:"#1C3564",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "38px",
                            }}>SIMULACIÓN EMPRESARIAL
                            </p>
                            <p style={{
                                marginTop:"2rem",
                                fontSize:"1rem",
                                color:"#6B6C6C"
                              }}>En las distintas etapas de tu carrera podrás entrenarte con simuladores que te permitirán prepararte y aprender a tomar decisiones estratégicas en los diversos campos de una empresa, como el de planificación, dirección de gestión, marketing, finanzas, entre otros. Asimismo, te ayudarán a desarrollar habilidades y competencias que potenciar tu inserción en el mercado laboral. 
                              </p>


                    </div>
                
                </div>
                <div data-aos="fade-up" className='porqueRow'>
                    <div className='porqueImage'>
                        <Image src={"/5.png"} width={300} height={300}  />
                    </div>
                    <div className='porqueContent'>
                        <p style={{
                            fontSize:"1.5rem",
                            color:"#1C3564",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "38px",
                            }}>CERTIFICACIONES INTERMEDIAS
                            </p>
                            <p style={{
                                marginTop:"2rem",
                                fontSize:"1rem",
                                color:"#6B6C6C"
                              }}>A lo largo de tu carrera podrás obtener Certificaciones Universitarias y títulos intermedios que mejorarán tu posición en el mercado laboral, tomando provecho de los aprendizajes que vas logrando.
                              </p>


                    </div>
                
                </div>
                <div data-aos="fade-up" className='porqueRow'>
                    <div className='porqueImage'>
                        <Image src={"/6.png"} width={300} height={300}  />
                    </div>
                    <div className='porqueContent'>
                        <p style={{
                            fontSize:"1.5rem",
                            color:"#1C3564",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "38px",
                            }}>CARRERAS DE CARACTERÍSTICAS INTERNACIONALES 
                            </p>
                            <p style={{
                                marginTop:"2rem",
                                fontSize:"1rem",
                                color:"#6B6C6C"
                              }}>Nuestros planes de estudios incorporan características de los sistemas universitarios europeo y norteamericano, facilitando el reconocimiento internacional de carreras y trayectos de formación.  Entre otras, el diseño curricular por Créditos Académicos, que miden la dedicación total del Estudiante, y el Suplemento al Título, que aporta una descripción detallada del trayecto formativo del alumno.

                              </p>


                    </div>
                
                </div>
                <div data-aos="fade-up" className='porqueRow'>
                    <div className='porqueImage'>
                        <Image src={"/7.png"} width={300} height={300}  />
                    </div>
                    <div className='porqueContent'>
                        <p style={{
                            fontSize:"1.5rem",
                            color:"#1C3564",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "38px",
                            }}>TÍTULOS REVALIDADOS EN EEUU 
                            </p>
                            <p style={{
                                marginTop:"2rem",
                                fontSize:"1rem",
                                color:"#6B6C6C"
                              }}>La UGD ha llevado adelante un proceso en virtud del cual sus egresados pueden obtener un CERTIFICADO DE REVALIDACIÓN de su título en EEUU desarrollado por organismos autorizados legalmente a tal fin, lo que mejora la posición laboral de los egresados en cualquier país del mundo.  

                              </p>


                    </div>
                
                </div>
                <div data-aos="fade-up" className='porqueRow'>
                    <div className='porqueImage'>
                        <Image src={"/8.png"} width={300} height={300}  />
                    </div>
                    <div className='porqueContent'>
                        <p style={{
                            fontSize:"1.5rem",
                            color:"#1C3564",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "38px",
                            }}>CERTIFICACIONES EN FORMATO NFT 
                            </p>
                            <p style={{
                                marginTop:"2rem",
                                fontSize:"1rem",
                                color:"#6B6C6C"
                              }}>Las NFTs (“Non Fungible Token” o “activos digitales certificados mediante la tecnología blockchain”) proporcionan un registro público de la autenticidad.  Podrás almacenarlas en tus monederos electrónicos y publicarlos en redes sociales, pudiendo ser verificadas por quien quiera hacerlo, simplificando los procesos de admisión y contratación.
                              </p>


                    </div>
                
                </div>
                <div data-aos="fade-up" className='porqueRow'>
                    <div className='porqueImage'>
                        <Image src={"/9.png"} width={300} height={300}  />
                    </div>
                    <div className='porqueContent'>
                        <p style={{
                            fontSize:"1.5rem",
                            color:"#1C3564",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "38px",
                            }}>MICROCREDENCIALES ACADÉMICAS 
                            </p>
                            <p style={{
                                marginTop:"2rem",
                                fontSize:"1rem",
                                color:"#6B6C6C"
                              }}>Cuando apruebes materias que otorgan competencias que de por sí brindan una capacidad laboral determinada, podrás solicitar tu Microcredencial Académica, que certifica tu capacidad para desarrollar la actividad que corresponda. 
                              </p>


                    </div>
                
                </div>

           </div>
        </div>
    );
};

export default Porque;