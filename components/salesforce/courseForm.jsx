import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = emailRegex.test(inputEmail);
    setIsValidEmail(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', email);
  };

  // <form action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8" method="POST"></form>

  return (
    <form action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8" method="POST">
    <input type="hidden" name="retURL" value="https://virtual.ugd.edu.ar/ar/form/success" />
    <input type="hidden" name="orgid" value="00DHp000001rh2f"></input>

    <input type="hidden" name="reason" value="Consulta por carreras" />
    <input type="hidden" name="status" value="New" />
    <input type="hidden" name="subject" value="Ver consulta en description" />
    <input type="hidden" name="Origin" value="Web ugd-virtual"></input>
      <h1 style={{
        textAlign: 'center',
        fontFamily: 'WorkSans-bold',
        fontSize: '1.5em',
        color:"orange",
        marginTop:"0.5rem",
    
      }}>Consultas</h1>
      <section>
        <input id="name" maxLength="80" name="name" type="text" required placeholder="Nombre (*)" />
        <input id="lastName" maxLength="80" name="lastName" type="text" required placeholder="Apellido (*)" />
      </section>
      <section>
        <input
          id="email"
          maxLength="80"
          name="email"
          type="email"
          required
          placeholder="Email (*)"
          value={email}
          onChange={handleEmailChange}
        />
      </section>
      {!isValidEmail && <p className="alert">Ingrese un correo electrónico válido.</p>}
      <h6 style={{
        fontSize:"1rem",
        color:"orange",
        textAlign:"center"
      }}>Teléfono</h6>
      <section>
        <div>
          <input
            id="countryCode"
            maxLength="4"
            min="1"
            name="countryCode"
            type="number"
            required
            placeholder="País (*)"
          />
          <h6 style={{
        fontSize:"1rem",
        color:"orange"
      }}>sin el +</h6>
        </div>
        <div>
        <input id="00NHp00000g8xb7" 
        maxlength="5" min="1" 
        name="00NHp00000g8xb7" 
        type="number" r
        required
        placeholder="Area (*)" />
        <h6 style={{
        fontSize:"1rem",
        color:"orange"
      }}>sin el 0</h6>
        </div>
        <div>
        <input id="00NHp00000g8yVF" 
        maxlength="12" min="1" 
        name="00NHp00000g8yVF" 
        type="number" 
        required
        placeholder="Número (*)" />
        <h6 style={{
        fontSize:"1rem",
        color:"orange"
      }}>sin el 15</h6>
      </div>
        
        {/* Other input fields for phone number */}
      </section>
       <section>
        <textarea style={{
            width: '100%',
            border: '1px solid rgba(255, 166, 0, 0.323)',
            marginTop:"0.3rem"
        }} id="description" maxlength="400" name="description" 
        placeholder="Dinos la carrera de tu interés y consulta por favor!">

        </textarea>
        </section>
      {/* Other form fields */}
      <div style={{
        display:"flex",
        justifyContent:"center"
      }}>
      <button  style={{
                    width:"200px",
                    height:"50px",
                    marginTop:"20px",
                    backgroundColor:"orange",
                    color:"white",
                    padding:"5px",
                    borderRadius:"5px",
                    fontSize:"0.9em",
                    fontFamily:"WorkSans-normal"
                    }} id="submit" type="submit" name="submit" disabled={!isValidEmail}>
        Enviar
      </button>
      </div>
    </form>
  );
};

export default ContactForm;


                                       