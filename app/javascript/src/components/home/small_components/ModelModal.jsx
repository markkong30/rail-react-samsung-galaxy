import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';
import { slideUp } from '../../../reusable/animation';
import PhoneCanvas from './PhoneCanvas';

const ModelModal = ({ setModalOpen }) => {
    return (
        <StyledModelModal variants={slideUp} initial="hidden" animate="show" exit="exit">
            <div className="mask"></div>

            <div className="modal-container">
                <div className="text-container">
                    <h4 className="sub-heading">GALAXY S22 ULTRA</h4>
                    <h3 className="title">Your turn. <br />See the phone in all its glory</h3>
                </div>
                <div className="canvas-container">
                    <PhoneCanvas />
                </div>
                <motion.div className="close" onClick={() => setModalOpen(false)}>
                    <motion.div className="rotate" whileHover={{ rotate: '90deg' }}>
                        <button className="btn-close">&times;</button>
                    </motion.div>

                </motion.div>
            </div>
        </StyledModelModal>
    );
};

const StyledModelModal = styled(motion.div)`
    position: fixed;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     z-index: 2;

    .mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
        z-index: 0;
    }

    .modal-container {
        margin-top: 15vh;
        background: white;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        z-index: 1;
        position: relative;
        /* padding: 10% 15%; */
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);


        .text-container {
            color: black;
            display: block;
            text-align: left;
            padding: 10% 0 10% 10%;
            flex-basis: 30%;


            .title {
                font-size: 2rem;
            }

            .sub-heading {
                padding: 0;
                font-size: 0.9rem;
            }
            
            .sub {
                color: rgb(40, 40, 40);
                font-weight: lighter;
            }
        }

        .canvas-container {
            height: 100%;
        }

        .close {
            position: fixed;
            top: 15vh;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            color: black;
            padding: 2.2rem;
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            cursor: pointer;
            z-index: 20;
            display: block;

            .btn-close {
                position: absolute;
                font-size: 3.5rem;
                font-weight: 200;
                color: rgba(0, 0, 0, 0.7);
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);

            }
        }

    }
`

export default ModelModal;