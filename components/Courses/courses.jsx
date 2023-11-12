// import "./courses.css"
"use client"
import Image from "next/image";
import data from "@/data/data";
import Accordian from "../navbar/accordian";
import "./courses.css"

const Course = ({params}) => {
    console.log(params.course)
    const course = data.find((course) => course.path === params.course);
    // console.log(course)
    const bgimages=[
        course.bgimage,
        "/BecaLatina_UGD.jpg"
    ]
    return(
        <div style={{
            width:"100vw",
            backgroundColor:"white",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",

        }}
        className="maindivcourses"
        >
            <Image src={course.bgimage} height={1200} width={1200} />
            
            <div>
                <h2 style={{
                    color:"#1C3564",
                    fontWeight:"500",
                    fontSize:"1.5rem",
                    textAlign:"center",
                    marginTop:"50px",
                }}>{course.course}</h2>
            </div>
            <div className="subdivcourses" >
                 <div className="contentdiv" style={{
                    flexDirection:"row",
                    padding:"1rem"
                 }}>
                    <h3 style={{color:"#1C3564",fontWeight:"500",fontSize:"1.5rem",textAlign:"center"}}>DESTINATARIOS</h3>
                    <p style={{color:"#6B6C6C",fontWeight:"400",fontSize:"0.9em" ,marginTop:"1rem"}}>XX XX  XXXXX X X  XXXXXX XX  XXXXX X X  XXXXXX XX  XXXXX X X  XXXXXX XX  XXXXX X X  XXXXXX XX  XXXXX X X  XXXXXX XX  XXXXX X X  XXXXXX XX  XXXXX X X  XXXXXX XX  XXXXX X X  XXXXXX XX  XXXXX X X  XXXXXX XX  XXXXX X X  XXXXXX XX XX  XXXXX X X  XXXXXX XX  XXXXX X X  XXXXXX XX  XXXXX X X  XXXXXX XX  XXXXX X X  XXXXXX XX  XXXXX X X  XXXXXX XX  XXXXX X X  XXXXXX XX  XXXXX X X  XXXXXX XX  XXXXX X X  XXXXXX XX  XXXXX X X  XXXXXX XX  XXXXX X X  XXXXXX</p>
                    <h3 style={{color:"#1C3564",fontWeight:"500",fontSize:"1.5rem",textAlign:"center",marginTop:"1.5rem" }}>ALCANCES Y SALIDA LABORAL</h3>
                    <div style={{
                        display:"flex",
                        justifyContent:"center",
                        alignContent:"center",
                        marginTop:"1.5rem"
                    }}>
                        <div style={{
                            width:"80%",
                            boxShadow:" 0 4px 8px 0 rgba(0,0,0,0.2)",
                            borderRadius:"5px"
                        }}>
                            <Accordian 
                            heading={"El graduado será un profesional competente para"}
                            text={["Desempeñar las funciones directivas de análisis, planeamiento, organización, coordinación y control de empresas y entidades de todo tipo. ","Elaborar e implantar políticas, sistemas, métodos y procedimientos de administración, finanzas, producción, comercialización, presupuestos, costos y administración de personal."]}
                            index={"1"}
                            />
                            <Accordian 
                            heading={"Podrá desempeñarse en"}
                            text={["Desempeñar las funciones directivas de análisis, planeamiento, organización, coordinación y control de empresas y entidades de todo tipo. ","Elaborar e implantar políticas, sistemas, métodos y procedimientos de administración, finanzas, producción, comercialización, presupuestos, costos y administración de personal."]}
                            index={"1"}
                            />
                             <Accordian 
                            heading={"Podrá desempeñarse en"}
                            text={["Desempeñar las funciones directivas de análisis, planeamiento, organización, coordinación y control de empresas y entidades de todo tipo. ","Elaborar e implantar políticas, sistemas, métodos y procedimientos de administración, finanzas, producción, comercialización, presupuestos, costos y administración de personal."]}
                            index={"1"}
                            />
                             <Accordian 
                            heading={"Podrá desempeñarse en"}
                            text={["Desempeñar las funciones directivas de análisis, planeamiento, organización, coordinación y control de empresas y entidades de todo tipo. ","Elaborar e implantar políticas, sistemas, métodos y procedimientos de administración, finanzas, producción, comercialización, presupuestos, costos y administración de personal."]}
                            index={"1"}
                            />
                        </div>
                    </div>
                </div>
                <div className="sidecontentdiv" style={{
                    backgroundColor:"white",
                    boxShadow:" 0 8px 8px 0 rgba(0,0,0,0.2)",
                    borderRadius:"5px",
                    display:"flex",
                    flexDirection:"column",
                }}>
                    {/* <Image src={course.bgimage} height={1200} width={1200} /> */}
                    <div style={{
                        padding:"2em",
                    }}>
                        <h3 style={{color:"#1C3564",fontWeight:"500",fontSize:"18px",textAlign:"center"}}>LICENCIATURA EN ADMINISTRACIÓN</h3>
                        <h3 style={{color:"#1C3564",fontWeight:"500",fontSize:"15px"}}>Presentación</h3>
                        <p style={{color:"#6B6C6C",fontSize:"0.8em"}}>El graduado estará formado en gestión, gerenciamiento y tendrá la capacidad de diseñar, implementar y dirigir organizaciones atendiendo a criterios profesionales de eficiencia y calidad para hacer frente a los distintos desafíos empresariales.</p>
                    </div>
                    <div style={{
                        width:"100%",
                        display:"flex",
                        flexDirection:"column",
                        padding:"2em",
                        gap:"2em",
                    }}>
                        <div style={{
                            display:"flex",
                            gap:"1em",
                        }}>
                            <Image src={"/time.svg"} height={25} width={25} /> 
                            <div style={{color:"#1C3564",fontWeight:"800",fontSize:"15px"}}>Título final: <p style={{color:"#6B6C6C",fontWeight:"400",fontSize:"0.8em"}}>Licenciado en Administración (4 años)</p></div>
                        </div>
                        <div style={{
                            display:"flex",
                            gap:"1em"
                        }}>
                            <Image src={"/government.svg"} height={30} width={30} />
                            <div style={{color:"#1C3564",fontWeight:"800",fontSize:"15px"}}>Título Intermedio: <p style={{color:"#6B6C6C",fontWeight:"400",fontSize:"0.8em"}}>Técnico Universitario en Administración (2,5 años)</p></div>
                        </div>
                        <div style={{
                            display:"flex",
                            gap:"1em"
                        }}>
                            <Image src={"/graduation 1.svg"} height={30} width={30} />
                            <div style={{color:"#1C3564",fontWeight:"800",fontSize:"15px"}}>Certificaciones intermedias: <p style={{color:"#6B6C6C",fontWeight:"400",fontSize:"0.8em"}}>Certificado Universitario en Administración</p><p  style={{color:"#6B6C6C",fontWeight:"400",fontSize:"0.8em"}}>Certificado Unviersitario en Diseño y Gestión de Proyectos</p></div>
                        </div>
                        <div style={{
                            display:"flex",
                            gap:"1em"
                        }}>
                            <Image src={"/badge.svg"} height={30} width={30} />
                            <div style={{color:"#1C3564",fontWeight:"800",fontSize:"15px"}}>Títulos aprobados por : <p style={{color:"#6B6C6C",fontWeight:"400",fontSize:"0.8em"}}>Técnico Universitario en Administración (2,5 años)</p></div>
                        </div>
                        <div style={{
                            display:"flex",
                            gap:"1em",
                            flexDirection:"column",
                            justifyContent:"center",
                            alignItems:"center",
                        }}>
                           <div style={{
                                marginTop:"20px",
                                textAlign:"center"
                            }}>
                                <a href="/Programador_Java_Full Stack.pdf" download="Programador_Java_Full Stack.pdf">
                                    <button style={{
                                        width:"200px",
                                        height:"50px",
                                        backgroundColor:"orange",
                                        color:"white",
                                        padding:"5px",
                                        borderRadius:"5px"
                                    }}>Consultas</button>
                                </a>
                                <a href="/Programador_Java_Full Stack.pdf" download="Programador_Java_Full Stack.pdf">
                                    <button style={{
                                        width:"200px",
                                        height:"50px",
                                        marginTop:"20px",
                                        backgroundColor:"#0B4C26",
                                        color:"white",
                                        padding:"5px",
                                        borderRadius:"5px"
                                    }}>Me quiero inscribir</button>
                                </a>
                            </div>
                            
                           
                        </div>
                    </div>


                </div>
            </div>

            {/* <div style={{
                // border:"2px solid grey",
                width:"70%",
                padding:"20px",
                marginTop:"20px",
                // display:"flex",
                // justifyContent:"center",
                // alignItems:"center",
                // flexDirection:"column",
            }}>
                
                {
                    course.syllabus&&course.syllabus.map((syllabus,index)=>(
                        <div>
                            <h3 style={{
                                marginTop:"20px",
                                // textAlign:"center",
                                color:"#1C3564",
                                fontSize:"20px",
                                // position:"absolute",
                                // left:"0"
                            }}><span style={{marginRight:"5px"}}>{`${syllabus.id}.`}</span>{syllabus.topic&&syllabus.topic}</h3>
                            <ul style={{
                                marginLeft:"20px"
                            }}>
                                {
                                    syllabus.subtopic&&syllabus.subtopic.map((subtopic)=>(
                                        <li style={{padding:"5px"}}>{subtopic.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
                <div style={{
                    marginTop:"20px",
                    textAlign:"center"
                }}>
                    <a href="/Programador_Java_Full Stack.pdf" download="Programador_Java_Full Stack.pdf">
                        <button style={{
                            width:"200px",
                            height:"50px",
                            backgroundColor:"#005FAF",
                            color:"white",
                            padding:"5px",
                            borderRadius:"5px"
                        }}>Download</button>
                    </a>
                </div>
            </div> */}
            <div style={{
                textAlign:"center",
                marginTop:"20px"
            }}> 
            <a href="/Programador_Java_Full Stack.pdf" download="Programador_Java_Full Stack.pdf">
                <button style={{
                    width:"200px",
                    height:"50px",
                    marginTop:"20px",
                    backgroundColor:"#005FAF",
                    color:"white",
                    padding:"5px",
                    borderRadius:"5px"
                }}>Download syllabus</button>
            </a>
            </div>
            
       
      </div>)
}

export default Course;