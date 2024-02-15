import React from 'react'
import html from '../../assets/html-5.png'
import css from '../../assets/css-3.png'
import javascript from '../../assets/logojs.png'
import react from '../../assets/reactjs.png'
import mongodb from '../../assets/mongodb.png'

const HeaderSocial = () => {
  return (
    <div className="home__social">
        {/* <a href="https://www.instagram.com/" className="home__social-link" target='_blank'>
            <i class="ri-instagram-line"></i>
        </a>
        
        <a href="https://www.dribble.com/" className="home__social-link" target='_blank'>
            <i class="ri-dribbble-line"></i>
        </a>
        
        <a href="https://github.com/" className="home__social-link" target='_blank'>
            <i class="ri-github-fill"></i>
        </a>
        
        <a href="https://www.twitter.com/" className="home__social-link" target='_blank'>
            <i class="ri-twitter-x-line"></i>
        </a>
        
        <a href="https://www.pinterest.com/" className="home__social-link" target='_blank'>
            <i class="ri-pinterest-line"></i>
        </a> */}

        <img src={html} alt="" className="home__social-link" />
        <img src={css} alt="" className="home__social-link" />
        <img src={javascript} alt="" className="home__social-link" />
        <img src={react} alt="" className="home__social-link" />
        <img src={mongodb} alt="" className="home__social-link" />

        
    </div>
  )
}

export default HeaderSocial