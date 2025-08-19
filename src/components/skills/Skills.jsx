import React from 'react';
import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';
import Cloud from './Cloud';
import AI from './AI';

const Skills = () => {
    return (
        <section className="skills section" id='skills'>
            <h2 className="section__title hide" ><span className='hide'>Skills</span></h2>
            <span className="section__subtitle">{/*My Technical Level*/}</span>

            <div className="skills__container container grid subsection hide">
                <div className="full-stack">
                    <Frontend />
                    <Backend />
                </div>
                <Cloud />
                <AI/>
            </div>

        </section>
    );
}
export default Skills;