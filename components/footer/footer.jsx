
import Image from "next/image";
import "./footer.css";
import instagram from "@/public/instagram.svg";
import linkedin from "@/public/linkedin.svg";
import ugdIcon from "@/public/Frame19.svg";
import bgimage from "@/public/Footer___Web_ugd-virt___Educacion-que-se-adapta-a-vos.png";
import Link from "next/link";
import WhatsAppWidget from "./whatsAppWidget";


const Footer = () =>{
  

    return(
    <div>
        {/* <FooterBgImageComp /> */}
        <div className="footerdiv" style={{
            width:"100%",
            backgroundColor:"#F29100",
        }}>
            <div
            className="footersubdiv"
            >
                <div style={{
                    width:"40%"
                }} >
                    <Image src={ugdIcon} width={250} height={250} />
                    <div className="socialdiv" >
                        <div style={{
                            color: "#FFF",
                            fontFamily:"WorkSans-normal",
                            fontSize: "1.4em",
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight: "normal",
                        }}>Seguinos</div>
                        <Link href={"https://www.instagram.com/ugdvirtualok/"} target="_blank"><Image src={instagram} width={35} height={35} /></Link>
                        <Link href={"https://www.facebook.com/ugdvirtualok"} target="_blank"><Image src={"/fbicons.png"} width={35} height={35} /></Link>
                        <Link href={"https://www.linkedin.com/company/ugd-virtual/"} target="_blank"><Image src={linkedin} width={35} height={35} /></Link>
                        {/* <Link href={"https://wa.me/5493765180053"} target="_blank"><Image  src={"/whatsappicons.png"} width={35} height={35} /></Link> */}
                        {/* <WhatsAppWidget /> */}
                    </div>
                    <div style={{
                        marginTop:"1rem"
                    }}>
                        <p style={{
                            color:"white",
                            fontFamily:"WorkSans-normal",
                            fontSize:"1.2em",
                            fontWeight:"600"
                        }}>Contactos</p>
                        <div style={{
                            display:"flex",
                            gap:"1.4rem",
                            marginTop:"1rem"
                        }}>
                            <a href='mailto:ugdvirtual-informes@ugd.edu.ar'><Image src={"/email.png"} width={30} height={2} /></a>
                            <a href="tel:+54 9 (376) 5180053"><Image src={"/phone-call.png"} width={25} height={25} /></a>
                            <Image src={"/pin.png"} width={25} height={25} />
                        </div>
                    </div>
                </div>

                <div style={{
                    display:"flex",
                    width:"100%",
                    justifyContent:"space-between",
                    flexDirection:"column",

                }}> 
                    <div style={{
                        display:"flex",
                        flexDirection:"column",
                        gap:"1.4rem",
                    }}>
                        <p style={{
                            fontFamily:"WorkSans-normal",
                            color:"white",
                            fontSize:"1.2em",
                            fontWeight:"600"
                        }}>Comunidad UGD</p>
                        <div style={{
                            display:"flex"
                        }}>
                            <Image src={"/self.png"} width={35} height={35} />
                            <Link href={"https://autogestion.ugd.edu.ar/web/guest;jsessionid=6b7646afcc6e196ef3441157eab8"} target="_blank"><p style={{
                                color:"white",
                                marginLeft:"1rem",
                                fontWeight:"600",
                                fontFamily:"WorkSans-normal"
                            }}>Autogestión</p></Link>
                        </div>
                        <div  style={{
                            display:"flex"
                        }}>
                            <Image src={"/email.png"} width={35} height={35} />
                            <Link href={"https://webmail.ugd.edu.ar/"} target="_blank"> <p style={{
                                color:"white",
                                marginLeft:"1rem",
                                fontWeight:"600",
                                fontFamily:"WorkSans-normal"
                            }}>Webmail</p> </Link> 
                        </div>
                        <div style={{
                            display:"flex"
                        }}>
                            <Image src={"/cloud.png"} width={35} height={35} />
                            <Link href={"https://ugd.edu.ar/ugdvirtual/"} target="_blank"> <p style={{
                                color:"white",
                                marginLeft:"1rem",
                                fontWeight:"600",
                                fontFamily:"WorkSans-normal",
                            }} >UGD VIRTUAL</p>
                            </Link>
                        </div>
                        
                       
                    </div>
                </div>



               

            </div>
        </div>
        <div className="footerMobile" >
            <div>

                <div style={{
                    display:"flex",
                    width:"100%",
                    justifyContent:"space-between",
                    flexDirection:"column",

                }}> 
                    <div style={{
                        display:"flex",
                        flexDirection:"column",
                        gap:"1.4rem",
                    }}>
                        <p style={{
                            fontFamily:"WorkSans-normal",
                            color:"white",
                            fontSize:"1.2em",
                            fontWeight:"600"
                        }}>Comunidad UGD</p>
                        <div style={{
                            display:"flex"
                        }}>
                            <Image src={"/self.png"} width={35} height={35} />
                            <Link href={"https://autogestion.ugd.edu.ar/web/guest;jsessionid=6b7646afcc6e196ef3441157eab8"} target="_blank"><p style={{
                                color:"white",
                                marginLeft:"1rem",
                                fontWeight:"600",
                                fontFamily:"WorkSans-normal"
                            }}>Autogestión</p></Link>
                        </div>
                        <div  style={{
                            display:"flex"
                        }}>
                            <Image src={"/email.png"} width={35} height={35} />
                            <Link href={"https://webmail.ugd.edu.ar/"} target="_blank"> <p style={{
                                color:"white",
                                marginLeft:"1rem",
                                fontWeight:"600",
                                fontFamily:"WorkSans-normal"
                            }}>Webmail</p> </Link>
                        </div>
                        <div style={{
                            display:"flex"
                        }}>
                            <Image src={"/cloud.png"} width={35} height={35} />
                            <Link href={"https://ugd.edu.ar/ugdvirtual/"} target="_blank"> <p style={{
                                color:"white",
                                marginLeft:"1rem",
                                fontWeight:"600",
                                fontFamily:"WorkSans-normal",
                            }} >UGD VIRTUAL</p>
                            </Link>
                        </div>
                        
                       
                    </div>
                </div>
               
                    <div className="socialdiv" style={{
                        marginTop:"1.2rem",
                        padding:"0",
                        justifyContent:"space-between"
                    }}>
                        <div style={{
                            color: "#FFF",
                            fontWeight: "700",
                            lineHeight: "normal",
                            fontFamily:"WorkSans-normal"
                        }}>Síganos</div>
                        <Link href={"https://www.instagram.com/ugdvirtualok/"}><Image src={"/instagram.svg"} width={35} height={35} /></Link>
                        <Link href={"https://www.facebook.com/ugdvirtualok"}><Image src={"/fbicons.png"} width={35} height={35} /></Link>
                        <Link href={"https://www.linkedin.com/company/ugd-virtual/"}><Image src={"/linkedin.svg"} width={35} height={35} /></Link>
                        {/* <Link href={"https://wa.me/5493765180053"} target="_blank"><Image src={"/whatsappicons.png"} width={38} height={38} /></Link> */}
                    
                </div>
            </div>
        </div>
    </div>);
}

export default Footer;


export const FooterBgImageComp = () =>{
    return(
        <div style={{
            backgroundImage: `url(${bgimage.src})`,
        }}
        className="footerbgimagesubdiv"
        >
            <div
            className="footerimagesubdiv"
             >
                <div>
                    <p className="bgfooterheading">UGD Virtual: Educación que se adapta a vos</p>
                    <p className="bgfooterpara">Nuestra finalidad es que obtengas el título que buscas poniendo a tu disposición todas las herramientas y equipos de apoyo para tal fin.  El equipo de gestión de Educación a Distancia y los docentes estarán atentos a tus necesidades. Tendrás un tutor asignado con el que te podrás contactar en cualquier momento para que pueda orientarte y ayudarte durante tu trayecto de formación.
                    </p>
                </div>
            </div>
            <div className="footerimagesubdivempty">

            </div>
        </div> 
    )
}
