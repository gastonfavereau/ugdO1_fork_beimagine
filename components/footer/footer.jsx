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
                    }}>Follow US</div>
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
                    alignContent:"center"
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
                    }}>About Us</div>
                    <div style={{
                        color: "#FFF",
                        fontFamily:" Open Sans",
                        fontSize: "1rem",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "normal",
                        padding:"10px"
                    }}>Privacy Policy</div>
                    <div style={{
                        color: "#FFF",
                        fontFamily:" Open Sans",
                        fontSize: "1rem",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight: "normal",
                        padding:"10px"
                    }}>Terms and Conditions</div>
                </div>

               

            </div>
            <div style={{
                width:"50%",
                // border:"5px solid white",
                color:"white",
                padding:"30px",
                // position:"relative"
               
            }}>

                <div style={{
                    position:"absolute",
                    // marginLeft:"4%"
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

            </div>
        </div>
        <div className="footerMobile" >
            <div>  
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
            </div>
            <div>
            <div style={{
                    marginTop:"2rem",
                    display:"flex",
                    width:"100%",
                    justifyContent:"space-between",
                    alignContent:"center"
                }}>
                        <div style={{
                            color: "#FFF",
                            fontFamily:" Open Sans",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight: "normal",
                            padding:"10px"
                        }}> Courses</div>
                        <div style={{
                            color: "#FFF",
                            fontFamily:" Open Sans",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "normal",
                            padding:"10px"
                        }}>About Us</div>
                        <div style={{
                            color: "#FFF",
                            fontFamily:" Open Sans",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "normal",
                            padding:"10px"
                        }}>Privacy Policy</div>
                        <div style={{
                            color: "#FFF",
                            fontFamily:" Open Sans",
                            fontSize: "1rem",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "normal",
                            padding:"10px"
                        }}>Terms and Conditions</div>
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
                        }}>Follow US</div>
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
                <   Image src={"/Frame19.svg"} height={400} width={400} />
                    <h3>Unlocking Knowledge, Empowering Futures</h3>
                </div>
            </div>
            <div className="footerimagesubdivempty">

            </div>
        </div> 
    )
}