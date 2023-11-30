import Image from "next/image";
import "../UniversityInfo/aboutUs.css";
import "./community.css"
const Student = () =>{
    return(
        <div style={{
            width:"100%",
            backgroundColor:"white",
            paddingTop:"5rem",
            backgroundImage:"url(/cool-background.png)"
        }}>
    <div className="aboutUSPageMain">
        <div className="aboutUSPageContent" >
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
            }}>Nuestros destinatarios </p>
            <p style={{
            marginTop:"2rem",
            fontSize:"1rem",
            color:"#6B6C6C"
          }}>Las carreras de UGD Virtual se caracterizan por su flexibilidad, que permite adaptar el régimen de estudios a situaciones particulares de disponibilidad horaria.     
          Nuestros alumnos en esta modalidad pueden ser:</p>
          
            </div>
       
            

        </div>
        <div className="aboutUSPageImage">
            <div style={{width: '80%', height: '80%', position: 'relative', }}>
            <Image
                alt='Mountains'
                src='/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg'
                layout='fill'
                objectFit='contain'
                style={{
                    borderRadius:"10px",
                }}
            />
            </div>

        </div>

            </div>
    <div className="StudentSecondDiv">
        <div className="StudentSecondDivSubDiv">

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
                backgroundColor:"#1C3564",
            }}>
                <div>
                {/* <Image alt='Mountains' src='/opportunity (1).png' width={100} height={100} style={{
                    marginLeft:"5.5rem"
                }}/> */}
                <p style={{
                    marginTop:"0.5rem",
                    textAlign:"center",
                    color:"white",
                    fontFamily: "Poppins",
                    fontSize: "1.5rem",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "38px",
                }}>Jóvenes entusiastas</p>
                <p style={{
                marginTop:"2rem",
                fontSize:"0.8rem",
                color:"white"
                }}>Que, habiendo culminado recientemente sus estudios de nivel medio,  aspiran cursar una carrera universitaria pudiendo tener una alta  dedicación, o quizás hacerla más pausadamente si buscan a su vez desarrollar una actividad laboral.
                </p>
                </div>
            </div>
            <div style={{
                width:"300px",
                height:"300px",
                boxShadow:" 0 8px 8px 8px rgba(0,0,0,0.2)",
                borderRadius:"10px",
                padding:"1rem",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                gap:"2rem",
                alignContent:"center",
                backgroundColor:"#1C3564",
            }}>
                
                <div>
                {/* <Image alt='Mountains' src='/arrows (1).png' width={100} height={100} style={{
                    marginLeft:"5.5rem"
                }}/> */}
                <p style={{
                    marginTop:"0.5rem",
                    textAlign:"center",
                    color:"white",
                    fontFamily: "Poppins",
                    fontSize: "1.5rem",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "38px",
                }}>Adultos que buscan fortalecer su perfil laboral</p>
                <p style={{
                marginTop:"2rem",
                fontSize:"0.8rem",
                color:"white"
                }}> Personas que, ya desempeñándose laboralmente, buscan incorporar conocimientos y competencias que mejores su empleabilidad y lo posicionen para aspirar a nuevos roles. 
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
                backgroundColor:"#1C3564",
            }}>
                <div>
                {/* <Image alt='Mountains' src='/autonomy.png' width={100} height={100} style={{
                    marginLeft:"5.5rem"
                }}/> */}
                <p style={{
                    marginTop:"0.5rem",
                    textAlign:"center",
                    color:"white",
                    fontFamily: "Poppins",
                    fontSize: "1.5rem",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "38px",
                }}>Quienes hayan iniciado estudios superiores:</p>
                <p style={{
                marginTop:"2rem",
                fontSize:"0.8rem",
                color:"white"
                }}> Y por alguna razón no los hayan culminado, y nos remitan información para analizar las posibles equivalencias a reconocer. 
                </p>
                </div>
            </div>
           
        </div>
     
      </div>



        </div>
    )
}

export default Student;