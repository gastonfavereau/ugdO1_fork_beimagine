"use client";
import { useRouter } from "next/navigation";
import DynamicForm from "./subcomponents/dynamic";
import { useState } from "react";
import Verifyfile from "./verifyfile";
import Image from "next/image";


const Verify = () => {
  const router = useRouter();
  const [temp, setTemp] = useState(0);
  const [certId, setCertId] = useState(null);
  const [cid, setcid] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const verifyDataForm = [
    {
      type: "number",
      label: "Ingrese la identificación del certificado",
      required: false,
      value: certId,
      setValue: (e) => {
        setcid("");
        setCertId(e.target.value);
      },
    },
    {
      type: "text",
      label: "CID",
      required: false,
      value: cid,
      setValue: (e) => {
        setCertId(0);
        setcid(e.target.value);
      },
    },
  ];
  const handleSubmit = () => {
    setStatus("");
    if (certId !== null && certId > 0) {
      router.push(`certificate/${certId}`);
    } else if (cid !== "") router.push(`certificate/cid/${cid}`);
    else setStatus("Please enter Either Certificate Id or CID");
  };
  return (
      <div
        style={{
          width:"100%",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignContent:"center",
          alignItems:"center",
          backgroundColor:"white",
          backgroundImage:"url(/cool-background.png)"
        }}
      >
      
    <div style={{
      position: "relative",
      width: "100%",
      height: "50vh",
      overflow: "hidden", // Ensure content doesn't overflow
      display: "flex",
      alignItems: "center",  // Center vertically
      alignContent: "center",  // Center vertically
      justifyContent: "center",  // Center horizontally
    }}>
      <Image
        src="/blockChain.png"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        style={{
          filter: "brightness(70%)",
        }}
      />

      <h1 data-aos="fade-up" style={{
        zIndex: 1,
        color: "white",
        fontSize: "1.5rem",
        fontWeight: "500",
        position: "relative", // Set the position to relative for stacking with Image
      }}>
        {/* Aquí se pueden verificar los títulos de UGD
        que en adelante se verifican mediante un código único. */}
      </h1>
    </div>

          <div style={{
            padding:"2rem",
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
        }}>Certificación Digital en Blockchain
        </p>
        <p  data-aos="fade-up" style={{
          marginTop:"2rem",
          textAlign:"justify",
          color:"#6B6B6B",
          // fontFamily: "Inter",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "300",
          lineHeight: "21px",
        }}>
           En UGD, todos nuestros certificados, diplomas y títulos universitarios se emiten en Blockchain. Esto garantiza su trazabilidad, autenticidad y seguridad.
            Nuestras titulaciones pueden verificarse en esta web, a través del código QR único que cada documento contiene, dando a nuestros graduados la seguridad de que sus documentos son oficiales, con validez internacional y facilmente presentables frente a cualquier autoridad solicitante, ya sea otra institución de educación superior, organismos públicos o empresas de cualquier parte del mundo.
            Las certificaciones digitales UGD son emitidas únicamente por nuestro Rectorado a través de sus áreas competentes y a partir de las normativas internas que así lo avalan.
        </p>
        </div>

        <div style={{
                    marginTop:"5rem",
                    width:"100%",
                    maxWidth:"600px",
                    height:"auto",
                    backgroundColor:"#1C3564",
                    boxShadow:" 0 8px 8px 0 rgba(0,0,0,0.2)",
                    borderRadius:"5px",
                    display:"flex",
                    flexDirection:"column",
                    padding:"20px",
                    position:"relative",
                    color:"white",
                    marginBottom:"4rem"
                    
                }}>
                  <p style={{
                    marginTop:"1rem",
                    textAlign:"center",
                    fontSize:"2rem",
                    fontWeight:"500"
                  }}>Verificar Títulos</p>
                  <div>
                  <input type="text" placeholder="Ingrese la identificación del certificado" style={{
                    width:"100%",
                    height:"50px",
                    padding:"10px",
                    border:"1px solid grey",
                    borderRadius:"5px",
                    marginTop:"20px",
                    marginBottom:"20px",
                    color:"#1C3564",
                  }}
                  onChange={(e)=>{
                    setCertId(e.target.value)
                  }}
                  />
                  <p style={{textAlign:"center"}}>or</p>
                  <input type="text" placeholder="Ingrese el CID" style={{
                    width:"100%",
                    height:"50px",
                    padding:"10px",
                    border:"1px solid grey",
                    borderRadius:"5px",
                    marginTop:"20px",
                    marginBottom:"20px",
                    color:"#1C3564",
                  }}
                  onChange={(e)=>{
                    setcid(e.target.value)
                  }}
                  />
                  <button style={{
                    alignItems:"center",
                    // alignContent:"center",
                    marginLeft:"33%",
                    width:"150px",
                    height:"50px",
                    backgroundColor:"#005FAF",
                    color:"white",
                    padding:"5px",
                    borderRadius:"5px"
                  }}
                  onClick={handleSubmit}
                  >Verificar</button>

                  <h3 style={{

                  marginTop:"20px",
                  textAlign:"center",
                  color:"red"
                  }}>{status}</h3>
                  
                  </div>
{/* 
            <Verifyfile
            setIsLoading={setIsLoading}
            setcid={(e) => {
              setCertId(0);
              setcid(e);
            }}
          /> */}


             
        </div> 
          
        
      </div>
  );
};

export default Verify;
