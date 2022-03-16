import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";
import { motion } from 'framer-motion/dist/framer-motion';
import phone from "@images/big-phone.jpeg";
import landingLogo from '@images/landing-logo.svg'


const Intro = () => {
    const ref = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ default: { duration: 0.75, ease: "power3.easeOut" } });

        // const path = logo.current.querySelector('path');
        // const pathLength = path.getTotalLength();
        // console.log(pathLength)
        // gsap.fromTo(path, { strokeDashoffset: pathLength, strokeDasharray: pathLength }, { strokeDashoffset: 0, duration: 2, });
        const q = gsap.utils.selector(ref)
        // tl.set('nav', { opacity: 0, })
        tl.set(q('.letter'), { display: 'inline-block', color: 'white' })
        tl.fromTo(q('.letter'), { y: "100%" }, { y: 0, delay: 0.5, stagger: 0.1, ease: "back.out(3)", color: 'black' }, '>');
        tl.fromTo(q('.btn-default'), { opacity: 0 }, { opacity: 1 }, '<50%');
        tl.to(q('img'), { opacity: 1, duration: 3 }, '<50%')


    })

    return (
        <StyledIntro ref={ref}>
            <div className="intro-text">
                <h2 className="title">
                    {'Galaxy'.split('').map((letter, i) => (
                        <span span className='letter' key={i} >{letter}</span>
                    ))}
                    <span>&nbsp;</span>
                    {'S22'.split('').map((letter, i) => (
                        <span span className='letter' key={i} >{letter}</span>
                    ))}
                    <span>&nbsp;</span>
                    {'Ultra'.split('').map((letter, i) => (
                        <span span className='letter' key={i} >{letter}</span>
                    ))}
                </h2>
                <button className='btn btn-default'>BUY NOW</button>
            </div>
            <div className="intro-img">
                <img src={phone} alt="" />
            </div>

        </StyledIntro>
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
            opacity: 0;

        }
    }

    .btn-default {
        opacity: 0;
    }

   
`

export default Intro;