import React from 'react'
import { BiCheck } from 'react-icons/bi'

export default function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services-container">
        <article className='service'>
          <div className='service-header'>
            <h3>Web Development</h3>
          </div>

          <ul className='service-list'>
            <li>
              <BiCheck className='service-list-icon' />
              <p></p>Responsive websites built for an optimal user experience that achieves your business goals.
            </li>

          </ul>
        </article>
      </div>
    </section>

  )
}
