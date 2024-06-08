import React from "react";

const Social = () => {
    return (
        <div className="home__social">
            <a 
            href="https://github.com/artomatiq" 
            className="home__social-icon" 
            rel="noreferrer"
            target="_blank">
                <i className="uil uil-github-alt"></i>
            </a>

            <a 
            href="https://www.linkedin.com/in/artomatiq/" 
            className="home__social-icon" 
            rel="noreferrer"
            target="_blank">
                <i className="uil uil-linkedin-alt"></i>
            </a>
        </div>
    );

    //<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="linkedin"><g><path d="M24 3H8a5 5 0 0 0-5 5v16a5 5 0 0 0 5 5h16a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Zm3 21a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3Z"></path><path d="M11 14a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm8-1a4 4 0 0 0-4 4v4a1 1 0 0 0 2 0v-4a2 2 0 0 1 4 0v4a1 1 0 0 0 2 0v-4a4 4 0 0 0-4-4z"></path><circle cx="11" cy="11" r="1"></circle></g></svg>
}
export default Social
