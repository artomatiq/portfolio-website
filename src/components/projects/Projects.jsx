import React, { useEffect } from 'react';
import './projects.css';

import image1 from '../../assets/img1.png'
import image2 from '../../assets/img2.png'
import image3 from '../../assets/img3.png'
import image4 from '../../assets/img4.png'

import tweetyBird from '../../assets/trimmed.mp4'

const Portfolio = () => {

    useEffect(() => {
        window.scrollTo({top: 0})
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

            const viewportWidth = window.innerWidth;
            const projectWidth = parseFloat(getComputedStyle(track.querySelector('.project')).width);
            const trackWidth = parseFloat(getComputedStyle(track).width);
            const firstSlideBy = viewportWidth / 2 + projectWidth / 2;
            const finalSlideBy = trackWidth - firstSlideBy + viewportWidth - firstSlideBy;

            // nextPercentage = Math.max(nextPercentage, slideBy / trackWidth * 100)
            nextPercentage = Math.max(nextPercentage, 0)
            nextPercentage = Math.min(nextPercentage, finalSlideBy / trackWidth * 100)

            track.dataset.percentage = nextPercentage;

            track.animate({
                transform: `translate(-${nextPercentage}%)`
            }, { duration: 1200, fill: "forwards" })

            window.onscroll = null;

            for (const project of track.getElementsByClassName('project')) {
                let projectNextPercentage = Math.min(nextPercentage* 50 / 100, 50);
                project.animate({
                    objectPosition: `${50 - projectNextPercentage}% center`
                }, { duration: 1200, fill: 'forwards' });
            }
        }

        track.onmouseup = () => {
            //stop the slider when the mouse is up
            track.dataset.mouseDownAt = '0';

            //start slider where left off when mouse is clicked again
            track.dataset.prevPercentage = track.dataset.percentage;
        }



        window.onload = () => {
            //reset track to initial
            track.style.left = `100vw`;
            track.style.transition = 'transform 0s'
            track.style.transform = 'none'
            setTimeout(() => {
                track.style.transition = 'transform 2s ease-in-out'
            }, 0);
            //reset projects to initial
            for (const project of track.getElementsByClassName('project')) {
                project.animate({
                    objectPosition: `100% center`
                }, { duration: 0, fill: 'forwards'});
            }
        }






        function scrollToPortfolio() {
            track.style.transition = 'transform 2s ease-in-out'
            const viewportWidth = window.innerWidth;
            const projectWidth = parseFloat(getComputedStyle(track.querySelector('.project')).width);
            let slideBy = viewportWidth / 2 + projectWidth / 2;
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
                        //slide track to the left
                        track.style.transform = `translateX(-${slideBy}px)`;
                        //slide windows
                        for (const project of track.getElementsByClassName('project')) {
                            project.animate({
                                objectPosition: `50% center`
                            }, { duration: 2000, fill: 'forwards', easing: 'ease-in-out' });
                        }
                    }
                }, 1000);

                setTimeout(() => {
                    //update track position so animation can consinue
                    track.style.left = `${track.getBoundingClientRect().left}px`;
                    track.style.transition = 'transform 0s'
                    track.style.transform = 'none'
                    //update window position so animation can continue
                    for (const project of track.getElementsByClassName('project')) {
                        project.style.objectPosition = `50% center`
                        project.style.transition = 'object-position 0s'
                        project.style.transform = `none`
                    }
                }, 3100);
            }
        }






        let firstScrollHandled = false;

        window.onscroll = () => {
            const scrollTop = document.documentElement.scrollTop;

            // Reset the firstScrollHandled flag when scrolled to the top
            if (scrollTop === 0) {
                console.log('scrolled to the top');
                firstScrollHandled = false;

                //reset track to initial
                track.style.left = `100vw`;
                track.style.transition = 'transform 0s'
                track.style.transform = 'none'
                setTimeout(() => {
                    track.style.transition = 'transform 2s ease-in-out'
                }, 0);
                //reset projects to initial
                for (const project of track.getElementsByClassName('project')) {
                    project.animate({
                        objectPosition: `100% center`
                    }, { duration: 0, fill: 'forwards'});
                }
            }

            if (firstScrollHandled) return;

            // Check if user has scrolled down
            if (scrollTop > 0) {
                firstScrollHandled = true;

                //disable scrolling
                document.body.style.overflow = 'hidden';

                //enable scrolling after 5 seconds
                setTimeout(() => {
                    document.body.style.overflow = 'auto';
                }, 3000);

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