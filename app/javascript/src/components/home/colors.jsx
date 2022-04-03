import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion/dist/framer-motion';
import Carousel from './small_components/Carousel';
import ModelModal from './small_components/ModelModal';
import { useSelector } from 'react-redux';
import Palette from '../../reusable/Palette';

const Colors = () => {
    const [currentColor, setCurrentColor] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const { filteredPhones } = useSelector(state => state.phones);



    useEffect(() => {
        if (modalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [modalOpen])

    useEffect(() => {
        setCurrentColor(filteredPhones[0])

    }, [filteredPhones])

    return (
        <StyledColors>
            <div className="text-container">
                <div className="text-left">
                    <h4 className="sub-heading">COLORS</h4>
                    <h1 className='title'>Leave your <br /><span> mark with </span><br /><span> color</span></h1>
                </div>
                <div className="text-right">
                    <p className="description">
                        Be a trendsetter and embrace the bold tones of Burgundy or Green. Or stand out with the subtlety of Phantom White or maybe Phantom Black. These sophisticated and timeless colors amplify the sleek design.
                    </p>
                    <button className='btn btn-default' onClick={() => setModalOpen(true)}>SEE IN 360°</button>

                    <div className="colors-palette">
                        <Palette currentColor={currentColor} setCurrentColor={setCurrentColor} />
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

    }

    @media (max-width: 700px) {
        margin-top: 5rem;
        padding: 10%;
        padding-bottom: 0;

        .text-container {
            flex-direction: column;
            justify-content: flex-start;
            
        }

        .text-left {
            width: 100%;
            padding-bottom: 0;
            .title {
                display: flex;
                flex-wrap: wrap;
                flex: 1;

            }

        }

        .text-right {
            margin-top: 0;

            .btn-default {
                margin: 2rem 0;
            }

        }
    }
`


export default Colors;