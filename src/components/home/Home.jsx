import React, {useEffect} from "react";
import './home.css';
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {

    useEffect(() => {
        const profilePic = document.querySelector(".home__img");

        setTimeout(() => {
            profilePic.classList.add("show");
        }, 6500);
    }, []);

    return (
        <section className="home section" id="home">
            <Social />

            <div className="home__container">
                <div className="home__img hide"></div>
                <Data />
            </div>

            <ScrollDown />
        </section>
    );
}
export default Home;