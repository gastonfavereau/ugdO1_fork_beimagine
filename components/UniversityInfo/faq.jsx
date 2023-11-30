import Accordian from "../navbar/accordian"

const FAQ = () => {
    
    return(
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
              width:"90%",
              background:"white",
              boxShadow:" 0 8px 8px 0 rgba(0,0,0,0.2)",
              borderRadius:"10px",
              padding:"1rem",
            //   border:"2px solid #1C3564"
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
    )
}

export default FAQ