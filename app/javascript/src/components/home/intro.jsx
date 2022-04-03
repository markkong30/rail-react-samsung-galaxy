import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";
import { motion } from 'framer-motion/dist/framer-motion';
import phone from "@images/big-phone.jpeg";
import landingLogo from '@images/landing-logo.svg'
import { Link } from 'react-router-dom';


const Intro = () => {
    const ref = useRef(null);
    const q = gsap.utils.selector(ref)

    useEffect(() => {
        const tl = gsap.timeline({ default: { duration: 0.75, ease: "power3.out" } });

        tl.set(q('.letter'), { display: 'inline-block', color: 'white' })
        tl.fromTo(q('.letter'), { y: "100%" }, { y: 0, delay: 0.5, stagger: 0.1, ease: "back.out(3)", color: 'black' }, '>');
        tl.fromTo(q('.btn-default'), { opacity: 0 }, { opacity: 1 }, '<50%');
        tl.to(q('#wheel-left'), { y: -5, yoyo: true, repeat: 1, duration: 0.25 });
        tl.to(q('#wheel-right'), { y: -5, yoyo: true, repeat: 1, duration: 0.25 }, '<75%');
        tl.to(q('#body'), { y: -10, yoyo: true, repeat: 1 }, '<');
        tl.fromTo(q('img'), { y: '100%', opacity: 0 }, { y: 0, duration: 1, opacity: 1 }, '<50%')

    })

    const jumpAnimation = () => {
        const tl = gsap.timeline({ default: { duration: 0.75, ease: "power3.out", delay: 0.5 } });
        tl.to(q('#wheel-left'), { y: -5, yoyo: true, repeat: 1, duration: 0.25 });
        tl.to(q('#wheel-right'), { y: -5, yoyo: true, repeat: 1, duration: 0.25 }, '<75%');
        tl.to(q('#body'), { y: -10, yoyo: true, repeat: 1 }, '<');
    }

    return (
        <StyledIntro ref={ref}>
            <div className="intro-text">
                <h2 className="title">
                    {'Galaxy'.split('').map((letter, i) => (
                        <span className='letter' key={i} >{letter}</span>
                    ))}
                    <span>&nbsp;</span>
                    {'S22'.split('').map((letter, i) => (
                        <span className='letter' key={i} >{letter}</span>
                    ))}
                    <span>&nbsp;</span>
                    {'Ultra'.split('').map((letter, i) => (
                        <span className='letter' key={i} >{letter}</span>
                    ))}
                </h2>
                <Link to="/buy">
                    <button className='btn btn-default' onMouseEnter={jumpAnimation}>BUY NOW
                        <span>
                            <svg width="40" height="40" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Group">
                                    <g id="Group_2">
                                        <g id="wheels">
                                            <path id="wheel-right" d="M20.5249 31.8483C17.6453 31.8483 15.31 34.1742 15.31 37.0343C15.31 39.8944 17.654 42.2203 20.5249 42.2203C23.4045 42.2203 25.7398 39.8944 25.7398 37.0343C25.7398 34.1742 23.4045 31.8483 20.5249 31.8483ZM20.5249 38.6969C19.6206 38.6969 18.8919 37.9475 18.8919 37.0343C18.8919 36.1125 19.6206 35.3717 20.5249 35.3717C21.4204 35.3717 22.1578 36.1212 22.1578 37.0343C22.1578 37.9475 21.4204 38.6969 20.5249 38.6969Z" fill="currentColor" />
                                            <path id="wheel-left" d="M8.10214 31.8483C5.22252 31.8483 2.88722 34.1742 2.88722 37.0343C2.87844 39.8857 5.22252 42.2117 8.10214 42.2117C10.9818 42.2117 13.3171 39.8857 13.3171 37.0257C13.3171 34.1742 10.973 31.8483 8.10214 31.8483ZM8.10214 38.6969C7.19787 38.6969 6.46919 37.9475 6.46919 37.0343C6.46919 36.1125 7.19787 35.3717 8.10214 35.3717C8.99763 35.3717 9.7351 36.1212 9.7351 37.0343C9.72632 37.9475 8.99763 38.6969 8.10214 38.6969Z" fill="currentColor" />
                                        </g>
                                        <path id="body" d="M41.209 0H33.0179C32.2453 0 31.5605 0.491034 31.3147 1.21466L24.8531 20.5373H8.26017L4.29191 9.33826H22.9568C23.9488 9.33826 24.7478 8.55433 24.7478 7.58088C24.7478 6.60742 23.9488 5.82349 22.9568 5.82349H1.77224C0.297313 5.82349 -0.211888 6.98647 0.0778298 8.15806L5.00304 22.0707L1.51764 27.5238C0.578252 28.8332 1.4913 30.2201 3.03647 30.2201H25.933C26.925 30.2201 27.724 29.4362 27.724 28.4628C27.724 27.4893 26.925 26.7054 25.933 26.7054H6.28482L7.97923 24.0521H26.1525C26.925 24.0521 27.6098 23.561 27.8556 22.8374L34.3172 3.51477H41.209C42.2011 3.51477 43 2.73084 43 1.75739C43 0.783932 42.2011 0 41.209 0V0Z" fill="currentColor" />
                                    </g>
                                </g>
                            </svg>

                        </span>
                    </button>
                </Link>

            </div>
            <div className="intro-img">
                <img src={phone} alt="" />
            </div>

        </StyledIntro >
    );
};

const StyledIntro = styled(motion.div)`
    min-height: 100vh;
    width: 100%;
    background: #F4F4F4;
    
    padding: 8% 18% 0 18%;

    .title {
        font-size: 3.5rem;
        font-weight: bold;
        /* padding-bottom: 2rem; */
        overflow: hidden;
    }
    
    .intro-img {

        img {
            display: block;
            height: 80vh;
            width: 100%;
            object-fit: cover;
            object-position: top;
            /* opacity: 0; */

        }
    }

    .btn-default {
        opacity: 0;
        display: flex;
        align-items: center;
        font-size: 1rem;
        margin-top: 3rem;

        span {
            margin-left: 1rem;
        }

        svg {
            overflow: visible;

        }
    }

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
        padding: 0;

        .intro-text {
            padding: 8% 10% 0 10%;

        }

        .btn-default {
            transform: scale(0.7);
            padding: 8% 10% 0 10%;

        }

        .intro-img {
            margin-top: 2rem;

            img {
                height: 70vh;
                width: 100%;
                object-fit: cover;
                object-position: top;

            }
        }
    }
   
`

export default Intro;