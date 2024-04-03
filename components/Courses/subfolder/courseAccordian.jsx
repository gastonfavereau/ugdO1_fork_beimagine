"use client";
const { useState, use, useEffect } = require("react");
import Image from "next/image";
import data from "@/data/data";
import usData from "@/data/usData";
import Link from "next/link";

const CourseAccordian = ({ heading, text, index,setToggle,isToggled,isUs,region}) => {
	const [courses, setCourses] = useState(data);
	const [isActive, setIsActive] = useState(false);
	useEffect(() => {
		setCourses(isUs ? usData : data);
	}, [isUs]);

	


	

	


	return (
		<div key={index}>
			<div
				onClick={() => setIsActive((prev) => !prev)}
				style={{
					padding: "1.5rem 2rem",
					borderBottom: "0.2px solid #e8e8e8",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					cursor: "pointer",
					fontFamily:"WorkSans-normal",
                    fontSize:"1.2rem",
                    fontWeight:"700"
				}}>
				{heading}
				<span
					style={{
						transform: isActive ? "rotate(180deg)" : "none",
						transition: "all 0.3s",
					}}>
					{ "▼"}
				</span>
			</div>

				<div className={isActive ? "" : ""}>
                    {
                    heading === "DESTINATARIOS"&&
                    
                    <div
                        style={{
                           padding: isActive ? "var(--padding-main)" : "0",
                            backgroundColor: isActive ? "var(--primary-90)" : "transparent",
                            maxHeight: isActive ? "100%" : "0em",
                            fontSize: "0.75rem",
                            transform: isActive ? "scaleY(1)" : "scaleY(0)",
                            transition: "all 0.1s",
                            textAlign: "justify",
                        }}
						>
				        {

                            text.map((text)=>{
                                return(
                                    <p  key={text}  dangerouslySetInnerHTML={{ __html: text }} style={{color:"black",fontWeight:"500",fontSize:"1rem" ,marginTop:"1rem",fontFamily:"WorkSans-normal"}}></p>
                                )
                            })
                        }
                    </div>
                    }
                    {heading === "ALCANCES Y SALIDA LABORAL"&&
                    
                    <div
                        style={{
                           padding: isActive ? "var(--padding-main)" : "0",
                            backgroundColor: isActive ? "var(--primary-90)" : "transparent",
                            maxHeight: isActive ? "100%" : "0em",
                            fontSize: "0.75rem",
                            transform: isActive ? "scaleY(1)" : "scaleY(0)",
                            transition: "all 0.1s",
                            textAlign: "justify",
                        }}
						>
				        <ul style={{ listStyleType: "disc" }}>
                            {/* write unorder list html here */}
                            {
                                text.list.map((text)=>{
                                    
                                    return(
                                        <li key={text} dangerouslySetInnerHTML={{ __html: text }} style={{color:"#6B6C6C",fontWeight:"500",fontSize:"1rem" ,marginTop:"1rem",fontFamily:"WorkSans-normal"}}></li>     
                                    )
                                })
                            }
                        </ul>
                    </div>
                    }
                    {
                        heading === "Ámbitos de competencia" && 
                        <div
                        style={{
                           padding: isActive ? "var(--padding-main)" : "0",
                            backgroundColor: isActive ? "var(--primary-90)" : "transparent",
                            maxHeight: isActive ? "100%" : "0em",
                            fontSize: "0.75rem",
                            transform: isActive ? "scaleY(1)" : "scaleY(0)",
                            transition: "all 0.1s",
                            textAlign: "justify",
                        }}
						>
                        <p style={{color:"#6B6C6C",fontWeight:"400",fontSize:"0.9em" ,marginTop:"1rem",fontFamily:"WorkSans-normal"}}>{text.text}</p>
                        <p style={{color:"#6B6C6C",fontWeight:"400",fontSize:"0.9em" ,marginTop:"1rem",fontFamily:"WorkSans-normal"}}>{text.subtext}</p>
                        <div style={{
                        display:"flex",
                        justifyContent:"center",
                        alignContent:"center",
                        marginTop:"1.5rem"
                        }}>
                       
                        <div style={{
                            width:"100%",
                            padding:"1rem",
                            // boxShadow:" 0 4px 8px 0 rgba(0,0,0,0.2)",
                            // borderRadius:"5px",
                            // backgroundColor:"white",
                   
                        }}>
                            <ul style={{ listStyleType: "disc" }}>
                            {/* write unorder list html here */}
                            {
                                text.list.map((text)=>{
                                    
                                    return(
                                        <li key={text} dangerouslySetInnerHTML={{ __html: text }} style={{color:"#6B6C6C",fontWeight:"500",fontSize:"1rem" ,marginTop:"1rem",fontFamily:"WorkSans-normal"}}></li>     
                                    )
                                })
                            }
                            </ul>
                            
                        </div>
                    </div>

                        </div>

                    }
                    {
                        heading === "Podrá desempeñarse en"&&
                        <div
                        style={{
                           padding: isActive ? "var(--padding-main)" : "0",
                            backgroundColor: isActive ? "var(--primary-90)" : "transparent",
                            maxHeight: isActive ? "100%" : "0em",
                            fontSize: "0.75rem",
                            transform: isActive ? "scaleY(1)" : "scaleY(0)",
                            transition: "all 0.1s",
                            textAlign: "justify",
                        }}
						>
                            <p style={{color:"#6B6C6C",fontWeight:"400",fontSize:"0.9em" ,marginTop:"1rem",fontFamily:"WorkSans-normal"}}>{text.text}</p>
                        <p style={{color:"#6B6C6C",fontWeight:"400",fontSize:"0.9em" ,marginTop:"1rem",fontFamily:"WorkSans-normal"}}>{text.subtext}</p>
                        <div style={{
                        display:"flex",
                        justifyContent:"center",
                        alignContent:"center",
                        marginTop:"1.5rem"
                        }}>
                       
                        <div style={{
                            width:"100%",
                            padding:"1rem",
                            // boxShadow:" 0 4px 8px 0 rgba(0,0,0,0.2)",
                            // borderRadius:"5px",
                            // backgroundColor:"white",
                   
                        }}>
                            <ul style={{ listStyleType: "disc" }}>
                            {/* write unorder list html here */}
                            {
                                text.map((text)=>{
                                    
                                    return(
                                        <li key={text} dangerouslySetInnerHTML={{ __html: text }} style={{color:"#6B6C6C",fontWeight:"500",fontSize:"1rem" ,marginTop:"1rem",fontFamily:"WorkSans-normal"}}></li>     
                                    )
                                })
                            }
                            </ul>
                            
                        </div>
                        </div>
                        </div>
                    }

				</div>
		</div>
	);
};
export default CourseAccordian;
