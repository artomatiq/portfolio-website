import React, { useEffect } from 'react';
import './App.css';
import PreLoader from './components/loading-screen/PreLoader';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Portfolio from './components/projects/Projects';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {

  useEffect(() => {
    const sectionTitleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
        else {
          entry.target.classList.remove('show')
        }
      })
    })

    const sectionTitles = document.querySelectorAll('.section__title span')

    sectionTitles.forEach(title => {
      sectionTitleObserver.observe(title)
    })

    return () => {
      sectionTitles.forEach(title => {
        sectionTitleObserver.unobserve(title)
      })
    }
  }, []);

  return (
    <>
      <PreLoader />
      <Header/>

      <main className='main'>
        <Home/>
        <Skills/>
        <Portfolio/>
        <About/>
        <Qualification/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
