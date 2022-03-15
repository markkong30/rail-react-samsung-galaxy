import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import burgundy_front from '@images/carousel/burgundy_front.jpg'
import black_front from '@images/carousel/black_front.jpg'
import green_front from '@images/carousel/green_front.jpg'
import white_front from '@images/carousel/white_front.jpg'
import burgundy_side from '@images/carousel/burgundy_side.jpeg'
import black_side from '@images/carousel/black_side.jpeg'
import green_side from '@images/carousel/green_side.jpeg'
import white_side from '@images/carousel/white_side.jpeg'
import burgundy_rear from '@images/carousel/burgundy_rear.jpg'
import black_rear from '@images/carousel/black_rear.jpg'
import green_rear from '@images/carousel/green_rear.jpg'
import white_rear from '@images/carousel/white_rear.jpg'

const Carousel = ({ currentColor }) => {
    const [images, setImages] = useState([]);
    const ref = useRef();

    useEffect(() => {
        switch (currentColor) {
            case "burgundy":
                console.log(typeof burgundy_side)
                return setImages([burgundy_front, burgundy_rear, burgundy_side]);
            case "black":
                return setImages([black_front, black_rear, black_side]);
            case "green":
                return setImages([green_front, green_rear, green_side]);
            case "white":
                return setImages([white_front, white_rear, white_side])
            default:
                return;
        }
    }, [currentColor])

    useEffect(() => {
        gsap.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power3.out', onComplete: () => ScrollTrigger.refresh() });

    }, [images])

    return (
        <StyledCarousel ref={ref}>
            {images.length > 0 &&
                <div className='images'>
                    <div className="img-left">
                        <img src={images[0]} alt="" />
                    </div>
                    <div className="img-right">
                        <img src={images[1]} alt="" />
                        <img src={images[2]} alt="" />
                    </div>
                </div>


            }

        </StyledCarousel>
    );
};

const StyledCarousel = styled.div`
    margin-top: 3rem;
    
    .images {
        display: flex;
        gap: 2rem;
        justify-content: center;
        align-items: center;
        min-height: 80vh;

        .img-right {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        img {
            display: block;
        }
    }
`


export default Carousel;