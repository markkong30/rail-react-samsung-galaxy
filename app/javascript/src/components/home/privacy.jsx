import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import phone from '@images/privacy-phone'
import shield from '@images/privacy-shield'
import logo from '@images/privacy-logo'

const Privacy = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    const q = gsap.utils.selector(ref);

    useEffect(() => {
        const container = ref.current;

        gsap.set(q('figure'), { x: 100 })
        gsap.to(q('figure'), {
            scrollTrigger: ({
                trigger: container,
                start: 'top center',
                end: '+=600',
                scrub: true,
                // markers: true,
                id: 'security'
            }),
            x: 0,
        })

    })

    return (
        <StyledPrivacy ref={ref}>
            <div className="image-container">
                <figure>
                    <img className='shield' src={shield} alt="" />
                    <img className='logo' src={logo} alt="" />
                </figure>
            </div>
            <div className="text-container">
                <h4 className="sub-heading">PRIVACY</h4>
                <h3 className="title">Your privacy. <br /> Secured.</h3>
                <p className="description">
                    Secure your private data from the second you turn your phone on with Samsung Knox. Knox Vault keeps your biometric information safe, while Secure Folder locks down your private data. And the new Permission Usage dashboard lets you see which apps are sharing your data or tracking you, and allows you to grant or deny access on your terms.
                </p>
            </div>
        </StyledPrivacy>
    );
};

const StyledPrivacy = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10% 15% 10% 0;
    flex: 1;
    /* gap: 10rem; */

    .image-container {
        flex-basis: 50%;
        position: relative;
        margin-left: -10%;
        height: 80vh;
        width: auto;
        background-image: url(${phone});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: right;

        
        figure {
            position: absolute;
            top: 0;
            right: 20px;
            height: 100%;

        }

        .shield {
           width: 100%;
           height: 100%;
        }

        .logo {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);

        }
    }

    .text-container {
        flex-basis: 50%;
    }

`

export default Privacy;