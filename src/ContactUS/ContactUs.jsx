import React, { useRef } from 'react';
import './ContactUs.css'
import emailjs from '@emailjs/browser';


export const ContactUs = () => {

  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault()

    const serviceId = "service_bqp7dlb";
    const templateId = "template_b7blubh";
    const apiKey = "fpVqvqvmsV_V9qo0b";

    emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
      .then(result => console.log(result.text))
      .catch(error => console.log(error))

  }

  return (
    <form ref={refForm} action="" onSubmit={handleSubmit}>
      <div className="header-contact">
        <h2>Contact Us</h2>
        <p>Please fill this form</p>
      </div>

      <fieldset className='field-name'>
        <label className='symbol-require' htmlFor="">Name</label>
        <input name='userName' type="text" placeholder='Ej: Cristian Pulgarin' required />
      </fieldset>

      <fieldset className='field-email'>
        <label className='symbol-require' name='email' htmlFor="">Email</label>
        <input type="email" placeholder='Ej: cpulgarinsalgado@gmail.com' name='email' id='email' required />
      </fieldset>

      <fieldset className='field-message'>
        <label className='symbol-require'>Email</label>
        <textarea maxLength="500" placeholder='type yout message' name="message" id="" cols="30" rows="10"></textarea>
      </fieldset>
      <button className='btn-send'>Send</button>
    </form>
  )
}
