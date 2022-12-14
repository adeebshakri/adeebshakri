import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Service from './components/service/Service'
import Portfolios from './components/portfolios/Portfolios'
import Testimonials from './components/testimonials/Testimonials'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/> 
      <About />
      <Experience />
      {/* <Service/> */}
      <Portfolios/>
      {/* <Testimonials/> */}
      <Contacts/>
      <Footer/>
    </>
  )
}

export default App