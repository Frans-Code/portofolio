import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i class="ri-briefcase-2-line about__icon"></i>
        
            <div className='about__desc'>
                <h3 className="about__title">25</h3>
                <span className="about__subtitle">My project</span>
            </div>
        </div>

        <div className="about__box">
            <i class="ri-cup-line about__icon"></i>
        
            <div className='about__desc'>
                <h3 className="about__title">5620</h3>
                <span className="about__subtitle">Cup of coffee</span>
            </div>
        </div>
        
        <div className="about__box">
            <i class="ri-award-line about__icon"></i>
        
            <div className='about__desc'>
                <h3 className="about__title">20</h3>
                <span className="about__subtitle">Certificate</span>
            </div>
        </div>

    </div>
  )
}

export default AboutBox