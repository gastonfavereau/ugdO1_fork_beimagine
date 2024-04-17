"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"; 
import { usePathname} from 'next/navigation'
import "./navbar.css";
import UGDLogo from "/public/UGDLogo.png";
import Accordian from "./accordian";


export default function Navbar({params}) {
  const pathname = usePathname()
  const [region, setRegion] = useState("ar");
  const [isScroll,setIsScroll] = useState(false);
  const [isToggled, setToggle] = useState(true);
  const [isUs, setUs] = useState(false);


  useEffect(() => {
    params === "us" ? setRegion("us") : setRegion("ar");
    params === "us" ? setUs(true) : setUs(false);
  



    
    const scrolling = () => {
      window.scrollY >= 2 ? setIsScroll(true) : setIsScroll(false);
    };

    window.addEventListener("scroll", scrolling);
    const getDocument = document.querySelector("#menu");
    if(isToggled){
      getDocument.style.display = "none";
    }else{
      getDocument.style.display = "flex";
    }

    return () => {
      window.removeEventListener("scroll", scrolling);
    };
    
  }, [pathname,isToggled]);

 

  


  const linkStyle ={
    display:"flex",
    color:(pathname !== "/ar" && pathname !== "/us") ? "#1C3564":(isScroll ? "#1C3564" : "white"),
    fontSize:"1rem",
    fontWeight:"400",
    fontStyle:"normal",
    backgroundColor:"transparent",
    padding:"0px"
  }

  const columnStyle ={
    width:isUs ? "34%" : "25%",
  }


  //Mobile version
  const handleClickMenu = () =>{
    setToggle(!isToggled);
  }


  return (
   <>
   <div 
    className="navbar1"
    style={{
    backgroundColor: (pathname !== "/ar" && pathname !== "/us") ? "white" :(isScroll ? "white" : "white"),
    boxShadow:  (pathname !== "/ar" && pathname !== "/us") && "0px 4px 4px rgba(0, 0, 0, 0.25)"
   }} >

    <div >
       <Link href={`/${region}`} > <Image src={UGDLogo} height={200} width={200} alt="UGD"/></Link>
    </div>


   <div style={{
    display:"flex",
    gap:"5rem",
    marginLeft:"2rem",
    marginRight:"2rem",
   }}>
    <div style={{
      display:"flex",
      justifyContent:"space-between",
      gap:"5rem",
      alignItems:"center",
      color:"--primary-color",
      position: "relative"
    }}>
       
          {/* <Link style={linkStyle} href={`/${region}`} > Home</Link> */}
      
        


        <div className="navbutton" >
          <div className="dropdown1">
            <button className="dropbtn1" style={{
          color:(pathname !== "/ar" && pathname !== "/us")? "var(--primary-color)":(isScroll ? "var(--primary-color)" : "var(--primary-color)")
        }}>Nuestra Universidad</button>
              <div className="dropdown-content1">
                <div className="column" style={{
                  width:"100%",
                  height:"auto",
                }}>
                  <Link href={`/${region}/aboutus`}>Quiénes somos</Link>
                  <Link href={`/${region}/authorities`}>Autoridades</Link>
                  {/* <Link href={"/ugdvirtualModel"}>Modelo Virtual UGD </Link> */}
                  <Link href={`/${region}/equivalencies`}>Equivalencias</Link>
                  <Link href={"https://ugd.edu.ar/es/ "}>Saber más sobre UGD</Link>
                </div>
              </div>
          </div>
        </div>

        <div className="navbutton" >
          <div className="dropdown1">
            <button className="dropbtn1" style={{
          color: (pathname !== "/ar" && pathname !== "/us") ? "var(--primary-color)":(isScroll ? "var(--primary-color)" : "var(--primary-color)")
          }}>Modelo UGD Virtual </button>
              <div className="dropdown-content1">
                <div className="column" style={{
                  width:"100%",
                  height:"auto"
                }}>
                  <Link href={`/${region}/ugdvirtualModel`}>Nuestro modelo de Educación Virtual</Link>
                  <Link href={`/${region}/por-que`}>¿Por qué UGD Virtual?</Link>
                </div>
              </div>
          </div>
        </div>

        <div className="navbutton" >
          <div className="dropdown1">
            <button className="dropbtn1" style={{
              color: (pathname !== "/ar" && pathname !== "/us") ? "var(--primary-color)":(isScroll ? "var(--primary-color)" : "var(--primary-color)")
            }}>Comunidad académica </button>
              <div className="dropdown-content1">
                <div className="column" style={{
                  width:"100%",
                  height:"auto",
                  minWidth: "180px",
                }}>
                  <Link href={`/${region}/student`}>Nuestros destinatarios</Link>
                  <Link href={`/${region}/teacher`}>Nuestros docentes</Link>
                  <Link href={`/${region}/partnership`}>Amplia red de vínculos internacionales</Link>
                  <Link href={`/${region}/scholarshipsAndbenefits`}>Becas y beneficios</Link>
                  {/* <Link href={`/${region}/miami`}>Beca Latina</Link> */}
                </div>
              </div>
          </div>
        </div>



        <div className="dropdown"style={{
          padding:"0px",
          backgroundColor:"transparent",
        }}>
        <button className="dropbtn" style={{
          padding:"0px",
          backgroundColor:"transparent",
          color: (pathname !== "/ar" && pathname !== "/us") ? "var(--primary-color)":(isScroll ? "var(--primary-color)" : "var(--primary-color)")
        }}>Carreras 
        </button>
        <div className="dropdown-content">
          <div className="row">
            <div className="column" style={columnStyle}>
              <h3 style={{
                fontFamily:"WorkSans-Medium",
              }}>TECNOLOGÍAS</h3>
              <Link href={`/${region}/courses/java`}>Programador Java Full Stack</Link>
              <Link href={`/${region}/courses/software`}>Tecnicatura en Desarrollo de Software</Link>
              <Link href={`/${region}/courses/recursos`}>Ciclo Lic. Gestión de Rec. Tecnológicos</Link>
              <Link href={`/${region}/courses/tecnologias`}>Especialización en TICs</Link>
            </div>
            {!isUs &&<div className="column">
              <h3 style={{
                fontFamily:"sans-serif",
              }}>EDUCACIÓN</h3>
              <Link href={`/${region}/courses/profesionales`}>Ciclo Prof. Univ. profesionales</Link>
              <Link href={`/${region}/courses/educativa`}>C.C.C. en Gestión de Instituciones Educativas</Link>
              <Link href={`/${region}/courses/maestria`}>Maestría en GyE de la Ed. Superior </Link>
            </div>}
            <div className="column">
              <h3 style={{
                fontFamily:"sans-serif",
              }}>EMPRESARIALES</h3>
              <Link href={`/${region}/courses/marketing`}>Lic. en Marketing</Link>
              <Link href={`/${region}/courses/administracion`}>Lic. en Administración</Link>
              <Link href={`/${region}/courses/diplomaturasMkt`}> Diplomaturas Mkt</Link>
          
            </div>
            <div className="column">
              <h3 style={{
                fontFamily:"sans-serif",
              }}>CORRETAJE</h3>
              <Link href={`/${region}/courses/diplomaturas`}>Diplomaturas</Link>
              <Link href={`/${region}/courses/inmobiliarios`}>Corredor Inmobilliario</Link>
              <Link href={`/${region}/courses/corretaje`}>Lic. en Corretaje y Neg. Inmobilarios</Link>
            </div>
            <div className="column">
              <h3 style={{
                fontFamily:"sans-serif",
              }}>DOCTORADO</h3>
              <Link href={`/${region}/courses/doctorado`}>Doc. en Desarrollo e Integración</Link>
            </div>
          </div>
        </div>
      </div> 

      
      {/* <Link style={linkStyle} href={"/verify"} > Títulos </Link> */}
      <div className="navbutton" >
          <div className="dropdown1" >
            <button className="dropbtn1" style={{
              color: (pathname !== "/ar" && pathname !== "/us") ? "var(--primary-color)":(isScroll ? "var(--primary-color)" : "var(--primary-color)")
            }}>Títulos </button>
              <div className="dropdown-content1" style={{
                backgroundColor:"white",
              }}>
                <div className="column" style={{
                  width:"100%",
                  height:"auto",
                  minWidth: "180px",
                }}>
                  <Link style={{
                  }} href={`/${region}/revalidaciones`}>Títulos UGD y revalidaciones</Link>
                  <Link href={`/${region}/verify`}>Verificar títulos</Link>
                </div>
              </div>
          </div>
        </div>
        
    </div>
    </div>

   </div>


    <div className="navmanu" style={{
      position: "fixed",
      top: 0,
      zIndex: 100,
      backgroundColor:  "white",
      // color:"--primary-color",
      width: "100vw",
      height: "70px",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      color:"#6B6C6C"
      // padding:"1rem 0.4rem",
    }}>
      <div style={{
        width:"100%",
        display:"flex",
        height:"100%",
        justifyContent:"space-between",
      }}>
          <div style={{
            padding:"1rem 0.4rem",
            width:"100%",
            height:"100%",
            display:"flex",
            justifyContent:"space-between",
          }}>
          <Image  src="/UGDLogo.png" height={150} width={150} alt="UGD"/>
          
          {!isToggled ?   <Image className="maunuicon" src="/close.svg" height={120} width={70} alt="UGD" onClick={handleClickMenu}/>
          :
          <Image  src="/hamburger.svg" height={120} width={70} alt="UGD" onClick={handleClickMenu}/>
          }
   
          </div>
        <div 
          id="menu"
          style={{
            marginTop:"4rem",
            width:"100%",
            position: "absolute",
            backgroundColor:"white",
            color:"#6B6C6C",
            display:"none",
            flexDirection:"column",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
          }}>
              <Link href={"/"} style={{
                	padding: "1.5rem 2rem",
                  borderBottom: "2px solid  var(--primary-90)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
              }}
              onClick={()=>{
                setToggle(!isToggled)
              }} 
              >Home</Link>
              <Accordian 
              heading={"Nuestra Universidad"}
              text={"University Info"}
              index={"1"}
              key={1}
              setToggle={setToggle}
              isToggled={isToggled}
              isUs={isUs}
              region={region}
              />
              <Accordian 
              heading={"Modelo UGD Virtual"}
              text={"virtualModel"}
              index={"1"}
              key={2}
              setToggle={setToggle}
              isToggled={isToggled}
              isUs={isUs}
              region={region}
              />
              <Accordian 
              heading={"Comunidad académica"}
              text={"Academic Community"}
              index={"1"}
              key={3}
              setToggle={setToggle}
              isToggled={isToggled}
              isUs={isUs}
              region={region}
              />
              <Accordian 
              heading={"Carreras"}
              text={"Courses"}
              index={"1"}
              setToggle={setToggle}
              isToggled={isToggled}
              key={4}
              isUs={isUs}
              region={region}
              />
               <Accordian 
              heading={"Títulos"}
              text={"titulos"}
              index={"1"}
              setToggle={setToggle}
              isToggled={isToggled}
              key={5}
              isUs={isUs}
              region={region}
              />
          </div>
      
      </div>

    </div>


   </>
  )
}










