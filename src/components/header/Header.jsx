import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me1.jpeg'
import './header.css'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Adeeb Shakri</h1>
        <h4 className='text-light'>Senior Frontend Developer</h4>
        <h5 className='text-light'>I create cool websites to bring happiness to you and pride to myself :)</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img className='me-img' src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header