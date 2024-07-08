import React from "react";
import './home.css';
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
    return (
        <section className="home section" id="home">
            <Social />
            
            <div className="home__container">
                

                {/* <div className="home__content grid"> */}
                    <div className="home__img"></div>
                    <Data />
                {/* </div> */}
            </div>

            <ScrollDown/>
        </section>
    );
}
export default Home;