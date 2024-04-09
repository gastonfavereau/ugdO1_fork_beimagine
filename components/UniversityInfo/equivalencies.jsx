import React from 'react';
import "./aboutUspage.css";
import Image from 'next/image';


const Equivalencies = () => {

  return (
    <div style={{
      width:"100%",
      backgroundColor:"white",
      paddingTop:"5rem",
    }}>
     <div className='aboutUSPageMain'>
        <div className='aboutUSPageContent'>
            <div >
            <p style={{
            color:"#1C3564",
            fontFamily: "WorkSans-Medium",
            fontSize: "3rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "38px",
            }}>Equivalencias </p>
            <p style={{
            marginTop:"2rem",
            fontSize:"1rem",
            color:"#6B6C6C",
            fontFamily: "WorkSans-Light",
          }}>Si cursaste estudios en Universidades o Instituciones Superiores te ofrecemos analizar el reconocimiento de estudios por equivalencia. Para ello, te agradeceremos que nos envíes un informe de las materias que has aprobado en la carrera que hayas cursado, y en caso de ser necesario te solicitaremos información complementaria.
            </p>

            <a href='mailto:ugdvirtual-informes@ugd.edu.ar'>
            <button style={{
                                        width:"200px",
                                        height:"50px",
                                        marginTop:"20px",
                                        backgroundColor:"#0B4C26",
                                        color:"white",
                                        padding:"5px",
                                        borderRadius:"5px",
                                        fontSize:"0.9em",
                                        fontFamily:"WorkSans-normal"
                                    }}>Contacto</button>
          </a>
            </div>

            
       
            

        </div>
        <div className='aboutUSPageImage'>
            <div style={{width: '100%', height: '100%', position: 'relative'}}>
            <Image
                alt='Mountains'
                src='/equivalencias.webp'
                layout='fill'
                objectFit='cover'
            />
            </div>

        </div>

      </div>
     
    </div>
  );
};

export default Equivalencies;
