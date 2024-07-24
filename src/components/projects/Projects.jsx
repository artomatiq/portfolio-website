import React, { useEffect } from 'react';
import './projects.css';

import image1 from '../../assets/img1.png'
import image2 from '../../assets/img2.png'
import image3 from '../../assets/img3.png'
import image4 from '../../assets/img4.png'

import tweetyBird from '../../assets/trimmed.mp4'

const Portfolio = () => {

    




    return (
        <section className="portfolio section" id='portfolio'>
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Things I've Built</span>

            <div id='projects'>
                <div className='project-container'>
                    <h2 className='project-title'>Tweety Bird: The X-Scape</h2>
                    <video className='project two' id='tweetyBird' src={tweetyBird} draggable="false" loop autoPlay muted playsInline />
                    <p className='project-description'>A Twitter vs Elon Musk's X rivalry themed clone of the popular game Flappy Bird—developed using HTML, CSS and JavaScript.</p>
                </div>

                <div className='project-container'>
                    <h2 className='project-title'>Tweety Bird: The X-Scape</h2>
                    <video className='project two' id='tweetyBird' src={tweetyBird} draggable="false" loop autoPlay muted playsInline />
                    <p className='project-description'>A Twitter vs Elon Musk's X rivalry themed clone of the popular game Flappy Bird—developed using HTML, CSS and JavaScript.</p>
                </div>

                <div className='project-container'>
                    <h2 className='project-title'>Tweety Bird: The X-Scape</h2>
                    <video className='project two' id='tweetyBird' src={tweetyBird} draggable="false" loop autoPlay muted playsInline />
                    <p className='project-description'>A Twitter vs Elon Musk's X rivalry themed clone of the popular game Flappy Bird—developed using HTML, CSS and JavaScript.</p>
                </div>

                <div className='project-container'>
                    <h2 className='project-title'>Tweety Bird: The X-Scape</h2>
                    <video className='project two' id='tweetyBird' src={tweetyBird} draggable="false" loop autoPlay muted playsInline />
                    <p className='project-description'>A Twitter vs Elon Musk's X rivalry themed clone of the popular game Flappy Bird—developed using HTML, CSS and JavaScript.</p>
                </div>

                <div className='project-container'>
                    <h2 className='project-title'>Tweety Bird: The X-Scape</h2>
                    <img className='project six' src={image2} alt='project snapshot' draggable="false" />
                    <p className='project-description'>A Twitter vs Elon Musk's X rivalry themed clone of the popular game Flappy Bird—developed using HTML, CSS and JavaScript.</p>
                </div>
                    
                    
                    
                    
                    
                    {/* <img className='project seven' src={image3} alt='project snapshot' draggable="false" />
                    <img className='project eight' src={image4} alt='project snapshot' draggable="false" />
                    <img className='project nine' src={image1} alt='project snapshot' draggable="false" />
                    <img className='project ten' src={image2} alt='project snapshot' draggable="false" /> */}
            </div>


        </section>
    );
}
export default Portfolio;