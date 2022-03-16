import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';
import longVideo from '@images/night-video-long'
import { slideUp } from '../../../reusable/animation';
import play from '@images/control_play'
import pause from '@images/control_pause'
import startover from '@images/control_startover'


const NightModal = ({ setModalOpen }) => {
    const [currentControl, setCurrentControl] = useState({ icon: pause, label: 'PAUSE' });
    const video = useRef(null);

    const videoControl = () => {
        const { icon, label } = currentControl;

        switch (icon) {
            case pause:
                video.current.pause();
                return setCurrentControl({ icon: play, label: 'PLAY' });
            case play:
                video.current.play();
                return setCurrentControl({ icon: pause, label: 'PAUSE' });
            case startover:
                video.current.play();
                return setCurrentControl({ icon: pause, label: 'PAUSE' });
            default:
                return;
        }
    }


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
                    <video src={longVideo} muted autoPlay
                        onEnded={() => setCurrentControl({ icon: startover, label: "START OVER" })} ref={video}></video>
                    <button className="btn btn-controls" onClick={videoControl}>
                        <img src={currentControl.icon} alt="" />
                        <label>{currentControl.label}</label>
                    </button>

                </div>
                <motion.div className="close" onClick={() => setModalOpen(false)}>
                    <motion.div className="rotate" whileHover={{ rotate: '90deg' }}>
                        <button className="btn-close">&times;</button>
                    </motion.div>

                </motion.div>
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
        background: rgb(246, 246, 246);
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

        .video-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;

            video {
                width: 30vw;
                height: auto;
            }

            .btn-controls {
                display: flex;
                align-items: flex-start;

                img {
                    width: 20px;
                    height: 20px;
                }

                label {
                    cursor: pointer;
                    font-size: 0.9rem;
                    font-weight: lighter;
                    letter-spacing: 1.5px;
                    padding-bottom: 0.2rem;
                    border-bottom-style: solid;
                    border-bottom-width: 1px;       
                    margin-left: 0.2rem;         
                }
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