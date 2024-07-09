import React, { useEffect } from 'react';
import './projects.css';

import image1 from '../../assets/img1.png'
import image2 from '../../assets/img2.png'
import image3 from '../../assets/img3.png'
import image4 from '../../assets/img4.png'

import ProjectOne from './ProjectOne';
import ProjectTwo from './ProjectTwo';
import ProjectThree from './ProjectThree';

const Portfolio = () => {

    useEffect ( () => {

        const track = document.getElementById('image-track')

        window.onmousedown = e => {
            track.dataset.mouseDownAt = e.clientX;
        }
    
        window.onmouseup = () => {
            //stop the slider when the mouse is up
            track.dataset.mouseDownAt = '0';

            //start slider where left off when mouse is clicked again
            track.dataset.prevPercentage = track.dataset.percentage;

            console.log(track.dataset.mouseDownAt);
        }
    
        window.onmousemove = e => {
            //if mouse is not clicked, do not move slider
            if(track.dataset.mouseDownAt === "0") return;
    
            //convert mouse down distance to percentage by which slider should move
            const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
            const maxDelta = window.innerWidth / 2;
            const percentage = (mouseDelta / maxDelta) * -100;

            const nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
    
            track.dataset.percentage = nextPercentage;
    
            track.style.transform = `translate(${nextPercentage}%, 10%)`;
        }
    }, [])


    

    return (
        <section className="portfolio section">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Things I've Built</span>

            <div id='projects'>
                <div id='image-track' data-mouse-down-at='0' data-prev-percentage='0'>
                    <img className='project' src={image1} alt='project snapshot' draggable="false" />
                    <img className='project' src={image2} alt='project snapshot' draggable="false" />
                    <img className='project' src={image3} alt='project snapshot' draggable="false" />
                    <img className='project' src={image4} alt='project snapshot' draggable="false" />
                </div>
            </div>

            
        </section>
    );
}
export default Portfolio;