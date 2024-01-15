
"use client"
import { React, useEffect, useState } from 'react'
import Image from "next/image";
import data from "@/data/data";
import "./courses.css"
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { usePathname } from 'next/navigation'

const Course = ({params}) => {
    const pathname = usePathname()
    const [isUs, setUs] = useState(false);
    
    useEffect(() => {
        pathname.includes("us") ? setUs(true) : setUs(false);
        AOS.init({
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 20, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 300, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: true, // whether animation should happen only once - while scrolling down
        })
	}, []);
    const course = data.find((course) => course.path === params.course);
 
    return(
        <div style={{
            width:"100%",
            backgroundColor:"white",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            backgroundImage:"url(/cool-background.png)"

        }}
        className="maindivcourses"
        >
        <div style={{
                marginTop: "5rem",
                position: "relative",
                width: "100%",
                height: "auto",
                overflow: "hidden", // Ensure content doesn't overflow
                display: "flex",
                alignItems: "center",  // Center vertically
                justifyContent: "center",  // Center horizontally
            }}>
                <Image src={course.bgimage} height={1200} width={2000} />
            </div>
            
            
            <div>
            </div>
            <div className="subdivcourses" >
                 <div  className="contentdiv" style={{
                    flexDirection:"row",
                    padding:"1rem"
                 }}>
                    {course.destinatario&&
                    <div  style={{
                        width:"100%",
                        backgroundColor:"#5092b3",
                        padding:"1rem",
                        
                    }}>
                    <h3 style={{color:"white",fontWeight:"500",fontSize:"1.5rem",textAlign:"center"}}>DESTINATARIOS</h3>
                        {
                            course.destinatario.map((text)=>{
                                return(
                                    <p  key={text}  dangerouslySetInnerHTML={{ __html: text }} style={{color:"white",fontWeight:"400",fontSize:"0.9em" ,marginTop:"1rem"}}></p>
                                )
                            })
                        }
                    </div>
                    }

                    {course.alcances&&
                    <div data-aos="fade-up" style={{
                        width:"100%",
                        backgroundColor:"#0F4D6B",
                        padding:"1rem",
                    }}>
                    <h3 style={{color:"white",fontWeight:"500",fontSize:"1.5rem",textAlign:"center",marginTop:"2rem" }}>ALCANCES Y SALIDA LABORAL</h3>
                    <p style={{color:"white",fontWeight:"400",fontSize:"0.9em" ,marginTop:"1rem"}}>{course.alcances.title}</p>
                    <div style={{
                        display:"flex",
                        justifyContent:"center",
                        alignContent:"center",
                        marginTop:"1.5rem"
                    }}>
                       
                        <div style={{
                            width:"100%",
                   
                        }}>
                            <ul>
                            {
                                course.alcances.list.map((text)=>{
                                    
                                    return(
                                        <li key={text} dangerouslySetInnerHTML={{ __html: text }} style={{color:"white",fontWeight:"400",fontSize:"0.9em" ,marginTop:"1rem"}}></li>     
                                    )
                                })
                            }
                            </ul>
                            
                        </div>
                    </div>
                    </div>
                    }
                    {course.ambitos&&
                    <div data-aos="fade-up" style={{
                        width:"100%",
                        backgroundColor:"#C9ECF5",
                        padding:"1rem",
                    }}>
                    <h3 style={{color:"#1C3564",fontWeight:"500",fontSize:"1.5rem",textAlign:"center",marginTop:"2rem" }}>Ámbitos de competencia: </h3>
                    <p style={{color:"#6B6C6C",fontWeight:"400",fontSize:"0.9em" ,marginTop:"1rem"}}>{course.alcances.text}</p>
                    <p style={{color:"#6B6C6C",fontWeight:"400",fontSize:"0.9em" ,marginTop:"1rem"}}>{course.alcances.subtext}</p>
                    <div style={{
                        display:"flex",
                        justifyContent:"center",
                        alignContent:"center",
                        marginTop:"1.5rem"
                    }}>
                       
                        <div style={{
                            width:"100%",
                            // boxShadow:" 0 4px 8px 0 rgba(0,0,0,0.2)",
                            // borderRadius:"5px",
                            // backgroundColor:"white",
                   
                        }}>
                            <ul>
                            {/* write unorder list html here */}
                            {
                                course.ambitos.list.map((text)=>{
                                    
                                    return(
                                        <li key={text} dangerouslySetInnerHTML={{ __html: text }} style={{color:"#6B6C6C",fontWeight:"400",fontSize:"0.9em" ,marginTop:"1rem"}}></li>     
                                    )
                                })
                            }
                            </ul>
                            
                        </div>
                    </div>
                    </div>
                    }
                    {course.podra&&
                    <div data-aos="fade-up"  style={{
                        width:"100%",
                        backgroundColor:"#E4F9FF",
                        padding:"1rem",
                    }}>
                    <h3 style={{color:"#1C3564",fontWeight:"500",fontSize:"1.5rem",textAlign:"center",marginTop:"2rem" }}>Podrá desempeñarse en: </h3>
                    <p style={{color:"#6B6C6C",fontWeight:"400",fontSize:"0.9em" ,marginTop:"1rem"}}>{course.podra.text}</p>
                    <p style={{color:"#6B6C6C",fontWeight:"400",fontSize:"0.9em" ,marginTop:"1rem"}}>{course.podra.subtext}</p>
                    <div style={{
                        display:"flex",
                        justifyContent:"center",
                        alignContent:"center",
                        marginTop:"1.5rem"
                    }}>
                       
                        <div style={{
                            width:"100%",
                            // boxShadow:" 0 4px 8px 0 rgba(0,0,0,0.2)",
                            // borderRadius:"5px",
                            // backgroundColor:"white",
                   
                        }}>
                            <ul>
                            {/* write unorder list html here */}
                            {
                                course.podra.map((text)=>{
                                    
                                    return(
                                        <li key={text} dangerouslySetInnerHTML={{ __html: text }} style={{color:"#6B6C6C",fontWeight:"400",fontSize:"0.9em" ,marginTop:"1rem"}}></li>     
                                    )
                                })
                            }
                            </ul>
                            
                        </div>
                    </div>
                    </div>
                    }
                </div>
                <div  className="sidecontentdiv" style={{
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
                        {/* <h3 style={{color:"#1C3564",fontWeight:"500",fontSize:"18px",textAlign:"center"}}>{course.course}</h3> */}
                        <p style={{color:"#1C3564",fontWeight:"800",fontSize:"15px"}}>Presentación</p>
                        <p dangerouslySetInnerHTML={{ __html: course.presentacion }} style={{color:"#6B6C6C",fontSize:"0.8em",marginTop:"1em",fontWeight:"600"}}></p>
                    </div>
                    <div style={{
                        width:"100%",
                        display:"flex",
                        flexDirection:"column",
                        padding:"2em",
                        gap:"2em",
                    }}>
                        {/* tituloFinal */}
                        { course.tituloFinal &&
                        <>
                        {typeof course.tituloFinal === 'string' ?
                        <div style={{
                            display:"flex",
                            gap:"1em",
                        }}>
                            <Image src={"/time.svg"} height={25} width={25} /> 
                            <div style={{color:"#1C3564",fontWeight:"800",fontSize:"15px"}}>Título final: <p style={{color:"#6B6C6C",fontWeight:"400",fontSize:"0.8em"}}>{course.tituloFinal}</p></div>
                        </div>:
                        <div style={{
                            display:"flex",
                            gap:"1em",
                        }}
                        >
                            <Image src={"/time.svg"} height={25} width={25} />  
                            <div style={{color:"#1C3564",fontWeight:"800",fontSize:"15px"}}>Títulos finales:
                            {
                                course.tituloFinal.map((item)=>( <p style={{color:"#6B6C6C",fontWeight:"400",fontSize:"0.8em"}} key={item}>{item}</p>))
                            }
                            </div>
                        </div>
                        }
                        </>
                        }

                        {/* tituloIntermedio */}

                        {course.tituloIntermedio&&

                        <>
                        {typeof course.tituloIntermedio === 'string'&&
                        <div style={{
                            display:"flex",
                            gap:"1em"
                        }}>
                            <Image src={"/government.svg"} height={30} width={30} />
                            <div style={{color:"#1C3564",fontWeight:"800",fontSize:"15px"}}>Título Intermedio: <p style={{color:"#6B6C6C",fontWeight:"400",fontSize:"0.8em"}}>{course.tituloIntermedio}</p></div>
                        </div>}

                        {
                            Array.isArray(course.tituloIntermedio)&&
                            <div style={{
                                display:"flex",
                                gap:"1em"
                            }}
                            >
                                <Image src={"/government.svg"} height={30} width={30} />
                                <div style={{color:"#1C3564",fontWeight:"800",fontSize:"15px"}}>Títulos Intermedios: 
                                {
                                    course.tituloIntermedio.map((item)=>(
                                        <p style={{color:"#6B6C6C",fontWeight:"400",fontSize:"0.8em"}}>{item}</p>
                                    ))
                                }
                                </div>
                            </div>
                        }

                        </>
                        }
                        {
                            course.diplomaturas&&
                            <div style={{
                                display:"flex",
                                gap:"1em"
                            }}>
                                <Image src={"/graduation 1.svg"} height={30} width={30} />
                                <div style={{color:"#1C3564",fontWeight:"800",fontSize:"15px"}}>Diplomaturas Universitarias Intermedias:
                                {
                                    course.diplomaturas.map((item)=>{
                                        return <p style={{color:"#6B6C6C",fontWeight:"400",fontSize:"0.8em"}}>{item}</p>
                                    })
                                }
                                </div>
                            </div>

                        }

                        {/* certificacionesIntermedias */}
                       
                       {course.certificacionesIntermedias&&
                        <div style={{
                            display:"flex",
                            gap:"1em"
                        }}>
                            <Image src={"/graduation 1.svg"} height={30} width={30} />
                            <div style={{color:"#1C3564",fontWeight:"800",fontSize:"15px"}}>Certificaciones intermedias: 
                            {
                                course.certificacionesIntermedias.map((item)=>{
                                    return <p style={{color:"#6B6C6C",fontWeight:"400",fontSize:"0.8em"}}>{item}</p>
                                })
                            }
                            
                            {/* <p style={{color:"#6B6C6C",fontWeight:"400",fontSize:"0.8em"}}>XXXXXXXXXXXXXXX</p> */}
                           
                            </div>
                            
                        </div>
                        }
                        

                        {/* titulosAprobados */}
                        {course.titulosAprobados&&
                        <div style={{
                            display:"flex",
                            gap:"1em"
                        }}>
                            <Image src={"/badge.svg"} height={30} width={30} />
                            <div style={{color:"#1C3564",fontWeight:"800",fontSize:"15px"}}>Títulos aprobados por : 
                            {
                                course.titulosAprobados.map((item)=>{
                                    return <p style={{color:"#6B6C6C",fontWeight:"400",fontSize:"0.8em"}}>{item}</p>
                                })
                            }
                            </div>
                        </div>
                        }


                        <div style={{
                            display:"flex",
                            gap:"1em",
                            flexDirection:"column",
                            justifyContent:"center",
                            alignItems:"center",
                        }}>
                           <div style={{
                                marginTop:"20px",
                                textAlign:"center",
                                gap:"1em",
                            }}> 
                                <div>
                                <a href={course.pdf} download="file.pdf">
                                    <button style={{
                                        width:"200px",
                                        height:"50px",
                                        backgroundColor:"orange",
                                        color:"white",
                                        padding:"5px",
                                        borderRadius:"5px",
                                        fontSize:"0.9em",
                                    }}>Descarga el plan de estudios</button>
                                </a>
                                </div>
                                {/* <a href="/Programador_Java_Full Stack.pdf" download="Programador_Java_Full Stack.pdf"> */}
                                <Link href={!isUs ?"/ar/form":"/us/becaForm"}>
                                    <button style={{
                                        width:"200px",
                                        height:"50px",
                                        marginTop:"20px",
                                        backgroundColor:"#0B4C26",
                                        color:"white",
                                        padding:"5px",
                                        borderRadius:"5px",
                                        fontSize:"0.9em",
                                    }}>Quiero más información</button>
                                </Link>
                                {/* {
                                   course.subtitle ===  "Lin. en Corretaje y Neg. Inmobilarios" && 
                                   <Link href={"/ar/equivalencies/studentQuery"}>
                                        <button style={{
                                            width:"200px",
                                            height:"50px",
                                            marginTop:"20px",
                                            //dark blue hex code
                                            backgroundColor:"#1C3564",
                                            color:"white",
                                            padding:"5px",
                                            borderRadius:"5px",
                                            fontSize:"0.9em",
                                        }}>
                                            Equivalences
                                        </button>
                                    </Link>
                                } */}
                                {/* {
                                   course.subtitle ===  "Diplomaturas" && 
                                   <Link href={"/ar/equivalencies/studentQuery"}>
                                        <button style={{
                                            width:"200px",
                                            height:"50px",
                                            marginTop:"20px",
                                            //dark blue hex code
                                            backgroundColor:"#1C3564",
                                            color:"white",
                                            padding:"5px",
                                            borderRadius:"5px",
                                            fontSize:"0.9em",
                                        }}>
                                            Equivalences
                                        </button>
                                    </Link>
                                } */}
                                {isUs&&<Link href={"/us/miami"}>
                                    <button style={{
                                        width:"200px",
                                        height:"50px",
                                        marginTop:"20px",
                                        //dark blue hex code
                                        backgroundColor:"#1C3564",
                                        color:"white",
                                        padding:"5px",
                                        borderRadius:"5px",
                                        fontSize:"0.9em",
                                    }}>Beca Latina</button>
                                </Link>}
                                {/* </a> */}
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
                marginTop:"20px",
                height:"200px",
                width:"100%",

            }}> 
            {/* <a href="/Programador_Java_Full Stack.pdf" download="Programador_Java_Full Stack.pdf">
                <button style={{
                    width:"200px",
                    height:"50px",
                    marginTop:"20px",
                    backgroundColor:"#005FAF",
                    color:"white",
                    padding:"5px",
                    borderRadius:"5px"
                }}>Download syllabus</button>
            </a> */}
            </div>
            
       
      </div>)
}

export default Course;