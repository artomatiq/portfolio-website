import React from "react";

const Cloud = () => {
    return (
        <div className="skills__content skills__cloud">
            <h3 className="skills__title">Cloud (AWS)</h3>

            <div className="skills__box cloud">
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
                </div>
                <a className="aws-badge" href="https://www.credly.com/badges/16c45074-a25c-4d98-a383-26dc5efa28a1" target="_blank" rel="noopener">
                    <img src="https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png" alt="AWS Certification Badge" width="150" />
                </a>
            </div>
        </div>
    );
}
export default Cloud;