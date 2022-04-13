import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import nightVideo from '@images/night-video';
import NightModal from './small_components/NightModal';
import { motion, AnimatePresence } from 'framer-motion/dist/framer-motion';

const Video = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [ref, inView] = useInView({ threshold: 0.3 });
    const video = useRef(null);

    useEffect(() => {
        if (inView) {
            video.current.play()
        } else {
            video.current.pause();
        }

    }, [inView])

    useEffect(() => {
        if (modalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [modalOpen])

    return (
        <StyledVideo>
            <div className="video-container" ref={ref} >
                <video src={'https://rails-react-samsung.s3.amazonaws.com/night-video.mp4'} muted ref={video}></video>
            </div>
            <h4 className="sub-heading">VIDEO AT NIGHT</h4>
            <div className="text-container">
                <div className="title-section">
                    <h3 className="title">Nightography <br />makes magic at any hour</h3>
                </div>
                <div className="texts">
                    <p className="description">
                        The biggest leap in our video technology yet. Auto framerate detects lighting and shifts to an optimal fps speed automatically. Bolstered by the 4nm processor with Super Night Solution clearing up the noise in each frame, you can record from sunup to sundown with consistent, stunning details.
                    </p>
                    <button className="btn btn-reverse" onClick={() => setModalOpen(true)}>CHECK IT OUT</button>
                </div>
            </div>
            <AnimatePresence>
                {modalOpen &&
                    <div className="modal">
                        <NightModal setModalOpen={setModalOpen} />
                    </div>
                }
            </AnimatePresence>

        </StyledVideo>
    );
};

const StyledVideo = styled.div`
    min-height: 100vh;
    background: black;
    color: white;

    .video-container {
        padding: 3% 10%;

        video {
            width: 100%;
            height: 100%;
        }
    }

    .sub-heading {
        padding: 0 18%;
        margin: 3rem 0;
    }

    .text-container {
        padding: 0% 18% 8% 18%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 3rem;
        flex: 1;

        .title-section {
            flex-basis: 50%;
            
            .title {
                margin: 0;
            }
        }

        .texts {
            flex-basis: 50%;
        }

        button {
            margin-top: 2rem;
        }
    }

    @media (max-width: 900px) {
        .video-container {
            padding: 0;
        }
        .sub-heading {
            padding: 0 10%;
        }

        .text-container {
            padding: 0% 10%;
            display: block;
            text-align: justify;
            font-size: 0.9rem;

            .texts {
                padding: 3rem 0;
            }

          
        }
    }
    
`

export default Video;