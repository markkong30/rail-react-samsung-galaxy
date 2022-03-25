import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';
import { footerTransition } from './animation';
const Footer = () => {

    return (
        <StyledFooter variants={footerTransition} initial="hidden" animate="show" exit="exit">
            <footer>
                <p>© 2022 Samsung Galaxy S22 Ultra Clone by Mark Kong.</p>
            </footer>
        </StyledFooter>
    );
};

const StyledFooter = styled(motion.div)`
    footer {
        height: 70px;
        border-top: 1px solid #D9D9D9;
        display: flex;
        align-items: center;
        padding: 0 2rem;

        p {
            font-size: 0.8rem;
            font-weight: lighter;
            
        }
    }
`

export default Footer;