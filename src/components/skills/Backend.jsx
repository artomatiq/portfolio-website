import React from "react";

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div className="skills__pair">
                            <h3 className="skills__name">Node</h3>
                            {/* <span className="skills__level">proficient</span> */}
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div className="skills__pair">
                            <h3 className="skills__name">Express</h3>
                            {/* <span className="skills__level">proficient</span> */}
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div className="skills__pair">
                            <h3 className="skills__name">SQL</h3>
                            {/* <span className="skills__level">intermediate</span> */}
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">RESTful APIs</h3>
                            {/* <span className="skills__level">proficient</span> */}
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">JWT</h3>
                            {/* <span className="skills__level">proficient</span> */}
                        </div>
                    </div>

                    {/* <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Git</h3>
                            <span className="skills__level">proficient</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );

    
}
export default Backend;