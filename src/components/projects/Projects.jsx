import React from 'react';
import './projects.css';
import ProjectOne from './ProjectOne';
import ProjectTwo from './ProjectTwo';
import ProjectThree from './ProjectThree';

const Portfolio = () => {
    return (
        <section className="portfolio section" id='projects'>
            <h2 className="section__title">Projects</h2>
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