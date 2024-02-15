import React from 'react';
import './App.css';
import '/node_modules/remixicon/fonts/remixicon.css'
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Work from './components/work/Work';
// import Portofolio from './components/portofolio/Portofolio';
import Pricing from './components/pricing/Pricing';
import Testimonials from './components/testimonials/Testimonials';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        {/* <Portofolio /> */}
        <Resume />
        <Work />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;
