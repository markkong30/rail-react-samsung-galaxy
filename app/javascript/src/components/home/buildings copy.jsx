import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import backgroundImg from '@images/background_night.jpg';
import charger from '@images/charge.svg';
import powershare from '@images/powershell.svg'
import usb from '@images/usb.png';
import adapter from '@images/adapter.jpg'
import frame from '@images/frame.png'

const Buildings = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const ref2 = useRef(null);
    const q = gsap.utils.selector(ref);
    const q2 = gsap.utils.selector(ref2);


    useEffect(() => {
        const container = ref.current;
        const container2 = ref2.current;

        const tl = gsap.timeline({
            scrollTrigger: ({
                trigger: container,
                start: '0%',
                end: '100%',
                scrub: true,
                // markers: true,
                id: 'build',
            })
        })

        tl.fromTo(q('.background'), { filter: 'hue-rotate(0deg)' }, { filter: 'hue-rotate(30deg)', duration: 1 });
        tl.fromTo(q('.text-container'), { opacity: 1 }, { opacity: 0, duration: 1 }, '>')
        // tl.to(q('.background'), { scale: 0.5, duration: 1 }, '>')

        // gsap.to(q('.background'), {
        //     scrollTrigger: ({
        //         trigger: container2,
        //         start: 'top bottom',
        //         end: '100%',
        //         // markers: true,
        //         // pinSpacing: false,
        //         id: 'pin'
        //     }),
        // })

        const tl2 = gsap.timeline({
            scrollTrigger: ({
                trigger: container2,
                start: '0%',
                end: 'top top',
                scrub: true,
                // markers: true,
                id: 'dura',
                pin: true,
                endTrigger: q('.texts.last'),
                onEnter: () => {
                    // gsap.to(q('.background'), { opacity: 0 });
                    gsap.fromTo(container2, { opacity: 0 }, { opacity: 1, ease: 'none' });
                },
                onLeaveBack: () => {
                    // gsap.to(q('.background'), { opacity: 1 })
                    gsap.to(container2, { opacity: 0, ease: 'none', duration: 0.1 });
                },

            })
        })

        const tl3 = gsap.timeline({
            scrollTrigger: ({
                trigger: q('.texts.last'),
                start: 'top top',
                end: '100%',
                scrub: true,
                // markers: true,
                id: 'scale',
                endTrigger: container2,
            }),
        })

        tl3.to(q2('.background-2'), { scale: 0.5, duration: 2, y: 650 });
        tl3.fromTo(q2('.frame'), { scale: 1.1 }, { scale: 1, display: 'block' }, '<');
        tl3.fromTo(q2('.building'), { filter: 'hue-rotate(30deg)' }, { filter: 'hue-rotate(0deg)' }, '<');


    })


    return (
        <StyledSeventh ref={ref}>
            <div className="background"></div>
            <div className="text-container">
                <div className="text-container-left">
                    <div className="headings">
                        <h4 className="sub-heading">BATTERY</h4>
                        <h3 className="title">Go all-day and supercharge your night</h3>
                    </div>
                </div>
                <div className="text-container-right">
                    <p className='description'>Enhanced AI takes 5000mAh (typical) of power from one day into the next, intelligently adapting to the way you use your phone.4 Long story short: it saves power for when you need it most, for battery life that lasts more hours than there are in a day.
                    </p>
                    <div className="card charge">
                        <img className='charger' src={charger} alt="" />
                        <div className="texts">
                            <h3 className="subtitle">Super Fast Charging</h3>
                            <p className="description">Full speed ahead. Get a super-fast charge that outlasts the day when you plug into the 45W Power Adapter.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img className='powershare' src={powershare} alt="" />
                        <div className="texts">
                            <h3 className="subtitle">Wireless PowerShare</h3>
                            <p className="description">Full speed ahead. Get a super-fast charge that outlasts the day when you plug into the 45W Power Adapter.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={usb} alt="" />
                        <div className="texts last">
                            <p className="sub"><sup>*</sup>The USB Implementers Forum, Inc. (USB-IF) was established in 1995 to support and accelerate the market and consumer adoption of USB compliant devices. Galaxy S22 Ultra's Super Fast Charging has been certified to be compliant to the USB standards which means your products have met the highest standards in the industry. This certification can be found on www.usb.org.</p>
                        </div>
                    </div>
                </div>
            </div>
            <StyledDurability ref={ref2}>
                <div className='background-2'>
                    <img className='building' src={backgroundImg} alt="" />
                    <img className='frame' src={frame} alt="" />
                </div>
                {/* <div className="adapter-container">
                    <div className="image">
                        <img src={adapter} alt="" className="adapter" />
                    </div>
                    <div className="text">
                        <p className="grey">Better together</p>
                        <h3 className="title">45W Power Adapter</h3>
                        <p className="description">For quick power</p>
                    </div>
                </div> */}
            </StyledDurability>

        </StyledSeventh>
    );
};

const StyledSeventh = styled.div`
    min-height: 350vh;
    color: white;
    position: relative;
    padding: 10% 15%;
    z-index: 0;
    
    .background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-image: url(${backgroundImg});
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        z-index: -1;
        overflow: hidden;
        /* opacity: 0.8; */

    }

     .text-container {
         transform: translateY(100vh);
         color: white;
         z-index: 2;
         position: relative;
     }

     .text-container-left {
        width: 50%;
     }

     .text-container-right {
        width: 50%;
        margin-left: 50%;
        margin-top: 15%;

        .card {
            padding: 3rem 0;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            .powershare, .charger {
                transform: scale(1.5);
            }

            .texts {
                margin-left: 3rem;

            }

            .subtitle {
                margin-bottom: 1rem;
                font-size: 1.7rem;
            }
        }
     }
`

const StyledDurability = styled.div`
    min-height: 200vh;
    background: black;
    color: white;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    opacity: 0;
    overflow: hidden;

    /* transform: translateY(100vh); */
    
    .background-2 {
        position: relative;

        .building {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            object-fit: cover;
            object-position: 0;
            z-index: 1;
            filter: hue-rotate(30deg);
            overflow: hidden;
            display: block;
        }

        .frame {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            /* object-fit: cover; */
            z-index: 10;
            overflow: hidden;
            display: none;
        }


    }

    .adapter-container {
        position: relative;
        display: flex;
        gap: 2rem;
        justify-content: center;
        align-items: center;
        margin-top: 1100px;

        .image {
            padding: 0 2rem;
            background: white;
            border-radius: 1rem;

            img {
                display: block;
                width: 80px;
                height: auto;
                object-fit: cover;
                /* object-position: center; */
            }
        }

        .grey {
            color: grey;
            font-size: 0.8rem;
        }

        .title {
            margin: 0.5em 0;
            font-size: 1.5rem;
        }
        
        .description {
            color: rgb(220, 220, 220);
        }
        
    }
`

export default Buildings;