import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from 'framer-motion/dist/framer-motion';
import Carousel from './small_components/Carousel';
import ModelModal from './small_components/ModelModal';

const Colors = () => {
    const [currentColor, setCurrentColor] = useState('burgundy');
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (modalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [modalOpen])

    const colors = [
        { name: 'Burgundy', id: '#644D58', imgName: 'burgundy' },
        { name: 'Green', id: '#587876', imgName: 'green' },
        { name: 'Phantom White', id: '#E9E9E7', imgName: 'white' },
        { name: 'Phantom Black', id: '#000000', imgName: 'black' },
    ];

    const changeColor = (name) => {
        setCurrentColor(name);
    }

    return (
        <StyledColors>
            <div className="text-container">
                <div className="text-left">
                    <h4 className="sub-heading">COLORS</h4>
                    <h1 className='title'>Leave your <br /><span>mark with </span><br /><span>color</span></h1>
                </div>
                <div className="text-right">
                    <p className="description">
                        Be a trendsetter and embrace the bold tones of Burgundy or Green. Or stand out with the subtlety of Phantom White or maybe Phantom Black. These sophisticated and timeless colors amplify the sleek design.
                    </p>
                    <button className='btn btn-default' onClick={() => setModalOpen(true)}>SEE IN 360°</button>
                    <div className="colors-palette">
                        {colors.map(color => (
                            <StyledColor key={color.name} color={color.id} className={currentColor == color.imgName ? 'selected' : ''}>
                                <button
                                    onClick={() => changeColor(color.imgName)}>
                                </button>
                                <label htmlFor="">{color.name}</label>
                            </StyledColor>
                        ))}
                    </div>
                </div>
            </div>
            <div className="carousel">
                <Carousel currentColor={currentColor} />
            </div>
            <AnimatePresence>
                {modalOpen &&
                    <ModelModal setModalOpen={setModalOpen} />
                }
            </AnimatePresence>
        </StyledColors>
    );
};

const StyledColors = styled.div`
    min-height: 100vh;
    padding: 10% 15%;

    .text-container {
        position: relative;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
    }

    .text-left {
        flex-basis: 50%;

        .sub-heading {
            color: rgba(0, 0, 0, 0.8);
        }

    }

    .text-right {
        flex-basis: 50%;
        margin-top: 4rem;

        .btn-default {
            margin: 2rem 0;
        }

        .colors-palette {
            display: flex;
            width: 50%;
            align-items: flex-start;
            text-align: center;
        }

    }
`

const StyledColor = styled.div`
    font-size: 0.8rem;
    font-weight: lighter;
    margin-right: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    button {
        width: 30px;
        height: 30px;
        background: ${props => props.color};
        border-radius: 50%;
        margin-bottom: 0.5rem;
    }
    
    &.selected {
        button { 
            border: 2px solid #016AEA;
            box-shadow: 0 0 0 2px white inset;
        }

        label {
            font-weight: bold;
        }
    }
`


export default Colors;