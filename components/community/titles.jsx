"use client";
import "./community.css";
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
const Titles = () => {
    useEffect(() => {
		AOS.init({
			offset: 150,
			duration: 800,
		});
	}, []);
    
    return (
        <div>
      <div style={{
        width:"100%",
        height:"50vh",
        
      }}>
        <img id="background-image" style={{
          width:"100%",
          height:"100%",
          objectFit:"cover",
          objectPosition:"center",
          
        }} src={"/pexels.jpg"} alt="Background Image" />
        {/* <h1 style={{
          fontFamily: "WorkSans-bold",
        }} data-aos="fade-up" className="authorityFontheading">
        Títulos UGD y revalidaciones
        </h1> */}
      </div>

      <div className="studentMaindiv" >
        <p data-aos="fade-up" style={{
         marginTop:"1rem",
          textAlign:"center",
          color:"#1C3564",
          fontFamily: "WorkSans-normal",
          fontSize: "2rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "38px",
          paddingLeft:"20px ",
          paddingRight:"20px"
        }}>Títulos UGD y revalidaciones </p>
        <p data-aos="fade-up" style={{
          marginTop:"2rem",
          textAlign:"justify",
          color:"#6B6B6B",
          fontFamily: "WorkSans-normal",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "300",
          lineHeight: "21px",
          paddingLeft:"20px ",
          paddingRight:"20px"
        }}>
         Al culminar las carreras se obtienen TÍTULOS UNIVERSITARIOS OFICIALES otorgados por la Universidad Gastón Dachary y legalizados por el Gobierno de la República Argentina.

        </p>
        <p data-aos="fade-up" style={{
          marginTop:"2rem",
          textAlign:"justify",
          color:"#6B6B6B",
          fontFamily: "WorkSans-normal",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "300",
          lineHeight: "21px",
          paddingLeft:"20px",
          paddingRight:"20px"
        }}>La UGD además somete sus planes de estudio y títulos a análisis de instituciones acreditadoras en EEUU, en virtud de lo cual se emiten CERTIFICADOS DE EQUIVALENCIAS DE ESTUDIOS que son reconocidos oficialmente.</p>
      
        <p data-aos="fade-up" style={{
          marginTop:"2rem",
          textAlign:"justify",
          color:"#6B6B6B",
          fontFamily: "WorkSans-normal",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "300",
          lineHeight: "21px",
          paddingLeft:"20px",
          paddingRight:"20px"
        }}>En Latinoamérica los mismos pueden ser revalidados en distintos países en virtud de las normas y acuerdos de revalidación que rigen con cada Nación.</p>

        <div  className="studentDiv">
           <div>
                <Image src={"/certImage.png"} width={500} height={500}  />
                <a style={{color:"black"}} href={"/pdf/Título UGD María Laura Carré.pdf"} download="Equivalencia EEUU - María Laura Carré.pdf">Click aquí para descargar título completo </a>
                
           </div>
           <div>
                <Image src={"/certimage2.png"} width={500} height={500}  />
                <a style={{color:"black"}} href={"/pdf/Equivalencia EEUU - María Laura Carré.pdf"} download="Título UGD María Laura Carré.pdf">Click aquí para descargar certificado completo</a>
           </div>
        </div>
        <p data-aos="fade-up" style={{
          marginTop:"2rem",
          textAlign:"center",
          color:"black",
          fontFamily: "WorkSans-normal",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "300",
          lineHeight: "21px",
        }}><b>Título otorgado por la Universidad Gastón Dachary y correspondiente 
        Certificado de revalidación en Estados Unidos.</b>
        <br/>
        (Copias de los originales de la egresada María Luis Carré) 
        </p>
   
        
      </div>

     
    </div>

    )
}

export default Titles   