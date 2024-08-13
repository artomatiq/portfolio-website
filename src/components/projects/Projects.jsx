import React, { useEffect } from 'react';
import './projects.css';

import ccsExpeditedImg from '../../assets/ccs-expedited.png'
import activityImg from '../../assets/activity-brainstorm.png'
import hrfImg from '../../assets/hrf-screenshot.png'
import friendslistImg from '../../assets/auth-friendslist.png'


import tweetyBirdVid from '../../assets/trimmed.mp4'
import hrfVid from '../../assets/hrf-vid.mp4'
import friendslistVid from '../../assets/auth-friendslist.mp4'

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

            <div id='projects'>
                <div className='project-container'>
                    <div className="project-image">
                        <video className='project hide' id='tweetyBird' src={tweetyBirdVid} draggable="false" loop autoPlay muted playsInline />
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
                        <img className='project hide' src={ccsExpeditedImg} alt='project snapshot' draggable="false" />
                    </div>
                    <div className="project-info">
                        <h2 className='project-title hide'>
                            Courier Admin Dash
                            <p>still in development...</p>
                        </h2>
                        <p className='project-description ccs-expedited hide'>An admin panel for Carolina's Courier Services. The frontend is built with HTML, CSS, JavaScript and React. On the backend, we have Node, Express and MySQL. The driver version of the app implements clock-in functionality, generating time logs in a MySQL database, which the admin then uses to track real-time activity and generate reports. The admin can also assign hourly rates to drivers and easily manage accounts payable.</p>
                        <div className="project-buttons hide">
                            <a href="https://github.com/artomatiq/ccs-expedited" className="project-button hide" rel="noreferrer" target="_blank">CODE   <i className="uil uil-github-alt"></i></a>
                            <a href="https://ccs-expedited.vercel.app/" className="project-button hide" rel="noreferrer" target="_blank">DEMO   <i className="uil uil-eye"></i></a>
                        </div>
                    </div>
                </div>

                <div className='project-container'>
                    <div className="project-image">
                        <video className='project hide' id='hrf-vid' src={hrfVid} draggable="false" loop autoPlay muted playsInline />
                    </div>
                    <div className="project-info">
                        <h2 className='project-title hide'>Human Rights First</h2>
                        <p className='project-description hrf hide'>Human Rights First is a non-profit organization which provides data visualizations for asylum data in the US.<br />

                            I implemented complete auth from start to finish using the third-party microservice Auto0. I then substituted hardcoded asylum data by integrating the app with 2 API endpoints, the responses from which were combined while maintaining structural similarity before being supplied to the data visualization modules. </p>
                        <div className="project-buttons hide">
                            <a href="https://github.com/artomatiq/asylum-rg-fe-starter" className="project-button hide" rel="noreferrer" target="_blank">CODE   <i className="uil uil-github-alt"></i></a>
                            {/* <a href="https://github.com/artomatiq" className="project-button hide" rel="noreferrer" target="_blank">DEMO   <i className="uil uil-eye"></i></a> */}
                        </div>
                    </div>
                </div>

                <div className='project-container'>
                    <div className="project-image">
                        <video className='project hide' id='tweetyBird' src={friendslistVid} draggable="false" loop autoPlay muted playsInline />
                    </div>
                    <div className="project-info">
                        <h2 className='project-title hide'>Auth Friendslist</h2>
                        <p className='project-description friendslist hide'>Features client authorization using localStorage and CRUD functional operations. After logging in, a user is able to fetch a list of friends from the server and add custom friends using a form. For testing of the routes, HTTPie was used.</p>
                        <div className="project-buttons hide">
                            <a href="https://github.com/artomatiq/web-module-project-client-auth" className="project-button hide" rel="noreferrer" target="_blank">CODE   <i className="uil uil-github-alt"></i></a>
                            {/* <a href="#" className="project-button hide" rel="noreferrer" target="_blank">DEMO   <i className="uil uil-eye"></i></a> */}
                        </div>
                    </div>
                </div>

                <div className='project-container'>
                    <div className="project-image">
                        <img className='project hide' src={activityImg} alt='project snapshot' draggable="false" />
                    </div>
                    <div className="project-info">
                        <h2 className='project-title hide'>Activity API</h2>
                        <p className='project-description activity hide'>A single-page React application made using Redux for generating random activities from an API based on the number of participants, activity type, and price. Middleware are used to create asynchronous action creators and integrate conditional rendering of multiple interdependent components.</p>
                        <div className="project-buttons hide">
                            <a href="https://github.com/artomatiq/web-module-project-async-redux" className="project-button hide" rel="noreferrer" target="_blank">CODE   <i className="uil uil-github-alt"></i></a>
                            {/* <a href="#" className="project-button hide" rel="noreferrer" target="_blank">DEMO   <i className="uil uil-eye"></i></a> */}
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}
export default Portfolio;