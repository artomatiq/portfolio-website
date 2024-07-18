import React, { useEffect } from 'react';
import './projects.css';

import image1 from '../../assets/img1.png'
import image2 from '../../assets/img2.png'
import image3 from '../../assets/img3.png'
import image4 from '../../assets/img4.png'

import tweetyBird from '../../assets/trimmed.mp4'

const Portfolio = () => {

    useEffect(() => {

        const track = document.getElementById('image-track')









        track.onmousedown = e => {
            track.dataset.mouseDownAt = e.clientX;
        }

        track.onmousemove = e => {
            //if mouse is not clicked, do not move slider
            if (track.dataset.mouseDownAt === "0") return;

            //convert mouse down distance to percentage by which slider should move
            const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
            const maxDelta = window.innerWidth / 1.5;
            const percentage = (mouseDelta / maxDelta) * (100);

            let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

            if (window.innerWidth > 768) {
                nextPercentage = Math.max(nextPercentage, 25)
                nextPercentage = Math.min(nextPercentage, 100)
            }
            if (window.innerWidth < 768 && window.innerWidth > 425) {
                nextPercentage = Math.max(nextPercentage, 32.5)
                nextPercentage = Math.min(nextPercentage, 100)
            }
            if (window.innerWidth < 425) {
                nextPercentage = Math.max(nextPercentage, 27)
                nextPercentage = Math.min(nextPercentage, 100)
            }

            track.dataset.percentage = nextPercentage;

            track.animate({
                transform: `translate(-${nextPercentage}%)`
            }, { duration: 1200, fill: "forwards" })

            window.onscroll = null;

            for (const project of track.getElementsByClassName('project')) {

                project.animate({
                    objectPosition: `${100 - nextPercentage}% center`
                }, { duration: 1200, fill: 'forwards' });
            }
        }

        window.onmouseup = () => {
            //stop the slider when the mouse is up
            track.dataset.mouseDownAt = '0';

            //start slider where left off when mouse is clicked again
            track.dataset.prevPercentage = track.dataset.percentage;
        }






        function scrollToPortfolio() {
            const portfolioElement = document.getElementById('portfolio');
                if (portfolioElement) {
                    // Calculate the offset top position of the portfolio element
                    const portfolioOffsetTop = portfolioElement.offsetTop;

                    // Scroll to the calculated position
                    window.scrollTo({
                        top: portfolioOffsetTop,
                        behavior: 'smooth'
                    });

                    //delay start animation
                    setTimeout(() => {
                        if (track) {
                            const viewportWidth = window.innerWidth;
                            const projectWidth = parseFloat(getComputedStyle(track.querySelector('.project')).width);
                            let slideBy = viewportWidth / 2 + projectWidth / 2;
                            
                            track.style.transform = `translateX(-${slideBy}px)`;
                            
                            for (const project of track.getElementsByClassName('project')) {                                
                                project.animate({
                                    objectPosition: `50% center`
                                }, { duration: 2000, fill: 'forwards', easing: 'ease-in-out' });
                            }
                        }
                    }, 1000);
                }
        }






        let firstScrollHandled = false;

        function disableTouchScroll() {
            window.addEventListener('touchstart', preventDefault, { passive: false });
            window.addEventListener('touchmove', preventDefault, { passive: false });
        }
        function enableTouchScroll() {
            window.removeEventListener('touchstart', preventDefault);
            window.removeEventListener('touchmove', preventDefault);
        }
        function preventDefault(e) {
            e.preventDefault();
        }

        let startY = 0;
        let endY = 0;


        window.ontouchstart = (e) => {
            disableTouchScroll();
            startY = e.touches[0].clientY;
        };
        
        window.ontouchmove = (e) => {
            endY = e.touches[0].clientY;

            if (startY > endY) {
                firstScrollHandled = true;

                //disable scrolling
                disableTouchScroll();

                //enable scrolling after 5 seconds
                setTimeout(() => {
                    enableTouchScroll();
                }, 4000);

                // Scroll to the portfolio section
                scrollToPortfolio();
            }
        };
        





        window.onscroll = () => {

            const scrollTop = document.documentElement.scrollTop;

            //do nothing if not scrolling from top
            if (firstScrollHandled) return;

            // Reset the firstScrollHandled flag when scrolled to the top
            // if (scrollTop === 0) {
            //     firstScrollHandled = false;
            // }

            // Check if user has scrolled down
            if (scrollTop > 0) {
                firstScrollHandled = true;

                //disable scrolling
                document.body.style.overflow = 'hidden';

                //enable scrolling after 5 seconds
                setTimeout(() => {
                    document.body.style.overflow = 'auto';
                }, 4000);

                // Scroll to the portfolio section
                scrollToPortfolio();
            }
        };






        return () => {
            window.onmousedown = null;
            window.onmousemove = null;
            window.onmouseup = null;
            window.onscroll = null;
        };

    }, [])




    return (
        <section className="portfolio section" id='portfolio'>
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Things I've Built</span>

            <div id='projects'>
                <div id='image-track' data-mouse-down-at='0' data-prev-percentage='0'>
                    <video className='project two' id='tweetyBird' src={tweetyBird} draggable="false" loop autoPlay muted playsInline />
                    <img className='project three' src={image3} alt='project snapshot' draggable="false" />
                    <img className='project four' src={image4} alt='project snapshot' draggable="false" />
                    <img className='project five' src={image1} alt='project snapshot' draggable="false" />
                    <img className='project six' src={image2} alt='project snapshot' draggable="false" />
                    {/* <img className='project seven' src={image3} alt='project snapshot' draggable="false" />
                    <img className='project eight' src={image4} alt='project snapshot' draggable="false" />
                    <img className='project nine' src={image1} alt='project snapshot' draggable="false" />
                    <img className='project ten' src={image2} alt='project snapshot' draggable="false" /> */}
                </div>
            </div>


        </section>
    );
}
export default Portfolio;