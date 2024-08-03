import React, {useEffect} from "react";
import './home.css';
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

import profilePic from '../../assets/profile.jpg'

const Home = () => {

    useEffect(() => {
        const profilePic = document.querySelector(".home__img");

        setTimeout(() => {
            profilePic.classList.add("show");
        }, 5000);
    }, []);

    return (
        <section className="home section" id="home">
            <Social />

            <div className="home__container">
                <div className="home__img hide">
                    <img src={profilePic} alt="profile pic"/>
                </div>
                <Data />
            </div>

            <ScrollDown />
        </section>
    );
}
export default Home;