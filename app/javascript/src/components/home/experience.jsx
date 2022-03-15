import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import experience_1 from '@images/experience_1'
import experience_2 from '@images/experience_2'
import experience_3 from '@images/experience_3'

const Experience = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const q = gsap.utils.selector(ref);

    useEffect(() => {
        const container = ref.current;

        const tl = gsap.timeline({
            scrollTrigger: ({
                trigger: q('.card-container'),
                start: 'center center',
                end: '100%',
                scrub: true,
                markers: true,
                pin: true,
                id: 'experience'
            }),
        })

        tl.to('.card', { x: '-40vw' })


    })

    const cards = [
        {
            sub: 'STORAGE', title: 'Room for each low-light masterpiece',
            description: 'When you can capture day to night with clarity, the Gallery fills up fast. Keep every frame on hand with up to 1TB of storage built right in.',
            img: experience_1,
        },
        {
            sub: 'ULTRASONIC FINGERPRINT', title: 'Unlocking tailored to you',
            description: "The secret's in the screen. With a large sensor embedded into the display, the Ultrasonic Fingerprint provides fast, secure unlocking at a touch.",
            img: experience_2
        },
        {
            sub: 'ONE UI', title: 'Your Galaxy. Your way',
            description: 'Customize your digital life and express yourself how you like. Unlock the full potential of the Galaxy experience with familiarity across all devices.',
            img: experience_3
        },

    ]

    return (
        <StyledExperience ref={ref}>
            <div className="text-container">
                <h4 className="sub-heading">GALAXY EXPERIENCE</h4>
                <h3 className="title">Epic features that set the tone</h3>
            </div>
            <div className="card-container">
                {cards.map(card => (
                    <div className="card" key={card.title}>
                        <div className="text">
                            <h4 className="card-sub">{card.sub}</h4>
                            <h3 className="card-title">{card.title}</h3>
                            <p className="card-description">{card.description}</p>
                        </div>
                        <div className="image">
                            <img src={card.img} alt="" />
                        </div>
                    </div>
                ))}

            </div>

        </StyledExperience>
    );
};

const StyledExperience = styled.div`
    min-height: 100vh;
    padding: 5% 15%;
    /* overflow: hidden; */


    .text-container {
        width: 60%;
        margin-bottom: 5rem;
    }

    .card-container {
        display: flex;
        justify-content: flex-start;
        gap: 1.5rem;
        width: 100%;
        overflow: hidden;

        .card {
            border-radius: 1rem;
            background: #F4F5F7;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 5rem;
            flex-shrink: 0;
            width: 30vw;

            .text {

                padding: 2rem 2rem 0 2rem;


                .card-sub {
                    font-size: 0.8rem;
                    font-weight: 500;
                    letter-spacing: 1px;
                }

                .card-title {
                    font-size: 1.5rem;
                    line-height: 1.2;
                    padding: 1rem 0;
                }
            } 

            .image {
                padding: 0;
                width: 100%;

                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    border-radius: 1rem;

                }

            }
        }
    }
`

export default Experience;