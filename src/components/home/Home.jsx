import React from 'react'
import './home.css'
import HeaderSocial from './HeaderSocial'
import Me from '../../assets/profile1.jpg'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'
import Sscode from './Sscode'

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
      <div className='img__img'>
        <img src={Me} alt="" className="home__img" />
        <Sscode />
      </div>
        <h1 className="home__name">Frans</h1>
        <span className="home__education">I'm a Programming</span>

        <HeaderSocial />

        <a href="#contact" className="btn">Say Hello</a>

        <ScrollDown />
      </div>


      <Shapes />
    </section>

    
  )
}

export default Home