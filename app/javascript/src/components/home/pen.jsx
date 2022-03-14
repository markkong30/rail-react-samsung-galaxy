import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pen from '@images/pen.jpg'


const Pen = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const q = gsap.utils.selector(ref);

    useEffect(() => {
        const container = ref.current;

        gsap.to(q('img'), {
            scrollTrigger: ({
                trigger: container,
                start: 'top center',
                end: '+=500',
                scrub: true,
                markers: true,
                id: 'pen'
            }),
            y: 0,
            ease: 'power2.out',
        })

    })


    return (
        <StyledForth ref={ref}>
            <div className="pen-img">
                <img src={pen} alt="" />
            </div>
            <div className="text-container">
                <h4 className='sub-heading'>S PEN</h4>
                <h1 className='title'>The first <br /><span>Galaxy S with </span><br /><span>built-in S Pen</span></h1>
                <p className="description">
                    S Pen fits right into S for the first time. Eject it from the bottom of the phone to write, sketch or control your phone. Improved latency in Samsung Notes makes every pen stroke feel as natural as ink on paper — and you can convert those hastily written ideas into legible text.
                </p>

            </div >
        </StyledForth >
    );
};

const StyledForth = styled.div`
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    z-index: 1;
    width: 30%;
    margin-left: 50%;
    margin-right: 20%;
    margin-top: 40vh;

    .text-container {
        position: relative;
        margin-left: 3rem;
    }

    .sub-heading {
        color: rgba(0, 0, 0, 0.8);
    }

    img {
        transform: translateY(300px);
    }

    
`

export default Pen;