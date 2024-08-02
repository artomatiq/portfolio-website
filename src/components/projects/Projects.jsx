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
                    <div className="project-image">
                        <video className='project project-hide' id='tweetyBird' src={tweetyBird} draggable="false" loop autoPlay muted playsInline />
                    </div>
                    <div className="project-info">
                        <h2 className='project-title project-title-hide'>Tweety Bird: The X-Scape</h2>
                        <p className='project-description project-description-hide'>A Twitter vs Elon Musk's X rivalry themed clone of the popular game Flappy Bird—developed using HTML, CSS and JavaScript.</p>
                        <div className="project-buttons">
                            <a href="https://github.com/artomatiq/tweetie-bird" class="project-button project-button-hide" rel="noreferrer" target="_blank">CODE   <i class="uil uil-github-alt"></i></a>
                            <a href="https://tweety-bird.vercel.app/" class="project-button project-button-hide" rel="noreferrer" target="_blank">DEMO   <i class="uil uil-eye"></i></a>
                        </div>
                    </div>
                </div>

                <div className='project-container'>
                    <div className="project-image">
                        <img className='project project-hide' src={image2} alt='project snapshot' draggable="false" />
                    </div>
                    <div className="project-info">
                        <h2 className='project-title project-title-hide'>Tweety Bird: The X-Scape</h2>
                        <p className='project-description project-description-hide'>A Twitter vs Elon Musk's X rivalry themed clone of the popular game Flappy Bird—developed using HTML, CSS and JavaScript.</p>
                        <div className="project-buttons">
                            <a href="https://github.com/artomatiq" class="project-button project-button-hide" rel="noreferrer" target="_blank">CODE   <i class="uil uil-github-alt"></i></a>
                            <a href="https://github.com/artomatiq" class="project-button project-button-hide" rel="noreferrer" target="_blank">DEMO   <i class="uil uil-eye"></i></a>
                        </div>
                    </div>
                </div>

                <div className='project-container'>
                    <div className="project-image">
                        <img className='project project-hide' src={image2} alt='project snapshot' draggable="false" />
                    </div>
                    <div className="project-info">
                        <h2 className='project-title project-title-hide'>Tweety Bird: The X-Scape</h2>
                        <p className='project-description project-description-hide'>A Twitter vs Elon Musk's X rivalry themed clone of the popular game Flappy Bird—developed using HTML, CSS and JavaScript.</p>
                        <div className="project-buttons">
                            <a href="https://github.com/artomatiq" class="project-button project-button-hide" rel="noreferrer" target="_blank">CODE   <i class="uil uil-github-alt"></i></a>
                            <a href="https://github.com/artomatiq" class="project-button project-button-hide" rel="noreferrer" target="_blank">DEMO   <i class="uil uil-eye"></i></a>
                        </div>
                    </div>
                </div>

                <div className='project-container'>
                    <div className="project-image">
                        <img className='project project-hide' src={image2} alt='project snapshot' draggable="false" />
                    </div>
                    <div className="project-info">
                        <h2 className='project-title project-title-hide'>Tweety Bird: The X-Scape</h2>
                        <p className='project-description project-description-hide'>A Twitter vs Elon Musk's X rivalry themed clone of the popular game Flappy Bird—developed using HTML, CSS and JavaScript.</p>
                        <div className="project-buttons">
                            <a href="https://github.com/artomatiq" class="project-button project-button-hide" rel="noreferrer" target="_blank">CODE   <i class="uil uil-github-alt"></i></a>
                            <a href="https://github.com/artomatiq" class="project-button project-button-hide" rel="noreferrer" target="_blank">DEMO   <i class="uil uil-eye"></i></a>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}
export default Portfolio;