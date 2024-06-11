import React from "react";

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award about__icon"></i>

                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">Unique Skillset</span>
            </div>

            <div className="about__box">
                <i className="bx bx-briefcase about__icon"></i>

                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">Exciting Projects</span>
            </div>

            <div className="about__box">
                <i className="bx bx-support about__icon"></i>

                <h3 className="about__title">Contributed</h3>
                <span className="about__subtitle">Open Source</span>
            </div>
        </div>
    );
}
export default Info;