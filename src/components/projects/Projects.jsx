import React, { useEffect } from 'react';
import './projects.css';

import image1 from '../../assets/ccs-expedited.png'
import image2 from '../../assets/img2.png'
import image3 from '../../assets/img3.png'


import tweetyBird from '../../assets/trimmed.mp4'

const Portfolio = () => {

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const project = entry.target.querySelector('.project');
                const title = entry.target.querySelector('.project-title');
                const description = entry.target.querySelector('.project-description');
                const buttons = entry.target.querySelector('.project-buttons');
                if (entry.isIntersecting) {
                    project.classList.add('show')
                    title.classList.add('show')
                    description.classList.add('show')
                    buttons.classList.add('show')
                } else {
                    project.classList.remove('show')
                    title.classList.remove('show')
                    description.classList.remove('show')
                    buttons.classList.remove('show')
                }
            })
        }, { threshold: 0.75 })

        const projectContainers = document.querySelectorAll('.project-container')

        projectContainers.forEach(container => {
            observer.observe(container)
        });

        return () => {
            projectContainers.forEach(container => {
                observer.unobserve(container);
            });
            observer.disconnect();
        };

    }, []);


    return (
        <section className="portfolio section" id='portfolio'>
            <h2 className="section__title hide"><span className='hide'>My Projects</span></h2>

            <div className='project-container'>
                <div className="project-image">
                    <img className='project hide' src={image1} alt='project snapshot' draggable="false" />
                </div>
                <div className="project-info">
                    <h2 className='project-title hide'>
                        Courier Admin Dash
                        <h2>in progress...</h2>
                    </h2>
                    <p className='project-description ccs-expedited hide'>An admin panel for Carolina's Courier Services. The frontend is built with HTML, CSS, JavaScript and React. On the backend, we have Node, Express and MySQL. The driver version of the app implements clock-in functionality, generating time logs in a MySQL database, which the admin then uses to track real-time activity and generate reports. The admin can also assign hourly rates to drivers and easily manage accounts payable.</p>
                    <div className="project-buttons hide">
                        <a href="https://github.com/artomatiq/ccs-expedited" className="project-button hide" rel="noreferrer" target="_blank">CODE   <i className="uil uil-github-alt"></i></a>
                        <a href="https://ccs-expedited.vercel.app/" className="project-button hide" rel="noreferrer" target="_blank">DEMO   <i className="uil uil-eye"></i></a>
                    </div>
                </div>
            </div>

            <div id='projects'>
                <div className='project-container'>
                    <div className="project-image">
                        <video className='project hide' id='tweetyBird' src={tweetyBird} draggable="false" loop autoPlay muted playsInline />
                    </div>
                    <div className="project-info">
                        <h2 className='project-title hide'>Tweety Bird: The X-Scape</h2>
                        <p className='project-description tweety-bird hide'>A Twitter vs Elon Musk's X rivalry themed clone of the popular game Flappy Bird—developed using HTML, CSS and JavaScript.</p>
                        <div className="project-buttons hide">
                            <a href="https://github.com/artomatiq/tweetie-bird" className="project-button hide" rel="noreferrer" target="_blank">CODE   <i className="uil uil-github-alt"></i></a>
                            <a href="https://tweety-bird.vercel.app/" className="project-button hide" rel="noreferrer" target="_blank">DEMO   <i className="uil uil-eye"></i></a>
                        </div>
                    </div>
                </div>

                <div className='project-container'>
                    <div className="project-image">
                        <img className='project hide' src={image2} alt='project snapshot' draggable="false" />
                    </div>
                    <div className="project-info">
                        <h2 className='project-title hide'>Tweety Bird: The X-Scape</h2>
                        <p className='project-description hide'>A Twitter vs Elon Musk's X rivalry themed clone of the popular game Flappy Bird—developed using HTML, CSS and JavaScript.</p>
                        <div className="project-buttons hide">
                            <a href="https://github.com/artomatiq" className="project-button hide" rel="noreferrer" target="_blank">CODE   <i className="uil uil-github-alt"></i></a>
                            <a href="https://github.com/artomatiq" className="project-button hide" rel="noreferrer" target="_blank">DEMO   <i className="uil uil-eye"></i></a>
                        </div>
                    </div>
                </div>

                <div className='project-container'>
                    <div className="project-image">
                        <img className='project hide' src={image2} alt='project snapshot' draggable="false" />
                    </div>
                    <div className="project-info">
                        <h2 className='project-title hide'>Tweety Bird: The X-Scape</h2>
                        <p className='project-description hide'>A Twitter vs Elon Musk's X rivalry themed clone of the popular game Flappy Bird—developed using HTML, CSS and JavaScript.</p>
                        <div className="project-buttons hide">
                            <a href="https://github.com/artomatiq" className="project-button hide" rel="noreferrer" target="_blank">CODE   <i className="uil uil-github-alt"></i></a>
                            <a href="https://github.com/artomatiq" className="project-button hide" rel="noreferrer" target="_blank">DEMO   <i className="uil uil-eye"></i></a>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}
export default Portfolio;