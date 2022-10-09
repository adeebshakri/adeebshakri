import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {MdOutlineEmail} from 'react-icons/md'; 
import {BsWhatsapp, BsLinkedin} from 'react-icons/bs'; 

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Thank You</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        {/* <li><a href='#services'>Services</a></li> */}
        {/* <li><a href='#portfolio'>Portfolio</a></li> */}
        {/* <li><a href='#testimonials'>Testimonials</a></li> */}
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='mailto:adeebshakri7@gmail.com'><MdOutlineEmail/></a>
        <a href='https://web.whatsapp.com/send?phone=+919661703193'><BsWhatsapp/></a>
        <a href='https://in.linkedin.com/in/adeebshakri'><BsLinkedin/></a>
        <a href='https://www.instagram.com/adeebshakri/'><FiInstagram/></a>
      </div>
    </footer>
  )
}

export default Footer