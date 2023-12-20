// SalesforceForm.js
'use client'
import { useEffect, useState } from 'react';
import "./form.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const SalesforceForm = () => {
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
        <form action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8" method="POST" >

          <input type="hidden" name="orgid" value="00DHp000001rh2f" />
          <input type="hidden" name="retURL" value="http://test.com"/>

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
              <option value="a0YHp00001hOgR9MAK">Argentina</option>
          </select><br />

          <label for="Provincia__c">Provincia de residencia:</label>
          <select  id="00NHp00000g8zE9" name="00NHp00000g8zE9" title="Provincia_texto__c" required={true}>
              <option value="a0ZHp00000mergqMAA">Buenos Aires</option>
              <option value="a0ZHp00000merghMAA">Catamarca</option>
              <option value="a0ZHp00000mergaMAA">Chaco</option>
              <option value="a0ZHp00000merglMAA">Chubut</option>
              <option value="a0ZHp00000merjFMAQ">Ciudad Autónoma de Buenos Aires</option>
              <option value="a0ZHp00000mergcMAA">Córdoba</option>
              <option value="a0ZHp00000mergYMAQ">Corrientes</option>
              <option value="a0ZHp00000mergoMAA">Entre Ríos</option>
              <option value="a0ZHp00000mergmMAA">Formosa</option>
              <option value="a0ZHp00000mergfMAA">Jujuy</option>
              <option value="a0ZHp00000mergpMAA">La Pampa</option>
              <option value="a0ZHp00000mergnMAA">La Rioja</option>
              <option value="a0ZHp00000merggMAA">Mendoza</option>
              <option value="a0ZHp00000mergeMAA">Misiones</option>
              <option value="a0ZHp00000mergiMAA">Neuquén</option>
              <option value="a0ZHp00000mergZMAQ">Río Negro</option>
              <option value="a0ZHp00000mergdMAA">Salta</option>
              <option value="a0ZHp00000mergUMAQ">San Juan</option>
              <option value="a0ZHp00000mergWMAQ">San Luis</option>
              <option value="a0ZHp00000mergjMAA">Santa Cruz</option>
              <option value="a0ZHp00000mergbMAA">Santa Fe</option>
              <option value="a0ZHp00000mergVMAQ">Santiago del Estero</option>
              <option value="a0ZHp00000mergkMAA">Tierra del Fuego</option>
              <option value="a0ZHp00000mergXMAQ">Tucumán</option> 
          </select><br />

          <label for="Ciudad__c">Ciudad de residencia:</label>
          <input  id="00NHp00000g8yVe" maxlength="80" name="00NHp00000g8yVe" type="text" required={true} />
          <br />

          <label for="Programa_acad_mico_texto">Carrera:</label>
          <select  id="00NHp00000ZxNwI" name="00NHp00000ZxNwI" title="Programa_acad_mico_texto" required={true}>
              <option value="">--Seleccione una carrera--</option>
              <option value="001Hp00002dZGlaIAG">PREGRADO - TECNICATURA UNIVERSITARIA EN CORRETAJE Y NEGOCIOS</option>
              <option value="001Hp00002ias4KIAQ">PREGRADO - TECNICATURA UNIVERSITARIA EN DESARROLLO DE SOFTWARE</option>
              <option value="001Hp00002dWxViIAK">GRADO - LICENCIATURA EN CORRETAJE Y NEGOCIOS INMOBILIARIOS</option>
              <option value="001Hp00002dWxVrIAK">GRADO - LICENCIATURA EN COMERCIO INTERNACIONAL</option>
              <option value="001Hp00002dWxUeIAK">GRADO - LICENCIATURA EN ADMINISTRACION</option>
              <option value="001Hp00002dWxUgIAK">GRADO - ABOGACIA</option>
              <option value="001Hp00002dWxUoIAK">GRADO - LICENCIATURA EN ARTES AUDIOVISUALES</option>
              <option value="001Hp00002dWxUpIAK">GRADO - LICENCIATURA EN TERAPIA OCUPACIONAL</option>
              <option value="001Hp00002dWxUxIAK">GRADO - ARQUITECTURA</option>
              <option value="001Hp00002ias4PIAQ">GRADO - CICLO COMPLEMENTACIÓN EN GESTIÓN EDUCATIVA</option>
              <option value="001Hp00002ias4UIAQ">GRADO - CICLO DE COMPLEMENTACIÓN DE RECURSOS TECNOLÓGICOS</option>
              <option value="001Hp00002dWxVNIA0">GRADO - CONTADOR PUBLICO NACIONAL</option>
              <option value="001Hp00002dWxVSIA0">GRADO - LICENCIATURA EN NUTRICIÓN</option>
              <option value="001Hp00002dWxVWIA0">GRADO - INGENIERÍA EN INFORMATICA</option>
              <option value="001Hp00002dWxVbIAK">GRADO - LICENCIATURA EN PSICOPEDAGOGÍA</option>
              <option value="001Hp00002dWxVcIAK">GRADO - LICENCIATURA EN KINESIOLOGÍA y FISIATRÍA</option>
              <option value="001Hp00002dWxVdIAK">GRADO - PROFESORADO EN EDUCACION FISICA</option>
              <option value="001Hp00002dWxVeIAK">GRADO - LICENCIATURA EN MARKETING</option>
              <option value="001Hp00002dZGlBIAW">GRADO - LICENCIATURA EN TRATAMIENTO Y SEGURIDAD PENITENCIARIA</option>
              <option value="001Hp00002dZGlPIAW">GRADO - LICENCIATURA EN SEGURIDAD</option>
              <option value="001Hp00002dWxVlIAK">POSTGRADO - DOCTORADO EN DESARROLLO SUSTENTABLE E INTEGRACIÓN</option>
              <option value="001Hp00002dWxVnIAK">POSTGRADO - MAESTRÍA EN GESTÍON Y EVALUACÍON DE LA EDUCACION SUPERIOR A DISTANCIA</option>
              <option value="001Hp00002dWxVsIAK">POSTGRADO - ESPECIALIZACIÓN EN RECURSOS TRIBUTARIOS Y PREVISIONALES</option>
              <option value="001Hp00002dWxUcIAK">POSTGRADO - ESPECIALIZACIÓN EN DERECHO PROCESAL</option>
              <option value="001Hp00002dWxVXIA0">POSTGRADO - MAESTRÍA EN GESTIÓN Y EVALUACION DE LA EDUCACIÓN SUPERIOR</option>
              <option value="001Hp00002dZGl6IAG">POSTGRADO - ESPECIALIZACIÓN EN GESTIÓN DE TIC</option>
              <option value="001Hp00002dWxUiIAK">CICLO - ESCRIBANIA</option>
              <option value="001Hp00002dWxUvIAK">CICLO - LICENCIATURA EN PISCOPEDAGOGIA</option>
              <option value="001Hp00002dWxVTIA0">CICLO - PROFESORADO UNIVIVERSITARIO PARA PROFESIONALES</option>
              <option value="001Hp00002dZGkxIAG">DIPLOMATURA - DE POSGRADO EN EVALUACIÓN DE LA EDUCACIÓN SUPERIOR</option>
              <option value="001Hp00002dZGkyIAG">DIPLOMATURA - DE POSGRADO EN GESTIÓN DE LA EDUCACIÓN SUPERIOR</option>
              <option value="001Hp00002dZGl0IAG">DIPLOMATURA - UNIVERSITARIA EN NEGOCIACIÓN Y MARKETING INMOBILIARIO</option>
              <option value="001Hp00002dZGl1IAG">DIPLOMATURA - UNIVERSITARIA EN PROYECTOS INMOBILIARIOS</option>
              <option value="001Hp00002dZGl2IAG">DIPLOMATURA - UNIVERSITARIA EN GESTIÓN INMOBILIARIA</option>
              <option value="001Hp00002dZGl4IAG">DIPLOMATURA - UNIVERSITARIA EN TASACIÓN DE INMUEBLES</option>
          </select><br />

          <label for="Sede_texto">Sede:</label>
          <select  id="00NHp00000eOpuV" name="00NHp00000eOpuV" title="Sede_texto" required={true}>
              <option value="">--Seleccione una sede--</option>
              <option value="a0aHp00000AH7RcIAL">Posadas</option>
              <option value="a0aHp00000AH7RdIAL">Obera</option>
              <option value="a0aHp00000AH7ReIAL">Eldorado</option>
              <option value="a0aHp00000AH7RfIAL">Resistencia</option>
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

export default SalesforceForm;
