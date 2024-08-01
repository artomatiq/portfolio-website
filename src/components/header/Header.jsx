import React, { useEffect, useState } from 'react';
import './header.css';

const Header = () => {

    const [Toggle, showMenu] = useState(false);

    const scrollToTop = (e) => {
        if (e) {
            e.preventDefault();
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        scrollToTop();

        const hiddenHeaderElements = document.querySelectorAll('.header-hidden');

        hiddenHeaderElements.forEach(element => {
            console.log('hello', element);
            setTimeout(() => {
                element.classList.add('header-show');
            }, 5500);
        })
    }, []);

    return (
        <header className="header">
            <nav className="nav">
                <a href="index.html" className="nav__logo">artomatiq</a>

                <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
                    <ul className="nav__list grid">
                        <li className="nav__item header-hidden">
                            <a href="#home" className="nav__link active-link" onClick={scrollToTop}>
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>

                        <li className="nav__item header-hidden">
                            <a href="#portfolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i>Projects
                            </a>
                        </li>

                        <li className="nav__item header-hidden">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>

                        <li className="nav__item header-hidden">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>

                        <li className="nav__item header-hidden">
                            <a href="#qualification" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i>My Journey
                            </a>
                        </li>

                        <li className="nav__item header-hidden">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i>Contact
                            </a>
                        </li>
                    </ul>

                    <i className='uil uil-times nav__close' onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className='uil uil-apps'></i>
                </div>
            </nav>
        </header>
    );
}

export default Header;