import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import phone from '@images/horizontal-phone.jpeg';
import icon from '@images/vde.jpeg'

const Display = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const q = gsap.utils.selector(ref)

    useEffect(() => {
        const container = ref.current;
        console.log(container)
        ScrollTrigger.matchMedia({
            // desktop
            "(min-width: 800px)": function () {
                gsap.to(q('.image img'), {
                    scrollTrigger: ({
                        trigger: container,
                        start: '0%',
                        end: '30%',
                        scrub: true,
                        // markers: true,
                        id: 'display'
                    }),
                    opacity: 1,
                })
            },

            // mobile
            "(max-width: 900px)": function () {
                gsap.to(q('.image img'), {
                    scrollTrigger: ({
                        trigger: container,
                        start: '-20%',
                        end: '20%',
                        scrub: true,
                        // markers: true,
                        id: 'display'
                    }),
                    opacity: 1,
                })
            },
        });

    })

    return (
        <StyledDisplay ref={ref}>
            <div className="text">
                <h4 className="sub-heading">DISPLAY</h4>
                <h3 className='title'>Our brightest display <br /> for the brightest day</h3>
            </div>
            <div className="image">
                <img src={phone} alt="" />
            </div>
            <div className="sub-text">
                <p className="description">
                    The Dynamic AMOLED 2X display with Vision Booster is glare's worst nightmare, hitting 1750 nits at its peak.3 And the 120Hz adaptive refresh rate keeps the scroll smooth, adjusting to what's on screen for an optimized view.
                </p>
                <p className="sub">
                    <sup>*</sup>Image simulated for illustration purposes.
                </p>
                <div className="icon">
                    <img src={icon} alt="" />
                </div>
            </div>

        </StyledDisplay>
    );
};

const StyledDisplay = styled.div`
    min-height: 100vh;
    background: black;
    color: white;
    
    .text {
        padding: 10% 15% 3% 15%;

    }

    .image {
        overflow: hidden;

        img {
            width: 100%;
            object-fit: cover;
            transform: scale(1.05);
            opacity: 0.2;
        }
    }

    .sub-text {
        padding: 5% 20% 5% 50%;
    }

    .icon {
        padding-top: 5rem;

        img {
            max-width: 10rem;
        }
    }

    @media (max-width: 900px) {
        padding: 5% 0;

        .image {
            overflow: hidden;

            img {
                width: 100%;
                height: 70vh;
                object-fit: cover;
                transform: scale(1);
                opacity: 0.2;
            }
        }
        .sub-text {
            padding: 15%;
        }
    }
`

export default Display;