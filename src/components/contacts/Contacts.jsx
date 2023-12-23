import React from 'react'
import './contacts.css'
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp, BsLinkedin } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi'

const Contacts = () => {
  return (
    <section id='contact'>
      <h5>I'd love to hear from you!</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <a href='mailto:adeebshakri7@gmail.com' target='_blank'>
            <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>adeebshakri7</h5>
              <h5>@gmail.com</h5>
              <a>Send a mail</a>
            </article></a>

          <a href='https://in.linkedin.com/in/adeebshakri' target='_blank'>
            <article className='contact__option'>
              <BsLinkedin className='contact__option-icon' />
              <h4>Linkedin</h4>
              <h5>adeebshakri</h5>
              <a>Get in touch</a>
            </article></a>

          <a href='https://web.whatsapp.com/send?phone=+919661703193' target='_blank'>
            <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon' />
              <h4>WhatsApp</h4>
              <h5>+91 9661703193</h5>
              <a>Send a message</a>
            </article></a>
            
          <a href='https://instagram.com/adeebshakri' target='_blank'>
            <article className='contact__option'>
              <FiInstagram className='contact__option-icon' />
              <h4>Instagram</h4>
              <h5>adeebshakri</h5>
              <a>Get in touch</a>
            </article></a>
        </div>
      </div>
    </section>
  )
}

export default Contacts