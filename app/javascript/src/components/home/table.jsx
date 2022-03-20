import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import backgroundImg from '@images/second-background.jpg'
import { gsap } from "gsap";
import { motion } from 'framer-motion/dist/framer-motion';
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Table = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const q = gsap.utils.selector(ref);


    useEffect(() => {
        const container = ref.current;

        const tlHighlight = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                scrub: true,
                start: "-10%",
                end: "60%",
            },
        });

        const tlHighlightRemove = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                scrub: true,
                start: "10%",
                end: "80%",
                // markers: true,
            },
        });

        const tlMask = gsap.timeline({
            scrollTrigger: ({
                trigger: container,
                scrub: true,
                start: "0%",
                end: "100%",
            })
        })

        gsap.to(q('.background img'), {
            scrollTrigger: ({
                trigger: q('.background'),
                scrub: true,
                start: "0%",
                end: "100%",
                // markers: true,
                pin: true,
                // pinSpacing: false,

            }),
            scale: 1,

        })

        tlHighlight.fromTo(q('.text'), { opacity: 0.5 }, { opacity: 1, stagger: 1.5 });
        tlHighlightRemove.to(q('.text'), { opacity: 0.5, stagger: 1 });
        tlMask.to(q('.mask'), { opacity: 0.2, });

        // tlPin.to(container, { opacity: 0.5 })

    }, [])


    return (
        <StyledSecond ref={ref}>
            <div className="background">
                <img src={backgroundImg} alt="" />
                <div className="mask"></div>

            </div>
            <div className="text-container">
                <p className='text'>Welcome to the epic standard</p>
                <p className='text'>Our fastest chip ever</p>
                <p className='text'>Nightography camera</p>
                <p className='text'>Way beyond all-day battery</p>
                <p className='text'>Built-in S Pen</p>

            </div>
        </StyledSecond>
    );
};

const StyledSecond = styled.div`
    position: relative;
    height: 100vh;


    .background {
        position: absolute;
        top: 0;
        left: 0;
        /* background-image: url(${backgroundImg});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center; */
        width: 100%;
        height: 100%;
        overflow: hidden;


        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: scale(1.2);

        }

    }

    .mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
    }

    .text-container {
        padding: 15% 20%;
        /* position:absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%; */

        .text {
            border-bottom: 2px solid white;
            color: white;
            font-size: 2rem;
            font-weight: bold;
            padding: 1.5rem 0;
            filter: brightness(1);
            opacity: 0.5;
        }
    }

`

export default Table;