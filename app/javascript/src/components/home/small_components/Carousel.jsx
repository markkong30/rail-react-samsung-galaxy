import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Carousel = ({ currentColor }) => {
    const ref = useRef();

    useEffect(() => {
        gsap.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power3.out', onComplete: () => ScrollTrigger.refresh() });

    }, [currentColor])

    return (
        <StyledCarousel ref={ref}>
            {currentColor &&
                <div className='images'>
                    <div className="img-left">
                        <img src={currentColor.image.front} alt="" />
                    </div>
                    <div className="img-right">
                        <img src={currentColor.image.rear} alt="" />
                        <img src={currentColor.image.side} alt="" />
                    </div>
                </div>
            }
        </StyledCarousel>
    );
};

const StyledCarousel = styled.div`
    margin-top: 5rem;
    
    .images {
        display: flex;
        gap: 2rem;
        justify-content: center;
        min-height: 80vh;

        .img-left {
            display: flex;
            flex-basis: 50%;
            flex: 1;
          
        }
        .img-right {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            flex-basis: 50%;
            img {
                flex: 1;

            }

        }

        img {
            display: block;

        }
    }

    @media (max-width: 900px) {
        margin-top: 3rem;

        .images {
                
            .img-right {
                display: none;
            }
        }


    }
`


export default Carousel;