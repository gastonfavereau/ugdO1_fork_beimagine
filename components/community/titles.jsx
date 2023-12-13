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
        <h1 data-aos="fade-up" className="authorityFontheading">
        Títulos UGD y revalidaciones
        </h1>
      </div>

      <div className="studentMaindiv" >
        <p data-aos="fade-up" style={{
         marginTop:"1rem",
          textAlign:"center",
          color:"#1C3564",
          fontFamily: "Poppins",
          fontSize: "2rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "38px",
        }}>Títulos UGD y revalidaciones </p>
        <p data-aos="fade-up" style={{
          marginTop:"2rem",
          textAlign:"center",
          color:"#6B6B6B",
          fontFamily: "Inter",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "300",
          lineHeight: "21px",
        }}>
          Al culminar las carreras de pregrado, grado y posgrado se obtienen títulos oficiales otorgados por la Universidad Gastón Dachary y legalizados por el Gobierno de la República Argentina.
            Los mismos pueden ser revalidados en distintos países en virtud a las normas y acuerdos de revalidación que rigen con cada Nación.

        </p>


        <div  className="studentDiv">
           <div>
                <Image src={"/certImage.png"} width={500} height={500}  />
                <a href={"/pdf/Título UGD María Laura Carré.pdf"} download="Equivalencia EEUU - María Laura Carré.pdf">Click aquí para descargar título completo </a>
                
           </div>
           <div>
                <Image src={"/certImage2.png"} width={500} height={500}  />
                <a  href={"/pdf/Equivalencia EEUU - María Laura Carré.pdf"} download="Título UGD María Laura Carré.pdf">Click aquí para descargar certificado completo</a>
           </div>
        </div>
        <p data-aos="fade-up" style={{
          marginTop:"2rem",
          textAlign:"center",
          color:"black",
          fontFamily: "Inter",
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