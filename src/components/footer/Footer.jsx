import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__link">Home</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Portfolio</a>
                    </li>

                    <li>
                        <a href="#contact" className="footer__link">Contact Me</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a 
                    href="https://github.com/artomatiq" 
                    className="footer__social-icon" 
                    rel="noreferrer"
                    target="_blank"
                    >
                        <i className="uil uil-github-alt"></i>
                    </a>

                    <a 
                    href="https://www.linkedin.com/in/artomatiq/" 
                    className="footer__social-icon" 
                    rel="noreferrer"
                    target="_blank"
                    >
                        <i className="uil uil-linkedin-alt"></i>
                    </a>
                </div>

                <h1 className="footer__title">artomatiq</h1>
            </div>

            <div className="footer__copy">
                    &#169; Artomatiq. All right reserved.
            </div>
        </footer>
    );
}
export default Footer;