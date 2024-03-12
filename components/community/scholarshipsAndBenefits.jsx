"use client";
import Image from "next/image";
import "./community.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const ScholarshipsAndBenefits = () =>{
    useEffect(() => {
		AOS.init({
			offset: 150,
			duration: 800,
		});
	}, []);

    return(
        <div style={{
            width:"100%",
            backgroundColor:"white",
            // padding:"20px",
            paddingTop:"4rem",
            backgroundImage:"url(/cool-background.png)",
          //   border:"2px solid black",
        }}>
    <div className="teacherMain">
        <div className="teacherContent">
            {/* <Image src={"/unsplash_-uHVRvDr7pg.png"} width={1200} height={700}  /> */}
            <div data-aos="fade-up">
            <p style={{
            // textAlign:"center",
            color:"#1C3564",
            fontFamily: "WorkSans-normal",
            fontSize: "3rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "38px",
            }}>BECAS Y BENEFICIOS </p>
            <p style={{
            marginTop:"2rem",
            fontSize:"1rem",
            color:"#6B6C6C",
            fontFamily: "WorkSans-normal",
          }}>Si estás decidido a estudiar con nosotros, podemos facilitar tu acceso y permanencia en UGD Virtual, con los siguientes beneficios:
          </p>
          
            </div>
       
            

        </div>
        <div style={{
            padding:"0rem"
        }} className="teacherImage">
            <div data-aos="fade-up" style={{width: '100%', height: '100%', position: 'relative', }}>
            <Image
                alt='Mountains'
                src='/teamwork-meeting-with-business-people.jpg'
                layout='fill'
                objectFit='cover'
            />
            </div>

        </div>

            </div>
    <div style={{
        marginTop:"0rem",
        width:"100%",
        backgroundColor:"#0F4D6B",
        padding:"2rem",
        border:"0.5px solid white",
      }}>
        <p  data-aos="fade-up" style={{
            textAlign:"center",
            color:"white",
            fontFamily: "WorkSans-normal",
            fontSize: "2rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "38px",
        }}>BENEFICIOS</p>

        {/* <div style={{
            marginTop:"2rem",
            display:'flex',
            justifyContent:"space-around",

        }}>

            <div style={{
                width:"300px",
                height:"300px",
                boxShadow:" 0 8px 8px 0 rgba(0,0,0,0.2)",
                borderRadius:"10px",
                padding:"1rem",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                gap:"2rem",
                alignContent:"center",
                backgroundColor:"white",
            }}>
                <div>
                <p style={{
                    marginTop:"0.5rem",
                    textAlign:"center",
                    color:"#1C3564",
                    fontFamily: "Poppins",
                    fontSize: "1.5rem",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "38px",
                }}>Cuotas reducidas</p>
                <p style={{
                marginTop:"2rem",
                fontSize:"0.8rem",
                color:"#1C3564"
                }}>Si resuelves cursar no más de tres materias al cuatrimestre, abonarás durante el mismo el arancel con un 40% de reducción.    Esto te permite adecuar el sistema a tus posibilidades financieras y cursar la carrera a un ritmo más pausado, si tus demás obligaciones lo hacen conveniente.     Puedes optar por este beneficio en los cuatrimestres que así lo resuelvas, pudiendo cursar todas las materias en aquellos en que lo consideres conveniente.
                </p>
                </div>
            </div>
            <div style={{
            width:"300px",
            height:"300px",
            boxShadow:" 0 8px 8px 0 rgba(0,0,0,0.2)",
            borderRadius:"10px",
            padding:"1rem",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            gap:"2rem",
            alignContent:"center",
            backgroundColor:"white",
            }}>
                
                <div>
                <p style={{
                    marginTop:"0.5rem",
                    textAlign:"center",
                    color:"#1C3564",
                    fontFamily: "Poppins",
                    fontSize: "1.5rem",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "38px",
                }}>Reducción arancelaria por situación económica</p>
                <p style={{
                marginTop:"2rem",
                fontSize:"0.8rem",
                color:"#1C3564"
                }}> Si cursas el total de las materias del cuatrimestre y tienes una situación personal, laboral o familiar que te dificulta afrontar la totalidad de la cuota, puedes solicitar que tu caso sea considerado por el Comité de Becas, que te solicitará información y resolverá al respecto.   
                </p>
                </div>
            </div>
            <div style={{
                  width:"300px",
                  height:"300px",
                  boxShadow:" 0 8px 8px 0 rgba(0,0,0,0.2)",
                  borderRadius:"10px",
                  padding:"1rem",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center",
                  gap:"2rem",
                  alignContent:"center",
                  backgroundColor:"white",
            }}>
                <div>

                <p style={{
                    marginTop:"0.5rem",
                    textAlign:"center",
                    color:"#1C3564",
                    fontFamily: "Poppins",
                    fontSize: "1.5rem",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "38px",
                }}>Beca por mérito académico</p>
                <p style={{
                marginTop:"2rem",
                fontSize:"0.8rem",
                color:"#1C3564"
                }}>  Si tienes un destacado desempeño académico, podrás postularte para becas que premian tus esfuerzos.
 
                </p>
                </div>
            </div>
           
        </div> */}


        {/* New Design */}
        <div style={{
            width:"100%",
            display:"flex",
            flexDirection:"column",
            padding:"2rem",
            gap:"2rem",
            backgroundColor:"#0F4D6B",
        }}>
            <div data-aos="fade-up" className="scholarShipCard">
                <p style={{
                    // textAlign:"center",
                    color:"white",
                    fontFamily: "WorkSans-normal",
                    fontSize: "1.5rem",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "38px",
                }}>1. Cuotas reducidas</p>
                <p style={{
                    marginTop:"2rem",
                    fontSize:"1rem",
                    color:"white",
                    fontFamily:"WorkSans-normal"
                }}>Si resuelves cursar no más de tres materias al cuatrimestre, abonarás durante el mismo el arancel con un 40% de reducción.    Esto te permite adecuar el sistema a tus posibilidades financieras y cursar la carrera a un ritmo más pausado, si tus demás obligaciones lo hacen conveniente.     Puedes optar por este beneficio en los cuatrimestres que así lo resuelvas, pudiendo cursar todas las materias en aquellos en que lo consideres conveniente.
                </p>


            </div>
            <div style={{
                width:"100%",
            }}
            >
                <div data-aos="fade-up" className="scholarShipCardRight">
                
                    <p style={{
                        // textAlign:"center",
                        color:"white",
                        fontFamily: "WorkSans-normal",
                        fontSize: "1.5rem",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "38px",
                    }}>2. Reducción arancelaria por situación económica</p>
                    <p style={{
                        marginTop:"2rem",
                        fontSize:"1rem",
                        color:"white",
                        fontFamily:"WorkSans-normal"
                    }}>Si cursas el total de las materias del cuatrimestre y tienes una situación personal, laboral o familiar que te dificulta afrontar la totalidad de la cuota, puedes solicitar que tu caso sea considerado por el Comité de Becas, que te solicitará información y resolverá al respecto.   
                    </p>
                </div>
              
                
            </div>
            <div data-aos="fade-up" className="scholarShipCard"
            >
                <p style={{
                    // textAlign:"center",
                    color:"white",
                    fontFamily: "WorkSans-normal",
                    fontSize: "1.5rem",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "38px",
                }}>3. Beca por mérito académico</p>
                <p style={{
                    marginTop:"2rem",
                    fontSize:"1rem",
                    color:"white",
                    fontFamily:"WorkSans-normal"
                }}>Si tienes un destacado desempeño académico, podrás postularte para becas que premian tus esfuerzos.
                </p>
                
                
            </div>


        </div>

     
      </div>



        </div>
    )
}

export default ScholarshipsAndBenefits;