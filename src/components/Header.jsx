import React from 'react'
import CTA from './CTA'
import me from '../assets/imgs/me.png'
import HeaderSocials from './HeaderSocials'
export default function Header() {
  return (
    <header id='#hero' className='header-wrapper'>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Yuval Levi</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={me} alt="" />
        </div>
        <a href="#contact" className='scroll-down'>Scroll Down</a>

      </div>
    </header>
  )
}
