// import React from 'react';
"use client";
import "./community.css";
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const TeacherPage = () => {

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
          
        }} src={"/ugdmodelbg3.webp"} alt="Background Image" />
        <h1 data-aos="fade-up" className="authorityFontheading">
            Nuestros Docentes
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
        }}> Nuestros Docentes </p>
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
           Conformamos nuestro cuerpo docente integrando perfiles que complementan formación académica y experiencia profesional.


        </p>


        <div  className="studentDiv">
            <div data-aos="fade-up" className="teacherDivCard">
                <p  style={{
                    marginTop:"1rem",
                    textAlign:"center",
                    color:"#1C3564",
                    fontFamily: "Poppins",
                    fontSize: "32px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "38px",
                }}>Académicos</p>

                <p style={{
                    marginTop:"1rem",
                    textAlign:"center",
                    color:"#6B6B6B",
                    fontFamily: "Inter",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "300",
                    lineHeight: "21px",
                }}>Profesores e investigadores con amplia experiencia universitaria, que conocen profundamente su especialidad, así como los avances y evolución de las tecnologías y conocimientos relacionados.</p>

                <img style={{
                    marginTop:"2rem",
                    height:"400px",
                    width:"100%",
                    objectFit:"cover",
                }} alt='Mountains' src='/academicImage.png' width={100} height={100} />

            </div>
            <div data-aos="fade-up" className="teacherDivCard">
                <p  style={{
                        marginTop:"1rem",
                        textAlign:"center",
                        color:"#1C3564",
                        fontFamily: "Poppins",
                        fontSize: "32px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "38px",
                    }}>Profesionales</p>

                    <p style={{
                        marginTop:"1rem",
                        textAlign:"center",
                        color:"#6B6B6B",
                        fontFamily: "Inter",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: "300",
                        lineHeight: "21px",
                    }}>Que se desempeñan en empresas e instituciones, aportando la perspectiva de quien está, día a día, en contacto con la realidad y actualidad del ejercicio profesional concreto.</p>

                    <img style={{
                        marginTop:"2rem",
                        height:"400px",
                        width:"100%",
                        objectFit:"cover",
                    }} alt='Mountains' src='/Professionals.png' width={100} height={100} />

            </div>
            <div data-aos="fade-up" className="teacherDivCard">
                <p  style={{
                        marginTop:"1rem",
                        textAlign:"center",
                        color:"#1C3564",
                        fontFamily: "Poppins",
                        fontSize: "32px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "38px",
                    }}>Pedagogos</p>

                    <p style={{
                        marginTop:"1rem",
                        textAlign:"center",
                        color:"#6B6B6B",
                        fontFamily: "Inter",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: "300",
                        lineHeight: "21px",
                    }}>Especialistas en docencia universitaria, en educación a distancia y en tecnología educativa, que trabajan en constante articulación con el cuerpo académico, orientando y supervisando la conformación de las aulas virtuales, los materiales didácticos y las diversas herramientas y recursos digitales que se utilizan para el proceso de enseñanza y de aprendizaje.</p>

                    <img style={{
                        marginTop:"2rem",
                        height:"400px",
                        width:"100%",
                        objectFit:"cover",
                    }} alt='Mountains' src='/teacherImage.png' width={100} height={100} />

            </div>
            <div data-aos="fade-up" className="teacherDivCard">
                <p  style={{
                        marginTop:"1rem",
                        textAlign:"center",
                        color:"#1C3564",
                        fontFamily: "Poppins",
                        fontSize: "32px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "38px",
                    }}>Revisores externos</p>

                    <p style={{
                        marginTop:"1rem",
                        textAlign:"center",
                        color:"#6B6B6B",
                        fontFamily: "Inter",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: "300",
                        lineHeight: "21px",
                    }}>Profesionales del mundo académico realizan revisiones externas sobre los materiales que han sido elaborados especialistas en contenidos, lo que permite incorporar nuevas miradas y aportes.</p>

                    <img style={{
                        marginTop:"2rem",
                        height:"400px",
                        width:"100%",
                        objectFit:"cover",
                    }} alt='Mountains' src='/pexels-anna-shvets-4226256.jpg' width={100} height={100} />

            </div>

        </div>
   
        
      </div>

     
    </div>
  );
};

export default TeacherPage;
