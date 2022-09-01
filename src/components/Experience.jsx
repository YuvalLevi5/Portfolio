import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs'

export default function Experience() {
  return (
    <section className='hash' id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>SCSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>Vue.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>Vuex</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>React.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience-backend">
          <h3>Backend Development</h3>
          <div className="experience-content">
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>ExpressJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className='experience-details'>
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}
