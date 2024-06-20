import React from "react";
import './contact.css'

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get In Touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                {/* <div className="contact__content"> */}
                    <div className="contact__media">hello</div>
                    <form className="contact__form">
                        <label htmlFor="contact-name">Name</label>
                        <input
                            type="text"
                            className="contact__input"
                            id="contact-name"
                        />

                        <label htmlFor="contact-email">Email</label>
                        <input
                            type="email"
                            className="contact__input"
                            id="contact-email"
                        />

                        <label htmlFor="contact-message">Message</label>
                        <input
                            type="text"
                            className="contact__input"
                            id="contact-message"
                        />

                        <button type="submit" className="button button--flex">Send Message</button>
                    </form>
                {/* </div> */}
            </div>
        </section>
    );
}
export default Contact;