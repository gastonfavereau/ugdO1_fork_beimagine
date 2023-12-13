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
        <form action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8" method="POST">

        <input type="hidden" name="orgid" value="00DHp000001rh2f" />
        <input type="hidden" name="retURL" value="http://test.com" />
        <input type="hidden" name="reason" value="Consulta por carreras" />
        <input type="hidden" name="status" value="Closed" />
        <input type="hidden" name="subject" value="Quiero consultar por una carrera" />


        <label for="name">Nombre</label>
        <input  id="name" maxlength="80" name="name" type="text" required="true" /><br />
        <label for="Apellido_Web__c">Apellido</label>
        <input  id="00NHp00000g8suC" maxlength="80" name="00NHp00000g8suC" type="text" required="true" /><br />
        <br />
        <div>
        Telefono (codigo de pais + codigo de area + numero de telefono) <br />
            <label for="Codigo_pais_telefono">código de país:</label><input  id="00NHp00000g8yV5" maxlength="80" name="00NHp00000g8yV5" type="text" required="true" />
            <label for="Codigo_area_telefono">código de área</label><input  id="00NHp00000g8xb7" maxlength="80" name="00NHp00000g8xb7" type="text" required="true" />
            <label for="Numero_de_telefono_c">número de teléfono</label><input  id="00NHp00000g8yVF" maxlength="80" name="00NHp00000g8yVF" type="text" required="true" />
        </div>
        <br />

        <label for="email">Correo electrónico</label>
        <input  id="email" maxlength="80" name="email" type="text" required="true" />
        <br />

        <label for="Pais__c">País de residencia:</label>
        <select  id="00NHp00000g8zE4" name="00NHp00000g8zE4" title="Pais_texto__c" required="true">
            <option value="a0YHp00001gJn1OMAS">Argentina</option>
        </select><br />

        <label for="Provincia__c">Provincia o estado de residencia:</label>
        <select  id="00NHp00000g8zE9" name="00NHp00000g8zE9" title="Provincia_texto__c" required="true">
            <option value="">--Seleccione una provincia--</option>
            <option value="a0ZHp00000lhXpLMAU">Buenos Aires</option>
            <option value="a0ZHp00000lhXqXMAU">Buenos Aires, Capital Federal</option>
            <option value="a0ZHp00000lhXqsMAE">Catamarca</option>
            <option value="a0ZHp00000lhXpUMAU">Chaco</option>
            <option value="a0ZHp00000lhXpNMAU">Chubut</option>
            <option value="a0ZHp00000lhXpMMAU">Córdoba</option>
            <option value="a0ZHp00000lhXpKMAU">Corrientes</option>
            <option value="a0ZHp00000lhXpOMAU">Entre Ríos</option>
            <option value="a0ZHp00000lhXpYMAU">Formosa</option>
            <option value="a0ZHp00000lhXr0MAE">Jujuy</option>
            <option value="a0ZHp00000lhXpZMAU">La Pampa</option>
            <option value="a0ZHp00000lhXpsMAE">La Rioja</option>
            <option value="a0ZHp00000lhXpPMAU">Mendoza</option>
            <option value="a0ZHp00000lhXlSMAU">Misiones</option>
            <option value="a0ZHp00000lhXpWMAU">Neuquen</option>
            <option value="a0ZHp00000lhXpuMAE">Rio Negro</option>
            <option value="a0ZHp00000lhXpQMAU">Salta</option>
            <option value="a0ZHp00000lhXpdMAE">San Juan</option>
            <option value="a0ZHp00000lhXq7MAE">San Luis</option>
            <option value="a0ZHp00000lhXpeMAE">Santa Cruz</option>
            <option value="a0ZHp00000lhXpTMAU">Santa Fé</option>
            <option value="a0ZHp00000lhXprMAE">Santiago del Estero</option>
            <option value="a0ZHp00000lhXpRMAU">Tierra del Fuego</option>
            <option value="a0ZHp00000lhXpkMAE">Tucumán</option>    
        </select><br />

        <label for="Ciudad__c">Ciudad de residencia:</label>
        <input  id="00NHp00000g8yVe" maxlength="80" name="00NHp00000g8yVe" type="text" required="true" />
        <br />

        <label for="Programa_acad_mico_texto">Carrera:</label>
        <select  id="00NHp00000ZxNwI" name="00NHp00000ZxNwI" title="Programa_acad_mico_texto" required="true">
            <option value="">--Seleccione una carrera--</option>
            <option value="001Hp00002dWxOJIA0">PREGRADO - TÉCNICO UNIVERSITARIO CONTABLE</option>
            <option value="001Hp00002dZGdwIAG">PREGRADO - ANALISTA UNIVERSITARIO DE SISTEMAS</option>
            <option value="001Hp00002dZGlYIAW">PREGRADO - PROGRAMADOR ADMINISTRATIVO</option>
            <option value="001Hp00002dZGlZIAW">PREGRADO - TEC. EN TURISMO Y GESTION HOTELERA</option>
            <option value="001Hp00002dZGlaIAG">PREGRADO - TECNICATURA UNIVERSITARIA EN CORRETAJE Y NEGOCIOS</option>
            <option value="001Hp00002dZGlbIAG">PREGRADO - TECNICATURA UNIV. EN PRODUCCIÓN AGROPECUARIA</option>
            <option value="001Hp00002dZGlcIAG">PREGRADO - TECNICATURA UNIV. EN ROBÓTICA Y AUTOMATIZACIÓN IND</option>
            <option value="001Hp00002dZGleIAG">PREGRADO - TECNICO UNIVERSITARIO EN ASESORAMIENTO PEDAGÓGICO</option>
            <option value="001Hp00002dZGlfIAG">PREGRADO - TECNICO UNIVERSITARIO EN COMERCIALIZACION</option>
            <option value="001Hp00002dZGlgIAG">PREGRADO - TECNICO UNIVERSITARIO EN IMPUESTOS</option>
            <option value="001Hp00002dZGI2IAO">PREGRADO - ANALISTA DE SISTEMAS</option>
            <option value="001Hp00002dWxViIAK">GRADO - Licenciatura en Corretaje y Negocios Inmobiliarios</option>
            <option value="001Hp00002dWxVrIAK">GRADO - LICENCIATURA EN COMERCIO INTERNACIONAL</option>
            <option value="001Hp00002dWxUeIAK">GRADO - LICENCIATURA EN ADMINISTRACION</option>
            <option value="001Hp00002dWxUgIAK">GRADO - ABOGACIA</option>
            <option value="001Hp00002dWxUoIAK">GRADO - Licenciatura en Artes Audiovisuales</option>
            <option value="001Hp00002dWxUpIAK">GRADO - LICENCIATURA EN TERAPIA OCUPACIONAL</option>
            <option value="001Hp00002dWxUxIAK">GRADO - ARQUITECTURA</option>
            <option value="001Hp00002dWxVNIA0">GRADO - CONTADOR PUBLICO NACIONAL</option>
            <option value="001Hp00002dWxVSIA0">GRADO - LICENCIATURA EN NUTRICIÓN</option>
            <option value="001Hp00002dWxVWIA0">GRADO - INGENIERÍA EN INFORMATICA</option>
            <option value="001Hp00002dWxVbIAK">GRADO - LICENCIATURA EN PSICOPEDAGOGÍA</option>
            <option value="001Hp00002dWxVcIAK">GRADO - LICENCIATURA EN KINESIOLOGÍA y FISIATRÍA</option>
            <option value="001Hp00002dWxVdIAK">GRADO - PROFESORADO EN EDUCACION FISICA</option>
            <option value="001Hp00002dWxVeIAK">GRADO - LICENCIATURA EN MARKETING</option>
            <option value="001Hp00002dZGlAIAW">GRADO - LIC. EN COMERCIALIZACION C/O EN MARKETING TURÍSTIC</option>
            <option value="001Hp00002dZGkpIAG">GRADO - CICLO BASICO - LIC. EN TURISMO Y HOTELERIA</option>
            <option value="001Hp00002dZGl8IAG">GRADO - INGENIERIA INDUSTRIAL</option>
            <option value="001Hp00002dZGl9IAG">GRADO - LIC. EN ADMINISTRACION C/O. EN GESTION HOTELERA</option>
            <option value="001Hp00002dZGlBIAW">GRADO - LIC. EN TRATAMIENTO Y SEGURIDAD PENITENCIARIA</option>
            <option value="001Hp00002dZGlDIAW">GRADO - LICENCIATURA EN  HIGIENE Y SEGURIDAD EN EL TRABAJO</option>
            <option value="001Hp00002dZGlEIAW">GRADO - LICENCIATURA EN COMERCIALIZACION</option>
            <option value="001Hp00002dZGlFIAW">GRADO - LICENCIATURA EN DISEÑO INDUSTIAL</option>
            <option value="001Hp00002dZGlGIAW">GRADO - LICENCIATURA EN DISEÑO Y COMUNICACIÓN VISUAL</option>
            <option value="001Hp00002dZGlHIAW">GRADO - LICENCIATURA EN GESTIÓN TURÍSTICA Y HOTELERA</option>
            <option value="001Hp00002dZGlJIAW">GRADO - LICENCIATURA EN PRODUCCION AGROPECUARIA</option>
            <option value="001Hp00002dZGlPIAW">GRADO - LICENCIATURA EN SEGURIDAD</option>
            <option value="001Hp00002dZGlQIAW">GRADO - LICENCIATURA EN SISTEMAS DE INFORMACION</option>
            <option value="001Hp00002dZGlSIAW">GRADO - LICENCIATURA EN TURISMO Y HOTELERIA</option>
            <option value="001Hp00002dZGlWIAW">GRADO - PROF. EN CS. ECONOMICAS Y EMPRESARIALES</option>
            <option value="001Hp00002dZGlXIAW">GRADO - PROFESORADO EN INFORMÁTICA</option>
            <option value="001Hp00002dZGI1IAO">GRADO - ADMINISTRACION CICLO BASICO</option>
            <option value="001Hp00002dWxVlIAK">POSTGRADO - DOCTORADO EN DESARROLLO SUSTENTABLE E INTEGRACIÓN</option>
            <option value="001Hp00002dWxVnIAK">POSTGRADO - MAESTRÍA EN GEST. Y EVAL. DE LA  ED. SUP. A DIST</option>
            <option value="001Hp00002dWxVsIAK">POSTGRADO - ESPECIALIZACIÓN EN RECURSOS TRIB. Y PREVISIONALES</option>
            <option value="001Hp00002dWxVwIAK">POSTGRADO - ESPECIALIZACIÓN EN TURISMO S. Y DESARROLLO T.</option>
            <option value="001Hp00002dWxUcIAK">POSTGRADO - ESPECIALIZACIÓN EN DERECHO PROCESAL</option>
            <option value="001Hp00002dWxVXIA0">POSTGRADO - MAESTRÍA EN GESTIÓN Y EVAL. DE LA EDUC. SUPERIOR</option>
            <option value="001Hp00002dZGl6IAG">POSTGRADO - ESPECIALIZACIÓN EN GESTIÓN DE TIC</option>
            <option value="001Hp00002dZGl7IAG">POSTGRADO - ESPECIALIZACIÓN EN TELEMÁTICA Y REDES</option>
            <option value="001Hp00002dZGlRIAW">POSTGRADO - LICENCIATURA EN TECNOLOGÍA EDUCATIVA</option>
            <option value="001Hp00002dZGlTIAW">POSTGRADO - MAESTRIA EN DESARROLLO REGIONAL E INTEGRACION</option>
            <option value="001Hp00002dZGlUIAW">POSTGRADO - MAESTRÍA EN TELEMATICA Y REDES</option>
            <option value="001Hp00002dWxUiIAK">CICLO - CICLO DE ESCRIBANIA</option>
            <option value="001Hp00002dWxUvIAK">CICLO - Licenciatura en Psicopedagog\xeda - Ciclo de Compl</option>
            <option value="001Hp00002dWxVTIA0">CICLO - CICLO PROFESORADO UNIV. p/ PROFESIONALES</option>
            <option value="001Hp00002dZGkqIAG">CICLO - CICLO DE LICENCIATURA EN SISTEMAS DE INFORMACIÓN</option>
            <option value="001Hp00002dZGkrIAG">CICLO - CICLO LIC. EN EDUCACION FISICA</option>
            <option value="001Hp00002dZGksIAG">CICLO - CICLO LIC. EN EVALUACION DE INSTITUCIONES EDUCATIVAS</option>
            <option value="001Hp00002dZGktIAG">CICLO - CICLO LICENCIATURA EN  HIGIENE Y SEGURIDAD EN EL TRABAJO</option>
            <option value="001Hp00002dZGl5IAG">CICLO - ENFERMERIA</option>
            <option value="001Hp00002dZGlIIAW">CICLO - LICENCIATURA EN GOBIERNO Y ADMINISTRACION PUBLICA</option>
            <option value="001Hp00002dZGlKIAW">CICLO - LICENCIATURA EN RECURSOS TECNOLÓGICOS</option>
            <option value="001Hp00002dWxVmIAK">DIPLOMATURA - DIPLOMATURA EN TRATAMIENTO Y SEGURIDAD PENITENCIAR</option>
            <option value="001Hp00002dZGkvIAG">DIPLOMATURA - CURADURÍA</option>
            <option value="001Hp00002dZGkwIAG">DIPLOMATURA - DIPLOMATURA UNIV. EN CREACIÓN DE CONT. DIGITALES</option>
            <option value="001Hp00002dZGkxIAG">DIPLOMATURA - DIPLOMA DE POSGRADO EN EVALUACIÓN DE LA EDUCACIÓN SUPERIOR</option>
            <option value="001Hp00002dZGkyIAG">DIPLOMATURA - DIPLOMA DE POSGRADO EN GESTIÓN DE LA EDUCACIÓN SUPERIOR</option>
            <option value="001Hp00002dZGkzIAG">DIPLOMATURA - DIPLOMATURA EN CIBERSEGURIDAD</option>
            <option value="001Hp00002dZGl0IAG">DIPLOMATURA - DIPLOMATURA UNIV EN NEGOCIACIÓN Y MARKETING INMOB.</option>
            <option value="001Hp00002dZGl1IAG">DIPLOMATURA - DIPLOMATURA UNIV. EN PROYECTOS INMOBILIARIOS</option>
            <option value="001Hp00002dZGl2IAG">DIPLOMATURA - DIPLOMATURA UNIVERSITARIA EN GESTIÓN INMOBILIARIA</option>
            <option value="001Hp00002dZGl3IAG">DIPLOMATURA - DIPLOMATURA UNIVERSITARIA EN SEGURIDAD</option>
            <option value="001Hp00002dZGl4IAG">DIPLOMATURA - DIPLOMATURA UNIVERSITARIA EN TASACIÓN DE INMUEBLES</option>
            <option value="001Hp00002dZGlVIAW">DIPLOMATURA - MODA</option>
        </select><br />

        <label for="Sede_texto">Sede:</label>
        <select  id="00NHp00000eOpuV" name="00NHp00000eOpuV" title="Sede_texto" required="true">
            <option value="">--Seleccione una sede--</option>
            <option value="a0aHp00000AH7RcIAL">Posadas</option>
            <option value="a0aHp00000AH7RdIAL">Obera</option>
            <option value="a0aHp00000AH7ReIAL">Eldorado</option>
            <option value="a0aHp00000AH7RfIAL">Resistencia</option>
            <option value="a0aHp00000AH7RgIAL">Instituto de Seguridad Po</option>
            <option value="a0aHp00000AH7RhIAL">Buenos Aires</option>
            <option value="a0aHp00000AH7RiIAL">A Distancia</option>
            <option value="a0aHp00000AH7dsIAD">Test sede</option>
        </select><br />

        <input className='button' type="submit" name="Enviar consulta" />

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
