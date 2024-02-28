// SalesforceForm.js
"use client";
import { useEffect, useState } from "react";
import "./form.css";
import AOS from "aos";
import "aos/dist/aos.css";

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
    console.log(event.target);

    try {
      const response = await fetch(
        "https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(new FormData(event.target)),
        }
      );

      console.log(response);

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        console.error(
          "Failed to submit form:",
          response.status,
          response.statusText
        );
        // Handle the error, e.g., show an error message to the user
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
      // Handle the error, e.g., show an error message to the user
    }
  };

  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "50vh",
          overflow: "hidden", // Ensure content doesn't overflow
          display: "flex",
          alignItems: "center", // Center vertically
          alignContent: "center", // Center vertically
          justifyContent: "center", // Center horizontally
        }}
      >
        <img
          id="background-image"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            filter: "brightness(70%)",
          }}
          src={"/pexels-anna-shvets-4226256.jpg"}
          alt="Background Image"
        />

        <h1
          data-aos="fade-up"
          className="coursetheading"
          style={{
            zIndex: 1, // Ensure the heading is above the image
            color: "white", // Set text color to be visible against the background
            // Add any other styles you need for the heading
            fontSize: "3rem",
            fontWeight: "500",
          }}
        >
          Consulta por carreras
        </h1>
      </div>
      <div
        className="form-container"
        style={{
          marginTop: "-15rem",
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: "white",
          padding: "1rem",
          backgroundImage: "url(/cool-background.png)",
        }}
      >
        <iframe
          src="https://inscripciones.ugd.edu.ar/contact_cases/new?theme=ugd-virtual"
          className="formIframe"
        />
      </div>
      {/* <div
        className="form-container"
        style={{
          marginTop: "-15rem",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: "white",
          padding: "1rem",
          backgroundImage: "url(/cool-background.png)",
        }}
      >
        {!formSubmitted ? (
          <div
            data-aos="fade-up"
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              backgroundColor: "#0F4D6B",
              boxShadow: " 0 8px 8px 0 rgba(0,0,0,0.2)",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              position: "relative",
              color: "white",
              marginTop: "1.5rem",
            }}
          >
            <p
              style={{
                textAlign: "center",
                marginTop: "-5rem",
                fontSize: "3rem",
                fontWeight: "700",
                fontFamily: "Poppins",
                color: "white",
              }}
            >
              Consulta por carreras
            </p>
            <form
              action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8"
              method="POST"
            >
              <input type="hidden" name="orgid" value="00DHp000001rh2f" />
              <input
                type="hidden"
                name="retURL"
                value="https://virtual.ugd.edu.ar/ar"
              />
              <input
                type="hidden"
                name="reason"
                value="Consulta por carreras"
              />
              <input type="hidden" name="status" value="Closed" />
              <input
                type="hidden"
                name="subject"
                value="Quiero consultar por una carrera"
              />

              <label for="name">Nombre</label>
              <input
                id="name"
                maxlength="80"
                name="name"
                type="text"
                required={true}
              />
              <br />

              <label for="Apellido_Web__c">Apellido</label>
              <input
                id="00NHp00000g8suC"
                maxlength="80"
                name="00NHp00000g8suC"
                type="text"
                required={true}
              />
              <br />

              <br />
              <div>
                Telefono (codigo de pais + codigo de area + numero de telefono){" "}
                <br />
                <label for="Codigo_pais_telefono">código de país:</label>
                <input
                  id="00NHp00000g8yV5"
                  maxlength="80"
                  name="00NHp00000g8yV5"
                  type="text"
                  required={true}
                />
                <label for="Codigo_area_telefono">código de área</label>
                <input
                  id="00NHp00000g8xb7"
                  maxlength="80"
                  name="00NHp00000g8xb7"
                  type="text"
                  required={true}
                />
                <label for="Numero_de_telefono_c">número de teléfono</label>
                <input
                  id="00NHp00000g8yVF"
                  maxlength="80"
                  name="00NHp00000g8yVF"
                  type="text"
                  required={true}
                />
              </div>
              <br />

              <label for="email">Correo electrónico</label>
              <input
                id="email"
                maxlength="80"
                name="email"
                type="text"
                required={true}
              />
              <br />

              <label for="Pais__c">País de residencia:</label>
              <select
                id="00NHp00000g8zE4"
                name="00NHp00000g8zE4"
                title="Pais_texto__c"
                required={true}
              >
                <option value="a0YHp00001hOgR9MAK">Argentina</option>
                <option value="a0YHp00001hOgRAMA0">Bolivia</option>
                <option value="a0YHp00001hOgRBMA0">Brasil</option>
                <option value="a0YHp00001hOgRCMA0">Chile</option>
                <option value="a0YHp00001hOgRDMA0">Colombia</option>
                <option value="a0YHp00001hOgREMA0">Costa Rica</option>
                <option value="a0YHp00001hOgRFMA0">Cuba</option>
                <option value="a0YHp00001hOgRGMA0">Dominica</option>
                <option value="a0YHp00001hOgRHMA0">Dominican Republic</option>
                <option value="a0YHp00001hOgRIMA0">Ecuador</option>
                <option value="a0YHp00001hOgRJMA0">El Salvador</option>
                <option value="a0YHp00001hOgRKMA0">Guatemala</option>
                <option value="a0YHp00001hOgRLMA0">Guyana</option>
                <option value="a0YHp00001hOgRMMA0">Haiti</option>
                <option value="a0YHp00001hOgRNMA0">Honduras</option>
                <option value="a0YHp00001hOgROMA0">Jamaica</option>
                <option value="a0YHp00001hOgRPMA0">Mexico</option>
                <option value="a0YHp00001hOgRQMA0">Nicaragua</option>
                <option value="a0YHp00001hOgRRMA0">Panama</option>
                <option value="a0YHp00001hOgRSMA0">Paraguay</option>
                <option value="a0YHp00001hOgRTMA0">Peru</option>
                <option value="a0YHp00001hOgRUMA0">Puerto Rico</option>
                <option value="a0YHp00001hOgRVMA0">España</option>
                <option value="a0YHp00001hOgRWMA0">Estado Unidos</option>
                <option value="a0YHp00001hOgRXMA0">Uruguay</option>
                <option value="a0YHp00001hOgRYMA0">Venezuela</option>
              </select>
              <br />

              <label for="Ciudad__c">Ciudad de residencia:</label>
              <input
                id="00NHp00000g8yVe"
                maxlength="80"
                name="00NHp00000g8yVe"
                type="text"
                required={true}
              />
              <br />

              <label for="Programa_acad_mico_texto">Carrera:</label>
              <select
                id="00NHp00000ZxNwI"
                name="00NHp00000ZxNwI"
                title="Programa_acad_mico_texto"
                required={true}
              >
                <option value="">--Seleccione una carrera--</option>
                <option value="001Hp00002dZGlaIAG">
                  PREGRADO - TECNICATURA UNIVERSITARIA EN CORRETAJE Y NEGOCIOS
                </option>
                <option value="001Hp00002ias4KIAQ">
                  PREGRADO - TECNICATURA UNIVERSITARIA EN DESARROLLO DE SOFTWARE
                </option>
                <option value="001Hp00002dWxUeIAK">
                  GRADO - LICENCIATURA EN ADMINISTRACION
                </option>
                <option value="001Hp00002dWxViIAK">
                  GRADO - LICENCIATURA EN CORRETAJE Y NEGOCIOS INMOBILIARIOS
                </option>
                <option value="001Hp00002ias4PIAQ">
                  GRADO - CICLO COMPLEMENTACIÓN EN GESTIÓN EDUCATIVA
                </option>
                <option value="001Hp00002ias4UIAQ">
                  GRADO - CICLO DE COMPLEMENTACIÓN DE RECURSOS TECNOLÓGICOS
                </option>
                <option value="001Hp00002dWxVeIAK">
                  GRADO - LICENCIATURA EN MARKETING
                </option>
                <option value="001Hp00002dWxVlIAK">
                  POSTGRADO - DOCTORADO EN DESARROLLO SUSTENTABLE E INTEGRACIÓN
                </option>
                <option value="001Hp00002dWxVnIAK">
                  POSTGRADO - MAESTRÍA EN GESTÍON Y EVALUACÍON DE LA EDUCACION
                  SUPERIOR A DIST
                </option>
                <option value="001Hp00002dZGl6IAG">
                  POSTGRADO - ESPECIALIZACIÓN EN GESTIÓN DE TIC
                </option>
                <option value="001Hp00002dWxVTIA0">
                  CICLO - PROFESORADO UNIVIVERSITARIO PARA PROFESIONALES
                </option>
                <option value="001Hp00002dZGl1IAG">
                  DIPLOMATURA - UNIVERSITARIA EN PROYECTOS INMOBILIARIOS
                </option>
                <option value="001Hp00002dZGl2IAG">
                  DIPLOMATURA - UNIVERSITARIA EN GESTIÓN INMOBILIARIA
                </option>
                <option value="001Hp00002dZGl4IAG">
                  DIPLOMATURA - UNIVERSITARIA EN TASACIÓN DE INMUEBLES
                </option>
              </select>
              <br />

              <label for="Sede_texto">Sede:</label>
              <select
                id="00NHp00000eOpuV"
                name="00NHp00000eOpuV"
                title="Sede_texto"
                required={true}
              >
                <option value="a0aHp00000AH7RiIAL">A Distancia</option>
              </select>
              <br />

              <input
                className="button"
                type="submit"
                name="submit"
                value="Enviar consulta"
              />
            </form>
          </div>
        ) : (
          <div className="success-message">
            <p>Formulario enviado exitosamente.</p>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default SalesforceForm;
