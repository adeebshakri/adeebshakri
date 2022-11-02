import React from 'react'
import CV from '../../assets/Adeeb_s_resume_7_0.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact'className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA