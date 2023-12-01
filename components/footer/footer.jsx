import Image from "next/image";
import "./footer.css"


const Footer = () =>{
    return(
    <div>
        <FooterBgImage />
        <div className="footerdiv" style={{
            width:"100%",
            backgroundColor:"#1C3564",
            // border:"5px solid white"
        }}>
            <div
            className="footersubdiv"
            >
                <div className="socialdiv" >
                    <div style={{
                        
                        color: "#FFF",
                        fontFamily:" Open Sans",
                        fontSize: "1.4em",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "normal",
                    }}>Síganos</div>
                    <Image src={"/instagram.svg"} width={35} height={35} />
                    <Image src={"/twitter.svg"} width={35} height={35} />
                    <Image src={"/linkedin.svg"} width={35} height={35} />
                    <Image src={"/youtube.svg"} width={35} height={35} />
                </div>

                <div style={{
                    display:"flex",
                    width:"100%",
                    // border:"1px solid white",
                    justifyContent:"space-around",
                    alignContent:"center",
                    alignItems:"center"
                }}>
                    <Image src={"/Frame19.svg"} width={250} height={250} />
                    <div style={{
                        color: "#FFF",
                        fontFamily:" Open Sans",
                        fontSize: "1rem",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight: "normal",
                        padding:"10px"
                    }}> ©2023</div>
                     <div style={{
                        color: "#FFF",
                        fontFamily:" Open Sans",
                        fontSize: "1rem",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "normal",
                        padding:"10px"
                    }}>Sobre nosotro</div>
                    <div style={{
                        color: "#FFF",
                        fontFamily:" Open Sans",
                        fontSize: "1rem",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "normal",
                        padding:"10px"
                    }}>política de privacidad</div>
                    <div style={{
                        color: "#FFF",
                        fontFamily:" Open Sans",
                        fontSize: "1rem",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "normal",
                        padding:"10px"
                    }}>Términos y condiciones</div>
                </div>

               

            </div>
            {/* <div style={{
                width:"50%",
                color:"white",
                padding:"30px",
               
            }}>

                <div style={{
                    position:"absolute",
                    right:"0",
                    paddingRight:"50px"
                }}>
                <h3>Subscribe to our newsletter</h3>
                <div style={{
                    marginTop:"10px"
                }}>
                <input placeholder="Email" 
                style={{
                    backgroundColor:"transparent",
                    border:"none",
                    borderBottom:"2px solid white",
                    width:"300px",
                    outline: 'none'
                }} 
                />
                <button style={{
                    width:"200px",
                    height:"50px",
                    background:"white",
                    color:"black",
                    padding:"2px",
                    textAlign:"centre",
                    borderRadius: "5px",
                    marginLeft:"1rem"
                  

                }}>
                    Subscribe
                </button>
                </div>
                </div>

            </div> */}
        </div>
        <div className="footerMobile" >
            {/* <div>  
                <h3 style={{
                    fontSize:"1.4rem"
                }}>Subscribe to our newsletter</h3>
                <div style={{
                    marginTop:"10px",
                    gap:"20px"
                }}>
                <div>
                <input placeholder="Email" 
                style={{
                    backgroundColor:"transparent",
                    border:"none",
                    borderBottom:"2px solid white",
                    width:"300px",
                    outline: 'none'
                }} 
                />
                </div>
                <div>
                <button style={{
                    marginTop:"1rem",
                    width:"200px",
                    height:"50px",
                    background:"white",
                    color:"black",
                    padding:"2px",
                    textAlign:"centre",
                    borderRadius: "5px"
                  

                }}>
                    Subscribe
                </button>
                </div>
                </div>
            </div> */}
            <div>
            <div style={{
                    marginTop:"2rem",
                    display:"flex",
                    width:"100%",
                    justifyContent:"space-between",
                    alignContent:"center"
                }}>
                        {/* <div style={{
                            color: "#FFF",
                            fontFamily:" Open Sans",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight: "normal",
                            padding:"10px"
                        }}> Cursos</div> */}
                        <div style={{
                            color: "#FFF",
                            fontFamily:" Open Sans",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "normal",
                            padding:"10px"
                        }}>Sobre nosotras</div>
                        <div style={{
                            color: "#FFF",
                            fontFamily:" Open Sans",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "normal",
                            padding:"10px"
                        }}>política de privacidad</div>
                        <div style={{
                            color: "#FFF",
                            fontFamily:" Open Sans",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "normal",
                            padding:"10px"
                        }}>Términos y condiciones</div>
                </div>
               
                    <div className="socialdiv" style={{
                        marginTop:"1.2rem",
                        padding:"0",
                        justifyContent:"space-between"
                    }}>
                        <div style={{
                            color: "#FFF",
                            fontFamily:" Open Sans",
                            fontSize: "1.4em",
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight: "normal",
                        }}>Síganos</div>
                        <Image src={"/instagram.svg"} width={35} height={35} />
                        <Image src={"/twitter.svg"} width={35} height={35} />
                        <Image src={"/linkedin.svg"} width={35} height={35} />
                        <Image src={"/youtube.svg"} width={35} height={35} />
                    
                </div>
            </div>
        </div>
    </div>);
}

export default Footer;


const FooterBgImage = () =>{
    return(
        <div style={{
            backgroundImage: 'url("/Career1.png")',
            backgroundSize: 'cover', // You can adjust these properties as needed
            backgroundRepeat: 'no-repeat',
            width:"100%",
            height:"80vh",
            display:"flex",
            alignContent:"center",
            justifyContent:"center",
            padding:"50px",
            // border:"1px solid white",
           
        }}>
            <div
            className="footerimagesubdiv"
             >
                <div>
                {/* <   Image src={"/Frame19.svg"} height={400} width={400} /> */}
                    <p className="bgfooterheading">Tu objetivo es nuestro objetivo</p>
                    <p className="bgfooterpara">Nuestra finalidad es que obtengas el título que buscas, y ponemos todos las herramientas y equipos de apoyo a  tal fin.  Desde el grupo de Educación a Distancias de UGD Virtual, los docentes y tutores, hasta el equipo administrativo, estará atento a tus necesidades y dispuesto a brindarte orientación personal.
 
                    Tendrás asignado un tutor con el que te contactarás en cualquier momento, y que tiene por misión orientarte y ayudarte a resolver lo que te preocupe, realizando las gestiones que resulten necesarias.
                    </p>
                </div>
            </div>
            <div className="footerimagesubdivempty">

            </div>
        </div> 
    )
}