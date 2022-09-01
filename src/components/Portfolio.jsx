import React from 'react'
import IMG1 from '../assets/imgs/Trello.png'
import IMG2 from '../assets/imgs/tasker.png'
import IMG3 from '../assets/imgs/bitcoin.png'
import IMG4 from '../assets/imgs/meme.png'
import IMG5 from '../assets/imgs/toy.png'
import IMG6 from '../assets/imgs/mine.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title:'Trello Clone',
    github: 'https://github.com/YuvalLevi5/MyTrello',
    demo: 'https://calm-lowlands-02119.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title:'Mister Tasker',
    github: 'https://github.com/YuvalLevi5/MisterTasker-NodeJS',
    demo: 'https://calm-beyond-40619.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title:'Mister Bitcoin',
    github: 'https://github.com/YuvalLevi5/mister-bitcoin',
    demo: 'https://yuvallevi5.github.io/mister-bitcoin/#/'
  },
  {
    id: 4,
    image: IMG4,
    title:'Meme Generator',
    github: 'https://github.com/YuvalLevi5/MemeGen',
    demo: 'https://yuvallevi5.github.io/MemeGen/'
  },
  {
    id: 5,
    image: IMG5,
    title:'Toy App',
    github: 'https://github.com/YuvalLevi5/ToyApp',
    demo: 'https://blooming-river-78781.herokuapp.com/#/'
  },
  {
    id: 6,
    image: IMG6,
    title:'Mine Sweeper',
    github: 'https://github.com/YuvalLevi5/mine-sweeper',
    demo: 'https://yuvallevi5.github.io/mine-sweeper/'
  },
]
export default function Portfolio() {

  return (
    <section className='hash' id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      {/* <div className="container portfolio-container">
        <article className='portfolio-item'>
          <div className="portfolio-item-img">
            <img src={IMG} alt="" />
          </div>
          <h3>Trello clone</h3>
          <div className="portfolio-item-cta">
            <a className='btn' href="https://www.youtube.com/" target="_blank">Github repository</a>
            <a className='btn btn-primary' href="#" target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className="portfolio-item-img">
            <img src={IMG} alt="" />
          </div>
          <h3>Trello clone</h3>
          <div className="portfolio-item-cta">
            <a className='btn' href="#">Github repository</a>
            <a className='btn btn-primary' href="#" target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className="portfolio-item-img">
            <img src={IMG} alt="" />
          </div>
          <h3>Trello clone</h3>
          <div className="portfolio-item-cta">
            <a className='btn' href="#" target="_blank">Github repository</a>
            <a className='btn btn-primary' href="#" target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className="portfolio-item-img">
            <img src={IMG} alt="" />
          </div>
          <h3>Trello clone</h3>
          <div className="portfolio-item-cta">
            <a className='btn' href="#">Github repository</a>
            <a className='btn btn-primary' href="#" target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className="portfolio-item-img">
            <img src={IMG} alt="" />
          </div>
          <h3>Trello clone</h3>
          <div className="portfolio-item-cta">
            <a className='btn' href="#">Github repository</a>
            <a className='btn btn-primary' href="#" target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className="portfolio-item-img">
            <img src={IMG} alt="" />
          </div>
          <h3>Trello clone</h3>
          <div className="portfolio-item-cta">
            <a className='btn' href="#">Github repository</a>
            <a className='btn btn-primary' href="#" target="_blank">Live Demo</a>
          </div>
        </article>
      </div> */}
      <div className="container portfolio-container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (

              <article key={id} className='portfolio-item'>
                <div className="portfolio-item-img">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio-item-cta">
                  <a className='btn' href={github} target="_blank">Github repository</a>
                  <a className='btn btn-primary' href={demo} target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}
