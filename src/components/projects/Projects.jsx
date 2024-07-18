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
                console.log('we here')
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









        // window.onwheel = e => {
        //     if (e.deltaY !== 0) return;

        //     const scrollDelta = e.deltaX;
        //     const maxDelta = window.innerWidth / 0.3;
        //     const percentage = (scrollDelta / maxDelta) * 100;
        //     let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

        //     if (window.innerWidth > 768) {
        //         nextPercentage = Math.max(nextPercentage, 25)
        //         nextPercentage = Math.min(nextPercentage, 100)
        //     }
        //     if (window.innerWidth < 768 && window.innerWidth > 425) {
        //         nextPercentage = Math.max(nextPercentage, 32.5)
        //         nextPercentage = Math.min(nextPercentage, 100)
        //     }
        //     if (window.innerWidth < 425) {
        //         nextPercentage = Math.max(nextPercentage, 28)
        //         nextPercentage = Math.min(nextPercentage, 100)
        //     }

        //     track.dataset.percentage = nextPercentage;
        //     track.dataset.prevPercentage = nextPercentage;

        //     track.animate({
        //         transform: `translateX(-${nextPercentage}%)`
        //     }, { duration: 1200, fill: "forwards" });

        //     for (const project of track.getElementsByClassName('project')) {
        //         project.animate({
        //             objectPosition: `${100 - nextPercentage}% center`
        //         }, { duration: 1200, fill: 'forwards' });
        //     }

        //     window.onscroll = null
        // };









        track.ontouchstart = e => {
            track.dataset.mouseDownAt = e.touches[0].clientX;
        };

        track.ontouchmove = e => {
            if (track.dataset.mouseDownAt === "0") return;

            const touchDelta = parseFloat(track.dataset.mouseDownAt) - e.touches[0].clientX;
            const maxDelta = window.innerWidth / 0.25;
            const percentage = (touchDelta / maxDelta) * 100;

            let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

            if (window.innerWidth > 768) {
                nextPercentage = Math.max(nextPercentage, 25)
                nextPercentage = Math.min(nextPercentage, 100)
            }
            if (window.innerWidth < 768 && window.innerWidth > 425) {
                console.log('we here')
                nextPercentage = Math.max(nextPercentage, 32.5)
                nextPercentage = Math.min(nextPercentage, 100)
            }
            if (window.innerWidth < 425) {
                nextPercentage = Math.max(nextPercentage, 28)
                nextPercentage = Math.min(nextPercentage, 100)
            }

            track.dataset.percentage = nextPercentage;

            track.animate({
                transform: `translateX(-${nextPercentage}%)`
            }, { duration: 1200, fill: "forwards" });

            for (const project of track.getElementsByClassName('project')) {
                project.animate({
                    objectPosition: `${100 - nextPercentage}% center`
                }, { duration: 1200, fill: 'forwards' });
            }
        };

        track.ontouchend = () => {
            track.dataset.mouseDownAt = '0';
            track.dataset.prevPercentage = track.dataset.percentage;
        };








        let firstScrollHandled = false;

        window.onscroll = () => {
            const scrollTop = document.documentElement.scrollTop;

            //do nothing if not scrolling from top
            if (firstScrollHandled) return;

            // Reset the firstScrollHandled flag when scrolled to the top
            if (scrollTop === 0) {
                firstScrollHandled = false;
            }


            // Check if user has scrolled down
            if (scrollTop > 0) {
                firstScrollHandled = true;

                //enable scrolling after 5 seconds
                setTimeout(() => {
                    console.log('enabling scrolling');
                    document.body.style.overflow = 'hidden';
                }, 5000);

                // Scroll to the portfolio section
                const portfolioElement = document.getElementById('portfolio');
                if (portfolioElement) {
                    console.log('scrolling to portfolio');

                    // Calculate the offset top position of the portfolio element
                    const portfolioOffsetTop = portfolioElement.offsetTop;
                    console.log(`Portfolio Offset Top: ${portfolioOffsetTop}`);

                    // Scroll to the calculated position
                    window.scrollTo({
                        top: portfolioOffsetTop,
                        behavior: 'smooth'
                    });
                }

                //disable scrolling
                document.body.style.overflow = 'hidden';

                // Additional logic to animate track (if needed)
                const track = document.getElementById('image-track');
                if (track) {
                    let nextPercentage = 50; // Example percentage for animation

                    track.dataset.percentage = nextPercentage;
                    track.dataset.prevPercentage = nextPercentage;

                    track.style.transform = `translateX(-${nextPercentage}%)`;

                    for (const project of track.getElementsByClassName('project')) {
                        project.style.objectPosition = `${100 - nextPercentage}% center`;
                    }
                }

            }

        };




        // window.onscroll = () => {

        //     if (scrolledUp) return;

        //     const scrollTop = document.documentElement.scrollTop;

        //     if (scrollTop > 1700) {
        //         return
        //     }

        //     if (scrollTop <= lastScrollTop) {
        //         console.log('scrolled up');
        //         scrolledUp = true;
        //         lastScrollTop = scrollTop;
        //         return;
        //     }

        //     const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        //     const scrollPercentage = (scrollTop / documentHeight) * 100;

        //     track.dataset.scrollPercentage = scrollPercentage;
        //     let nextPercentage = scrollPercentage;

        //     track.dataset.percentage = nextPercentage;
        //     track.dataset.prevPercentage = nextPercentage;

        //     track.style.transform = `translateX(-${nextPercentage}%)`;

        //     for (const project of track.getElementsByClassName('project')) {
        //         project.style.objectPosition = `${100 - nextPercentage}% center`;
        //     }

        //     lastScrollTop = scrollTop; // Update last scroll position
        // };

        return () => {
            window.onmousedown = null;
            window.onmousemove = null;
            window.onmouseup = null;
            window.onwheel = null;
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