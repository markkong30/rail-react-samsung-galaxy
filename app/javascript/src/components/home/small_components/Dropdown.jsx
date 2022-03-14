import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";
import { motion } from 'framer-motion/dist/framer-motion';
import { arrowRotate } from '../../../reusable/animation';



const Dropdown = ({ title, id, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const arrow = useRef(null);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <StyledDropdown layout onClick={toggle}>
            <motion.div className="dropdown-title" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
                <motion.h4 layout><span>{id}</span>{title}</motion.h4>
                <motion.p className="arrow" animate={isOpen ? 'open' : 'closed'} variants={arrowRotate} ref={arrow}>&#62;</motion.p>
            </motion.div>
            <div className="dropdown-content">
                {isOpen && content}
            </div>
            <div className="line"></div>

        </StyledDropdown>
    );
};

const StyledDropdown = styled(motion.div)`

    .dropdown-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1.5rem;
        cursor: pointer;

        h4 {
            font-weight: 400;
            color: rgb(220, 220, 220);
        }
        span {
            margin-right: 3rem;
        }

        .arrow {
            /* transform: rotate(90deg); */
            font-size: 1.5rem;
        }
    }

    .line{
        margin-top: 0.5rem;
        height: 1px;
        width: 100%;
        background: white;
    }

    .dropdown-content {
        margin: 1rem 0;
        font-size: 0.9rem;
    }

    
`

export default Dropdown;