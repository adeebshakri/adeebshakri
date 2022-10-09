import React from 'react'
import {BsLinkedin, BsWhatsapp} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://in.linkedin.com/in/adeebshakri' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/adeebshakri/' target="_blank"><FaGithub/></a>
        <a href='https://web.whatsapp.com/send?phone=+919661703193' target="_blank"><BsWhatsapp/></a>
    </div>
  )
}

export default HeaderSocials