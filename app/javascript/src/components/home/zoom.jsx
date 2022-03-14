import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import zoomBig from '@images/zoom-big'
import zoomBottom1 from '@images/zoom-bottom_1'
import zoomBottom2 from '@images/zoom-bottom_2'

const Zoom = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const q = gsap.utils.selector(ref);

    useEffect(() => {
        const container = ref.current;

        const tlPin = gsap.timeline({
            scrollTrigger: ({
                trigger: container,
                start: 'top top',
                end: '75%',
                scrub: true,
                pin: true,
                markers: true,
                id: 'pin'
            })
        })

        tlPin.fromTo(q('.mask'), { opacity: 1 }, { opacity: 0, duration: 2 });
        tlPin.to(q('.text-container'), { opacity: 0, duration: 2 }, '<');
        tlPin.to(q('.background'), { scale: 0.5, duration: 2 }, '<75%');
        tlPin.to(q('.bottom'), { y: '-150', duration: 1 }, '<75%')


    })

    return (
        <StyledZoom>
            <div className="zoom-container" ref={ref}>
                <div className="top">
                    <div className="mask"></div>
                    <img src={zoomBig} alt="" className="background" />
                    <div className="text-container">
                        <h4 className="sub-heading">SPACE ZOOM</h4>
                        <h3 className="title">100x zoom. 100% epic</h3>
                    </div>
                </div>

                <div className="bottom">
                    <img className='img-bottom-one' src={zoomBottom1} alt="" />
                    <img src={zoomBottom2} alt="" />
                    <p className="description">
                        The Dual Tele Zoom system delivers powerful optical zoom, switching from 3x to 10x the further you zoom in. After that, the revolutionary double folded lens and AI-enhanced Super Resolution keep going, until you're 100x closer to the action without taking a step.
                    </p>
                </div>
            </div>
        </StyledZoom>
    );
};

const StyledZoom = styled.div`
    min-height: 100vh;

    .top {
        height: 100vh;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .mask {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: 1;
        }

        .text-container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            text-align: left;
            z-index: 2;
        }
    }

    .bottom {
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 0 25%;
        gap: 3rem;
    }

`

export default Zoom;