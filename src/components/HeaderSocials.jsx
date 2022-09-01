import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

export default function HeaderSocials() {
  return (
    <div className="header-socials">
        <a href="https://www.linkedin.com/in/yuval-levi-7028a2185/" target="_blank"> <BsLinkedin/> </a>
        <a href="https://github.com/YuvalLevi5" target="_blank"> <FaGithub/> </a>
    </div>
  )
}
