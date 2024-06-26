import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({idAccount, idOffice}) => {
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

  const url = `https://inscripciones.ugd.edu.ar/simplified_contact_cases/new?account=${idAccount}&office=${idOffice}`
  //const url = `http://localhost:3000/simplified_contact_cases/new?account=${idAccount}&office=${idOffice}`

  return (
    <>
      <iframe src={url}
      style={{width:"100%", height:"100vh"}}></iframe>
    </>
  );
};

export default ContactForm;


                                       