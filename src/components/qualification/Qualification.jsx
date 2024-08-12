import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section" id='qualification'>
            <h2 className="section__title hide"><span className='hide'>My Journey</span></h2>
            <span className="section__subtitle">{/*What I Bring*/}</span>

            <div className="qualification__container container subsection hide">
                <div className="qualification__tabs">

                    <div
                        className={
                            toggleState === 1
                                ? 'qualification__button qualification__active button--flex'
                                : 'qualification__button button--flex'
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? 'qualification__button qualification__active button--flex'
                                : 'qualification__button button--flex'
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={
                            toggleState === 1
                                ? 'qualification__content qualification__content-active'
                                : 'qualification__content'
                        }
                    >
                        <div className="qualification__data">
                            <div className='qualification__left'>
                                <h3 className="qualification__title">Self-Taught</h3>
                                <span className="qualification__subtitle">
                                    YouTube & ChatGPT University : D
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Feb '24 - present
                                </div>
                            </div>

                            <div className='qualification__timeline'>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div></div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div className='qualification__timeline'>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div className='qualification__right'>
                                <h3 className="qualification__title">Full Stack Web Development</h3>
                                <span className="qualification__subtitle">
                                    Bloomtech Institute of Technology
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Apr '23 - Feb '24
                                </div>

                            </div>
                        </div>

                        <div className="qualification__data">

                            <div className='qualification__left'>
                                <h3 className="qualification__title">B.S. Neuroscience</h3>
                                <span className="qualification__subtitle">
                                    UCLA
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Sep '19 - Sep '21
                                </div>
                            </div>

                            <div className='qualification__timeline'>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div></div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                        </div>
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? 'qualification__content qualification__content-active'
                                : 'qualification__content'
                        }
                    >
                        <div className="qualification__data">
                            <div className='qualification__left'>
                                <h3 className="qualification__title">Product Designer</h3>
                                <span className="qualification__subtitle">
                                    sub one
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - present
                                </div>
                            </div>

                            <div className='qualification__timeline'>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div className='qualification__timeline'>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div className='qualification__right'>
                                <h3 className="qualification__title">UX Designer</h3>
                                <span className="qualification__subtitle">
                                    Apple Inc - Spain
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - present
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">

                            <div className='qualification__left'>
                                <h3 className="qualification__title">Web Designer</h3>
                                <span className="qualification__subtitle">
                                    Figma - Spain
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - present
                                </div>
                            </div>

                            <div className='qualification__timeline'>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div></div>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    );
}
export default Qualification;

