import React from 'react';
import './portfolio.css';
import ProjectOne from './ProjectOne';
import ProjectTwo from './ProjectTwo';
import ProjectThree from './ProjectThree';

const Portfolio = () => {
    return (
        <section className="portfolio section" id='portfolio'>
            <h2 className="section__title" id='portfolio'>Portfolio</h2>
            <span className="section__subtitle">Things I've Built</span>

            <div className="portfolio__container container grid">
                <ProjectOne/>
                <ProjectTwo/>
                <ProjectThree/>
            </div>

        </section>
    );
}
export default Portfolio;