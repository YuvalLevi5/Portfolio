import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'


export default function Footer() {
  return (
    <footer>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer-socials'>
        <a href="https://www.linkedin.com/in/yuval-levi-7028a2185/" target="_blank"> <BsLinkedin/> </a>
        <a href="https://github.com/YuvalLevi5" target="_blank"> <FaGithub/> </a>
        <a href="https://www.facebook.com/yuvallevi19" target="_blank"> <FaFacebookF/> </a>
      </div>

      <div className="footer-copyright">
        <small> &copy; Yuval Levi. All rights reserved</small>
      </div>
    </footer>
  )
}
