"use client";
const { useState, use, useEffect } = require("react");
import Image from "next/image";
import data from "@/data/data";
import usData from "@/data/usData";
import Link from "next/link";

const Accordian = ({ heading, text, index,setToggle,isToggled,isUs,region}) => {
	const [courses, setCourses] = useState(data);
	const [isActive, setIsActive] = useState(false);
	useEffect(() => {
		setCourses(isUs ? usData : data);
	}, [isUs]);

	const universityinfo = [
		{
			name: "Quiénes somos",
			href: `/${region}/aboutus`,
		},
		{
			name:"Autoridades",
			href: `/${region}/authorities`,
		},
		{
			name:"Equivalencias",
			href: `/${region}/equivalencies`,
		}
	]

	const academicCommunity = [
		{
			name:"Nuestros destinatarios",
			href: `/${region}/student`,
		},
		{
			name:"Nuestros Docentes",
			href: `/${region}/teacher`,
		},
		{
			name:"Amplia red de vínculos internacionales",
			href: `/${region}/partnership`,
		},
		{
			name:"Becas y Beneficios",
			href: `/${region}/scholarshipsAndbenefits`,
		},
		{
			name:"Beca Latina",
			href: `/${region}/miami`,
		}
	]

	const virtualModel = [
		{
			name:"Nuestro modelo de Educación Virtual",
			href: `/${region}/ugdvirtualModel`,
		},
		{
			name:"¿Por qué UGD Virtual?",
			href: `/${region}/por-que`,
		}
	]

	const titulos = [
		{
			name:"Títulos UGD y revalidaciones",
			href: `/${region}/revalidaciones`,
		},
		{
			name:"Verificar títulos",
			href: `/${region}/verify`,
		}
	]


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
					fontFamily:"WorkSans-normal"
				}}>
				{heading}
				<span
					style={{
						transform: isActive ? "rotate(180deg)" : "none",
						transition: "all 0.3s",
					}}>
					{text[0]!== "" && "▼"}
				</span>
			</div>

				<div className={isActive ? "customDiv" : ""}>
				{ text == "Courses" &&
			
					courses.map((course)=>{
						return(
						<div
						key={course.id}
                        style={{
                            padding: isActive ? "1.5rem 2rem" : "0em 2rem",
                            backgroundColor: "#e8e8e8",
                            maxHeight: isActive ? "15em" : "0em",
                            fontSize: "0.875rem",
                            lineHeight: "2",
                            overflow: "hidden",
                            transition: "all 0.3s"
                        }}
						>
                        	<Link onClick={()=>{
							setToggle(!isToggled)
						
						}} style={{
							fontFamily:"WorkSans-normal"
						}} href={`/${region}/courses/${course.path}`}> {course.subtitle}</Link>
                        </div>
						)
					})
				}
				{
					text == "University Info" &&
					universityinfo.map((link)=>{
						return(
							<div
							key={link.name}
							style={{
								padding: isActive ? "1.5rem 2rem" : "0em 2rem",
								backgroundColor: "#e8e8e8",
								maxHeight: isActive ? "15em" : "0em",
								fontSize: "0.875rem",
								lineHeight: "2",
								overflow: "hidden",
								transition: "all 0.3s",
							}}>
							<Link onClick={()=>{
							setToggle(!isToggled)
						
						}} style={{
							fontFamily:"WorkSans-normal"
						}}  href={link.href}>{link.name}</Link>
							</div>
						)
					})
				}
				{
					text == "Academic Community" &&
					academicCommunity.map((link)=>{
						return(
							<div
							key={link.name}
							style={{
								padding: isActive ? "1.5rem 2rem" : "0em 2rem",
								backgroundColor: "#e8e8e8",
								maxHeight: isActive ? "15em" : "0em",
								fontSize: "0.875rem",
								lineHeight: "2",
								overflow: "hidden",
								transition: "all 0.3s",
							}}>
							<Link onClick={()=>{
							setToggle(!isToggled)
						
						}} style={{
							fontFamily:"WorkSans-normal"
						}}  href={link.href}>{link.name}</Link>
							</div>
						)
					})
				}
				{

					text == "virtualModel" &&
					virtualModel.map((link)=>{
						return(
							<div
							key={link.name}
							style={{
								padding: isActive ? "1.5rem 2rem" : "0em 2rem",
								backgroundColor: "#e8e8e8",
								maxHeight: isActive ? "15em" : "0em",
								fontSize: "0.875rem",
								lineHeight: "2",
								overflow: "hidden",
								transition: "all 0.3s",
							}}>
							<Link onClick={()=>{
							setToggle(!isToggled)
						
						}} style={{
							fontFamily:"WorkSans-normal"
						}}  href={link.href}>{link.name}</Link>
							</div>
						)
					})
				}
				{
					text == "titulos" &&
					titulos.map((link)=>{
						return(
							<div
							key={link.name}
							style={{
								padding: isActive ? "1.5rem 2rem" : "0em 2rem",
								backgroundColor: "#e8e8e8",
								height:"auto",
								maxHeight: isActive ? "15em" : "0em",
								fontSize: "0.875rem",
								lineHeight: "2",
								overflow: "hidden",
								transition: "all 0.3s",
							}}>
							<Link onClick={()=>{
							setToggle(!isToggled)
						
						}} style={{
							fontFamily:"WorkSans-normal"
						}}  href={link.href}>{link.name}</Link>
							</div>
						)
					})
				}
				{
					text !== "Courses" && text !== "University Info" && text !== "Academic Community" && text !== "virtualModel" && text !== "titulos" &&
					text.map((link)=>{
						return(
							<div
							key={link}
							style={{
								padding: isActive ? "1.5rem 2rem" : "0em 2rem",
								backgroundColor: "#e8e8e8",
								maxHeight: isActive ? "15em" : "0em",
								fontSize: "0.875rem",
								lineHeight: "2",
								overflow: "hidden",
								transition: "all 0.3s",
								fontFamily:"WorkSans-normal"
							}}>
							{link}
							</div>
						)
					})
				}
				</div>
		</div>
	);
};
export default Accordian;
