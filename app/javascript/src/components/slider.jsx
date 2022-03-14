import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dropdown from '@images/dropdown.svg';
import video from '@images/turn-phone.mp4'
import test from '@images/slow.mp4'


const Slider = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const q = gsap.utils.selector(ref);

    useEffect(() => {
        const container = ref.current;

        const tl = gsap.timeline({
            scrollTrigger: ({
                trigger: container,
                scrub: true,
                start: '20%',
                end: '200%',
                markers: true,
                // pin: true,
            })
        })

        // const tlPin = gsap.timeline({
        //     scrollTrigger: ({
        //         trigger: container,
        //         scrub: true,
        //         start: "60%",
        //         end: "100%",
        //         markers: true,
        //         id: 'pin',
        //         pin: true,
        //         onLeave: () => {
        //             gsap.to('nav', { opacity: 1, duration: 2 })
        //         },

        //     })
        // })

        gsap.to('nav', {
            scrollTrigger: ({
                trigger: container,
                scrub: true,
                start: '40%',
                end: "+=300",
                markers: true,

            }),
            opacity: 0,
            duration: 2,
        })

        tl.fromTo(q('video'), { currentTime: 0 }, { currentTime: 5, y: '100vh', onComplete: () => gsap.to('nav', { opacity: 1, duration: 2 }) });
        // tlFadeOut.fromTo(q('video'), { opacity: 1 }, { opacity: 0 });


    }, [])


    return (
        <StyledThird ref={ref}>
            <div className="text-container">
                <div className="dropdown">
                    <button>DESIGN <span><img src={dropdown} alt="" /></span></button>
                </div>
                <div className="main-text">
                    <h1 className="title">A Note-worthy new look</h1>
                    <p className='description'>
                        Meet Galaxy&nbsp;S22 Ultra, with the power of Note. Slim and bold, a polished frame surrounds the extruded shape for elegant symmetry. And the linear camera, accented by mirrored lens rings, seems to float in place.
                    </p>
                </div>
            </div>
            <div className="video-container">

                <video src={test} muted preload='auto'></video>
            </div>

        </StyledThird>
    );
};

const StyledThird = styled.div`
    min-height: 150vh;
    padding: 10% 15%;
    margin-top: 95vh; 
    position: relative;
    

    .text-container {
        width: 50%;
        height: 50vh;
        z-index: 2;

        button {
            font-size: 1.1rem;
            letter-spacing: 2px;
            margin-bottom: 2rem;
        }
    

        .title {
            font-size: 5rem;
            line-height: 1.2;
            margin-bottom: 2rem;
        }
        
        .description {
            width: 80%;
            font-weight: lighter;
            color: rgba(0, 0, 0, 0.8)
        }
    }

    .video-container {
        position: absolute;
        left: 0;
        top: 50vh;
        z-index: -1;

        video {
            width: 100%;
            height: 100%;
        }
    }

   

`

export default Slider;