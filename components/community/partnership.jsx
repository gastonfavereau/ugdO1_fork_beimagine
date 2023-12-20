"use client";
import Image from "next/image";
import "./community.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const PartnerShip = () =>{
    useEffect(() => {
		AOS.init({
			offset: 150,
			duration: 800,
		});
	}, []);
    return(
        <div style={{
            width:"100%",
            // height:"100vh"
        }}>
            <img id="background-video" src={"/intBg.jpg"} alt="Background Image" />

        <h1 data-aos="fade-up">Amplia red de vínculos internacionales</h1>
        {/* <h2>Nos vinculamos con organizaciones universitarias que permiten a nuestros docentes y estudiantes acceder a 
            información privilegiada, intercambios, encuentros, materiales y oportunidades para su desarrollo académico y profesional </h2> */}

        <main>
            <div style={{
                width:"100%",
                backgroundImage:"url(/cool-background.png)",
                // height:"100vh"
            }}>
                  <p style={{
                    marginTop:"3rem",
                    textAlign:"center",
                    color:"#1C3564",
                    fontFamily: "Poppins",
                    fontSize: "2rem",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "38px",
                }}>Entre los vínculos internacionales más destacados podemos encontrar
                </p>
                <p style={{
                    marginTop:"3rem",
                    textAlign:"center",
                    fontSize:"1rem",
                    color:"#6B6C6C",

                }}>Nos vinculamos con organizaciones universitarias que permiten a nuestros docentes y estudiantes acceder a información privilegiada, intercambios, encuentros, materiales y oportunidades para su desarrollo académico y profesional 
                    Entre los vínculos internacionales más destacados podemos encontrar:
                    </p>
                <div style={{
                    marginTop:"5rem",
                    width:"100%",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    alignContent:"center",
                    flexDirection:"column",
                    gap:"2rem"
                    // border:"2px solid black",
                    // padding:"2rem"
                }}>
                    <div className="partnershipContainer">
                            <div className="partnershipImageCardWhite">
                                <div className="partnershipImageDiv">
                                    <Image
                                        alt='Mountains'
                                        src='/Logo-oui-iohe-header.png'
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </div>

                            </div>
                            <div data-aos="fade-up" className="partnershipContentCardWhite">
                                <div >
                                    <p className="partnershipCardHeading">OUI: Organización Universitaria Interamericana
                                    </p>
                                    <p className="partnershipCardPara">Formación de directivos y docentes, intercambios de estudiantes.</p>
                                </div>

                            </div>


                    </div>
                    <div className="partnershipContainerColor">
                            <div className="partnershipImageCardWhite">
                                <div className="partnershipImageDiv">
                                    <Image
                                        alt='Mountains'
                                        src='/logo-red-2.png'
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </div>

                            </div>
                            <div data-aos="fade-up" className="partnershipContentCardColor">
                                <div >
                                    <p className="partnershipCardHeadingWhite">RED CIDIR: Red Interuniversitaria de Desarrollo e Integración Regional
                                    </p>
                                    <p className="partnershipCardParaWhite">Movilidad académica, proyectos de investigación, entre otras acciones con Universidades de distintos países iberoamericanos.
                                    </p>
                                </div>

                            </div>


                    </div>
                    <div className="partnershipContainer">
                            <div className="partnershipImageCardWhite">
                                <div className="partnershipImageDiv">
                                    <Image
                                        alt='Mountains'
                                        src='/logo-cugc-850-180-PRESIDENCIA-SPAIN.png'
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </div>

                            </div>
                            <div data-aos="fade-up" className="partnershipContentCardWhite">
                                <div >
                                    <p className="partnershipCardHeading">CUGC: Centro Universitario de la Guardia Civil Española
                                    </p>
                                    <p className="partnershipCardPara">Cooperación para las actividades del Instituto Universitario de Seguridad, dependiente de la UGD, en el que se forman los oficiales de las fuerzas de la provincia de Misiones y otras. 
                                    </p>
                                </div>

                            </div>


                    </div>
                    <div className="partnershipContainerColor">
                            <div className="partnershipImageCardWhite">
                                <div className="partnershipImageDiv">
                                    <Image
                                        alt='Mountains'
                                        src='/LOGO-CILA-HORIZONTAL-286X100-fondo-blanco.png'
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </div>

                            </div>
                            <div data-aos="fade-up" className="partnershipContentCardColor">
                                <div >
                                    <p className="partnershipCardHeadingWhite">CILA: Confederación Inmobiliaria Latinoamericana
                                    </p>
                                    <p className="partnershipCardParaWhite">La UGD y CILA han creado el IUCILA, Instituto Universitario
                                    Inmobiliario Latinoamericano, que se conforma en el Centro del Saber en corretaje en el continente, con la participación de las entidades del sector de 18 países.                                     
                                    </p>
                                </div>

                            </div>


                    </div>
                    <div className="partnershipContainer">
                            <div className="partnershipImageCardWhite">
                                <div className="partnershipImageDiv">
                                    <Image
                                        alt='Mountains'
                                        src='/logo-realcup.svg'
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </div>

                            </div>
                            <div data-aos="fade-up" className="partnershipContentCardWhite">
                                <div >
                                    <p className="partnershipCardHeading">Red de Asociaciones Latinoamericanas y Caribeñas de Universidades Privadas
                                    </p>
                                    <p style={{
                                        fontSize:"0.8rem",
                                        marginTop: "0.5rem"
                                    }} className="partnershipCardPara">A través del Consejo de Rectores de Universidades Privadas, participamos de REALCUP, organización que impulsa la internacionalización de las universidades privadas y el crecimiento de la calidad  de las actividades académicas de sus instituciones miembro. 
                                    </p>
                                </div>

                            </div>


                    </div>
                    <div className="partnershipContainerColor">
                            <div className="partnershipImageCardWhite">
                                <div className="partnershipImageDiv" >
                                    <Image
                                        alt='Mountains'
                                        src='/Universidades.png'
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </div>

                            </div>
                            <div data-aos="fade-up" className="partnershipContentCardColor">
                                <div >
                                    <p className="partnershipCardHeadingWhite">Universidades Iberoamericanas
                                    </p>
                                    <p className="partnershipCardParaWhite">Mantenemos vínculos y cooperación estrecha con universidades tanto argentinas, como latinoamericanas y de otras regiones del mundo. 
                                    </p>
                                </div>

                            </div>


                    </div>
                </div>



            </div>
        </main>



        </div>
    )
}

export default PartnerShip;