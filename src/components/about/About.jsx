import React from 'react'
import './about.css'
import Image from '../../assets/profile1.jpg'
import AboutBox from './AboutBox'

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I create web pages with UI / UX user interface, and i create various kinds of projects such as sidebars, e-commerce websites, landing pages, admin dashboards, etc.
            </p>
              <a href="#work" className="btn">My Projects</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Frontend</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage frontend"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Backend</h3>
                <span className="skills__number">60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage backend"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Full Stack Developer</h3>
                <span className="skills__number">40%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage full_stack"></span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
            <AboutBox />

    </section>
  )
}

export default About