
import Image from "next/image";
import "./footer.css";
import instagram from "@/public/instagram.svg";
import linkedin from "@/public/linkedin.svg";
import ugdIcon from "@/public/Frame19.svg";
import bgimage from "@/public/ugd-bg-image3.png";
import Link from "next/link";
import WhatsAppWidget from "./whatsAppWidget";


const Footer = () =>{
  

    return(
    <div>
        <FooterBgImageComp />
        <div className="footerdiv" style={{
            width:"100%",
            backgroundColor:"#1C3564",
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
                    }}>Seguinos</div>
                    <Link href={"https://www.instagram.com/ugdvirtualok/"} target="_blank"><Image src={instagram} width={35} height={35} /></Link>
                    <Link href={"https://www.facebook.com/ugdvirtualok"} target="_blank"><Image src={"/fbicons.png"} width={35} height={35} /></Link>
                    <Link href={"https://www.linkedin.com/company/ugd-virtual/"} target="_blank"><Image src={linkedin} width={35} height={35} /></Link>
                    <Link href={"https://wa.me/5493765180053"} target="_blank"><Image  src={"/whatsappicons.png"} width={35} height={35} /></Link>
                    {/* <WhatsAppWidget /> */}
                </div>

                <div style={{
                    display:"flex",
                    width:"100%",
                }}>
                    <Image src={ugdIcon} width={250} height={250} />
                </div>

               

            </div>
        </div>
        <div className="footerMobile" >
            <div>
               
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
                        <Link href={"https://www.instagram.com/ugdvirtualok/"}><Image src={"/instagram.svg"} width={35} height={35} /></Link>
                        <Link href={"https://www.facebook.com/ugdvirtualok"}><Image src={"/fbicons.png"} width={35} height={35} /></Link>
                        <Link href={"https://www.linkedin.com/company/ugd-virtual/"}><Image src={"/linkedin.svg"} width={35} height={35} /></Link>
                        <Image src={"/whatsappicons.png"} width={38} height={38} />
                    
                </div>
            </div>
        </div>
    </div>);
}

export default Footer;


const FooterBgImageComp = () =>{
    return(
        <div style={{
            backgroundImage: `url(${bgimage.src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width:"100%",
            display:"flex",
            alignContent:"center",
            justifyContent:"center",
            padding:"50px",
        }}
        className="footerbgimagesubdiv"
        >
            <div
            className="footerimagesubdiv"
             >
                <div>
                    <p className="bgfooterheading">UGD Virtual: Educación que se adapta a vos</p>
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