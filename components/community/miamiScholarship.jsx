import Image from "next/image";
import "./community.css";

const MiamiScholarship = () =>{
    
    return(
        <div style={{
            width:"100%",
            backgroundColor:"white",
            // padding:"20px",
            paddingTop:"2rem",
            backgroundImage:"url(/cool-background.png)",
          //   border:"2px solid black",
        }}>
        <div className="teacherMain">
        <div className="teacherContent">
            {/* <Image src={"/unsplash_-uHVRvDr7pg.png"} width={1200} height={700}  /> */}
            <div >
            <p style={{
            // textAlign:"center",
            color:"#1C3564",
            fontFamily: "Poppins",
            fontSize: "3rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "38px",
            }}>BECA LATINA            </p>
            <p style={{
            marginTop:"2rem",
            fontSize:"1rem",
            color:"#6B6C6C"
          }}>Si vos o tus padres han nacido en algún país Latinoamericano, y resides en algún punto de EEUU, tenés una beca que cubre el 30% de los aranceles, durante toda la carrera.
          </p>

          <p style={{
            // textAlign:"center",
            marginTop:"3rem",
            color:"#1C3564",
            fontFamily: "Poppins",
            fontSize: "1.5rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "38px",
            }} >Solo tenés que enviarnos:</p>
            <p style={{
            // textAlign:"center",
            marginTop:"0.5rem",
            fontSize:"1rem",
            color:"#6B6C6C"
            }} >Un documento que demuestre la nacionalidad tuya o de tu padre o madre.</p>
            <p style={{
            // textAlign:"center",
            marginTop:"0.5rem",
            fontSize:"1rem",
            color:"#6B6C6C"
            }} >Solo tenés que enviarnos:</p>
            <button style={{
                    width:"200px",
                    height:"50px",
                    marginTop:"20px",
                    backgroundColor:"#005FAF",
                    color:"white",
                    padding:"5px",
                    borderRadius:"5px"
                }}>Send US</button>
            
          
            </div>
       
            

        </div>
        <div className="teacherImage">
            <div style={{width: '80%', height: '80%', position: 'relative', }}>
            <Image
                alt='Mountains'
                src='/pexels-pavel-danilyuk-7944238.jpg'
                layout='fill'
                objectFit='contain'
                style={{
                    borderRadius:"10px",
                }}
            />
            </div>

        </div>

            </div>

        </div>
    )
}

export default MiamiScholarship;