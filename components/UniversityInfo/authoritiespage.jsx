// import React from 'react';
"use client";
import "./aboutUspage.css";
import Counter from './counter';
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const AuthoritiesPage = () => {
    // useEffect(() => {
    //     AOS.init({
    //          duration: 800,
    //          once: false,
    //        })
    //  }, [])
    useEffect(() => {
		AOS.init({
			offset: 150,
			duration: 800,
		});
	}, []);

  const authority =[
  {
    desc:"Rector",
    name:"Ing. Luis E. Lichowski",
    img:"Rector Ing. Luis E. Lichowski.jpg"
  },
  {
    desc:"Vicerector",
    name:"Dr. Alfredo Poenitz",
    img:"Vicerector Dr. Alfredo Poenitz.jpg"
  },
  {
    desc:"Secretaria Académica",
    name:"Lic. María Laura Carré",
    img:"Secretaria Académica Lic. María Laura Carré.jpg"
  },
  {
    desc:"Secretaría de Extensión Universitaria",
    name:"Lic. Irina Flecha",
    img:"Secretaría de Extensión Universitaria Lic. Irina Flecha.jpg"

  },
  {
    desc:"Secretario de Tecnología e Innovación Educativa",
    name:"Ing. Roberto Suenaga",
    img:"Secretario de Tecnología e Innovación Educativa Ing. Roberto Suenaga.jpg"

  },
  {
    desc:"Secretario de Investigación y Desarrollo",
    name:"Ing. Juan Pablo Cinto",
    img:"Secretario de Investigación y Desarrollo Ing. Juan Pablo Cinto.png"

  },
  {
    desc:"Delegada rectoral Centro Académico Buenos Aires",
    name:"Mgter. Gabriela Lichowski",
    img:"Delegada rectoral Centro Académico Buenos Aires Mgter. Gabriela Lichowski.jpg"
    
  },
  {

    desc:"Delegado rectoral Centro Académico Oberá",
    name:"C.P. Benigno Romero",
    img:"Delegado rectoral Centro Académico Oberá C.P. Benigno Romero.jpg"

  },
  {
    desc:"Delegado rectoral Centro Académico Eldorado",
    name: "Ing. Ricardo López" ,
    img:"Delegado rectoral Centro Académico Eldorado Ing. Ricardo López.jpg"
  },
  {
    desc:"Delegada rectoral Centro Académico Resistencia",
    name:"Prof. Vanesa Soledad Piccoli"
  },
  {
    desc:"Decana Departamento de Ciencias de la Salud",
    name:"Lic. Vanessa Zacarías",
    img:"Decana Departamento de Ciencias de la Salud Lic. Vanessa Zacarías.jpg"
  },
  {
    desc:"Decano Departamento de Ingeniería y Ciencias de la Producción",
    name:"Dr. Ing. Diego Godoy",
    img:"Decano Departamento de Ingeniería y Ciencias de la Producción Dr. Ing. Diego Godoy.jpg"
  },
  {
    desc:"Decana Departamento de Ciencias Jurídica y Sociales",
    name:"Mgter. Viviana Teresita Vallaro",
    img:"Decana Departamento de Ciencias Jurídica y Sociales Mgter. Viviana Teresita Vallaro.jpg"
  },
  {
    desc:"Decano Departamento de Arquitectura, Diseño y Comunicación",
    name:"Arq. Walter Ramos",
    img:"Decano Departamento de Arquitectura, Diseño y Comunicación Arq. Walter Ramos.jpg"

  },
  {
    desc:"Decano Instituto Universitario de Seguridad de la Provincia de Misiones",
    name:"Dr. Ariel Marinoni",
    img:"Decano Instituto Universitario de Seguridad de la Provincia de Misiones Dr. Ariel Marinoni.jpg"
  },
  {
    desc:"Directora Económica-Financiera",
    name: "Lic. Tania Lichowski",
    img:"Directora Económica-Financiera Lic. Tania Lichowski.jpg"
  },
  {
    desc:"Directora Pedagógica del Sistema Institucional de Educación a Distancia",
    name:"Mgtr. Valeria Iglesias",
    img:"Directora Pedagógica del Sistema Institucional de Educación a Distancia Mgtr. Valeria Iglesias.jpg"
  },
  {

    desc:"Director del Instituto Universitario de Corretaje Inmobiliario Latinoamericano",
    name:"Arq. C.I. Javier Grandinetti",
    img:"Director del Instituto Universitario de Corretaje Inmobiliario Latinoamericano Arq. C.I. Javier Grandinetti.png"
  },
  {
    desc:"Director de Formación y Perfeccionamiento Docente",
    name:"Prof. Jorge Cornejo",
    img:"Director de Formación y Perfeccionamiento Docente Prof. Jorge Cornejo.jpg"
  },
  {
    desc:"Director Oficina de Relaciones Internacionales",
    name:"Abg. Eduardo Luis Benítez",
    img:"Director Oficina de Relaciones Internacionales Abg. Eduardo Luis Benítez.png"
  }

  ]

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
          
        }} src={"/stuff.webp"} alt="Background Image" />
        <h1 data-aos="fade-up" className="authorityFontheading">
          Autoridades
        </h1>
      </div>

      <div className="authorityMaindiv" >
        <p  data-aos="fade-up" style={{
            
            marginTop:"1rem",
          textAlign:"center",
          color:"black",
          fontFamily: "Poppins",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "38px",
        }}>Consejo Superior
        </p>
        <p  data-aos="fade-up" style={{
          marginTop:"2rem",
          textAlign:"center",
          color:"#6B6B6B",
          fontFamily: "Inter",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "300",
          lineHeight: "21px",
        }}>
           La Universidad Gastón Dachary (UGD) es dirigida por su Consejo Superior, que determina las políticas y estrategias institucionales y brega por el mejoramiento constante de la calidad de los servicios educativos brindados, buscando fomentar un entorno propicio para la innovación y el crecimiento académico.
        </p>
    <div style={{
        padding:"2rem",
        display:"flex",
        gap:"2rem",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center"

    }}>

        {
          authority.map((person) =>{
            return(
                <div  data-aos="fade-up" class="card">
                  <img src={person.img} alt="Avatar" style={{
                    width:"100%"
                  }}/>
                  <div class="container">
                    <h4><b>{person.desc}</b></h4> 
                    <p>{person.name}</p>
                    {/* <p>info@ugd.com</p>  */}
                  </div>
                </div>
            )
          })
        }
        {/* <div  data-aos="fade-up" class="card">
          <img src="/Image place holder.webp" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div class="container">
            <h4><b>Rector</b></h4> 
            <p>Ing. Luis E. Lichowski</p>
            <p>info@ugd.com</p> 
          </div>
        </div> */}
        {/* <div  data-aos="fade-up" class="card">
          <img src="/Image place holder.webp" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div  data-aos="fade-up" class="container">
            <h4><b>Rector</b></h4> 
            <p>Ing. Luis E. Lichowski</p>
            <p>info@ugd.com</p> 
          </div>
        </div> */}
        {/* <div  data-aos="fade-up" class="card">
          <img src="/Image place holder.webp" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div class="container">
            <h4><b>Rector</b></h4> 
            <p>Ing. Luis E. Lichowski</p>
            <p>info@ugd.com</p> 
          </div>
        </div> */}
        {/* <div  data-aos="fade-up" class="card">
          <img src="/Image place holder.webp" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div class="container">
            <h4><b>Rector</b></h4> 
            <p>Ing. Luis E. Lichowski</p>
            <p>info@ugd.com</p> 
          </div>
        </div> */}
        {/* <div  data-aos="fade-up" class="card">
          <img src="/Image place holder.webp" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div class="container">
            <h4><b>Rector</b></h4> 
            <p>Ing. Luis E. Lichowski</p>
            <p>info@ugd.com</p> 
          </div>
        </div> */}
        {/* <div  data-aos="fade-up" class="card">
          <img src="/Image place holder.webp" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div class="container">
            <h4><b>Rector</b></h4> 
            <p>Ing. Luis E. Lichowski</p>
            <p>info@ugd.com</p> 
          </div>
        </div> */}
        {/* <div  data-aos="fade-up" class="card">
          <img src="/Image place holder.webp" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div class="container">
            <h4><b>Rector</b></h4> 
            <p>Ing. Luis E. Lichowski</p>
            <p>info@ugd.com</p> 
          </div>
        </div> */}
    </div>
        
      </div>

     
    </div>
  );
};

export default AuthoritiesPage;
