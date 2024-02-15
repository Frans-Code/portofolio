import React, { useState } from 'react'
import './sidebar.css'
import { Link } from 'react-scroll'
import { animateScroll } from 'react-scroll'
// import Logo from '../../assets/logoF.svg'
// import Logo from '../../assets/logo1.svg'

const Sidebar = () => {
  // ==========  Scroll Active  ========== //
  // const scrollTop = () => {
  //   animateScroll.scrollToTop();
  // };
  // const [scrollHeader, setScrollHeader] = useState(false);

  // const changeHeader = () => {
  //   if (window.scrollY >= 80) {
  //     setScrollHeader(true);
  //   } else {
  //     setScrollHeader(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', changeHeader);
  // }, []);


  // Function to handle the activation of a link.
  const handleSetActive = (to) => {
    console.log(to);
  };


  // ==========  Toggle Menu  ========== //
  const [Toggle, showMenu] = useState(false)
  const [activeNav, setActiveNav] = useState("#home");


  return (
    // <header className={`${scrollHeader ? 'scroll-header' : ''}
    // header`}>
    <>
      <aside className={Toggle ? "aside show-menu" : "aside"}>
      <a href="home" className="nav__logo">
        Frans
      </a>

    {/* NAV ==================================================================================*/}
      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
          {/* HOME ===========================================================================*/}
            <li className="nav__item">
              <Link 
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-100}
                duration={0}
                onSetActive={handleSetActive}
              to="home" 
              className="nav__link">
                <i class="ri-home-6-line"></i>
              </Link>
            </li>

          {/* ABOUT ==========================================================================*/}
            <li className="nav__item">
              <Link
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-50}
                duration={0}
                onSetActive={handleSetActive}
              to="about" 
              className="nav__link">
                <i class="ri-user-follow-line"></i>
              </Link>
            </li>
            
          {/* SERVICES =======================================================================*/}
            <li className="nav__item">
              <Link 
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-50}
                duration={0}
                onSetActive={handleSetActive}
              to="services" 
              className="nav__link">
                <i class="ri-briefcase-4-line"></i>
              </Link>
            </li>

          {/* EXPERIENCE =====================================================================*/}
            <li className="nav__item">
              <Link 
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-50}
                duration={0}
                onSetActive={handleSetActive}
              to="resume" 
              className="nav__link">
                <i class="ri-graduation-cap-line"></i>
              </Link>
            </li>

          {/* WORK ===========================================================================*/}
            <li className="nav__item">
              <Link 
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-50}
                duration={0}
                onSetActive={handleSetActive}
              to="work" 
              className="nav__link">
                <i class="ri-stack-line"></i>
              </Link>
            </li>
            
          {/* POST ===========================================================================*/}
            <li className="nav__item">
              <Link 
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-200}
                duration={0}
                onSetActive={handleSetActive}
              to="blog" 
              className="nav__link">
                <i class="ri-edit-box-line"></i>
              </Link>
            </li>
            
          {/* CONTACT ========================================================================*/}
            <li className="nav__item">
              <Link 
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-200}
                duration={0}
                onSetActive={handleSetActive}
              to="contact" 
              className="nav__link">
                <i class="ri-question-answer-line"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; 2023 - 2024.</span>
      </div>
    </aside>


    <div className={Toggle ? "nav__toggle nav__toggle-open" : 
    "nav__toggle"} onClick={() => showMenu(!Toggle)}>
      <i class="ri-menu-line"></i>
    </div>
    </>
  )
}

export default Sidebar