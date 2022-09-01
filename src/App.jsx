import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
export default function App() {




  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/*  */}
      {/* <Services /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  )
}
