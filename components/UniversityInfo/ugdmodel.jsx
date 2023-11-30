import React from 'react';
// import "./aboutUs.css";
import Image from 'next/image';
import Counter from './counter';
import Accordian from '../navbar/accordian';


const UGDModelPage = () => {

  return (
    <div style={{
          width:"100%",
          backgroundColor:"white",
        //   padding:"20px",
          paddingTop:"5rem",
          backgroundImage:"url(/cool-background.png)",
        //   border:"2px solid black",
      }}>
      <div className='UGDModelPageMain'>
        <div className='UGDModelPageContent'>
            {/* <Image src={"/unsplash_-uHVRvDr7pg.png"} width={1200} height={700}  /> */}
            <div >
            <p style={{
            // textAlign:"center",
            color:"#1C3564",
            fontFamily: "Poppins",
            fontSize: "3rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "38px",
            }}>Nuestro Modelo de Educación Virtual</p>
            <p  style={{
            // textAlign:"center",
            marginTop:"1rem",
            color:"#1C3564",
            fontFamily: "Poppins",
            fontSize: "1.5rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "38px",
            }}>Sistema de educación a distancia acreditado
            </p>
            <p style={{
            marginTop:"2rem",
            fontSize:"1rem",
            color:"#6B6C6C"
          }}>En 2017 la UGD evaluó y acreditó ante CONEAU su Sistema Institucional de Educación a Distancia (SIED). 
          Nuestro equipo innova permanentemente a fin de aportar las mejores herramientas y estrategias para lograr los más efectivos métodos de formación en línea.          
            </p>
            </div>
            

      </div>
        <div className='UGDModelPageImage'>
            <div style={{width: '100%', height: '100%', position: 'relative'}}>
            <Image
                alt='Mountains'
                src='/pexels-julia-m-cameron-4145153 (1).jpg'
                layout='fill'
                objectFit='contain'
                style={{
                    borderRadius:"10px"
                }}
            />
            </div>

        </div>

      </div>
      <div className='UGDModelPageMain' >

        <div  className='UGDModelPageImage'>
            <div style={{width: '100%', height: '100%', position: 'relative'}}>
            <Image
                alt='Mountains'
                src='/pexels-julia-m-cameron-4144225.jpg'
                layout='fill'
                objectFit='contain'
            />
            </div>

        </div>
        <div className='UGDModelPageContent'>
             <div >
            <p style={{
            // textAlign:"center",
            color:"#1C3564",
            fontFamily: "Poppins",
            fontSize: "3rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "38px",
            }}>Principales características del SIED            </p>
            <p style={{
                marginTop:"2rem",
                fontSize:"1rem",
                color:"#6B6C6C"
            }}>El SIED de la UGD es un espacio virtual amigable, de fácil acceso y navegación, mediante el cual vas a establecer comunicación con el equipo docente y tus compañeros.
            Fue diseñado y organizado para garantizar una formación de calidad, donde se dispondrá de todos los materiales educativos, recursos y actividades previstas para favorecer el proceso de aprendizaje. 
            Se tiene acceso a una amplia variedad de recursos en línea que facilitarán el abordaje y comprensión de los contenidos. 
            El SIED brinda la posibilidad de estudiar desde cualquier lugar y en cualquier momento, lo que la convierte en una plataforma flexible y cómoda.             
            </p>
            </div>

        </div>
        
      </div>
      <div className='UGDModelPageSecondDiv'>
        <p style={{
            textAlign:"center",
            color:"white",
            fontFamily: "Poppins",
            fontSize: "2rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "38px",
            }}>A través del SIED la UGD te ofrece </p>
            <div className='UGDModelPageSecondDivSubDiv'>
            <div style={{
            width:"200px",
            height:"120px",
            backgroundColor:"white",
            boxShadow:" 0 8px 8px 0 rgba(0,0,0,0.2)",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            textAlign:"center",
            borderRadius:"10px",

          }}><p style={{
            // textAlign:"center",
            color:"#1C3564",
            fontFamily: "Poppins",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "38px",
            }}>Una formación 100% remota </p>
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

          }}><p style={{
            // textAlign:"center",
            color:"#1C3564",
            fontFamily: "Poppins",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "38px",
            }}>Actividades formativas y con retroalimentación de tu docente 
            </p>
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

          }}><p style={{
            // textAlign:"center",
            color:"#1C3564",
            fontFamily: "Poppins",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "38px",
            }}>Encuentros sincrónicos semanales con los profesores, que son optativos 
            </p>
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

          }}><p style={{
            // textAlign:"center",
            color:"#1C3564",
            fontFamily: "Poppins",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "38px",
            }}>Acompañamiento personalizado </p>
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

          }}><p style={{
            // textAlign:"center",
            color:"#1C3564",
            fontFamily: "Poppins",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "38px",
            }}>Asesoramiento pedagógico y académico permanente </p>
            </div>

            </div>
        
      </div>
      <div className='UGDModelPageThirdDiv'>
        <p style={{
            textAlign:"center",
            color:"#1C3564",
            fontFamily: "Poppins",
            fontSize: "2rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "38px",
        }}>¿Qué garantiza nuestro modelo pedagógico?</p>

        <div className='UGDModelPageThirdDivSubDiv'>

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
                <Image alt='Mountains' src='/opportunity (1).png' width={100} height={100} style={{
                    marginLeft:"5.5rem"
                }}/>
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
                <Image alt='Mountains' src='/arrows (1).png' width={100} height={100} style={{
                    marginLeft:"5.5rem"
                }}/>
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
                <Image alt='Mountains' src='/autonomy.png' width={100} height={100} style={{
                    marginLeft:"5.5rem"
                }}/>
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
                <Image alt='Mountains' src='/message.png' width={80} height={80} style={{
                  marginLeft:"5.5rem"
                }}/>
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
      <div className='UGDModelPageFourthDiv'>
        <div style={{
          padding:"1.45rem"
        }}>
          <p style={{
              textAlign:"center",
              color:"white",
              fontFamily: "Poppins",
              fontSize: "2rem",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "38px",
              }}>Acompañamos tu trayectoria </p>

          </div>

          <div>
            <div className='UGDModelPageFourthDivRoundedLineLeft'>
              <p>Previo a la cursada  </p>

            </div>
            <div className='UGDModelPageFourthDivContainer' >
               <div className='UGDModelPageFourthDivContentCard'>
              <div>
                <p className='heading'>Encuentro de bienvenida</p>
                <p className='para'>Ofrecemos una charla para los ingresantes para contarles sobre el modelo pedagógico y la propuesta de la universidad. 
                </p>
                </div>
              </div>
              <div className='UGDModelPageFourthDivContentCard'>
                <div>
                {/* <Image alt='Mountains' src='/opportunity (1).png' width={100} height={100} style={{
                    marginLeft:"5.5rem"
                }}/> */}
                <p className='heading'>Taller Introductorio</p>
                <p className='para'> Lo dictamos previo al inicio del cuatrimestre para que comiences a familiarizarte con el aula virtual, su organización, navegación y uso. 
                </p>
                </div>
              </div>

            </div>
          </div>
          <div>
            <div className='UGDModelPageFourthDivRoundedLineRight'>
              <p>Durante la cursada </p>
                

            </div>
            <div className='UGDModelPageFourthDivContainer2'>
               <div className='UGDModelPageFourthDivContentCard'>
                <div>
                {/* <Image alt='Mountains' src='/opportunity (1).png' width={100} height={100} style={{
                    marginLeft:"5.5rem"
                }}/> */}
                <p className='heading'>Espacios de tutoría</p>
                <p className='para'> Encuentros optativos en los cuales podrás sumarte para conversar con la tutora facilitadora sobre algún tema en particular. 
                Sala de Estudiantes: con información actualizada de manera permanente 
                 </p>
                </div>
              </div>
              <div className='UGDModelPageFourthDivContentCard'>
                <div>
                <p className='heading'>Tutora facilitadora</p>
                <p className='para'>se encargará de orientarte y guiarte en la trayectoria académica, brindándote apoyo emocional, desarrollo de habilidades de estudio, asistencia en la resolución de problemas y todo lo que necesités.
                </p>
                </div>
              </div>

            </div>
            
          </div>

      </div>
      <div style={{
        marginTop:"2rem",
        width:"100%",
        height:"700px",
        display:"flex",
        // justifyContent:"center",
        alignItems:"center",
        // alignContent:"center",
        flexDirection:"column"
      }}>

        <p style={{
            textAlign:"center",
            color:"#1C3564",
            fontFamily: "Poppins",
            fontSize: "2rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "38px",
            }}>Preguntas frecuentes 
            </p>

        <div style={{
          marginTop:"2rem",
          width:"70%",
          background:"white",
          boxShadow:" 0 8px 8px 0 rgba(0,0,0,0.2)",
          borderRadius:"10px",
          border:"2px solid #1C3564"
        }}>
              <Accordian 
                heading={"¿Cómo accedo al aula virtual? "}
                text={["Dispondrás de un usuario que te permitirá el acceso al campus virtual. Este usuario será tu DNI y una contraseña. Una vez que ingreses tendrás acceso a las aulas de las materias en las cuales te inscribiste.                             "]}
                index={"1"}
              />
              <Accordian 
                heading={" ¿Qué pasa si no apruebo un examen? "}
                text={["Dispondrás de un usuario que te permitirá el acceso al campus virtual. Este usuario será tu DNI y una contraseña. Una vez que ingreses tendrás acceso a las aulas de las materias en las cuales te inscribiste.                             "]}
                index={"1"}
              />
              <Accordian 
                heading={"¿Dónde son los encuentros sincrónicos? "}
                text={["Dispondrás de un usuario que te permitirá el acceso al campus virtual. Este usuario será tu DNI y una contraseña. Una vez que ingreses tendrás acceso a las aulas de las materias en las cuales te inscribiste.                             "]}
                index={"1"}
              />
              <Accordian 
                heading={" ¿Qué pasa si no puedo asistir al encuentro sincrónico?                 "}
                text={["Dispondrás de un usuario que te permitirá el acceso al campus virtual. Este usuario será tu DNI y una contraseña. Una vez que ingreses tendrás acceso a las aulas de las materias en las cuales te inscribiste.                             "]}
                index={"1"}
              />
              <Accordian 
                heading={" ¿Cómo puedo comunicarme con mis profesores y compañeros?                 "}
                text={["Dispondrás de un usuario que te permitirá el acceso al campus virtual. Este usuario será tu DNI y una contraseña. Una vez que ingreses tendrás acceso a las aulas de las materias en las cuales te inscribiste.                             "]}
                index={"1"}
              />
        </div>

      </div>
   
    </div>
  );
};

export default UGDModelPage;
