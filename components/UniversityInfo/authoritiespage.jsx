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

      <div style={{
        padding:"50px",
        backgroundColor:"white",
      }}>
        <p  data-aos="fade-up" style={{
            
            marginTop:"1rem",
          textAlign:"center",
          color:"black",
          fontFamily: "Poppins",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "38px",
        }}>Autoridades </p>
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
            Al frente de la Universidad Gastón Dachary (UGD) se encuentra el Rector, un líder visionario encargado de dirigir la universidad hacia la excelencia en educación, investigación y compromiso comunitario. El Rector desempeña un papel fundamental en la formación de la dirección estratégica de la universidad y en fomentar un entorno propicio para la innovación y el crecimiento académico.
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
        <div  data-aos="fade-up" class="card">
          <img src="/Image place holder.webp" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div class="container">
            <h4><b>Rector</b></h4> 
            <p>Ing. Luis E. Lichowski</p>
            <p>info@ugd.com</p> 
          </div>
        </div>
        <div  data-aos="fade-up" class="card">
          <img src="/Image place holder.webp" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div  data-aos="fade-up" class="container">
            <h4><b>Rector</b></h4> 
            <p>Ing. Luis E. Lichowski</p>
            <p>info@ugd.com</p> 
          </div>
        </div>
        <div  data-aos="fade-up" class="card">
          <img src="/Image place holder.webp" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div class="container">
            <h4><b>Rector</b></h4> 
            <p>Ing. Luis E. Lichowski</p>
            <p>info@ugd.com</p> 
          </div>
        </div>
        <div  data-aos="fade-up" class="card">
          <img src="/Image place holder.webp" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div class="container">
            <h4><b>Rector</b></h4> 
            <p>Ing. Luis E. Lichowski</p>
            <p>info@ugd.com</p> 
          </div>
        </div>
        <div  data-aos="fade-up" class="card">
          <img src="/Image place holder.webp" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div class="container">
            <h4><b>Rector</b></h4> 
            <p>Ing. Luis E. Lichowski</p>
            <p>info@ugd.com</p> 
          </div>
        </div>
        <div  data-aos="fade-up" class="card">
          <img src="/Image place holder.webp" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div class="container">
            <h4><b>Rector</b></h4> 
            <p>Ing. Luis E. Lichowski</p>
            <p>info@ugd.com</p> 
          </div>
        </div>
        <div  data-aos="fade-up" class="card">
          <img src="/Image place holder.webp" alt="Avatar" style={{
            width:"100%"
          }}/>
          <div class="container">
            <h4><b>Rector</b></h4> 
            <p>Ing. Luis E. Lichowski</p>
            <p>info@ugd.com</p> 
          </div>
        </div>
    </div>
        
      </div>

     
    </div>
  );
};

export default AuthoritiesPage;
