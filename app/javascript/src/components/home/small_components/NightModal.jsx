import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion/dist/framer-motion';
import longVideo from '@images/night-video-long'
import { slideUp } from '../../../reusable/animation';


const NightModal = ({ setModalOpen }) => {
    return (
        <StyledNightModal variants={slideUp} initial="hidden" animate="show" exit="exit"  >
            <div className="mask"></div>
            <div className="modal-container">
                <div className="text-container">
                    <h4 className="sub-heading">VIDEO AT NIGHT</h4>
                    <h3 className="title">Nightography <br /> makes magic at any hour</h3>
                    <p className="sub"><sup>*</sup>Video simulated for illustration purposes. Actual UI may be different.</p>
                </div>
                <div className="video-container">
                    <video src={longVideo}></video>
                </div>
                <div className="close" onClick={() => setModalOpen(false)}>
                    <button className="btn-close">&times;</button>

                </div>
            </div>

        </StyledNightModal>
    );
};

const StyledNightModal = styled(motion.div)`
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
        /* background: black; */
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
        padding: 10% 15%;
        overflow-y: scroll;


        .text-container {
            color: black;
            display: block;
            text-align: left;

            .title {
                font-size: 1.5rem;
            }

            .sub-heading {
                padding: 0;
            }
        }

        .video-container {
            video {
                width: 30vw;
                height: auto;
            }
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

export default NightModal;