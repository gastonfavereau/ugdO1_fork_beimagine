"use client";
import Image from "next/image";
import "./community.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const MiamiScholarship = () =>{

    useEffect(() => {
		AOS.init({
			offset: 150,
			duration: 800,
		});
	}, []);
    
    return(
        <div style={{
            width:"100%",
            backgroundColor:"white",
            // padding:"20px",
            paddingTop:"2rem",
            backgroundImage:"url(/cool-background.png)",
          //   border:"2px solid black",
        }}>
        <div  className="teacherMain">
        <div className="teacherContent">
            {/* <Image src={"/unsplash_-uHVRvDr7pg.png"} width={1200} height={700}  /> */}
            <div>
            <p style={{
            // textAlign:"center",
            color:"#1C3564",
            fontFamily: "WorkSans-normal",
            fontSize: "3rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "38px",
            }}>BECA LATINA            </p>
            <p style={{
            marginTop:"2rem",
            fontSize:"1rem",
            color:"#6B6C6C",
            fontFamily: "WorkSans-normal",
          }}>Si vos o tus padres han nacido en algún país Latinoamericano, y vives en algún punto de EEUU, tenés una beca que cubre el 30% de los aranceles, durante toda la carrera.
          </p>

          <p style={{
            // textAlign:"center",
            marginTop:"3rem",
            color:"#1C3564",
            fontFamily: "WorkSans-normal",
            fontSize: "1.5rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "38px",
            }} >Solo tenés que enviarnos:</p>
            <p style={{
            // textAlign:"center",
            marginTop:"0.5rem",
            fontSize:"1rem",
            color:"#6B6C6C",
            fontFamily:"WorkSans-normal"
            }} >Un documento que demuestre la nacionalidad tuya o de tu padre o madre.</p>
            <p style={{
            // textAlign:"center",
            marginTop:"0.5rem",
            fontSize:"1rem",
            color:"#6B6C6C",
            fontFamily:"WorkSans-normal"
            }} >Un certificado de domicilio en EEUU.</p>
        
            
          
            </div>
       
            

        </div>
        <div style={{
            padding:"0rem"
        }} className="teacherImage">
            <div  style={{width: '100%', height: '100%', position: 'relative', }}>
            <Image
                alt='Mountains'
                src='/BECALATINA.jpg'
                layout='fill'
                objectFit='contain'
            />
            </div>

        </div>

            </div>

        </div>
    )
}

export default MiamiScholarship;