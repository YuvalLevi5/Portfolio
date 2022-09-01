import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { MdWorkOutline } from 'react-icons/md'
import { useState } from 'react'
import $ from 'jquery';


export default function Nav() {

//   $(function () {
//     var currentHash = "#initial_hash"
//     $(document).scroll(function () {
//         $('.hash').each(function () {
//             var top = window.pageYOffset;
//             var distance = top - $(this).offset().top;
//             var hash = $(this).attr('id');
//             // 30 is an arbitrary padding choice, 
//             // if you want a precise check then use distance===0
//             if (distance < 30 && distance > -30 && currentHash != hash) {
//                 window.location.hash = (hash);
//                 currentHash = hash;
//                 setActiveNav('#' + hash)
//             }
//         });
//     });
// });

  const [activeNav, setActiveNav] = useState('#hero')
  return (

    <nav className='nav-wrapper'>
      <a href="#" onClick={() => setActiveNav('#hero')} className={activeNav === '#hero' ? 'active' : ''}> <AiOutlineHome /> </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} > <AiOutlineUser /> </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <BiBook /> </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}> <MdWorkOutline /> </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <BiMessageSquareDetail /> </a>
    </nav>
  )
}
