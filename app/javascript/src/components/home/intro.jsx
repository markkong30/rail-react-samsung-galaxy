import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';
import phone from "@images/big-phone.jpeg";


const Intro = () => {
    return (
        <StyledIntro>
            <div className="intro-text">
                <h2 className="title">Galaxy S22 Ultra</h2>
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
        padding-bottom: 2rem;
    }
    
    .intro-img {

            img {
                display: block;
                height: 80vh;
                width: 100%;
                object-fit: cover;
                object-position: top;
            }
        }
`

export default Intro;