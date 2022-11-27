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
    demo: 'https://trello-clone-4zmc.onrender.com/'
  },
  {
    id: 2,
    image: IMG2,
    title:'Mister Tasker',
    github: 'https://github.com/YuvalLevi5/MisterTasker-NodeJS',
    demo: 'https://mister-tasker.onrender.com/'
  },
  {
    id: 5,
    image: IMG5,
    title:'Toy App',
    github: 'https://github.com/YuvalLevi5/ToyApp',
    demo: 'https://toy-app-d00y.onrender.com/#/'
  },
  {
    id: 3,
    image: IMG3,
    title:'Cryptocurrency',
    github: 'https://github.com/YuvalLevi5/crypto-currency',
    demo: 'https://cryptoverse-reactjs-yl.netlify.app/#/'
  },
  {
    id: 4,
    image: IMG4,
    title:'Meme Generator',
    github: 'https://github.com/YuvalLevi5/MemeGen',
    demo: 'https://yuvallevi5.github.io/MemeGen/'
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
                  <a className='btn' href={github} target="_blank" rel="noopener noreferrer" >Github repository</a>
                  <a className='btn btn-primary' href={demo} target="_blank" rel="noopener noreferrer" >Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}
