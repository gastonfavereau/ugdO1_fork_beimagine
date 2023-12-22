// BecaForm.js
'use client'
import { useEffect, useState } from 'react';
import "./form.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const BecaForm = () => {
  useEffect(() => {
		AOS.init({
			offset: 150,
			duration: 800,
		});
	}, []);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(event.target)
  
      try {
        const response = await fetch('https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(new FormData(event.target)),
        });

        console.log(response);
  
        if (response.ok) {
          setFormSubmitted(true);
        } else {
          console.error('Failed to submit form:', response.status, response.statusText);
          // Handle the error, e.g., show an error message to the user
        }
      } catch (error) {
        console.error('Error submitting form:', error.message);
        // Handle the error, e.g., show an error message to the user
      }
    };

  return(

    <div>
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
        marginTop:"-15rem",
      width:"100%",
      display:"flex",
      justifyContent:"center",
      alignContent:"center",
      backgroundColor:"white",
      padding:"1rem",
      backgroundImage:"url(/cool-background.png)",

    }}>
        
    
        {!formSubmitted ? (
        <div data-aos="fade-up" style={{
                   
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
            fontSize:"3rem",
            fontWeight:"700",
            fontFamily:"Poppins",
            color:"white",
        }} >Consulta por carreras</p>
       <form action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8" method="POST">

            <input type="hidden" name="orgid" value="00DHp000001rh2f" />
            <input type="hidden" name="retURL" value="https://ugd-coral.vercel.app/us" />

            <input type="hidden" name="reason" value="Consulta por carreras" />
            <input type="hidden" name="status" value="Closed" />
            <input type="hidden" name="subject" value="Quiero consultar por una carrera" />

            <label for="name">Nombre</label><input  id="name" maxlength="80" name="name" type="text" required={true} /><br />

            <label for="Apellido_Web__c">Apellido</label><input  id="00NHp00000g8suC" maxlength="80" name="00NHp00000g8suC" type="text" required={true} /><br />

            <br /> 
            <div>
            Telefono (codigo de pais + codigo de area + numero de telefono) <br />
                <label for="Codigo_pais_telefono">código de país:</label><input  id="00NHp00000g8yV5" maxlength="80" name="00NHp00000g8yV5" type="text" required={true} />
                <label for="Codigo_area_telefono">código de área</label><input  id="00NHp00000g8xb7" maxlength="80" name="00NHp00000g8xb7" type="text" required={true} />
                <label for="Numero_de_telefono_c">número de teléfono</label><input  id="00NHp00000g8yVF" maxlength="80" name="00NHp00000g8yVF" type="text" required={true} />
            </div>
            <br />

            <label for="email">Correo electrónico</label>
            <input  id="email" maxlength="80" name="email" type="text" required={true} />
            <br />

            <label for="Pais__c">País de residencia:</label>
            <select  id="00NHp00000g8zE4" name="00NHp00000g8zE4" title="Pais_texto__c" required={true}>
                <option value="a0YHp00001hOgRWMA0">Estados Unidos</option>
            </select><br />

            <label for="Provincia__c">Estado de residencia:</label>
            <select  id="00NHp00000g8zE9" name="00NHp00000g8zE9" title="Provincia_texto__c" required={true}>
                <option value="a0ZHp00000merd4MAA">Alabama</option>
                <option value="a0ZHp00000mercAMAQ">Alaska</option>
                <option value="a0ZHp00000mercYMAQ">American Samoa</option>
                <option value="a0ZHp00000merciMAA">Arizona</option>
                <option value="a0ZHp00000mercsMAA">Arkansas</option>
                <option value="a0ZHp00000mercCMAQ">Baker Island</option>
                <option value="a0ZHp00000mercQMAQ">California</option>
                <option value="a0ZHp00000mercyMAA">Colorado</option>
                <option value="a0ZHp00000mercjMAA">Connecticut</option>
                <option value="a0ZHp00000merc9MAA">Delaware</option>
                <option value="a0ZHp00000merclMAA">District of Columbia</option>
                <option value="a0ZHp00000merckMAA">Florida</option>
                <option value="a0ZHp00000merd3MAA">Georgia</option>
                <option value="a0ZHp00000mercMMAQ">Guam</option>
                <option value="a0ZHp00000mercLMAQ">Hawaii</option>
                <option value="a0ZHp00000merc8MAA">Howland Island</option>
                <option value="a0ZHp00000merd8MAA">Idaho</option>
                <option value="a0ZHp00000mercZMAQ">Illinois</option>
                <option value="a0ZHp00000mercoMAA">Indiana</option>
                <option value="a0ZHp00000merd7MAA">Iowa</option>
                <option value="a0ZHp00000mercKMAQ">Jarvis Island</option>
                <option value="a0ZHp00000merccMAA">Johnston Atoll</option>
                <option value="a0ZHp00000mercGMAQ">Kansas</option>
                <option value="a0ZHp00000mercTMAQ">Kentucky</option>
                <option value="a0ZHp00000mercDMAQ">Kingman Reef</option>
                <option value="a0ZHp00000merd5MAA">Louisiana</option>
                <option value="a0ZHp00000merd1MAA">Maine</option>
                <option value="a0ZHp00000mercBMAQ">Maryland</option>
                <option value="a0ZHp00000merchMAA">Massachusetts</option>
                <option value="a0ZHp00000mercaMAA">Michigan</option>
                <option value="a0ZHp00000mercmMAA">Midway Atoll</option>
                <option value="a0ZHp00000mercUMAQ">Minnesota</option>
                <option value="a0ZHp00000merceMAA">Mississippi</option>
                <option value="a0ZHp00000merczMAA">Missouri</option>
                <option value="a0ZHp00000mercuMAA">Montana</option>
                <option value="a0ZHp00000mercnMAA">Navassa Island</option>
                <option value="a0ZHp00000mercIMAQ">Nebraska</option>
                <option value="a0ZHp00000merd6MAA">Nevada</option>
                <option value="a0ZHp00000mercEMAQ">New Hampshire</option>
                <option value="a0ZHp00000mercRMAQ">New Jersey</option>
                <option value="a0ZHp00000mercXMAQ">New Mexico</option>
                <option value="a0ZHp00000merd0MAA">New York</option>
                <option value="a0ZHp00000mercvMAA">North Carolina</option>
                <option value="a0ZHp00000mercSMAQ">North Dakota</option>
                <option value="a0ZHp00000mercfMAA">Northern Mariana Islands</option>
                <option value="a0ZHp00000merj9MAA">Ohio</option>
                <option value="a0ZHp00000mercVMAQ">Oklahoma</option>
                <option value="a0ZHp00000mercPMAQ">Oregon</option>
                <option value="a0ZHp00000mercwMAA">Palmyra Atoll</option>
                <option value="a0ZHp00000mercWMAQ">Pennsylvania</option>
                <option value="a0ZHp00000mercxMAA">Puerto Rico</option>
                <option value="a0ZHp00000merd9MAA">Rhode Island</option>
                <option value="a0ZHp00000mercrMAA">South Carolina</option>
                <option value="a0ZHp00000merctMAA">South Dakota</option>
                <option value="a0ZHp00000merd2MAA">Tennessee</option>
                <option value="a0ZHp00000mercHMAQ">Texas</option>
                <option value="a0ZHp00000mercgMAA">United States Minor Outlying Islands</option>
                <option value="a0ZHp00000mercNMAQ">United States Virgin Islands</option>
                <option value="a0ZHp00000mercOMAQ">Utah</option>
                <option value="a0ZHp00000mercJMAQ">Vermont</option>
                <option value="a0ZHp00000mercbMAA">Virginia</option>
                <option value="a0ZHp00000mercFMAQ">Wake Island</option>
                <option value="a0ZHp00000merdAMAQ">Washington</option>
                <option value="a0ZHp00000mercdMAA">West Virginia</option>
                <option value="a0ZHp00000mercpMAA">Wisconsin</option>
                <option value="a0ZHp00000mercqMAA">Wyoming</option>
            </select><br />

            <label for="Ciudad__c">Ciudad de residencia:</label>
            <input  id="00NHp00000g8yVe" maxlength="80" name="00NHp00000g8yVe" type="text" required={true} />
            <br />

            <label for="Programa_acad_mico_texto">Carrera:</label>
            <select  id="00NHp00000ZxNwI" name="00NHp00000ZxNwI" title="Programa_acad_mico_texto" required={true}>

                <option value="">--Seleccione una carrera--</option>
                <option value="001Hp00002dZGlaIAG">PREGRADO - TECNICATURA UNIVERSITARIA EN CORRETAJE Y NEGOCIOS</option>
                <option value="001Hp00002ias4KIAQ">PREGRADO - TECNICATURA UNIVERSITARIA EN DESARROLLO DE SOFTWARE</option>
                <option value="001Hp00002dWxUeIAK">GRADO - LICENCIATURA EN ADMINISTRACION</option>
                <option value="001Hp00002dWxViIAK">GRADO - LICENCIATURA EN CORRETAJE Y NEGOCIOS INMOBILIARIOS</option>
                <option value="001Hp00002ias4PIAQ">GRADO - CICLO COMPLEMENTACIÓN EN GESTIÓN EDUCATIVA</option>
                <option value="001Hp00002ias4UIAQ">GRADO - CICLO DE COMPLEMENTACIÓN DE RECURSOS TECNOLÓGICOS</option>
                <option value="001Hp00002dWxVeIAK">GRADO - LICENCIATURA EN MARKETING</option>
                <option value="001Hp00002dWxVlIAK">POSTGRADO - DOCTORADO EN DESARROLLO SUSTENTABLE E INTEGRACIÓN</option>
                <option value="001Hp00002dWxVnIAK">POSTGRADO - MAESTRÍA EN GESTÍON Y EVALUACÍON DE LA EDUCACION SUPERIOR A DIST</option>
                <option value="001Hp00002dZGl6IAG">POSTGRADO - ESPECIALIZACIÓN EN GESTIÓN DE TIC</option>
                <option value="001Hp00002dWxVTIA0">CICLO - PROFESORADO UNIVIVERSITARIO PARA PROFESIONALES</option>
                <option value="001Hp00002dZGl1IAG">DIPLOMATURA - UNIVERSITARIA EN PROYECTOS INMOBILIARIOS</option>
                <option value="001Hp00002dZGl2IAG">DIPLOMATURA - UNIVERSITARIA EN GESTIÓN INMOBILIARIA</option>
                <option value="001Hp00002dZGl4IAG">DIPLOMATURA - UNIVERSITARIA EN TASACIÓN DE INMUEBLES</option>
            </select><br />

            <label for="Sede_texto">Sede:</label>
            <select  id="00NHp00000eOpuV" name="00NHp00000eOpuV" title="Sede_texto" required={true}>
                <option value="a0aHp00000AH7RiIAL">A Distancia</option>
            </select><br />

            <input className='button' type="submit" name="submit" value="Enviar consulta" />

            </form>
        </div>
         ) : (
            <div className="success-message">
              <p>Formulario enviado exitosamente.</p>
              {/* You can add additional content or redirect the user here */}
            </div>
          )}
    </div>
    </div>

        );
};

export default BecaForm;
