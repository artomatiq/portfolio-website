import React, { useEffect } from "react";
import { preLoaderAnim } from "./animation";
import './preloader.css'

const PreLoader = () => {

    document.body.style.overflow = 'hidden'

    setTimeout(() => {
        document.body.style.overflow = 'auto'
    }, 5500);

    useEffect( () => {
        preLoaderAnim()
    }, [])

    return (
        <div className="preloader">
            <div className="texts-container">
                <span>Art</span>
                <span>o</span>
                <span>matiq</span>
            </div>
        </div>
    )
}

export default PreLoader