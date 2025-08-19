import React from "react";

const AI = () => {
    return (
        <div className="skills__content skills__ai">
            <h3 className="skills__title">AI</h3>

            <div className="skills__box ai">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div className="skills__pair">
                            <h3 className="skills__name">Artificial Intelligence</h3>
                            {/* <span className="skills__level">proficient</span> */}
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div className="skills__pair">
                            <h3 className="skills__name">Machine Learning</h3>
                            {/* <span className="skills__level">proficient</span> */}
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div className="skills__pair">
                            <h3 className="skills__name">Generative AI</h3>
                            {/* <span className="skills__level">proficient</span> */}
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div className="skills__pair">
                            <h3 className="skills__name">Foundation Models</h3>
                            {/* <span className="skills__level">proficient</span> */}
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div className="skills__pair">
                            <h3 className="skills__name">Model Evaluation</h3>
                            {/* <span className="skills__level">intermediate</span> */}
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Responsible AI Principles</h3>
                            {/* <span className="skills__level">proficient</span> */}
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Amazon Bedrock & SageMaker</h3>
                            {/* <span className="skills__level">proficient</span> */}
                        </div>
                    </div>
                </div>
            </div>

            <a className="aws-badge" href="https://www.credly.com/badges/206a5bc2-a25e-46f0-9a91-84d8be5c07f8/public_url" target="_blank" rel="noopener">
                    <img src="https://images.credly.com/size/680x680/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png" alt="AWS Certification Badge" width="150" />
            </a>
        </div>
    );
}
export default AI;