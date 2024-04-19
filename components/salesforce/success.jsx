import Link from "next/link"

const Success = () =>{

    return(
        <div>
        <div style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                overflow: "hidden", // Ensure content doesn't overflow
                display: "flex",
                alignItems: "center",  // Center vertically
                alignContent: "center",  // Center vertically
                justifyContent: "center",  // Center horizontally
            }}>
                <img id="background-image" style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    filter: "brightness(70%)",
                }} src={"/pexels-anna-shvets-4226256.jpg"} alt="Background Image" />

                {/* <h1 data-aos="fade-up" className="coursetheading" style={{
                    zIndex: 1, // Ensure the heading is above the image
                    color: "white", // Set text color to be visible against the background
                    // Add any other styles you need for the heading
                    fontSize:"3rem",
                    fontWeight:"500",

                }}>
                  Consulta por carreras
                </h1> */}
            </div>
    
    <div
    className='form-container'
    style={{
        // position:"relative",
        marginTop:"-37rem",
      width:"100%",
      display:"flex",
      justifyContent:"center",
      alignContent:"center",
      backgroundColor:"white",
      padding:"1rem",
      backgroundImage:"url(/cool-background.png)",

    }}>
        
    
     
        <div style={{         
            width:"100%",
            maxWidth:"600px",
            height:"auto",
            backgroundColor:"#0F4D6B",
            boxShadow:" 0 8px 8px 0 rgba(0,0,0,0.2)",
            borderRadius:"5px",
            display:"flex",
            flexDirection:"column",
            padding:"20px",
            position:"relative",
            color:"white",
            marginTop:"1.5rem",
                   
        }}>
        <p style={{
            textAlign:"center",
            marginTop:"-5rem",
            fontSize:"1rem",
            fontWeight:"700",
            fontFamily:"var(--WorkSans-normal)",
            color:"white",
        }} >Consulta por carreras</p>

        <div style={{
            width:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            // backgroundImage:"url(/cool-background.png)"
        }}>

        <p style={{
            textAlign:"center",
            color:"white",
            fontFamily: "var(--WorkSans-normal)",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "38px",
            }}>Enviado exitosamente </p>


        <Link href={"/"} style={{
            textAlign:"center",
            marginTop:"10px"
        }}>
            Por favor haga clic aquí para volver a casa
        </Link>

        </div>
        
        </div>
         
    </div>
    </div>
    )
}

export default Success