import React from 'react'
import './about.css';
import ME from '../../assets/me2.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image'/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className='about__card' onClick={() => window.open("https://github.com/adeebshakri?tab=repositories", "_blank")}>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Multiple Projects</small>
            </article>
          </div>
          <p>Currently working for BETSOL and have made multiple personal projects (uploaded on Github).</p>
          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About