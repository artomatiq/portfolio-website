import React from "react";

const Cloud = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Cloud (AWS)</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div className="skills__pair">
                            <h3 className="skills__name">EC2, Lambda, S3, DynamoDB, RDS, VPC, etc.</h3>
                            {/* <span className="skills__level">proficient</span> */}
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div className="skills__pair">
                            <h3 className="skills__name">Security</h3>
                            {/* <span className="skills__level">proficient</span> */}
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div className="skills__pair">
                            <h3 className="skills__name">Reliability</h3>
                            {/* <span className="skills__level">intermediate</span> */}
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">High Availability</h3>
                            {/* <span className="skills__level">proficient</span> */}
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Fault Tolerance</h3>
                            {/* <span className="skills__level">proficient</span> */}
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Cost Optimization</h3>
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
export default Cloud;