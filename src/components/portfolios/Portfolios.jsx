import React from 'react'
import './portfolios.css'
import MY_PORTFOLIO from '../../assets/port_folio.png';
import FILE_BACKUP from '../../assets/file_backup.png';
import BOOK_MY_SHOW from '../../assets/bookmyshow.png';

const Portfolios = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={MY_PORTFOLIO} alt=''/>
          </div>
          <h3>Personal Website</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com/adeebshakri/adeebshakri' className='btn' target='_blank'>Github</a>
          <a href='https://github.com/adeebshakri/adeebshakri' target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={FILE_BACKUP} alt=''/>
          </div>
          <h3>File Backup Fullstack Project</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com/adeebshakri/Fullstack-project-file_backup_app_dummy' className='btn' target='_blank'>Github</a>
          <a href='https://github.com/adeebshakri/Fullstack-project-file_backup_app_dummy' target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={BOOK_MY_SHOW} alt=''/>
          </div>
          <h3>Book My Show Clone</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com/adeebshakri/BookMyShow-clone' className='btn' target='_blank'>Github</a>
          <a href='https://github.com/adeebshakri/BookMyShow-clone' target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolios