import React from 'react'
import ME from '../assets/imgs/mee.jpg'
import { VscFolderLibrary } from 'react-icons/vsc'

export default function About() {
  return (
    <section className='hash' id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about-content">
          {/* <div className="about-cards">
            <article className='about-card'>
              <VscFolderLibrary className='about-icon' />
              <h5>Projects</h5>
            </article>
          </div> */}
          {/* <p>Full-stack web developer with knowledge and experience writing single page web applications, using the latest web technologies, including ES6, Vue.js, React.js, Redux, Vite, Vuex, Node.js and Express.js.</p> */}
          <p>
            I'm Full Stack Developer located in Israel. <br />
            Well-organised person, problem solver, independent.
            Fan of football, outdoor activities, TV series and movies. <br />
            Interested in the entire frontend and backend spectrum.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
