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
      label: "Certificate Id",
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
          justifyContent:"center",
          alignContent:"center",
          backgroundColor:"white",
          padding:"1rem",
          paddingTop:"7rem",
          backgroundImage:"url(/cool-background.png)"
        }}
      >
        <div style={{
                   
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
                    
                }}>
                  <p style={{
                    textAlign:"center",
                    fontSize:"1.5rem"
                  }}>Verify</p>
                  <div>
                  <input type="text" placeholder="Enter Certificate Id" style={{
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
                  <input type="text" placeholder="Enter CID" style={{
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
                  >Verify</button>

                  <h3 style={{

                  marginTop:"20px",
                  textAlign:"center",
                  color:"red"
                  }}>{status}</h3>
                  
                  </div>


                <div
                      style={{
                        textAlign: "center",
                      }}
                    >
                      Upload file to verify
                    </div>
                    <Verifyfile
                      setIsLoading={setIsLoading}
                      setcid={(e) => {
                        setCertId(0);
                        setcid(e);
                      }}
                    />
                  </div> 
          
        
      </div>
  );
};

export default Verify;
