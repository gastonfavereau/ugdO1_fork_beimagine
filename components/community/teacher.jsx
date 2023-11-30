import Image from "next/image";
import "./community.css";
const Teachers = () =>{
    return(
        <div style={{
            width:"100%",
            backgroundColor:"white",
            // padding:"20px",
            paddingTop:"5rem",
            backgroundImage:"url(/cool-background.png)",
          //   border:"2px solid black",
        }}>
        <div className="teacherMain">
        <div className="teacherContent">
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
            }}>Nuestros Docentes </p>
            <p style={{
            marginTop:"2rem",
            fontSize:"1rem",
            color:"#6B6C6C"
          }}>Conformamos nuestro cuerpo docente integrando perfiles que se complementan aportando cada uno de su formación y experiencia:
          </p>
          
            </div>
       
            

        </div>
        <div className="teacherImage">
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
        <div className="teacherMainColor">
        <div className="teacherContent">
            {/* <Image src={"/unsplash_-uHVRvDr7pg.png"} width={1200} height={700}  /> */}
            <div >
            <p style={{
            // textAlign:"center",
            color:"white",
            fontFamily: "Poppins",
            fontSize: "3rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "38px",
            }}>Académicos            </p>
            <p style={{
            marginTop:"2rem",
            fontSize:"1rem",
            color:"white"
          }}>Profesores e investigadores con amplia experiencia universitaria, que conocen profundamente su especialidad, así como los avances y evolución de las tecnologías y conocimientos relacionados.
          </p>
          
            </div>
       
            

        </div>
        <div className="teacherImage">
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
        <div className="teacherMain">
        <div className="teacherContent">
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
            }}>Profesionales            </p>
            <p style={{
            marginTop:"2rem",
            fontSize:"1rem",
            color:"#6B6C6C"
          }}>Que se desempeñan en empresas e instituciones, aportando la perspectiva de quien está, día a día, en contacto con la realidad y actualidad del ejercicio profesional concreto.
          </p>
          
            </div>
       
            

        </div>
        <div className="teacherImage">
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
        <div className="teacherMainColor">
        <div className="teacherContent">
            {/* <Image src={"/unsplash_-uHVRvDr7pg.png"} width={1200} height={700}  /> */}
            <div >
            <p style={{
            // textAlign:"center",
            color:"white",
            fontFamily: "Poppins",
            fontSize: "3rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "38px",
            }}>Pedagogos
            </p>
            <p style={{
            marginTop:"2rem",
            fontSize:"1rem",
            color:"white"
          }}>Especialistas en docencia y en educación virtual que trabajan en constante conexión con los anteriores, orientando y supervisando la conformación de las aulas virtuales, los materiales didácticos y herramientas para el aprendizaje.
          </p>
          
            </div>
       
            

        </div>
        <div className="teacherImage">
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
        <div className="teacherMain">
        <div className="teacherContent">
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
            }}>Revisores externos
            </p>
            <p style={{
            marginTop:"2rem",
            fontSize:"1rem",
            color:"#6B6C6C"
          }}>Los materiales son sometidos a revisiones externas logrando con ello incorporar nuevas miradas y aportes.
          </p>
          
            </div>
       
            

        </div>
        <div className="teacherImage">
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

    </div>)
}

export default Teachers;

